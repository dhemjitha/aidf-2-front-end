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
import { store } from './lib/store';
import { Provider } from 'react-redux';
import CreateHotelPage from './pages/create-hotel.page';
import { ClerkProvider } from '@clerk/clerk-react'
import AccountPage from './pages/account-page';
import ProtectedLayout from './layouts/protected-layout.layoout';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={{
      layout: {
        unsafe_disableDevelopmentModeWarnings: true,
      },
    }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<RootLayout />}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/hotels/:id" element={<HotelPage />} />
                <Route path="/hotels" element={<HotelsPage />} />
                <Route element={<ProtectedLayout />}>
                  <Route path="/hotels/create" element={<CreateHotelPage />} />
                  <Route path="/account" element={<AccountPage />} />
                </Route>
              </Route>
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ClerkProvider>
  </StrictMode>,
)
