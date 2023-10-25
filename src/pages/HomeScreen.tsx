import React, { useState, useEffect } from 'react';
import logo1 from '../assets/images/user1.png';
import logo2 from '../assets/images/user2.png';
import logo3 from '../assets/images/user3.png';
import adobe from '../assets/company logo/adobe.svg';
import amazon from '../assets/company logo/amazon.svg';
import atlassian from '../assets/company logo/atlassian.svg';
import DeutscheBank from '../assets/company logo/Deutsche_Bank.png';
import cisco from '../assets/company logo/cisco.svg';
import google from '../assets/company logo/google.svg';
import masterCard from '../assets/company logo/masterCard.svg';
import microsoft from '../assets/company logo/microsoft.svg';
import uber from '../assets/company logo/uber.svg';

export default function HomeScreen() {

  const [search, setsearch] = useState('');

  function onChange(e) {
    setsearch(e.target.value);
  }

  return (<>
    <div className="flex h-screen w-full flex-col justify-center items-center">
      <div className='flex h-screen flex-col gap-4 justify-center items-center'>
        <h1 className="text-8xl text-slate-900 flex justify-center font-bold">Anubhav</h1>
        <p className="text-4xl text-slate-800 flex justify-center">Stories of Success</p>
        <div className='flex items-center gap-4'>
          <div className='flex'>
            <img src={logo2} alt="random" className="w-12 mr-[-16px] rounded-full border-4 border-white" />
            <img src={logo1} alt="random" className="w-12 mr-[-16px] rounded-full border-4 border-white" />
            <img src={logo3} alt="random" className="w-12 mr-[-16px] rounded-full border-4 border-white" />
            <div className='w-12 h-12 flex justify-center items-center font-medium bg-white text-gray-800  rounded-full border-4 border-white shadow-xl shadow-gray-200 p-4'>3k+</div>
          </div>
          <p className='text-xl text-gray-800'>Articles written</p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for your dreams"
            className="border-2 w-[400px] border-gray-500 rounded-full pl-4 pr-4 py-2 focus:outline-none  focus:border-transparent transition duration-250 ease-in-out"
            onChange={onChange}
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <svg fill="#9ca3af" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg>
          </div>
        </div>
      </div>
      <div className="w-full inline-flex flex-nowrap">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img src={adobe} alt="adobe" />
          </li>
          <li>
            <img src={amazon} alt="amazon" />
          </li>
          <li>
            <img src={atlassian} alt="atlassian" />
          </li>
          <li>
            <img src={google} alt="google" />
          </li>
          <li>
            <img src={microsoft} alt="microsoft" />
          </li>
          <li>
            <img src={uber} alt="uber" />
          </li>
          <li>
            <img src={cisco} alt="cisco" />
          </li>
          <li>
            <img src={DeutscheBank} alt="DeutscheBank" />
          </li>
          <li>
            <img src={masterCard} alt="masterCard" />
          </li>
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        <li>
            <img src={adobe} alt="adobe" />
          </li>
          <li>
            <img src={amazon} alt="amazon" />
          </li>
          <li>
            <img src={atlassian} alt="atlassian" />
          </li>
          <li>
            <img src={google} alt="google" />
          </li>
          <li>
            <img src={microsoft} alt="microsoft" />
          </li>
          <li>
            <img src={uber} alt="uber" />
          </li>
          <li>
            <img src={cisco} alt="cisco" />
          </li>
          <li>
            <img src={DeutscheBank} alt="DeutscheBank" />
          </li>
          <li>
            <img src={masterCard} alt="masterCard" />
          </li>
        </ul>
      </div>
    </div>
  </>
  )
}