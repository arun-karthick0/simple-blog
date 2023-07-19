import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/Post";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  // user is logged or not
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  // sign out
  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        //  return to login page after 2 sec
        setTimeout(() => {
          window.location.pathname = "/login";
        }, 2000);
        toast.success("Logout successful");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <Router>
      {/* navbar */}
      <nav>
        <Link to="/"> Home </Link>
        {/* toggle login and logout */}
        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      {/* end of nav bar */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
