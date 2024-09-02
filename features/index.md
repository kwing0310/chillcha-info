---
layout: doc
---

# 独自機能

[Chillout Chat](https://chillout.chat) では、独自機能を追加した Mastodon のフォーク (Mastodon Chillout Edition) を運用しています。ソースコードは GitHub ([kwing0310/mastodon](https://github.com/kwing0310/mastodon)) で公開しています。

バグの報告や新しい機能の提案には [Issue](https://github.com/kwing0310/mastodon/issues) や [Pull Request](https://github.com/kwing0310/mastodon/pulls) をご利用ください。ハッシュタグ #chillout_chat をつけた投稿も報告や提案にご利用いただけます。

## 独自機能実装の方針

### 互換性の向上

Mastodon は ActivityPub に対応したソフトウェアの一種であり、Misskey や Pleroma などの他のソフトウェアを利用しているサーバーとも通信することができます。一方で、他のソフトウェアとの完全な互換性はないため、一部の機能は相互に利用することができません。

Mastodon Chillout Edition では、他のソフトウェアとの互換性を強化しすることで、外部のサーバーの投稿を参照しやすくしています。完全な互換性を目指しているのではなく、安定性や保守コスト、Chillout Chat のコンセプトに合うかどうかなど、様々な側面から移植する機能・しない機能を検討しています。

以下の表は、各ソフトウェアにおける投稿に関する機能を比較したものです。

|     | Chillout | Mastodon | Misskey | Pleroma | 
| --- | --- | --- | --- | --- |
| 文字装飾 | ❌ | ❌ | ⭕ | ⭕ |
| 引用 | ⭕ | ❌ | ⭕ | ⭕ |
| 絵文字リアクション | ❌ | ❌ | ⭕ | ⭕ |
| Cat | 一部対応 | ❌ | ⭕ | ❌ |
| 投稿の編集 | ⭕ | ⭕ | ❌ | ⭕ |

※ Chillout: Mastodon Chillout Edition (kwing0310/mastodon)

※ Mastodon, Misskey, Pleroma はいずれも公式リポジトリです。フォークによっては実装状況が異なる場合があります。

::: tip
Mastodon Chillout Edition の他にも、Fedibird ([fedibird/mastodon](https://github.com/fedibird/mastodon)) や kmyblue ([kmycode/mastodon](https://github.com/kmycode/mastodon)) などの、Misskey や Pleroma との互換性を強化した様々な Mastodon フォークが公開されています。
:::

### 居心地の良い環境の提供

Chillout Chat のコンセプトである「音楽好きの人々が集まる、落ち着き・くつろぎの空間」を実現するための機能を実装していく予定です。

::: info
Mastodon Chillout Edition は Chillout Chat 向けに開発しているものであり、他のサーバーでの運用をサポートする予定はありません。
:::
