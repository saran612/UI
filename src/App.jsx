import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
       <div className="app-background">
        <ShaderGradientCanvas
          style={{ position: 'fixed', inset: 0, zIndex: -1 }}
          pixelDensity={1.5}
          fov={45}
        >
          <ShaderGradient 
            type="plane"
            cDistance={3.6} 
            cPolarAngle={90} 
            color1="#ff5005" 
            color2="#dbba95" 
            color3="#d0bce1"
            animate="on"
            uFrequency={5.5}
            uSpeed={0.4}
            uStrength={4}
            grain="on"
          />
        </ShaderGradientCanvas>
      </div>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
