import React from 'react'
import Headers from "./sections/Headers.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";

const App = () => {
  return (
    <main className='overflow-hidden'>
      <Headers/>
      <Hero />
      <Features />
      <Pricing />
    </main>
  )
}
export default App
