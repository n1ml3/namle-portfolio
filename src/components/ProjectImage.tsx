"use client"

import { useState } from "react"

interface ProjectImageProps {
  src: string
  alt: string
  className?: string
}

export function ProjectImage({ src, alt, className = "" }: ProjectImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  // Fallback image nếu ảnh không load được
  const fallbackImage = "/images/projects/placeholder.jpg"

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {imageLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 dark:text-gray-500">Loading...</div>
        </div>
      )}

      <img
        src={imageError ? fallbackImage : src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
          imageLoading ? "opacity-0" : "opacity-100"
        }`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  )
}
