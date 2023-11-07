import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import './assets/js/script'
import './assets/css/style.css'
import Home from './components/home';
import Video_playlist from './components/video_playlist'
import Contact_us from './components/contactUs';
import Captcha from './components/captcha';
import NavMenu from './components/navmenu';
import ReactTabs from './components/react-tab/index';
import EmailSignature from './components/emailSignature';
import InfinitySlider from './components/infinity-slider';
import Carousal from './components/carousal';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/playlist' element={<Video_playlist />} />
          <Route path='/contact' element={<Contact_us />} />
          <Route path='/captcha' element={<Captcha />} />
          <Route path='/navmenu' element={<NavMenu />} />
          <Route path='/tabs' element={<ReactTabs />} />
          <Route path='/emailsignature' element={<EmailSignature />} />
          <Route path='/infinityslider' element={<InfinitySlider />} />
          <Route path='/carousal' element={<Carousal />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
