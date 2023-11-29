"use client"
import React, { useEffect, useState } from "react"
import { Sun, MoonStar } from "lucide-react"
import { useTheme } from "@/context/ThemeProvider"

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  // console.log({ theme })

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      setTheme("light")
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }
  // fixed bottom-5 right-5 w-[3rem] h-[3rem]
  return (
    <button
      className="z-100 bg-white/80 w-[2rem] h-[2rem] p-1 backdrop-blur-[0.5rem] border border-white/40 shadow-2xl rounded-full hover:scale-110 active:scale-105 transition-all
    flex justify-center items-center"
      onClick={() => {
        toggleTheme()
      }}
    >
      {theme === "light" ? <Sun /> : <MoonStar color="#404040" />}
    </button>
  )
}
