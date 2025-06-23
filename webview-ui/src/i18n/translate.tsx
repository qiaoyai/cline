import { createContext, useState, useContext, useCallback, useEffect, ReactNode } from "react"
import { LanguageKey, languageOptions, DEFAULT_LANGUAGE_SETTINGS } from "@shared/Languages"

import { resources } from "./locales/index"
let currentLanguage: LanguageKey = DEFAULT_LANGUAGE_SETTINGS

const getNestedValue = (obj: any, path: string): string | undefined => {
	return path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj)
}

export function t(key: string, params?: Record<string, string | number>): string {
	const translations = resources[currentLanguage] || resources.en
	let translation = getNestedValue(translations, key)

	if (!translation) {
		console.warn(`Translation key not found: "${key}"`)
		return key // Fallback to the key itself
	}

	if (params) {
		Object.entries(params).forEach(([paramKey, paramValue]) => {
			translation = translation!.replace(new RegExp(`{{${paramKey}}}`, "g"), String(paramValue))
		})
	}

	return translation
}

interface ITranslationContext {
	language: LanguageKey
	setLanguage: (language: LanguageKey) => void
	languages: typeof languageOptions
	t: (key: string, params?: Record<string, string | number>) => string
}

const TranslationContext = createContext<ITranslationContext | null>(null)

export function TranslationProvider({ children }: { children: ReactNode }) {
	const [language, setLanguageState] = useState<LanguageKey>(DEFAULT_LANGUAGE_SETTINGS)

	useEffect(() => {
		currentLanguage = language
	}, [language])

	const setLanguage = (lang: LanguageKey) => {
		setLanguageState(lang)
	}

	const translateFunc = useCallback(
		(key: string, params?: Record<string, string | number>): string => {
			const translations = resources[language] || resources.en
			let translation = getNestedValue(translations, key)

			if (!translation) {
				console.warn(`Translation key not found: "${key}"`)
				return key
			}

			if (params) {
				Object.entries(params).forEach(([paramKey, paramValue]) => {
					translation = translation!.replace(new RegExp(`{{${paramKey}}}`, "g"), String(paramValue))
				})
			}
			return translation
		},
		[language],
	)

	const value: ITranslationContext = {
		language,
		setLanguage,
		languages: languageOptions,
		t: translateFunc,
	}

	return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}

export function useTranslation() {
	const context = useContext(TranslationContext)
	if (!context) {
		throw new Error("useTranslation must be used within a TranslationProvider")
	}
	return context
}
