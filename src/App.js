
//11dc806d78064f3ea24d14acab8bb877

import React from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() { 
  const apikey = '7e9fb75fcdac458cb73120706d9dfc06';

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<News apikey={apikey} key="General" pagesize={12} country="in" category="General" />} />
          <Route path="/Business" element={<News apikey={apikey} key="Business" pagesize={12} country="in" category="Business" />} />
          <Route path="/Entertainment" element={<News apikey={apikey} key="Entertainment" pagesize={12} country="in" category="Entertainment" />} />
          <Route path="/General" element={<News apikey={apikey} key="" pagesize={12} country="in" category="General" />} />
          <Route path="/Health" element={<News apikey={apikey} key="Health" pagesize={12} country="in" category="Health" />} />
          <Route path="/Science" element={<News apikey={apikey} key="science" pagesize={12} country="in" category="science" />} />
          <Route path="/Sports" element={<News apikey={apikey} key="Sports" pagesize={12} country="in" category="Sports" />} />
          <Route path="/Technology" element={<News apikey={apikey} key="Technology" pagesize={12} country="in" category="Technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
