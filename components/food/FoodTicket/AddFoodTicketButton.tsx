import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import React from 'react'

function AddFoodTicketButton() {
  return (
    <Button  size="lg" className="gap-2 w-[93%] rounded-lg bg-green-500 m-auto">
        <PlusCircle className="h-5 w-5" />
        整理券を追加
    </Button>
  )
}

export default AddFoodTicketButton