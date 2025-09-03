import axios from "axios";
import { useState, useEffect, useContext } from "react";
import styles from "./Coaches.module.css";
import DataContext from "../../DataContext/DataContext";
import { useNavigate } from "react-router-dom";

export default function Coaches() {
  const navigate = useNavigate();
  const { data } = useContext(DataContext);
  const [user_data, setUser_data] = useState([]);
  const [menu_selection, setMenu_selection] = useState(0);

  const get_all_coaches = () => {
    axios
      .post(data.url + "/coach/get-all-coaches", {}, { withCredentials: true })
      .then((res) => {
        if (res.data.res === true) {
          setUser_data(res.data.supply);
        } else if (res.data.alert) {
          alert(res.data.alert);
        }
      })
      .catch(() => alert("Something went wrong, please login again"));
  };

  const get_all_unverified_coaches = () => {
    axios
      .post(
        data.url + "/coach/get-all-unverified-coaches",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.res === true) {
          setUser_data(res.data.supply);
        } else if (res.data.alert) {
          alert(res.data.alert);
        }
      })
      .catch(() => alert("Something went wrong, please login again"));
  };

  const get_all_half_verified_coaches = () => {
    axios
      .post(
        data.url + "/coach/get-all-half-verified-coaches",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.res === true) {
          setUser_data(res.data.supply);
        } else if (res.data.alert) {
          alert(res.data.alert);
        }
      })
      .catch(() => alert("Something went wrong, please login again"));
  };

  return (
    <>
      <div>
        {/* Menu options for selecting coach type */}
        <button
          onClick={() => {
            setMenu_selection("1");
            setUser_data([]);
            get_all_coaches();
          }}
        >
          Verified Coaches
        </button>
        <button
          onClick={() => {
            setMenu_selection("2");
            setUser_data([]);
            get_all_unverified_coaches();
          }}
        >
          Unverified Coaches
        </button>
        <button
          onClick={() => {
            setMenu_selection("3");
            setUser_data([]);
            get_all_half_verified_coaches();
          }}
        >
          Half Verified Coaches
        </button>
      </div>

      {/* List of coaches */}
      {user_data.map((indi_user) => (
        <div key={indi_user.id}>
          <div>{indi_user.name}</div>
          <div>{indi_user.email}</div>
          <div>{indi_user.contact}</div>
          <button
            onClick={() => navigate("./coach-profile?id=" + indi_user.id)}
          >
            Go to profile
          </button>
        </div>
      ))}
      {user_data.length === 0 && <div>No coaches to show</div>}
    </>
  );
}
