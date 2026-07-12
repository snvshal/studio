"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const [isHovered, setIsHovered] = useState(false)

  // WebGL Raymarched 3D organic sphere logic
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext("webgl")
    if (!gl) return

    // Vertex Shader (Draws a full-screen quad)
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    // Fragment Shader (Raymarched 3D organic morphing neon sphere)
    const fsSource = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;

      // Pseudo-random hash
      float hash(vec3 p) {
        return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453123);
      }

      // 3D Simplex-like Noise
      float noise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        vec3 u = f * f * (3.0 - 2.0 * f);

        return mix(
          mix(
            mix(hash(i + vec3(0.0,0.0,0.0)), hash(i + vec3(1.0,0.0,0.0)), u.x),
            mix(hash(i + vec3(0.0,1.0,0.0)), hash(i + vec3(1.0,1.0,0.0)), u.x),
            u.y
          ),
          mix(
            mix(hash(i + vec3(0.0,0.0,1.0)), hash(i + vec3(1.0,0.0,1.0)), u.x),
            mix(hash(i + vec3(0.0,1.0,0.0)), hash(i + vec3(1.0,1.0,1.0)), u.x),
            u.y
          ),
          u.z
        );
      }

      // Signed Distance Function (SDF) of the displaced sphere
      float map(vec3 p) {
        float time = u_time * 0.9;
        
        // Dynamic displacement using multi-layered 3D noise
        float d1 = noise(p * 1.6 + vec3(0.0, time * 0.5, time * 0.3));
        float d2 = noise(p * 3.2 - vec3(time * 0.2, 0.0, time * 0.4)) * 0.5;
        float displacement = (d1 + d2) * 0.45;
        
        // Base sphere of radius 1.15
        return length(p) - (1.15 + displacement);
      }

      // Calculate normal vector on the sphere surface
      vec3 getNormal(vec3 p) {
        vec2 e = vec2(0.002, 0.0);
        return normalize(vec3(
          map(p + e.xyy) - map(p - e.xyy),
          map(p + e.yxy) - map(p - e.yxy),
          map(p + e.yyx) - map(p - e.yyx)
        ));
      }

      void main() {
        // Center coordinates (-1 to 1)
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        
        // Raymarching camera
        vec3 ro = vec3(0.0, 0.0, 3.2); // camera position
        vec3 rd = normalize(vec3(uv, -1.0)); // ray direction

        float d = 0.0;
        vec3 p;
        bool hit = false;
        
        // Raymarch loop
        for(int i = 0; i < 35; i++) {
          p = ro + rd * d;
          float dS = map(p);
          if (dS < 0.001) {
            hit = true;
            break;
          }
          if (d > 5.0) break;
          d += dS;
        }

        if (hit) {
          vec3 n = getNormal(p);
          vec3 lightDir = normalize(vec3(1.5, 1.5, 2.0));
          vec3 viewDir = normalize(ro - p);
          
          // Lighting: Diffuse & Specular
          float diff = max(dot(n, lightDir), 0.0);
          vec3 reflectDir = reflect(-lightDir, n);
          float spec = pow(max(dot(viewDir, reflectDir), 0.0), 12.0);

          // Premium Icy Brand Blue Gradient (Cyan, Brand Indigo, Deep Violet, Ice Blue)
          float colorWarp = noise(p * 1.0 + vec3(0.0, u_time * 0.25, 0.0)) * 0.5 + 0.5;
          vec3 colorCyan = vec3(0.0, 0.75, 1.0);     // Electric Cyan Blue
          vec3 colorIndigo = vec3(0.25, 0.45, 0.98);  // Brand Indigo Blue
          vec3 colorViolet = vec3(0.38, 0.08, 0.85);  // Deep Royal Violet
          vec3 colorIce = vec3(0.85, 0.92, 0.99);     // Soft Ice Blue

          vec3 mix1 = mix(colorViolet, colorCyan, colorWarp);
          vec3 mix2 = mix(colorIndigo, colorIce, n.y * 0.5 + 0.5);
          vec3 baseColor = mix(mix1, mix2, n.x * 0.5 + 0.5);

          // Render lit surface with specular highlights
          vec3 finalColor = baseColor * (diff * 0.65 + 0.35) + vec3(spec * 0.55);

          // Fresnel outer glow rim
          float fresnel = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0);
          finalColor += mix(baseColor, vec3(1.0), 0.5) * fresnel * 0.45;

          gl_FragColor = vec4(finalColor, 1.0);
        } else {
          // Transparent empty space
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      }
    `

    // Compile shader helper
    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vs = compileShader(vsSource, gl.VERTEX_SHADER)
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER)
    if (!vs || !fs) return

    // Link WebGL program
    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program))
      return
    }

    gl.useProgram(program)

    // Quad geometry
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1])
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

    const posAttr = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(posAttr)
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0)

    // Uniform positions
    const timeUniform = gl.getUniformLocation(program, "u_time")
    const resUniform = gl.getUniformLocation(program, "u_resolution")

    let animationFrameId: number
    let width = 0
    let height = 0

    const render = (now: number) => {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768
      const maxRes = isMobile ? 280 : 500

      let currentWidth = canvas.clientWidth || 500
      let currentHeight = canvas.clientHeight || 500

      if (isMobile) {
        const ratio = currentWidth / currentHeight
        if (currentWidth > currentHeight) {
          currentWidth = maxRes
          currentHeight = Math.round(maxRes / ratio)
        } else {
          currentHeight = maxRes
          currentWidth = Math.round(maxRes * ratio)
        }
      }

      if (canvas.width !== currentWidth || canvas.height !== currentHeight) {
        width = canvas.width = currentWidth
        height = canvas.height = currentHeight
        gl.viewport(0, 0, width, height)
      }

      gl.useProgram(program)
      gl.uniform1f(timeUniform, now * 0.001) // time in seconds
      gl.uniform2f(resUniform, width, height)

      gl.drawArrays(gl.TRIANGLES, 0, 6)

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(buffer)
    }
  }, [])

  // Automatic ambient spotlight floating movement when mouse is not active
  useEffect(() => {
    if (isHovered) return

    let angle = 0
    let animationFrameId: number

    const updatePosition = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const radiusX = rect.width * 0.25
      const radiusY = rect.height * 0.2

      angle += 0.003
      setMousePos({
        x: centerX + Math.cos(angle) * radiusX,
        y: centerY + Math.sin(angle) * radiusY,
      })

      animationFrameId = requestAnimationFrame(updatePosition)
    }

    animationFrameId = requestAnimationFrame(updatePosition)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovered])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative z-0 flex min-h-dvh w-full items-center overflow-hidden pt-28 pb-20"
      aria-labelledby="hero-heading"
    >
      {/* 3D WebGL Object Shader (Wavy sphere restored, placed left of center, and sized larger) */}
      <div className="pointer-events-none absolute top-1/2 left-[35%] -z-30 flex h-[110vw] w-[110vw] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-visible sm:h-[780px] sm:w-[780px] md:left-[38%]">
        <canvas
          ref={canvasRef}
          className="h-full w-full opacity-90 transition-opacity duration-300 dark:opacity-70"
          style={{ filter: "blur(15px)" }}
        />
      </div>

      {/* FULL HEIGHT & FULL WIDTH Glassy Overlay Layer (Stretches edge-to-edge across entire section) */}
      <div className="bg-background/25 border-border/40 absolute inset-0 -z-20 border-b backdrop-blur-2xl" />

      {/* Subtle background grid lines */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_75%,transparent_100%)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)]" />

      {/* Interactive glowing spotlight grid lines (follows mouse, static grid but moving gradient colors) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0.6,
          WebkitMaskImage: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 100%)`,
          maskImage: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 100%)`,
        }}
      >
        {/* Stationary grid layout illuminated by a shifting gradient background */}
        <div
          className="animate-gradient-shift absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-[size:200%_200%] opacity-12"
          style={{
            WebkitMaskImage: `linear-gradient(to right, black 0.5px, transparent 0.5px), linear-gradient(to bottom, black 0.5px, transparent 0.5px)`,
            WebkitMaskSize: "40px 40px",
            maskImage: `linear-gradient(to right, black 0.5px, transparent 0.5px), linear-gradient(to bottom, black 0.5px, transparent 0.5px)`,
            maskSize: "40px 40px",
          }}
        />
      </div>

      {/* Centered content wrapper matching page bounds */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Hero Left Content */}
          <div className="flex flex-col items-start">
            <h1
              id="hero-heading"
              className="text-foreground font-serif text-5xl leading-[0.95] font-normal tracking-tight md:text-7xl lg:text-8xl"
            >
              We ship <br />
              <span className="text-muted-foreground font-normal italic">software</span> <br />
              that lasts.
            </h1>
          </div>

          {/* Hero Right Content */}
          <div className="flex flex-col items-start lg:pb-3">
            <p className="text-muted-foreground mb-8 max-w-lg text-base leading-relaxed font-light text-pretty md:text-lg">
              We don’t just hand you a website. We build the engine that drives your revenue,
              smashes your goals, and scales your dream.
            </p>

            <div className="mb-12 flex flex-wrap gap-4">
              <Link
                href="#work"
                className="bg-primary text-primary-foreground group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium shadow-sm transition-all hover:opacity-90 active:scale-95"
              >
                See Our Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="border-border/60 lg:hover:border-foreground text-foreground hover:bg-accent/40 inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium transition-all active:scale-95"
              >
                Get in Touch
              </Link>
            </div>

            {/* Stats Display */}
            <div className="border-border grid w-full grid-cols-3 gap-6 border-t border-dashed pt-8">
              <div>
                <div className="text-foreground font-serif text-3xl tabular-nums md:text-4xl">
                  120+
                </div>
                <div className="text-muted-foreground mt-1 text-[10px] font-bold tracking-wider uppercase">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-foreground font-serif text-3xl tabular-nums md:text-4xl">
                  8
                </div>
                <div className="text-muted-foreground mt-1 text-[10px] font-bold tracking-wider uppercase">
                  Platform Types
                </div>
              </div>
              <div>
                <div className="text-foreground font-serif text-3xl tabular-nums md:text-4xl">
                  98%
                </div>
                <div className="text-muted-foreground mt-1 text-[10px] font-bold tracking-wider uppercase">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
