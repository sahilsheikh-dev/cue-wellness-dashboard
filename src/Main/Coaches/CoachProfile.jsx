import { useEffect, useContext, useState } from "react";
import styles from "./CoachProfile.module.css";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import DataContext from "../../DataContext/DataContext";
import axios from "axios";

export default function CoachesProfile() {
  const { data } = useContext(DataContext);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [information, setInformation] = useState({});

  useEffect(() => {
    axios
      .post(
        data.url + "/coach/get-indi-coach",
        { id: id },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.alert) {
          alert(res.data.alert);
        } else if (res.data.redirect) {
          // handle redirect if needed
        } else {
          setInformation(res.data.supply);
        }
      })
      .catch((err) => console.log(err));
  }, [id, data.url]);

  // Verification function example
  const verify = () => {
    const endpoint =
      information.verified === false
        ? "/coach/verify-coach"
        : information.verified === "half"
        ? "/coach/verify-coach-final"
        : null;

    if (!endpoint) return;

    axios
      .post(data.url + endpoint, { id }, { withCredentials: true })
      .then((res) => {
        if (res.data.alert) {
          alert(res.data.alert);
        } else {
          // Refresh details after verification
          axios
            .post(
              data.url + "/coach/get-indi-coach",
              { id },
              { withCredentials: true }
            )
            .then((res) => {
              if (res.data.alert) alert(res.data.alert);
              else setInformation(res.data.supply);
            });
        }
      });
  };

  return (
    <div>
      <h1>{information.name}</h1>
      <p>Email: {information.email}</p>
      <p>Mobile: {information.mobile}</p>
      <p>Verified: {information.verified ? "Yes" : "No"}</p>
      {information.verified === false && (
        <button onClick={verify}>Verify</button>
      )}
      {/* Render more details and sections as per the full code */}
    </div>
  );
}
