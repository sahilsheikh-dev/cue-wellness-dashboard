import DataContext from "./DataContext/DataContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, BrowserRouter as Router } from "react-router-dom";

// importing the global css here
import "./Global/Global.css";

// importing the files here
import Main from "./Main/Main";
import Auth from "./Auth/Auth";

function MainApp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    auth: false,
    // url: "http://127.0.0.1:9000",
    // url: "http://97.74.83.27:9000",
    url: "https://backend.cuewellness.net",
    authToken: undefined,
  });

  const login = (auth_token) => {
    let new_data = { ...data };
    new_data.auth = true;
    new_data.authToken = auth_token;
    setData(new_data);
    console.log(auth_token);
  };

  const logout = () => {
    let new_data = { ...data };
    new_data.auth = false;
    new_data.authToken = undefined;
    setData(new_data);
  };

  // check for cookies
  useEffect(() => {
    axios
      .post(
        data.url + "/admin/auth/check-cookie",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.res == false) {
          setData({ ...data, auth: false });
          // navigate("/login");
          let location = window.location.href;
          if (location.split("/")[location.split("/").length - 1] == "login") {
          } else {
            navigate("/login");
          }
        } else {
          setData({ ...data, auth: true });
          navigate("/dashboard");
        }
      });
  }, []);
  return (
    // <Router>
    <DataContext.Provider
      value={{
        login,
        logout,
        data,
      }}
    >
      {data.auth ? <Main /> : <Auth />}
    </DataContext.Provider>
    // </Router>
  );
}

export default MainApp;
