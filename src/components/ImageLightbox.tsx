'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ImageLightbox({ src, alt, width, height, className }: { src: string; alt: string; width: number; height: number; className?: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={(className || '') + ' cursor-pointer hover:opacity-90 transition-opacity'}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-4xl font-light z-[10000] w-12 h-12 flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
          <Image
            src={src}
            alt={alt}
            width={2400}
            height={1600}
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}