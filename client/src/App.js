import { BrowserRouter, Routes, Route } from "react-router-dom"; import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import NotFound from './components/NotFound'
import ViewProperty from './components/ViewProperty'
import AddProperty from './components/AddProperty'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import './App.css';
import SeeProd from "./components/SeeProd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route  path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="viewProperty" element={<ViewProperty />} />
          <Route path="seeProperty/:id" element={<SeeProd />} />
          <Route path="addProperty" element={<AddProperty />} />
          <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App

