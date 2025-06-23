import { type ReactNode } from "react"

import { ExtensionStateContextProvider } from "./context/ExtensionStateContext"
import { FirebaseAuthProvider } from "./context/FirebaseAuthContext"
import { HeroUIProvider } from "@heroui/react"
import { CustomPostHogProvider } from "./CustomPostHogProvider"
import { TranslationProvider } from "./i18n/translate"

export function Providers({ children }: { children: ReactNode }) {
	return (
		<ExtensionStateContextProvider>
			<CustomPostHogProvider>
				<FirebaseAuthProvider>
					<TranslationProvider>
						<HeroUIProvider>{children}</HeroUIProvider>
					</TranslationProvider>
				</FirebaseAuthProvider>
			</CustomPostHogProvider>
		</ExtensionStateContextProvider>
	)
}
