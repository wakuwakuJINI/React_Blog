import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import ProfileBox from './assets/components/ProfileBox'
import Sidebar from './assets/components/Sidebar'
import MainContent from './assets/components/MainContent'



function App() {  
  const[activeContent,setActiveContent]=useState('todo')
  return <>
    <Header/>
    <div className="layout">
      <div className="sidebar-container">
        <ProfileBox/>
        <Sidebar setActiveContent={setActiveContent}/>
        
      </div>
      <MainContent activeContent={activeContent}/>
    </div>
    <Footer/>
  </>
}

export default App;
