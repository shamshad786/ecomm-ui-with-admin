import React from 'react'
import Featuredinfo from './Featuredinfo'
import Chart from './Chart'
import { userData } from './dummyData'
import Widgetsm from './Widgetsm'
import Widgetlg from './Widgetlg'

const Home = () => {
  return (
   <>
      <div className='home'>
            <Featuredinfo/>
            <Chart data={userData} title="User Analytics Chart" grid dataKey="Active User" />

      <div className='homeWidgets'>
        <Widgetsm/>
        <Widgetlg/>
      </div>

      </div> 
   </>
  )
}

export default Home

