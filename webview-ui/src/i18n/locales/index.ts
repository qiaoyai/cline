import { en } from "./en"
import { zhTW } from "./zh-tw"
import { zhCN } from "./zh-cn"
import { LanguageKey } from "@shared/Languages"

export type Translation = typeof en
export const resources: Record<LanguageKey, Translation> = {
	en: en,
	"zh-TW": zhTW,
	"zh-CN": zhCN,
	es: en,
	ar: en,
	"pt-BR": en,
	cs: en,
	fr: en,
	de: en,
	hi: en,
	hu: en,
	it: en,
	ja: en,
	ko: en,
	pl: en,
	"pt-PT": en,
	ru: en,
	tr: en,
}
