import React from 'react'
import Hero from './components/Hero'
import Editior from './components/editior'
import Bestseller from './components/bestseller'
import Product from './components/product'
import Four from './components/four'
import Feature from './components/feature'
import Footer from './components/footer'


export default function page() {
  return (
    <div>
     
      <Hero/>
      <Editior />
      <Bestseller />
      <Product />
      <Four />
      <Feature />
      <Footer />
    </div>
  )
}
