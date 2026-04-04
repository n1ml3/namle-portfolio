"use client"

import type { Interest } from "../../data/interests"

interface InterestCardProps {
  interest: Interest
}

export function InterestCard({ interest }: InterestCardProps) {
  return (
    <div className="flex-shrink-0 w-[300px] h-[400px] group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.05]">
      {/* Background Image */}
      <img
        src={interest.image}
        alt={interest.title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
      />
      
      {/* Intense Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-tr from-white via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 group-hover:-translate-y-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/40 text-blue-100 backdrop-blur-md mb-3 border border-blue-400/30 shadow-lg shadow-blue-500/20">
          {interest.category}
        </span>
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight transition-colors duration-300 drop-shadow-lg [text-shadow:_0_1px_20px_rgb(0_0_0_/_40%)] group-hover:text-blue-400">
          {interest.title}
        </h3>
        <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-3 leading-relaxed drop-shadow-md">
          {interest.description}
        </p>
      </div>
      
      {/* Premium glowing border */}
      <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-blue-500/30 transition-colors duration-500 pointer-events-none" />
    </div>
  )
}
