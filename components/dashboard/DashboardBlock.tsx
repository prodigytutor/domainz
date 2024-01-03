import { Link } from '@nextui-org/link'
import { Decimal } from '@prisma/client/runtime/library'
import React from 'react'
interface DashboardBlockProps
{
    title: string
    number: string
    text: string
    url: string
}

export default function DashboardBlock(props: DashboardBlockProps) {
  return (
    <div className='items-center justify-center w-60'>
        <div><Link href={props.url}>{props.title}</Link></div>
        <div>{props.number}</div>
        <div>{props.text}</div>
    </div>

  )
}