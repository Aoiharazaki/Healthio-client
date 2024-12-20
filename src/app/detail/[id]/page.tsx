"use client";

import React from 'react';
import { useShop } from '../../../hooks/useShop';

export default function DetailPage({ params }: { params: { id: string } }) {
    // paramsを非同期に解決
    const { id } = React.use(params);

    const { shop, isLoading, error } = useShop(id);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!shop) return <p>お店が見つかりません</p>;

    return (
        <div>
            <h1>{shop.name}</h1>
            <p>{shop.description}</p>
            {/* その他のショップ情報 */}
        </div>
    );
}
