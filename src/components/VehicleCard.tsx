import React from 'react'
import CarIcon from './CarIcon';

interface VehicleCardProps {
  color: string
  name: string;
  price: number;
  className?: string;
  onClick: () => void;
}

const VehicleCard = ({color, name, price, className, onClick}:VehicleCardProps) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <CarIcon color={color}/>
      <h3 className={`text-5xl font-bold`}>{name}</h3>
      <p className={'flex items-start text-lg gap-2'}>For <span className={`text-4xl font-bold`}>{formattedPrice}</span></p>
      <button className={'bg-limeGreen text-black w-full py-4 font-black text-3xl mt-[10px]'} onClick={onClick}>Get Started</button>
    </div>
  )
}

export default VehicleCard