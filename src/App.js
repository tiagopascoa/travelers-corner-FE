import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
//Tools
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import NavMobile from "./components/NavMobile";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import SignUpForm1 from "./components/SignupForm/SignupForm1";
import SignUpForm2 from "./components/SignupForm/SignupForm2";
import ForgotPasswordPage from "./pages/ForgotPassword";
import TravelersFeed from "./pages/Feed";
import MyProfilePage from "./pages/MyProfile";
import RequireAuth from "./components/RequireAuth";
import ResetPasswordPage from "./pages/ResetPassword";
import UserProfile from "./pages/UserProfile";
import TravelPostPage from "./pages/TravelPost";

//Hooks
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
  const [mobileNavisOpen, setMobileNavisOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavisOpen(!mobileNavisOpen);
  };
  return (
    <>
      <Router>
        <NavMobile isOpen={mobileNavisOpen} toggle={toggleMobileNav} />
        <Navbar toggle={toggleMobileNav} />
        <Routes>
          <Route
            path="/"
            element={!user ? <LandingPage /> : <Navigate to="/feed" />}
          />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/feed" />}
          />
          <Route
            path="/signup-step1"
            element={
              !user ? (
                <SignUpPage signupFormStep={<SignUpForm1 />} />
              ) : (
                <Navigate to="/feed" />
              )
            }
          />
          <Route
            path="/signup-step2"
            element={
              !user ? (
                <SignUpPage signupFormStep={<SignUpForm2 />} />
              ) : (
                <Navigate to="/feed" />
              )
            }
          />
          <Route
            path="/forgot-password"
            element={!user ? <ForgotPasswordPage /> : <Navigate to="/feed" />}
          />
          <Route
            path="/reset-password/:resetPasstoken"
            element={!user ? <ResetPasswordPage /> : <Navigate to="/feed" />}
          />
          <Route
            path="/feed"
            element={
              <RequireAuth>
                <TravelersFeed />
              </RequireAuth>
            }
          />
          <Route
            path="/travel-post/:postId"
            element={
              <RequireAuth>
                <TravelPostPage />
              </RequireAuth>
            }
          />
          <Route
            path="/my-profile"
            element={
              <RequireAuth>
                <MyProfilePage />
              </RequireAuth>
            }
          />
          <Route
            path="/user-profile/:userId"
            element={
              <RequireAuth>
                <UserProfile />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
