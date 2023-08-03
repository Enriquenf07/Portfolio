import { useEffect, useState } from 'react'

import NavBar from './components/NavBar'
import NavBtn from './components/NavBtn'
import AboutView from './components/AboutView'
import ProjectsView from './components/ProjectsView'
import ContactView from './components/ContactView'

function App() {
  const [lightMode, setLightMode] = useState(true)
  const [bgColor, setBgColor] = useState('bg-blue-200')
  const [textColor, setTextColor] = useState('text-black')
  const [btnColors, setBtnColors] = useState(['bg-purple-200', '', ''])
  const [view, setView] = useState(0)
  const [count, setCount] = useState(0)
  const [CurrentView, setCurrentView] = useState(<AboutView />)

  useEffect(() => {
    lightMode ? setBgColor('bg-amber-50') : setBgColor('bg-black');
    lightMode ? setTextColor('text-black') : setTextColor('text-white')  
    view == 0 ? setCurrentView(<AboutView />) : null
    view == 1 ? setCurrentView(<ProjectsView />) : null
    view == 2 ? setCurrentView(<ContactView />) : null 
  }, [count])

  const navBtnEvent = (i) => {
    const colors = ['', '', '']
    colors[i] = 'bg-purple-200'
    setBtnColors(colors)
    setCount((prev) => prev + 1)
    setView(i)
    setCurrentView(<></>)
  }



  return (
    <div className={`h-screen w-screen ${bgColor} p-16 flex flex-col gap-4`}>
      <NavBar>
       <NavBtn label="About" event={() => navBtnEvent(0)} color={btnColors[0]}></NavBtn>
       <NavBtn label="Projects" event={() => navBtnEvent(1)} color={btnColors[1]}></NavBtn>
       <NavBtn label="Contact" event={() => navBtnEvent(2)} color={btnColors[2]}></NavBtn>
      </NavBar>
      {CurrentView}
    </div>
  )
}

export default App
