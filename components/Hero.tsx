"use client"

import React from 'react';
import BasicModal from './Modal';



const Hero: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-custom-bg2 text-white">
      <div className="space-y-2">
      <h2 className="text-lg font-semibold bg-custom-bg text-white p-2 rounded">Hi,</h2>
        <div>
        <p className="text-lg text-custom-bg font-semibold">Wallet Balance:</p>
        <span className="text-4xl text-custom-bg font-bold">$4000</span>
        </div>
      </div>

      <div className="ml-10">
   
        <BasicModal/>
        

      </div>
    </div>
  );
};

export default Hero;
