import { useState } from 'react'
import './App.css'
import './Components/Header.css'
import './Components/APackages.css'
import './Components/Action.css'
import './Components/Testimonials.css'
import './Components/ApproachablePackages.css'
import Header from './Components/Header'
import APackages from './Components/APackages'
import  ApproachablePackages from './Components/ApproachablePackages'
import LiveAction from './Components/LiveAction'
import Testimonials from './Components/Testimonials'
import SubscribeField from './Components/SubscribeField'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
     
      </div>
      < Header/>
      <APackages/>
    <LiveAction/>
    <ApproachablePackages/>
    < Testimonials/>
    < SubscribeField/>
   < form/>
    </>
  )
}

export default App
