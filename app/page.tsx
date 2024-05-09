import React from 'react'
import TopTabs from '@/components/TopTab'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='p-10'>

      <Hero/> 
      <br/>
      <br/>
      <br/>
      <TopTabs/>
    </div>
    </>
  )
}

export default Home
