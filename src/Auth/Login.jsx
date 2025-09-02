import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import DataContext from "../DataContext/DataContext";
import { useContext } from "react";
export default function Login() {
  const navigate = useNavigate();
  const userName = useRef(null);
  const password = useRef(null);
  const { login, data } = useContext(DataContext);
  const try_login = () => {
    console.log(userName.current.value);
    console.log(password.current.value);
    axios
      .post(
        data.url + "/admin/auth/login",
        {
          mobile: userName.current.value,
          password: password.current.value,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.res == true) {
          console.log("hey");
          navigate("/dashboard");
          login(res.data.supply.token);
        } else {
          alert(res.data.alert);
        }
      });
  };
  return (
    <main className="main">
      <header className="header">Cue Wellness</header>
      <div className="login_form">
        <div className="form">
          <div className="indi_input_outer">
            <input
              type="text"
              className="indi_input"
              placeholder="Mobile Number"
              ref={userName}
            />
          </div>
          <div className="indi_input_outer">
            <input
              type="password"
              className="indi_input"
              placeholder="Password"
              ref={password}
            />
          </div>
          <button className="btn" onClick={try_login}>
            Log in
          </button>
          <Link className="fp">Forgot password?</Link>
        </div>
      </div>
    </main>
  );
}
