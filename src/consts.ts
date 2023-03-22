export const SITE = {
	title: '更新日志',
	description: '更新日志',
	defaultLanguage: 'zh-cn',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	Chinese: 'cn',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	cn: {
		'文档列表': [
			{ text: 'Cube-Web', link: 'cn/cube' },
			{ text: 'Cube-Hirozin', link: 'cn/page-2' },
			{ text: 'Cube-Otter', link: 'cn/page-3' },
		],
		// 'Another Section': [{ text: 'Page 4', link: 'cn/page-4' }],
	},
};
