import { Button } from '@/components/ui/button'
import { RotateCcw } from 'lucide-react'
import React from 'react'

function ReloadTicket() {
  return (
    <Button  size="lg" className="gap-2 w-20 h-7 rounded-lg bg-green-500">
        <RotateCcw className="h-5 w-5" />
        <span>更新</span>
    </Button>
  )
}

export default ReloadTicket