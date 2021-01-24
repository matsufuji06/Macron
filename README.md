## 概要
目標の体重に向けて、今日食べたメニューからの摂取カロリーとマクロ栄養素を記録するアプリです。なお、体重は減らすだけでなく、増やす目標も立てることができます。  
（※カロリー計算に関しては、体脂肪1kgあたりの増減で7,200kcalが必要という前提のもと、「[日本医師会ホームページ](https://www.med.or.jp/forest/health/eat/01.html)」の”推定エネルギー”参考にしています。）

## URL  
[http://18.182.221.141](http://18.182.221.141)

## 機能一覧 （※予定）
- deviseログイン機能  
- メニュー投稿・一覧・詳細表示・編集・削除機能  
- deviseログイン機能（簡単ログイン機能付き）  
- グラフ機能（カロリー合計や目標への摂取マクロの表示が可能）  
- コメント機能（※予定）  
- メニュー検索機能（※予定）  
- ページネーション機能  
- いいね機能（※予定）  
- フォロー機能（※予定）  

## 技術一覧
- Ruby 2.5.1  
- Ruby on Rails 5.0.7.2  
- haml  
- scss  
- Rspec  
- Gem(devise, Carrierwave, Chartkick, Groupdate, Bootstrap, jquery-rails, mini_racer)  
- Github  
- AWS(EC2) 
- Unicorn  
- Nginx  
- Capistrano

## DB設計
### topsテーブル  
### usersテーブル  
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### followテーブル(※予定)  
### postsテーブル  
|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|food|string|null: false|
|image|string||
|calorie|decimal|null: false|
|carbo|decimal|null: false|
|fat|decimal|null: false|
|protein|decimal|null: false|
|weight|decimal|null: false|
|date|date|null: false|
### commentsテーブル(※予定)  
### likesテーブル(※予定)  
### standardsテーブル  
|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|calorie|decimal|null: false|
|carbo|decimal|null: false|
|fat|decimal|null: false|
|protein|decimal|null: false|
|weight|decimal|null: false|
|idealweight|decimal|null: false|

## アプリへの想い
