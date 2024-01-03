import React from 'react'
import DashboardBlock from './DashboardBlock'

export default function DashboardRow(): JSX.Element {
    return (
        <div className='flex'>
            <DashboardBlock title={'Domains'} number={'27'} text={'Test'} url={'/domains'} />
            <DashboardBlock title={'Websites'} number={'14'} text={'Test'} url={'/websites'} />
            <DashboardBlock title={'APIs'} number={'5'} text={'Test'} url={'/apis'} />
        </div>
    )
}