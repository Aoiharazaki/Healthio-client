import React, { useState } from 'react'
import { ShopType } from '../types';
import { useShops } from '../hooks/useShops';
import { API_URL } from '@/constants/url';
import Image from 'next/image';

type ShopProps = {
  shop: ShopType;
};


const Shop = ({ shop }: ShopProps) => {
  return (
    <div>
      <li className="py-4">
        <div className="flex items-center p-4 mx-auto">
          <div className="flex mr-4 w-36 h-36 overflow-hidden">
              <Image
                src={shop.photos?.[0]?.url || "https://placehold.jp/150x150.png"}
                alt={shop.name}
                width={150} 
                height={150}
                className="rounded-lg object-cover"
              />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold truncate">
              <a href={shop.link || "#"} className="text-orange-500">
                {shop.name}
              </a>
            </h2>
            <p className="text-sm text-gray-600">{shop.location?.name || "N/A"} / {shop.genre?.name || "N/A"}</p>
            <p className="text-gray-800 text-base line-clamp-3">
              {shop.description || "説明がありません"}
            </p>
          </div>
        </div>
      </li> 
    </div>
  )
}

export default Shop
