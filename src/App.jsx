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
import MultiSelectWithSearch from './components/dropdowns/multiselectWithSearch';
import DropdownParent from './components/dropdowns/singleSelectParent';
import Cookies from './components/react_Cookie';
import Cursor from './components/cursor';
import Sidebar from './components/sidebar/Sidebar';
import Parallax from './components/parallax';
import Contact from './components/contactWithAnimation';
import SignIn_Up_Page from './components/signInAndUpPage';

function App() {
  return (
    <>
      <Router>
      <Cursor />
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
          <Route path='/dropdown' element={<DropdownParent />} />
          <Route path='/multiselectwithsearch' element={<MultiSelectWithSearch />} />
          <Route path='/cookie' element={<Cookies />} />
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/parallax' element={<Parallax />} />
          <Route path='/contactwithanim' element={<Contact />} />
          <Route path='/signin' element={<SignIn_Up_Page />} />
          <Route path='/signup' element={<SignIn_Up_Page />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;