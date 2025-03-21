import { Star } from 'lucide-react'
import React from 'react'
type Props = {
  value: number
}
const Rating = (props: Props) => {
  console.log(props)
  return (
    <div className="flex items-center">
      <div className="flex">
          <Star size={18} color='#FDE047' fill='#FDE047'/>
      </div>
      <span className="ml-2 text-sm font-medium">{props.value ? props.value.toFixed(1) : '0.0'}/10</span>
    </div>
  )
}

export default Rating