import axios from "axios";
import { useState, useEffect, useContext } from "react";
import styles from "./Users.module.css";
import DataContext from "../../DataContext/DataContext";
import { useNavigate } from "react-router-dom";
export default function Users() {
  const { data } = useContext(DataContext);
  const [user_data, setUser_data] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(data.url);
    axios
      .post(
        data.url + "/admin/users/get-all-users",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.res == true) {
          console.log(res.data.supply);
          setUser_data(res.data.supply);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        }
      })
      .catch((err) => {
        alert("Something went wrong, please login again to comtinue");
      });
  }, []);
  return (
    <>
      <div className={styles.search_section}>
        <div className={styles.title_section}>Users</div>
        <div className={styles.ss_bellow}>
          <div className={styles.search_area}>
            <div className={styles.search_svg_section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.search_svg}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    opacity="0.4"
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    fill="#1e3f8e"
                  ></path>{" "}
                  <path
                    d="M21.3005 22.0001C21.1205 22.0001 20.9405 21.9301 20.8105 21.8001L18.9505 19.9401C18.6805 19.6701 18.6805 19.2301 18.9505 18.9501C19.2205 18.6801 19.6605 18.6801 19.9405 18.9501L21.8005 20.8101C22.0705 21.0801 22.0705 21.5201 21.8005 21.8001C21.6605 21.9301 21.4805 22.0001 21.3005 22.0001Z"
                    fill="#1e3f8e"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className={styles.search_input_section}>
              <input
                type="search"
                className={styles.search_input}
                placeholder="Search for something"
              />
            </div>
          </div>
          <div className={styles.filter_area}>
            <div className={styles.filter_main_section}>
              <div className={styles.filter_text}>Date</div>
              <div className={styles.filter_svg_section}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.filter_svg}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      opacity="0.4"
                      d="M20.5996 4.1001V6.3001C20.5996 7.1001 20.0996 8.1001 19.5996 8.6001L15.2996 12.4001C14.6996 12.9001 14.2996 13.9001 14.2996 14.7001V19.0001C14.2996 19.6001 13.8996 20.4001 13.3996 20.7001L11.9996 21.6001C10.6996 22.4001 8.89961 21.5001 8.89961 19.9001V14.6001C8.89961 13.9001 8.49961 13.0001 8.09961 12.5001L7.09961 11.4501L12.9196 2.1001H18.5996C19.6996 2.1001 20.5996 3.0001 20.5996 4.1001Z"
                      fill="#1e3f8e"
                    ></path>{" "}
                    <path
                      d="M11.3004 2.1001L6.12039 10.4101L4.30039 8.5001C3.80039 8.0001 3.40039 7.1001 3.40039 6.5001V4.2001C3.40039 3.0001 4.30039 2.1001 5.40039 2.1001H11.3004Z"
                      fill="#1e3f8e"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.table_section}>
        {user_data.map((indi_user, index) => {
          return (
            <div
              className={
                index == user_data.length - 1
                  ? styles.table_row_last
                  : styles.table_row
              }
            >
              <div className={styles.img_section}>
                <img alt="" className={styles.profile_img} />
              </div>
              <div className={styles.name_section}>
                <div className={styles.profile_name}>{indi_user.name}</div>
                <div className={styles.profile_line}></div>
                <div className={styles.profile_name}>{indi_user.email}</div>
                <div className={styles.profile_line}></div>
                <div className={styles.profile_name}>{indi_user.contact}</div>
              </div>
              <div className={styles.go_to_profile_section_btn}>
                <div
                  className={styles.gtpb}
                  onClick={() => {
                    // window.location.href = `/users-profile?id=${user_data.id}`;
                    // navigate(`./users-profile?id=${indi_user.id}`);
                    navigate(`./users?id=${indi_user.id}`);
                  }}
                >
                  Go to profile
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.main_empty_section}></div>
    </>
  );
}
