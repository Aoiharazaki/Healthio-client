"use client";


import Shop from "@/src/features/shoplist/Shop";
import { ShopType } from "../../types/types";
import { useShops } from "../../hooks/useShops";

export default function Home() {
  const {shops} = useShops();


  return (
  <div>
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-32 p-4">
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">ヘルシオ 〜Healthio〜</h1>
      </div>
      <ul className="divide-y divide-gray-200 px-4">
        {shops?.map((shop:ShopType) => (
          <Shop key={shop.id} shop={shop}/>
        ))}
      </ul>
    </div>
  </div>
  );
}
