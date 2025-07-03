import { VSCodeCheckbox, VSCodeDropdown, VSCodeOption } from "@vscode/webview-ui-toolkit/react"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { memo } from "react"
import { OpenAIReasoningEffort } from "@shared/ChatSettings"
import { t } from "@/i18n/translate"

const FeatureSettingsSection = () => {
	const {
		enableCheckpointsSetting,
		setEnableCheckpointsSetting,
		mcpMarketplaceEnabled,
		setMcpMarketplaceEnabled,
		mcpRichDisplayEnabled,
		setMcpRichDisplayEnabled,
		mcpResponsesCollapsed,
		setMcpResponsesCollapsed,
		chatSettings,
		setChatSettings,
	} = useExtensionState()

	return (
		<div style={{ marginBottom: 20 }}>
			<div>
				<VSCodeCheckbox
					checked={enableCheckpointsSetting}
					onChange={(e: any) => {
						const checked = e.target.checked === true
						setEnableCheckpointsSetting(checked)
					}}>
					{t("settings.enableCheckpoints")}
				</VSCodeCheckbox>
				<p className="text-xs text-[var(--vscode-descriptionForeground)]">{t("settings.checkpointsDescription")}</p>
			</div>
			<div style={{ marginTop: 10 }}>
				<VSCodeCheckbox
					checked={mcpMarketplaceEnabled}
					onChange={(e: any) => {
						const checked = e.target.checked === true
						setMcpMarketplaceEnabled(checked)
					}}>
					{t("settings.enableMcpMarketplace")}
				</VSCodeCheckbox>
				<p className="text-xs text-[var(--vscode-descriptionForeground)]">{t("settings.mcpMarketplaceDescription")}</p>
			</div>
			<div style={{ marginTop: 10 }}>
				<VSCodeCheckbox
					checked={mcpRichDisplayEnabled}
					onChange={(e: any) => {
						const checked = e.target.checked === true
						setMcpRichDisplayEnabled(checked)
					}}>
					{t("settings.enableRichMcpDisplay")}
				</VSCodeCheckbox>
				<p className="text-xs text-[var(--vscode-descriptionForeground)]">{t("settings.richMcpDisplayDescription")}</p>
			</div>
			<div style={{ marginTop: 10 }}>
				<VSCodeCheckbox
					checked={mcpResponsesCollapsed}
					onChange={(e: any) => {
						const checked = e.target.checked === true
						setMcpResponsesCollapsed(checked)
					}}>
					{t("settings.collapseMcpResponses")}
				</VSCodeCheckbox>
				<p className="text-xs text-[var(--vscode-descriptionForeground)]">{t("settings.mcpResponsesDescription")}</p>
			</div>
			<div style={{ marginTop: 10 }}>
				<label
					htmlFor="openai-reasoning-effort-dropdown"
					className="block text-sm font-medium text-[var(--vscode-foreground)] mb-1">
					{t("settings.openAIReasoningEffort")}
				</label>
				<VSCodeDropdown
					id="openai-reasoning-effort-dropdown"
					currentValue={chatSettings.openAIReasoningEffort || "medium"}
					onChange={(e: any) => {
						const newValue = e.target.currentValue as OpenAIReasoningEffort
						setChatSettings({
							...chatSettings,
							openAIReasoningEffort: newValue,
						})
					}}
					className="w-full">
					<VSCodeOption value="low">{t("low")}</VSCodeOption>
					<VSCodeOption value="medium">{t("medium")}</VSCodeOption>
					<VSCodeOption value="high">{t("high")}</VSCodeOption>
				</VSCodeDropdown>
				<p className="text-xs mt-[5px] text-[var(--vscode-descriptionForeground)]">
					{t("settings.openAIReasoningEffortDescription")}
				</p>
			</div>
		</div>
	)
}

export default memo(FeatureSettingsSection)
