import React from "react";
import "./App.css";
import DesignTemplate from "components/DesignTemplate";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-start gap-40">
      <div className='w-[1080px] h-full shadow-lg'>
        <DesignTemplate  
          title='Ready to own a car?' 
          subtitle='Your Ride, Your Savings'
          bgImageUrl='/assets/images/background.jpeg' 
          imageUrl='/assets/images/Sports Car White.svg' 
          footerLogoURL='/assets/images/sesimi-logo.svg' 
          footerDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices ligula eu ante feugiat molestie. Suspendisse pulvinar id est a auctor. Ut at dapibus enim, vel hendrerit libero. Cras vel dignissim nunc, in accumsan tellus. Nam sollicitudin velit eu finibus aliquet. In congue nulla quis convallis scelerisque. Duis tempor auctor nibh in ullamcorper.'
          vehicles={[
            { color: "text-purple", name: "Sports Car Purple", price: 32000, onClick: () => alert("Selected!") },
            { color: "text-lightSkyBlue", name: "Sports Car Blue", price: 32000, onClick: () => alert("Selected!") },
            { color: "text-lightSkyBlue", name: "Sports Car Blue", price: 32000, onClick: () => alert("Selected!") },
            { color: "text-lightSkyBlue", name: "Sports Car Blue", price: 32000, onClick: () => alert("Selected!") }
          ]}
        />
      </div>
    </div>
  );
}

export default App;
