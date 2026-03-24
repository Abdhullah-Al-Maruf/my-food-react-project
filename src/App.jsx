
import './App.css'
import Banner from './component/Banner/Banner'
import ToggleButtons from './component/BtnToogle/ToggleBtn'
import Footer from './component/Footer/Footer'
import Menus from './component/Menus/Menus'
import Navbar from './component/Nav/Navbar'
import { useState } from 'react'

function App() {

  const [searchText, setSearchText] = useState("")
  return (
    <>
<Navbar></Navbar>
<Banner  setSearchText={setSearchText} ></Banner>
<Menus searchText={searchText}></Menus>
<Footer></Footer>

    </>
  )
}

export default App
