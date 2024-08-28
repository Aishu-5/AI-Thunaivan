import React from 'react'
import Navbar from './Navbar'
import Blogs from './Blogs'
import Pricing from './Pricing'
import Footer from './Footer';
import Banner from './Banner';
import Workflow from './Workflow';

export default function Home() {
  return (
      <div className=''>
          <Navbar />
          <Banner />
          <Blogs />
          <Workflow />

          <Pricing />
          <Footer/>
          </div>
  )
}
