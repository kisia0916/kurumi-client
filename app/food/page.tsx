import FoodCard from '@/components/food/FoodCard/FoodCard'
import { FoodItem } from '@/components/food/foodInterface'
import AddFoodTicketButton from '@/components/food/FoodTicket/AddFoodTicketButton'
import FoodTicket from '@/components/food/FoodTicket/FoodTicket'
import ReloadTicket from '@/components/food/FoodTicket/ReloadTicket'
import React from 'react'


const foodItems: FoodItem[] = [
  {
    id: "1",
    name: "サンドイッチ",
    category: "軽食",
    sales_status: "在庫あり",
    allergens: ["小麦", "卵", "乳"],
    photo: "/img/e55m_0531.jpg",
    amount: 380,
  },
  {
    id: "2",
    name: "サラダ",
    category: "軽食",
    sales_status: "残りわずか",
    allergens: ["卵"],
    photo: "/placeholder.svg?height=200&width=200",
    amount: 320,
  },
  {
    id: "3",
    name: "カレーライス",
    category: "主食",
    sales_status: "売り切れ",
    allergens: ["小麦", "乳"],
    photo: "/placeholder.svg?height=200&width=200",
    amount: 580,
  },
  {
    id: "4",
    name: "オムライス",
    category: "主食",
    sales_status: "在庫あり",
    allergens: ["卵", "乳", "小麦"],
    photo: "/placeholder.svg?height=200&width=200",
    amount: 650,
  },
  {
    id: "5",
    name: "フルーツヨーグルト",
    category: "デザート",
    sales_status: "残りわずか",
    allergens: ["乳"],
    photo: "/placeholder.svg?height=200&width=200",
    amount: 420,
  },
  {
    id: "6",
    name: "チョコレートケーキ",
    category: "デザート",
    sales_status: "在庫あり",
    allergens: ["小麦", "卵", "乳"],
    photo: "/placeholder.svg?height=200&width=200",
    amount: 480,
  },
  {
    id: "7",
    name: "ミネストローネスープ",
    category: "スープ",
    sales_status: "在庫あり",
    allergens: ["セロリ"],
    photo: "/placeholder.svg?height=200&width=200",
    amount: 350,
  },
  {
    id: "8",
    name: "コーンスープ",
    category: "スープ",
    sales_status: "売り切れ",
    allergens: ["乳"],
    photo: "/placeholder.svg?height=200&width=200",
    amount: 320,
  },
];
function page() {

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
      <div className="w-full flex">
          <div className='w-[92%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-auto'>
              <FoodCard food={foodItems[0]}/>
              <FoodCard food={foodItems[0]}/>
              <FoodCard food={foodItems[0]}/>
              <FoodCard food={foodItems[0]}/>
              <FoodCard food={foodItems[0]}/>
              <FoodCard food={foodItems[0]}/>

          </div>
      </div>
    </>
  )
}

export default page