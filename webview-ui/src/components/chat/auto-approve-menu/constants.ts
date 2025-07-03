import { useMemo } from "react"
import { ActionMetadata } from "./types"
import { useTranslation } from "@/i18n/translate"

export const useTranslatedActionMetadata = () => {
	const { t } = useTranslation()
	const ACTION_METADATA: ActionMetadata[] = useMemo(
		() => [
			{
				id: "enableAutoApprove",
				label: t("autoApprove.autoApproveLabel"),
				shortName: t("autoApprove.autoApproveShort"),
				description: t("autoApprove.autoApproveDesc"),
				icon: "codicon-play-circle",
			},
			{
				id: "enableAll",
				label: t("autoApprove.toggleAllLabel"),
				shortName: t("autoApprove.toggleAllShort"),
				description: t("autoApprove.toggleAllDesc"),
				icon: "codicon-checklist",
			},
			{
				id: "readFiles",
				label: t("autoApprove.readProjLabel"),
				shortName: t("autoApprove.readProjShort"),
				description: t("autoApprove.readProjDesc"),
				icon: "codicon-search",
				subAction: {
					id: "readFilesExternally",
					label: t("autoApprove.readAllLabel"),
					shortName: t("autoApprove.readAllShort"),
					description: t("autoApprove.readAllDesc"),
					icon: "codicon-folder-opened",
					parentActionId: "readFiles",
				},
			},
			{
				id: "editFiles",
				label: t("autoApprove.editProjLabel"),
				shortName: t("autoApprove.editProjShort"),
				description: t("autoApprove.editProjDesc"),
				icon: "codicon-edit",
				subAction: {
					id: "editFilesExternally",
					label: t("autoApprove.editAllLabel"),
					shortName: t("autoApprove.editAllShort"),
					description: t("autoApprove.editAllDesc"),
					icon: "codicon-files",
					parentActionId: "editFiles",
				},
			},
			{
				id: "executeSafeCommands",
				label: t("autoApprove.execSafeLabel"),
				shortName: t("autoApprove.execSafeShort"),
				description: t("autoApprove.execSafeDesc"),
				icon: "codicon-terminal",
				subAction: {
					id: "executeAllCommands",
					label: t("autoApprove.execAllLabel"),
					shortName: t("autoApprove.execAllLabel"),
					description: "Allows. Use at your own risk.",
					icon: "codicon-terminal-bash",
					parentActionId: "executeSafeCommands",
				},
			},
			{
				id: "useBrowser",
				label: t("autoApprove.useBrowserLabel"),
				shortName: t("autoApprove.useBrowserShort"),
				description: t("autoApprove.useBrowserDesc"),
				icon: "codicon-globe",
			},
			{
				id: "useMcp",
				label: t("autoApprove.useMcpLabel"),
				shortName: "MCP",
				description: t("autoApprove.useMcpDesc"),
				icon: "codicon-server",
			},
		],
		[t],
	)

	const NOTIFICATIONS_SETTING: ActionMetadata = useMemo(
		() => ({
			id: "enableNotifications",
			label: t("autoApprove.noteLabel"),
			shortName: t("autoApprove.noteShort"),
			description: t("autoApprove.noteDesc"),
			icon: "codicon-bell",
		}),
		[t],
	)

	return { ACTION_METADATA, NOTIFICATIONS_SETTING }
}
