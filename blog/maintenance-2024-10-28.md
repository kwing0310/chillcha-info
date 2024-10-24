---
layout: doc
title: メンテナンスのお知らせ (2024-10-28)
---

> 投稿者: Chillout Chat 運営チーム ([@chillout_chat@chillout.chat](https://chillout.chat/@chillout_chat))

下記のとおり、停止メンテナンスを実施いたします。ご迷惑をおかけしますが、ご理解とご協力をお願いいたします。

::: tip 停止メンテナンス
日時: **2024年10月28日 20:00 - 23:00**

停止サービス: **[Chillout Chat](https://chillout.chat)**

備考: データベース・リバースプロキシの収容ホスト変更のため
:::

## 実施予定の作業について

Mastodon で使用しているデータベース (PostgreSQL) ならびにリバースプロキシ (Nginx) の収容ホストを [Linode](https://linode.com) から [ConoHa](https://www.conoha.jp) に変更いたします。

作業は以下の順序で実施される予定です。

- サービスの停止
- データベースのバップアップを取得・転送
- データベースのバックアップを復元
- Mastodon の設定ファイルを更新
- リバースプロキシの切替
- サービスの再開

作業時間は前後する可能性がありますので、あらかじめご了承ください。

## 代替サービスについて

[Chillroma](https://pleroma.chillout.chat) は通常通り運用する予定ですので、あわせてご利用ください。