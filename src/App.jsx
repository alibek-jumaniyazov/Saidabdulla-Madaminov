import { useState } from 'react'
import TelegramBotForm from './TelegramBotForm.jsx'
import LandingHomePage from './LandingHomePage.jsx'
import YuborishTgPage from './YuborishTgPage.jsx'
import {Routes , Route} from 'react-router-dom'
import LandingHomeSotuvPage from './LandingHomeSotuvPage.jsx'
function App() {

  return (
   <div className="App">
        <Routes>
          <Route path='/' element={< LandingHomePage /> }/>
          {/* <Route path='/sotuv' element={< LandingHomeSotuvPage /> }/>      */}
          <Route path="register" element={< TelegramBotForm />} />
          <Route path="register/tgkanal" element={<YuborishTgPage />} />
        </Routes>
   </div>
  )
}

export default App
