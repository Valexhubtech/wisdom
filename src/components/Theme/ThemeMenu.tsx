'use client'

import { themes } from '@/appData'
import { useEffect, useState, useRef } from 'react'

const ThemeMenu = () => {
  const [theme, setTheme] = useState('dark')
  const [showThemeMenu, setShowThemeMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(localStorage.getItem('theme') ?? 'dark')
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowThemeMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme)
    }
  }

  return (
    <div ref={menuRef} className="fixed right-6 bottom-4 z-50">
      <div
        onClick={() => setShowThemeMenu(!showThemeMenu)}
        className="bg-primary border-accent cursor-pointer rounded-full border p-3">
        <div className="flex items-center gap-1">
          <div className="size-3 rounded-full bg-white"></div>
          <div className="size-3 rounded-full bg-black"></div>
        </div>
      </div>

      {showThemeMenu && (
        <div className="bg-secondary border-accent absolute right-0 bottom-full mb-5 space-y-2 rounded-lg border p-3">
          <div className="text-primary-content flex items-center justify-between pb-2">
            <span className="text-sm">Theme</span>
            <button
              onClick={() => setShowThemeMenu(false)}
              className="text-sm cursor-pointer">
              ×
            </button>
          </div>

          {themes.map(({ name, colors }) => (
            <div
              key={name}
              onClick={() => changeTheme(name.toLowerCase())}
              className="flex min-w-32 cursor-pointer items-center justify-between rounded p-2 hover:bg-primary">
              <div className="flex items-center gap-2">
                <span className={name.toLowerCase() === theme ? 'text-sm' : 'text-sm opacity-50'}>
                  {name.toLowerCase() === theme ? '●' : '○'}
                </span>
                <span className="text-sm">{name}</span>
              </div>
              <div 
                className="size-3 rounded-full border border-accent" 
                style={{ background: colors[0] }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ThemeMenu