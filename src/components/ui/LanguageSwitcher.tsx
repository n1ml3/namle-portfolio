import { useTranslation } from "react-i18next"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const currentLanguage = i18n.language

  const toggleLanguage = () => {
    const newLang = currentLanguage === "vi" ? "en" : "vi"
    i18n.changeLanguage(newLang)
    localStorage.setItem("language", newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 font-bold text-sm flex items-center gap-2 group"
      aria-label="Toggle language"
    >
      <span className={currentLanguage === "vi" ? "text-blue-600 dark:text-blue-400" : "opacity-50"}>
        VI
      </span>
      <span className="text-gray-400">/</span>
      <span className={currentLanguage === "en" ? "text-blue-600 dark:text-blue-400" : "opacity-50"}>
        EN
      </span>
    </button>
  )
}
