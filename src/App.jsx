/* eslint-disable no-unused-vars */
import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Student from "./pages/HomePages/Student";
import TeachingFellow from "./pages/HomePages/TeachingFellow";
import User from "./pages/User";

function App() {
  //get user from firebase config
  // const currentUser = useAuth();

  // Determine if the user is authenticated
  // const isAuthenticated = !!currentUser;

  // Determine if the user is logged out
  // const isLoggedOut = currentUser === null;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="/" element={<User />} />
        <Route exact path="signup" element={<SignUp />} />
        <Route exact path="students" element={<Student />} />
        <Route exact path="teaching-fellow" element={<TeachingFellow />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
