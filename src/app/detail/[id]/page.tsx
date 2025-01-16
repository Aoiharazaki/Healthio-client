"use client";

import React, { useEffect, useState } from 'react';
import { useShop } from '../../../hooks/useShop';

export default function DetailPage({ params }: { params: Promise<{ id: string }> }) {
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        async function fetchParams() {
            const resolvedParams = await params;
            setId(resolvedParams.id);
        }
        fetchParams();
    }, [params]);

    // 常にフックを呼び出す
    const { shop, isLoading, error } = useShop(id || '');

    if (!id) return <p>Loading...</p>;
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
