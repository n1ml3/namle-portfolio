import { Cpu, MemoryStick, Zap, HardDrive, Keyboard, Mouse } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import type { HardwareSpec } from "../../types"

/**
 * Este componente muestra la configuración del hardware de manera elegante.
 * Se utiliza una cuadrícula para que la información sea fácil de leer y se mantenga la consistencia con el diseño del sitio.
 */
export function WorkstationCard() {
  const specs: HardwareSpec[] = [
    {
      label: "CPU",
      value: "Intel Core i5 12500H",
      icon: Cpu,
    },
    {
      label: "RAM",
      value: "16GB DDR4 3200MHz",
      icon: MemoryStick,
    },
    {
      label: "GPU",
      value: "NVIDIA RTX 3050Ti 4GB laptop",
      icon: Zap,
    },
    {
      label: "SSD",
      value: "Crucial NVMe 500GB",
      icon: HardDrive,
    },
    {
      label: "Bàn phím",
      value: "K550v4 TKL",
      icon: Keyboard,
    },
    {
      label: "Chuột",
      value: "TUF gaming M3 Gen II",
      icon: Mouse,
    },
  ]

  return (
    <div className="mt-12 group">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Cấu hình làm việc</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {specs.map((spec, index) => (
          <AnimatedSection key={spec.label} animation="scaleIn" delay={100 * index}>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <spec.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {spec.label}
                  </p>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {spec.value}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
