import { useState } from 'react';
import logo from './logo.svg';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/view/Home';
import './App.css';
import 'antd/dist/antd.css';
function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <div className="index">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
