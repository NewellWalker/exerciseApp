import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
 <Route path="/" element={ <Root/> } >
    <Route path="about" element={ <About /> } />
 </Route>
))

function App() {

  return (
    <RouterProvider router={router} />
  );
};

export default App
