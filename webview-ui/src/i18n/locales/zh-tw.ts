import type { Translation } from "./"
export const zhTW: Translation = {
	common: {
		save: "儲存",
		cancel: "取消",
		delete: "刪除",
		edit: "編輯",
		copy: "複製",
		paste: "貼上",
		clear: "清除",
		refresh: "重新整理",
		loading: "載入中...",
		error: "錯誤",
		success: "成功",
		warning: "警告",
		info: "資訊",
		yes: "是",
		no: "否",
		ok: "確定",
		close: "關閉",
		open: "開啟",
		add: "新增",
		remove: "移除",
		enable: "啟用",
		disable: "停用",
		settings: "設定",
		help: "說明",
		about: "關於",
		version: "版本",
		search: "搜尋",
		filter: "篩選",
		sort: "排序",
		connect: "連線",
		disconnect: "中斷連線",
		connected: "已連線",
		disconnected: "已中斷連線",
		install: "安裝",
		installed: "已安裝",
		installing: "安裝中...",
		download: "下載",
		upload: "上傳",
		import: "匯入",
		export: "匯出",
		preview: "預覽",
		submit: "提交",
		reset: "重設",
		back: "返回",
		next: "下一步",
		previous: "上一步",
		continue: "繼續",
		finish: "完成",
		start: "開始",
		stop: "停止",
		pause: "暫停",
		resume: "恢復",
		and: "和",
		retry: "重試",
		undo: "復原",
		redo: "重做",
		select: "選擇",
		selectAll: "全選",
		deselectAll: "取消全選",
		expand: "展開",
		collapse: "摺疊",
		maximize: "最大化",
		minimize: "最小化",
		fullscreen: "全螢幕",
		exitFullscreen: "結束全螢幕",
		copied: "已複製",
	},
	components: {
		badge: "徽章",
		checkbox: "核取方塊",
		link: "連結",
		remove: "移除",
		matchCase: "符合大小寫",
		matchWholeWord: "全字符合",
		useRegularExpression: "使用規則運算式",
		account: "帳戶",
		done: "完成",
		currentBalance: "目前餘額",
		termsOfService: "服務條款",
		privacyPolicy: "隱私權政策",
		byContining: "繼續使用即表示您同意",
		and: "以及",
		createRuleFile: "建立規則檔案",
		newRuleFile: "新規則檔案",
		newWorkflowFile: "新工作流程檔案...",
		editRuleFile: "編輯規則檔案",
		deleteRuleFile: "刪除規則檔案",
		globalRules: "全域規則",
		workspaceRules: "工作區規則",
		globalWorkflows: "全域工作流程",
		workspaceWorkflows: "工作區工作流程",
		clineRules: "Cline 規則",
		compare: "比較",
		restore: "還原",
		recentTasks: "最近任務",
		favorited: "已收藏",
		viewAllHistory: "檢視所有歷史",
		discardChanges: "放棄變更",
		restartServer: "重新啟動伺服器",
		deleteServer: "刪除伺服器",
		retryConnection: "重試連線",
		retrying: "重試中...",
		deleting: "刪除中...",
		restarting: "重新啟動中...",
		tools: "工具",
		resources: "資源",
		returns: "回傳 ",
		requiresApiKey: "需要 API 金鑰",
		submitYourMcpServer: "提交您的 MCP 伺服器",
		helpImproveCline: "協助改善 Cline",
		closeBannerEnableTelemetry: "關閉橫幅並啟用遙測",
		clickToToggleActMode: "點擊切換到執行模式",
		somethingWentWrongImage: "顯示此圖片時發生問題",
		somethingWentWrongLink: "顯示此連結預覽時發生問題",
		startTaskToSeeHere: "開始一個任務即可在此處檢視",
		exportLabel: "匯出",
		defaultCommands: "預設指令",
		workflowCommands: "工作流程指令",
	},

	settings: {
		title: "設定",
		apiConfiguration: "API 設定",
		general: "一般",
		generalSettings: "一般設定",
		feature: "功能",
		featureSettings: "功能設定",
		browser: "瀏覽器",
		browserSettings: "瀏覽器設定",
		terminal: "終端機",
		terminalSettings: "終端機設定",
		debug: "除錯",
		debugTools: "除錯工具",
		aboutCline: "關於 Cline",
		preferredLanguage: "偏好語言",
		preferredLanguageDescription: "Cline 用於溝通的語言。",
		allowAnonymousReporting: "允許匿名錯誤和使用狀況報告",
		telemetryDescription: "透過傳送匿名使用資料和錯誤報告來協助改善 Cline。不會傳送任何程式碼、提示或個人資訊。請參閱我們的",
		telemetryOverview: "遙測概述",
		privacyPolicy: "隱私政策",
		forMoreDetails: "瞭解更多詳情。",
		apiProvider: "API 提供者",
		planMode: "規劃模式",
		actMode: "執行模式",
		useDifferentModels: "為規劃和執行模式使用不同的模型",
		useDifferentModelsDescription:
			"在規劃和執行模式之間切換時會保留各自模式使用的 API 和模型。這在使用強推理模型制定計劃、使用較便宜的編碼模型執行時會很有用。",
		apiKey: "API 金鑰",
		apiKeyRequired: "您必須提供有效的 API 金鑰或選擇其他提供者。",
		baseUrl: "基礎 URL",
		useCustomBaseUrl: "使用自訂基礎 URL",
		modelId: "模型 ID",
		modelIdRequired: "您必須提供有效的模型 ID。",
		modelConfiguration: "模型設定",
		supportsImages: "支援圖片",
		contextWindowSize: "上下文視窗大小",
		maxOutputTokens: "最大輸出權杖",
		maxCompletionTokens: "最大完成權杖",
		maxTokens: "最大權杖",
		temperature: "溫度",
		topP: "Top P",
		topK: "Top K",
		frequencyPenalty: "頻率懲罰",
		presencePenalty: "存在懲罰",
		repetitionPenalty: "重複懲罰",
		thinkingBudget: "思考預算",
		thinkingBudgetDesc: "回應前思考的最大權杖數",
		terminalOutputLineLimit: "終端機輸出行數限制",
		terminalOutputLineLimitDesc: "終端機輸出顯示的最大行數",
		terminalConnectionTimeout: "終端機連線逾時",
		terminalConnectionTimeoutDesc: "終端機連線的逾時時間（秒）",
		enableTerminalReuse: "啟用終端機重複使用",
		enableTerminalReuseDesc: "盡可能重複使用現有終端機",
		browserPath: "瀏覽器路徑",
		browserPathDesc: "瀏覽器執行檔的路徑",
		launchBrowserDebugMode: "以除錯模式啟動瀏覽器",
		launchingBrowser: "正在啟動瀏覽器...",
		resetWorkspaceState: "重設工作區狀態",
		resetGlobalState: "重設全域狀態",
		resetStateDescription: "這將重設擴充功能中的所有全域狀態和金鑰儲存。",
		aboutDescription: "如果您有任何疑問或意見回饋，請在此處提交問題",
		disableBrowserToolUsage: "停用瀏覽器工具使用",
		disableBrowserToolDescription: "阻止 Cline 使用瀏覽器操作（如啟動、點擊、輸入）。",
		viewportSize: "視窗大小",
		viewportSizeDescription: "設定瀏覽器視窗大小，用於螢幕截圖和互動。",
		useRemoteBrowserConnection: "使用遠端瀏覽器連接",
		chromeExecutablePath: "Chrome 執行檔路徑（選填）",
		chromePathDescription: "留空可自動檢測。",
		checkingConnection: "檢查連接中...",
		notConnected: "未連接",
		defaultTerminalProfile: "預設終端配置",
		defaultTerminalProfileDescription: "選擇 Cline 將使用的預設終端。「預設」使用您的 VSCode 全域設定。",
		shellIntegrationTimeout: "Shell 整合逾時（秒）",
		shellIntegrationTimeoutDescription:
			"設定 Cline 在執行命令前等待 shell 整合啟動的時間。如果遇到終端連接逾時，請增加此值。",
		enableAggressiveTerminalReuse: "啟用積極終端重用",
		terminalReuseDescription:
			"啟用後，Cline 將重用不在目前工作目錄中的現有終端視窗。如果在終端命令後遇到任務鎖定問題，請停用此選項。",
		enterPositiveNumber: "請輸入正數",
		// Feature Settings
		enableCheckpoints: "啟用檢查點",
		checkpointsDescription:
			"允許擴充功能在整個任務過程中儲存工作區的檢查點。使用 git 作為底層技術，可能在大型工作區中效果不佳。",
		enableMcpMarketplace: "啟用 MCP 市場",
		mcpMarketplaceDescription: "啟用 MCP 市場分頁，用於探索和安裝 MCP 伺服器。",
		enableRichMcpDisplay: "啟用豐富 MCP 顯示",
		richMcpDisplayDescription: "為 MCP 回應啟用豐富格式。停用時，回應將以純文字顯示。",
		collapseMcpResponses: "摺疊 MCP 回應",
		mcpResponsesDescription: "設定 MCP 回應面板的預設顯示模式",
		openAIReasoningEffort: "OpenAI 推理努力",
		openAIReasoningEffortDescription: "OpenAI 系列模型的推理努力程度（適用於所有 OpenAI 模型提供商）",
		testBrowserConnection: "測試瀏覽器連線",
		browserConnectionInfo: "瀏覽器連線資訊",
		enableBrowserUse: "啟用瀏覽器使用",
		enableBrowserUseDesc: "允許 Cline 使用瀏覽器",
		disableBrowserUse: "停用瀏覽器使用",
		disableBrowserUseDesc: "阻止 Cline 使用瀏覽器",
		browserConnection: "瀏覽器連線",
		status: "狀態",
		type: "類型",
		remoteHost: "遠端主機",
		connected: "已連線",
		disconnected: "已中斷連線",
		remote: "遠端",
		local: "本機",
		enterTimeoutSeconds: "輸入逾時時間（秒）",
		customHeaders: "自訂標頭",
		headerName: "標頭名稱",
		headerValue: "標頭值",
		setAzureApiVersion: "設定 Azure API 版本",
		model: "模型",
		reasoningEffort: "推理強度",
		high: "高",
		medium: "中等",
		low: "低",
		requestTimeout: "請求逾時",
		noUsageHistory: "無使用歷史",
		noPaymentHistory: "無付款歷史",
		failedToLoadImage: "載入圖片失敗",
		copyCode: "複製程式碼",
		clearSearch: "清除搜尋",
		allCategories: "所有類別",
		mostInstalls: "最多安裝",
		newest: "最新",
		githubStars: "GitHub 星星",
		name: "名稱",
		defaultSort: "預設",
		price: "價格",
		throughput: "處理量",
		latency: "延遲",
		chinaApi: "中國 API",
		internationalApi: "國際 API",
		awsCredentials: "AWS 認證",
		awsProfile: "AWS 設定檔",
		awsProfileName: "AWS 設定檔名稱",
		awsAccessKey: "AWS 存取金鑰",
		awsSecretKey: "AWS 機密金鑰",
		awsSessionToken: "AWS 工作階段權杖",
		awsRegion: "AWS 區域",
		global: "全球",
		custom: "自訂",
		baseInferenceModel: "基礎推理模型",
		googleCloudProjectId: "Google Cloud 專案 ID",
		googleCloudRegion: "Google Cloud 區域",
		getApiKey: "取得 API 金鑰",
		languageModel: "語言模型",
		nebiusApiKey: "Nebius API 金鑰",
		xaiApiKey: "X AI API 金鑰",
		cerebrasApiKey: "Cerebras API 金鑰",
		aiCoreClientId: "AI Core 用戶端 ID",
		aiCoreClientSecret: "AI Core 用戶端密鑰",
		aiCoreBaseUrl: "AI Core 基礎 URL",
		aiCoreAuthUrl: "AI Core 認證 URL",
		aiCoreResourceGroup: "AI Core 資源群組",
		maxContextTokens: "最大上下文權杖",
		maxCompletionTokensShort: "最大完成權杖",
		modelContextWindow: "模型上下文視窗",
		alibabaApiLine: "阿里巴巴 API 線路",
		qwenApiKey: "通義千問 API 金鑰",
		doubaoApiKey: "豆包 API 金鑰",
		geminiApiKey: "Gemini API 金鑰",
		mistralApiKey: "Mistral API 金鑰",
		deepSeekApiKey: "DeepSeek API 金鑰",
		openRouterApiKey: "OpenRouter API 金鑰",
		anthropicApiKey: "Anthropic API 金鑰",
		openaiApiKey: "OpenAI API 金鑰",
		togetherApiKey: "Together API 金鑰",
		fireworksApiKey: "Fireworks API 金鑰",
		requestyApiKey: "API 金鑰",
		sambanovaApiKey: "SambaNova API 金鑰",
		askSageApiKey: "AskSage API 金鑰",
		askSageApiUrl: "AskSage API URL",
	},

	// 聊天介面
	chat: {
		newTask: "新任務",
		taskHistory: "任務歷史",
		clearHistory: "清除歷史",
		sendMessage: "傳送訊息",
		addContext: "新增上下文",
		attachFiles: "附加檔案",
		attachImages: "附加圖片",
		planMode: "計劃模式",
		actMode: "執行模式",
		planModeDesc: "在計劃模式下，Cline 將收集資訊來制定計劃",
		actModeDesc: "在執行模式下，Cline 將立即完成任務",
		copyTask: "複製任務",
		deleteTask: "刪除任務",
		exportTask: "匯出任務",
		favoriteTask: "收藏任務",
		unfavoriteTask: "取消收藏任務",
		taskCompleted: "任務完成",
		taskFailed: "任務失敗",
		taskCancelled: "任務已取消",
		thisWasHelpful: "這很有幫助",
		reportBug: "回報錯誤",
		whatHappened: "發生了什麼？",
		stepsToReproduce: "重現步驟",
		relevantApiOutput: "相關 API 請求輸出",
		providerModel: "提供者/模型",
		operatingSystem: "作業系統",
		systemInfo: "系統資訊",
		approve: "批准",
		reject: "拒絕",
		retrying: "重試中...",
		saving: "儲存中...",
		loading: "載入中...",
		clineVersion: "Cline 版本",
		additionalContext: "附加上下文",
		richDisplay: "豐富顯示",
		plainText: "純文字",
		taskMessage: "任務訊息",
		userMessage: "使用者訊息",
		fileOutsideWorkspace: "此檔案在您的工作區之外",
		urlExternal: "此 URL 是外部的",
		outsideWorkspace: "這在您的工作區之外",
		task: "任務",
		closeTask: "關閉任務",
		openDiskTaskHistory: "開啟磁碟任務歷史",
		quoteSelection: "引用選取",
		quoteSelectionReply: "在回覆中引用選取",
		dismissQuote: "取消引用",
		mcpServers: "MCP 伺服器",
		manageMcpServers: "管理 MCP 伺服器",
		commandOutput: "命令輸出",
		diffEditMismatch: "差異編輯不符合",
		browserSessionStarted: "瀏覽器工作階段已啟動",
		consoleLogs: "控制台日誌",
		userEdits: "使用者編輯",
		restoreAll: "還原全部",
		restoreChat: "還原聊天",
		restoreAllDesc: "還原檢查點的聊天和工作區檔案，並傳送您編輯的訊息",
		restoreChatDesc: "僅還原檢查點的聊天，並傳送您編輯的訊息",
		noMatchingCommands: "未找到符合的指令",
		problems: "問題",
		terminal: "終端機",
		pasteUrlFetch: "貼上 URL 以取得內容",
		noResultsFound: "未找到結果",
		gitCommits: "Git 提交",
		textArea: "文字區域",
		previousUpdates: "先前的更新",
		apiRequest: "API 請求",
		apiRequestCancelled: "API 請求已取消",
		apiStreamingFailed: "API 串流失敗",
		apiRequestFailed: "API 請求失敗",
		error: "錯誤",
		maxRequestsReached: "已達到最大請求數",
	},

	// 自動批准設定
	autoApprove: {
		autoApprove: "自動批准",
		actions: "行動",
		settings: "快速設定",
		autoApproveLabel: "啟用自動批准",
		autoApproveShort: "已啟用",
		autoApproveDesc: "開啟或關閉自動批准功能。",
		toggleAllLabel: "切換全部",
		toggleAllShort: "全部",
		toggleAllDesc: "開啟或關閉所有操作。",
		readProjLabel: "讀取專案檔案",
		readProjShort: "讀取",
		readProjDesc: "允許 Cline 讀取您工作區內的檔案。",
		readAllLabel: "讀取所有檔案",
		readAllShort: "讀取 (全部)",
		readAllDesc: "允許 Cline 讀取您電腦上的任何檔案。",
		editProjLabel: "編輯專案檔案",
		editProjShort: "編輯",
		editProjDesc: "允許 Cline 修改您工作區內的檔案。",
		editAllLabel: "編輯所有檔案",
		editAllShort: "編輯 (全部)",
		editAllDesc: "允許 Cline 修改您電腦上的任何檔案。",
		execSafeLabel: "執行安全指令",
		execSafeShort: "安全指令",
		execSafeDesc: "允許 Cline 執行安全的終端指令。如果模型確定某個指令可能具有破壞性，它仍然需要批准。",
		execAllLabel: "執行所有指令",
		execAllShort: "所有指令",
		execAllDesc: "允許 Cline 執行所有終端指令。使用風險自負。",
		useBrowserLabel: "使用瀏覽器",
		useBrowserShort: "瀏覽器",
		useBrowserDesc: "允許 Cline 在瀏覽器中啟動任何網站並與之互動。",
		useMcpLabel: "使用 MCP 伺服器",
		useMcpDesc: "允許 Cline 使用配置的 MCP 伺服器，這些伺服器可能會修改檔案系統或與 API 互動。",
		noteLabel: "啟用通知",
		noteShort: "通知",
		noteDesc: "當 Cline 需要批准才能繼續或任務完成時接收系統通知。",
		maxReq: "最大請求數",
		maxReqDesc: "Cline 將在請求批准繼續執行任務之前自動發出這麼多 API 請求。",
	},

	// MCP 相關
	mcp: {
		title: "MCP 伺服器",
		marketplace: "市集",
		installed: "已安裝",
		addServer: "新增伺服器",
		localServer: "本機伺服器",
		remoteServer: "遠端伺服器",
		serverName: "伺服器名稱",
		serverCommand: "伺服器指令",
		serverArgs: "伺服器參數",
		serverEnv: "伺服器環境",
		serverTimeout: "伺服器逾時",
		enableServer: "啟用伺服器",
		disableServer: "停用伺服器",
		restartServer: "重新啟動伺服器",
		deleteServer: "刪除伺服器",
		downloadCount: "下載次數",
		githubStars: "GitHub 星星",
		requiresApiKey: "需要 API 金鑰",
		noServersInstalled: "未安裝伺服器",
		installFromGithub: "從 GitHub 安裝",
		submitServer: "提交您的 MCP 伺服器",
		refreshMarketplace: "重新整理市集",
	},

	// 歡迎頁面
	welcome: {
		title: "歡迎使用 Cline",
		subtitle: "您的 AI 程式設計助手",
		quickWins: "快速開始",
		suggestedTasks: "建議任務",
		buildWebApp: "建立 Web 應用程式",
		buildWebAppDesc: "使用 React 和 TypeScript 建立現代 Web 應用程式",
		craftCliTool: "製作 CLI 工具",
		craftCliToolDesc: "使用 Node.js 建立命令列介面工具",
		developGame: "開發遊戲",
		developGameDesc: "使用 Web 技術建立互動式遊戲",
		getStarted: "開始使用",
		learnMore: "了解更多",
		hi: "Hi,i'm Cline",
		start: "Get Started for Free",
		your: "Use your own API key",
		go: "Let's go!",
	},

	// 歷史記錄
	history: {
		title: "任務歷史",
		noTasks: "未找到任務",
		deleteAllTasks: "刪除所有任務",
		deleteNonFavorited: "刪除非收藏任務",
		totalTasks: "總任務數",
		totalSize: "總大小",
		searchTasks: "搜尋任務...",
		filterByDate: "依日期篩選",
		sortBy: "排序方式",
		sortByDate: "日期",
		sortByName: "名稱",
		sortBySize: "大小",
		ascending: "升序",
		descending: "降序",
	},

	// 檢查點
	checkpoints: {
		title: "檢查點",
		compare: "比較",
		restore: "還原",
		restoreWorkspace: "僅還原工作區",
		restoreTaskAndWorkspace: "還原任務和工作區",
		noCheckpoints: "沒有可用的檢查點",
		checkpointCreated: "檢查點已建立",
		checkpointRestored: "檢查點已還原",
		workspaceRestored: "工作區已還原",
	},

	// 錯誤訊息
	errors: {
		somethingWentWrong: "顯示此內容時發生問題",
		unknownError: "未知錯誤",
		failedToLoadImage: "無法載入圖片以檢查尺寸。",
		failedToParseData: "解析資料失敗",
		failedToUpdateSettings: "更新設定失敗",
		failedToConnect: "連線失敗",
		failedToDisconnect: "中斷連線失敗",
		failedToInstall: "安裝失敗",
		failedToUninstall: "解除安裝失敗",
		failedToStart: "啟動失敗",
		failedToStop: "停止失敗",
		failedToRestart: "重新啟動失敗",
		failedToDelete: "刪除失敗",
		failedToSave: "儲存失敗",
		failedToLoad: "載入失敗",
		failedToRefresh: "重新整理失敗",
		invalidInput: "輸入無效",
		requiredField: "此欄位為必填",
		invalidEmail: "無效的電子郵件地址",
		invalidUrl: "無效的 URL",
		invalidNumber: "無效的數字",
		numberTooSmall: "數字太小",
		numberTooLarge: "數字太大",
		fileTooLarge: "檔案太大",
		fileTypeNotSupported: "不支援的檔案類型",
		networkError: "網路錯誤",
		timeoutError: "請求逾時",
		authenticationError: "身分驗證錯誤",
		authorizationError: "授權錯誤",
		notFoundError: "未找到",
		serverError: "伺服器錯誤",
		clientError: "用戶端錯誤",
	},

	// 工具提示
	tooltips: {
		clickToToggleActMode: "點擊切換到執行模式",
		copyCode: "複製程式碼",
		copyTask: "複製任務",
		deleteTask: "刪除任務",
		favoriteTask: "收藏任務",
		unfavoriteTask: "取消收藏任務",
		exportTask: "匯出任務",
		openInNewTab: "在新分頁中開啟",
		openInBrowser: "在瀏覽器中開啟",
		refreshPage: "重新整理頁面",
		goBack: "返回",
		goForward: "前進",
		zoomIn: "放大",
		zoomOut: "縮小",
		resetZoom: "重設縮放",
		toggleFullscreen: "切換全螢幕",
		showPassword: "顯示密碼",
		hidePassword: "隱藏密碼",
		clearSearch: "清除搜尋",
		sortAscending: "升序排列",
		sortDescending: "降序排列",
		filterResults: "篩選結果",
		showMore: "顯示更多",
		showLess: "顯示更少",
		expandAll: "展開全部",
		collapseAll: "摺疊全部",
	},

	// 驗證訊息
	validation: {
		apiKeyRequired: "您必須提供有效的 API 金鑰或選擇其他提供者。",
		regionRequired: "您必須選擇一個區域來使用 AWS Bedrock。",
		projectIdRequired: "您必須提供有效的 Google Cloud 專案 ID 和區域。",
		baseUrlRequired: "您必須提供有效的基礎 URL、API 金鑰和模型 ID。",
		modelIdRequired: "您必須提供有效的模型 ID。",
		modelSelectorRequired: "您必須提供有效的模型選擇器。",
		clientIdRequired: "您必須提供有效的用戶端 ID 或選擇其他提供者。",
		clientSecretRequired: "您必須提供有效的用戶端密鑰或選擇其他提供者。",
		authUrlRequired: "您必須提供有效的認證 URL 或選擇其他提供者。",
		modelNotAvailable: "您提供的模型 ID 不可用。請選擇其他模型。",
		positiveNumberRequired: "請輸入正數",
	},
}

export default zhTW
