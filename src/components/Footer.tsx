import React from 'react'

interface FooterProps {
  fullName?: string;
  logoURL: string;
  description?: string;
}

const Footer = ({ fullName, logoURL, description }:FooterProps) => {
  return (
    <footer className="bg-deepTeal text-limeGreen px-7 py-14 h-[180px] tall:h-[300px]" >
      <div className="flex flex-col w-full h-full gap-10 ">
        <div className="flex justify-between items-center h-full">
          <h4 className="text-4xl">{fullName ?? "<Your Full Name>"}</h4>
          <img src={logoURL} alt="Logo" className={'h-[68px]'}/>
        </div>
        <p className='hidden tall:block'>{description}</p>      
      </div>
    </footer>
  );
};

export default Footer;