import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './pages/home.page';
import SignInPage from './pages/sign-in.page';
import SignUpPage from './pages/sign-up.page';
import HotelPage from './pages/hotel.page';
import RootLayout from './layouts/root-layout.layout';
import MainLayout from './layouts/main-layout.layout';
import HotelsPage from './pages/hotels.page';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels/:id" element={<HotelPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
