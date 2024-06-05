import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cusnavbar from './components/Cusnavbar.js';
import Home from './components/Home.js'; 
import ANM from './components/ANM.js';
import LTMT from './components/LTMT.js';
import TKĐH from './components/TKĐH.js';
import AWS from './components/AWS.js';
import CEH from './components/CEH.js';
import Register from './components/Register';
import Footer from './components/Footer.js';
import NotFound from './components/NotFound.js';
import Blog from './components/Blog.js';
import BlogPost from './components/BlogPost.js';
import BlogPost1 from './components/BlogPost1.js';
import BlogPost2 from './components/BlogPost2.js';
import BlogPost3 from './components/BlogPost3.js';

function App() {
  return (
    <Router>
      <Cusnavbar />
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/anm" element={<ANM />} />
          <Route path="/ltmt" element={<LTMT />} />
          <Route path="/tkdh" element={<TKĐH />} />
          <Route path="/aws" element={<AWS />} />
          <Route path="/ceh" element={<CEH />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogpost' element={<BlogPost />} />
          <Route path='/blogpost1' element={<BlogPost1 />} />
          <Route path='/blogpost2' element={<BlogPost2 />} />
          <Route path='/blogpost3' element={<BlogPost3 />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
