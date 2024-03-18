import DetailStats from '@components/Home/DetailStats'
import Grow from '@components/Home/Grow'
import Herosection from '@components/Home/Herosection'
import Invest from '@components/Home/Invest'
import Stats from '@components/Home/Stats'
import Trade from '@components/Home/Trade'
import WhyCrapo from '@components/Home/WhyCrapo'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <Herosection/>
        <Stats/>
        <WhyCrapo/>
        <Trade/>
        <Invest/>
        <DetailStats/>
        <Grow/>
    </div>
  )
}

export default HomePage