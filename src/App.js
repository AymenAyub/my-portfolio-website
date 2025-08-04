import React from 'react';
import {HomePage} from './pages/HomePage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound.jsx';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Check } from "lucide-react";


function App() {
  return (
    <>
  <ToastContainer  position="bottom-right"
  autoClose={3000}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  toastClassName="!bg-background !text-foreground !rounded-xl !shadow-lg !border !border-border"
  bodyClassName="text-sm font-medium"
  progressClassName="!bg-primary"
  icon={({ type }) =>
    type === "success" ? (
      <span className="text-primary text-lg"><Check/></span>
    ) : null
  } />
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={< NotFound/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
 
}

export default App;
