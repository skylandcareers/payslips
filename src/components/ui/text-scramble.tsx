"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"

interface TextScrambleProps {
  text: string
  className?: string
}

export function TextScramble({ text, className = "" }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovering, setIsHovering] = useState(false)
  const [isScrambling, setIsScrambling] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const frameRef = useRef(0)

  const scramble = useCallback(() => {
    setIsScrambling(true)
    frameRef.current = 0
    const duration = text.length * 1.5 // Faster scramble

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      frameRef.current++

      const progress = frameRef.current / duration
      const revealedLength = Math.floor(progress * text.length)

      const newText = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " "
          if (i < revealedLength) return text[i]
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join("")

      setDisplayText(newText)

      if (frameRef.current >= duration) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setDisplayText(text)
        setIsScrambling(false)
      }
    }, 20) // Faster interval
  }, [text])

  const handleMouseEnter = () => {
    setIsHovering(true)
    scramble()
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <span
      className={cn("relative inline-block cursor-pointer group", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="font-sans tracking-normal">
        {displayText.split("").map((char, i) => (
          <span
            key={i}
            className={cn(
              "inline-block transition-all duration-75",
              isScrambling && i >= Math.floor((frameRef.current / (text.length * 1.5)) * text.length)
                ? "text-orange-500 opacity-80"
                : "text-muted-foreground"
            )}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>

      {/* Animated underline */}
      <span className="absolute -bottom-1 left-0 w-full h-px overflow-hidden">
        <span
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent transition-transform duration-300",
            isHovering ? "translate-x-0" : "-translate-x-full"
          )}
        />
        <span className="absolute inset-0 bg-muted-foreground/20" />
      </span>

      {/* Subtle glow on hover */}
      <span
        className={cn(
          "absolute inset-0 bg-orange-500/5 rounded transition-opacity duration-300 -z-10",
          isHovering ? "opacity-100" : "opacity-0"
        )}
      />
    </span>
  )
}
