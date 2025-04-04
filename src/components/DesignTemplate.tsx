import Header from 'components/Header'
import React  from 'react'
import VehicleCard from './VehicleCard'
import Footer from './Footer'


interface Vehicle {
  color: string;
  name: string;
  price: number;
  onClick: () => void;
}

interface DesignTemplateProps {
  title: string;
  subtitle: string;
  bgImageUrl: string;
  imageUrl: string;
  vehicles: Vehicle[];
  footerFullName?: string;
  footerLogoURL: string;
  footerDescription: string;
}


const DesignTemplate = ({ title,
  subtitle,
  bgImageUrl,
  imageUrl,
  vehicles,
  footerFullName,
  footerLogoURL,
  footerDescription} : DesignTemplateProps) => {
  return (
    <div 
      className={"flex flex-col h-full w-full"} 
    >
        <Header title={title} 
        subtitle={subtitle} 
        bgImageUrl={bgImageUrl} 
        imageUrl={imageUrl}/>
        <div className='h-full flex items-center justify-center'>
          <div className={' bg-white grid grid-cols-2 px-[72px] gap-x-14 gap-y-[136px] items-center'}>
          {vehicles.slice(0, 4).map((vehicle, index) => (
            <VehicleCard 
              color={vehicle.color} 
              name={vehicle.name} 
              price={vehicle.price} 
              onClick={vehicle.onClick}
              className={index >= 2 ? 'hidden tall:flex' : ''}
            />
          ))}
          </div>
        </div>
        <Footer 
          logoURL={footerLogoURL} 
          description={footerDescription} 
          fullName={footerFullName}
        />
    </div>
  )
}

export default DesignTemplate