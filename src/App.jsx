import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Create from './pages/Create';
import Error404 from './pages/Error404';
import Blog from './pages/Blog';
import BlogSection from './components/BlogSection/BlogSection';
import Videos from './pages/Videos';
import Guidelines from './pages/Guidelines';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={
      <div className="flex flex-col mx-auto  overflow-hidden">
      <Navbar />
      <HomeScreen />
      <div className="w-screen mx-auto">
      <BlogSection/>
      <Footer />
      </div>
    </div>
      } />
      <Route path='/Create' element={ <Create /> } />
      <Route path='/blog' element={ <Blog /> }/>
      <Route path='/videos' element={<Videos/>} />
      <Route path='/guidelines' element={<Guidelines/>} />
      <Route path='*' element={ <Error404 />} />
          </Routes>
  );
}


export default App