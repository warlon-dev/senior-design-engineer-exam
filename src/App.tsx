import React from "react";
import "./App.css";
import DesignTemplate from "components/DesignTemplate";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-start gap-40">
      <div className='w-[1080px] h-full shadow-lg'>
        <DesignTemplate/>
      </div>
    </div>
  );
}

export default App;
