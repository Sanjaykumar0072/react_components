import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './assets/js/script'
import './App.css'
import './assets/css/style.css'
import Video_playlist from './components/video_playlist'
import Contact_us from './components/contactUs';
import Captcha from './components/captcha';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/playlist' element={<Video_playlist />} />
          <Route path='/contactus' element={<Contact_us />} />
          <Route path='/captcha' element={<Captcha />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
