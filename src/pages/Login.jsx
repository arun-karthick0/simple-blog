import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login({ setIsAuth }) {
  let navigate = useNavigate();
  // pop up window
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      //  local Storage
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
      toast.success("login successful");
    });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
