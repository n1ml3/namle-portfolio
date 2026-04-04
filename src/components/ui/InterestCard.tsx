"use client"

import type { Interest } from "../../data/interests"

interface InterestCardProps {
  interest: Interest
}

export function InterestCard({ interest }: InterestCardProps) {
  return (
    <div className="flex-shrink-0 w-[300px] h-[400px] group relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.05] hover:shadow-blue-500/25">
      {/* Background Image */}
      <img
        src={interest.image}
        alt={interest.title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      
      {/* Intense Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-tr from-white via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 group-hover:-translate-y-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/40 text-blue-100 backdrop-blur-md mb-3 border border-blue-400/30 shadow-lg shadow-blue-500/20">
          {interest.category}
        </span>
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-300">{interest.title}</h3>
        <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-3 leading-relaxed">
          {interest.description}
        </p>
      </div>
      
      {/* Premium glowing border */}
      <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-blue-500/30 transition-colors duration-500 pointer-events-none" />
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 border border-white/20 transition-opacity duration-700 pointer-events-none" />
    </div>
  )
}
