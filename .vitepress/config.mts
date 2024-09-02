import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "info.chillout.chat",
  description: "Chillout Chat 公式の運営ブログ・サービス情報サイト",
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '運営ブログ', link: '/blog/2024-08-31' },
      { text: '利用規約', link: '/terms/' },
      { text: '独自機能', link: '/features/' }
    ],

    sidebar: {
      '/blog/': [
        {
          text: '記事一覧',
          items: [
            { text: 'v4.1.19+chillout.2 へのアップデートを実施します', link: '/blog/2024-08-31' }
          ]
        }
      ],
      '/features/': [
        {
          items: [
            { text: '独自機能', link: '/features/' }
          ]
        },
        {
          text: '実装済みの独自機能',
          items: [
            { text: 'レガシーモード', link: '/features/legacy-mode' }
          ]
        }
      ],
      '/terms/': [
        {
          text: '利用規約',
          items: [
            { text: 'Chillout Chat サービス利用規約', link: '/terms/' },
            { text: '利用上の注意', link: '/terms/caution' },
            { text: 'Bot 運用ルール', link: '/terms/bot-rules' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'mastodon', link: 'https://chillout.chat' }
    ]
  }
})
