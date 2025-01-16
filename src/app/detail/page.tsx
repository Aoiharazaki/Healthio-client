// "use client"; はクライアントサイドで動作することを示しますが、今回はサーバーサイドで動的にデータを取得するため、削除します。

import { fetchShopById } from '@/lib/api';  // API関数をインポート
import { ShopType } from '@/types/types';   // ShopType型をインポート
import React from 'react';

type ShopDetailProps = {
  params: { id: string };  // URL パラメータから shop id を取得
};

// サーバーサイドでデータをフェッチ
export default async function ShopDetail({ params }: ShopDetailProps) {
  const { id } = params; // URL パラメータを取得

  // API からデータを取得
  const shop: ShopType = await fetchShopById(id); 

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-32 p-4">
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">{shop.name}</h1>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-36 h-36 overflow-hidden mr-4">
          <img
            src={shop.photos?.[0]?.url || "https://placehold.jp/150x150.png"}  // 画像がなければ代替画像を表示
            alt={shop.name}
            className="rounded-lg object-cover"
            width={150}
            height={150}
          />
        </div>
        <div>
          <p className="text-sm text-gray-600">{shop.location?.name || "N/A"}</p>
          <p className="text-sm text-gray-600">{shop.genre?.name || "N/A"}</p>
          <p className="text-base text-gray-800 mt-2">{shop.description || "説明がありません"}</p>
        </div>
      </div>
    </div>
  );
}
