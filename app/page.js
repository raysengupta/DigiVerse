import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Head from "next/head"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Value from "./components/Value"
import Customcard from "./components/Card"

import './globals.css'


export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" />
      </Head>
      <div style={{ 
        background: 'radial-gradient(circle at center 10%, #000000 30%, #b3d9ff 100%)', 
        backgroundSize: 'cover',
        height: 'full'
      }}>
        <Navbar />
        <Hero />
        <Services />
        <Value />
      
        <Contact />
        <Footer />
      </div>
    </>
  )
}


