"use client"
import FoodCard from '@/components/food/FoodCard/FoodCard'
import { FoodItem } from '@/components/food/foodInterface'
import AddFoodTicketButton from '@/components/food/FoodTicket/AddFoodTicketButton'
import FoodTicket from '@/components/food/FoodTicket/FoodTicket'
import ReloadTicket from '@/components/food/FoodTicket/ReloadTicket'
import { Food } from '@/lib/generated/prisma'
import { Prisma } from '@prisma/client'
import React, { useEffect, useState } from 'react'

function page() {
  const [foodItems, setFoodItems] = useState<Food[]>([]);
  const [loading_status,set_loading_status] = useState(true);
  useEffect(() => {
    fetch("/api/food", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name: "サンドイッチ",
        photo: "new-food.jpg",
        amount: 400,
        category: "軽食",
        sales_status: "在庫あり",
        Allergens: ["卵"],
      }),
    })
      .then((res) => res.json() as Promise<Food | { error: string }>)
      .then((data) => {
        if ("error" in data) {
          alert(`エラー: ${data.error}`);
        } else {
          alert("食品を追加しました");
        }
      });
  }, []);

  return (
    <>
      <div className='flex mt-4 '>
        <span className='text-2xl ml-3 font-bold'>食品</span>
      </div>
      <div className='w-full h-11 flex'>
        <div className='w-[92%] m-auto mb-0 justify-between flex'>
          <span className='text-lg'>整理券一覧</span>
          <ReloadTicket/>
        </div>
      </div>
      <div className='w-full flex'>
        <FoodTicket/>
      </div>
      <div className='w-full flex'>
        <AddFoodTicketButton/>
      </div>
      <div className='w-full h-12 flex'>
        <div className='w-[92%] m-auto'>
          <span className='text-lg'>食品販売状況</span>
        </div>
      </div>
      {loading_status?<div className="w-full flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-500"></div>
        <span className="ml-4 text-blue-500 text-lg">読み込み中...</span>
      </div>:<></>}
      {/* <div className="w-full flex">
          <div className='w-[92%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-auto'>
              {foodItems.map((food) => (
                <FoodCard key={food.id} food={food}/>
              ))}
          </div>
      </div> */}
    </>
  )
}

export default page