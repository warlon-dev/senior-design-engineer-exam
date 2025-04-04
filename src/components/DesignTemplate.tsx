import Header from 'components/Header'
import React  from 'react'
import VehicleCard from './VehicleCard'
import Footer from './Footer'

const DesignTemplate = () => {
  return (
    <div 
      className={"flex flex-col h-full w-full"} 
    >
        <Header title='Ready to own a car?' subtitle='Your Ride, Your Savings' bgImageUrl='/assets/images/background.jpeg' imageUrl='/assets/images/Sports Car White.svg'/>
        <div className='h-full flex items-center justify-center'>
          <div className={' bg-white grid grid-cols-2 px-[72px] gap-x-14 gap-y-[136px] items-center'}>
            <VehicleCard color="text-purple" name="Sports Car Purple" price={32000} onClick={() => alert("Selected!")} />
            <VehicleCard color="text-lightSkyBlue" name="Sports Car Blue" price={32000} onClick={() => alert("Selected!")} />
            <VehicleCard className='hidden tall:block' color="text-lightSkyBlue" name="Sports Car Blue" price={32000} onClick={() => alert("Selected!")} />
            <VehicleCard className='hidden tall:block' color="text-lightSkyBlue" name="Sports Car Blue" price={32000} onClick={() => alert("Selected!")} />
          </div>
        </div>
        <Footer logoURL='/assets/images/sesimi-logo.svg' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices ligula eu ante feugiat molestie. Suspendisse pulvinar id est a auctor. Ut at dapibus enim, vel hendrerit libero. Cras vel dignissim nunc, in accumsan tellus. Nam sollicitudin velit eu finibus aliquet. In congue nulla quis convallis scelerisque. Duis tempor auctor nibh in ullamcorper.' />
    </div>
  )
}

export default DesignTemplate