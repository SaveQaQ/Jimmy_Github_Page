import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import MainPage from "./MainPage/MainPage";

function App() {
  return (
      <div className="app.css">
           <Routes>
               <Route path='/Jimmy_Github_Page' element={<MainPage/>}/>
            </Routes>
      </div>
   );
}

export default App;
