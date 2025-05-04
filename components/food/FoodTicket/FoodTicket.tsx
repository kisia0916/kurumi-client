import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card-food'
import React from 'react'

function FoodTicket() {
  return (
    <Card className='w-[300px] h-[150px] m-auto mt-5 mb-5'>
        <CardContent>
            <div className='w-full flex'>
                <div className='m-auto'>
                    <div className='w-full flex'>
                        <p className='m-auto'>呼び出し番号</p>
                    </div>
                    <div className='w-full flex'>
                        <span className='text-5xl m-auto mt-3'>15</span>
                    </div>
                    <Badge
                        // variant={food.statusColor === "warning" ? "secondary" : food.statusColor}
                        className="text-sm px-2 py-2 mt-2 font-bold flex items-center w-40 h-9 justify-center border-2 rounded-3xl border-yellow-300 bg-white"
                        >
                        <span className="text-yellow-300">{"現在準備中です"}</span>
                    </Badge>
                </div>
            </div>
        </CardContent>
    </Card>
  )
}

export default FoodTicket