import React from 'react'

interface HeaderProps {
  title: string;
  subtitle: string;
  bgImageUrl: string;
  imageUrl?: string
}

const Header = ({title, subtitle, bgImageUrl, imageUrl} : HeaderProps) => {
  return (
    <header
      className="relative w-full h-[380px] tall:min-h-[500px] flex flex-1 text-white"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "top right",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="flex flex-col z-10 px-[30px] py-12 max-w-[55%] tall:max-w-[70%] gap-4">
        <h1 className="text-[6.5rem] tall:text-[8rem] leading-none font-bold">{title}</h1>
        <p className="mt-2 text-[2.75rem] tall:text-[3rem] leading-none">{subtitle}</p>
        {imageUrl && (
          <img src={imageUrl} alt="Car Illustration" className="absolute bottom-0 right-0 object-contain px-[30px] py-12" />
        )}
      </div>
    </header>
  )
}

export default Header