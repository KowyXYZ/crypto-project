import Herosection from '@components/Home/Herosection'
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
    </div>
  )
}

export default HomePage