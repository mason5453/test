'use client'  

import { useEffect } from 'react'
import { useState } from "react";

const learnings = [
  {
    title: "Layout Architecture",
    content: "layout.tsx wraps ALL pages globally - shared header, footer, fonts",
    icon: "📁",
  },
  {
    title: "SEO Metadata",
    content: "Built-in metadata API in layout.tsx/page.tsx for search optimization",
    icon: "🔍",
  },
  {
    title: "Font Optimization",
    content: "next/font/google creates CSS variables for Tailwind - auto self-hosted",
    icon: "🔤",
  },
  {
    title: "Tailwind v4",
    content: "@theme inline in CSS replaces tailwind.config.js - simpler setup",
    icon: "🎨",
  },
  {
    title: "Image Optimization",
    content: "<Image> component with automatic lazy loading & format conversion",
    icon: "🖼️",
  },
  {
    title: "Utility-First CSS",
    content: "Direct Tailwind classes in page.tsx - no separate CSS files needed",
    icon: "⚡",
  },
];

export default function ExternalThreeLoader() {

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? learnings.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === learnings.length - 1 ? 0 : i + 1));
  useEffect(() => {
    if (typeof window === 'undefined') return

    const script = document.createElement('script')
    script.src = '/three.js' 
    script.type = 'module'              
    script.async = true


    script.onerror = (err) => {
      console.error('❌ 腳本載入失敗:', err)
    }

    // 插入到 document
    document.body.appendChild(script)

    // Cleanup：元件卸載時移除 script（避免重複載入）
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
  <>
  <div id="test" style={{ position: 'absolute', top: -200, left: -200, width: 600, height: 600, zIndex: -2 }} />
  <main className="min-h-screen bg-background text-foreground p-8 opacity-80">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-4xl font-bold">Hello, I'm Mason</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Building modern web experiences with Next.js
          </p>
        </header>

        {/* Skills */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </section>

        {/* Learning Slider - 392x292 */}
        <section className="w-[392px] h-[292px] border border-gray-300 dark:border-gray-600 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4">What I Learned</h2>
            
            {/* Slide Content */}
            <div className="h-32 flex items-center gap-4">
              <span className="text-4xl">{learnings[index].icon}</span>
              <div>
                <h3 className="text-lg font-bold">{learnings[index].title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {learnings[index].content}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              {learnings.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition ${
                    i === index
                      ? "bg-black dark:bg-white"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                {index + 1}/{learnings.length}
              </span>
              <button
                onClick={prev}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                ←
              </button>
              <button
                onClick={next}
                className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                →
              </button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Let's Connect</h2>
          <a
            href="mailto:your@email.com"
            className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            Contact Me
          </a>
        </section>
      </div>
    </main>


  </>
  )
  
  
}