import { useState } from 'react'
import SignUp from "./SignUp.jsx";
import './index.css'
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Login from "./Login.jsx";
import Home from "./Home.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/register' element={<SignUp/>}> </Route>
                    <Route path='/login' element={<Login/>}> </Route>
                    <Route path='/home' element={<Home/>}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App
