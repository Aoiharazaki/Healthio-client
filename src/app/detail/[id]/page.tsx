"use client";

import React from 'react';
import { useShop } from '../../../hooks/useShop';

export default function DetailPage({ params }: { params: { id: string } }) {
    const { id } = React.use(params);
    const { shop, isLoading, error } = useShop(id);  

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!shop) return <p>お店が見つかりません</p>;

    return (
      <div>
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-32 p-4">
          <div className="px-4 py-2">
            <h1 className="text-gray-800 font-bold text-2xl uppercase">ヘルシオ 〜Healthio〜</h1>
          </div>
          <div>
            <h1>{shop.name}</h1>
            <p>{shop.description}</p>
            {/* その他のショップ情報 */}
        </div>
        </div>
      </div>
    );
}
