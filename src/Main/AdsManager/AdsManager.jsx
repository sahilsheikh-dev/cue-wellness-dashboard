import styles from "./AdsManager.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../DataContext/DataContext";
import axios from "axios";
export default function AdsManager() {
  const [menu_selection, setMenu_selection] = useState("");
  const [ad_data, setAd_data] = useState([]);
  const [event_data, setEvent_data] = useState([]);
  const { data } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(
        data.url + "/admin/ad/get-all-ads",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.res == true) {
          console.log(res.data);
          setAd_data(res.data.supply);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong, please login again to continue");
      });
  }, []);

  useEffect(() => {
    axios
      .post(
        data.url + "/admin/ad/get-all-events",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.res == true) {
          console.log(res.data);
          setEvent_data(res.data.supply);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong, please login again to continue");
      });
  }, []);
  return (
    <>
      <div className={styles.important_info_section}>
        <div className={styles.profile_img_section}>
          <img
            src={require("./adsmanager.png")}
            alt=""
            className={styles.profile_img}
          />
        </div>
        <div className={styles.profile_info}>
          <div className={styles.profile_name_pp}>Ads Manager</div>
        </div>
        <div className={styles.profile_goto_chat_section}>
          {/* <div className={styles.profile_goto_chat_btn}>Go to chat</div> */}
        </div>
      </div>

      <div className={styles.all_main_options_ud}>
        <div
          className={styles.main_indi_options}
          onClick={() => {
            // setShow_guidelines(true);
            setMenu_selection("1");
          }}
        >
          <div className={styles.upper_line_mio_ud}></div>
          <div className={styles.mio_left_ud}>
            <div className={styles.mio_ud_svg_section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.mio_ud_left_svg}
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
                    d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={styles.hover_stroke_mio}
                  ></path>{" "}
                  <path
                    d="M12 12H15"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={styles.hover_stroke_mio}
                  ></path>{" "}
                  <path
                    d="M12 16H15"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={styles.hover_stroke_mio}
                  ></path>{" "}
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={styles.hover_stroke_mio}
                  ></path>{" "}
                  <circle cx="9" cy="12" r="1" fill="#000000"></circle>{" "}
                  <circle cx="9" cy="16" r="1" fill="#000000"></circle>{" "}
                </g>
              </svg>
            </div>
            <div className={styles.mio_main_name_ud}>All Ads Manager</div>
          </div>
          <div className={styles.mio_right_svg_section}>
            <svg
              fill="#000000"
              version="1.1"
              viewBox="0 0 512 512"
              className={`${styles.main_indi_option_svg} ${styles.hover_fill_mio}`}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M388.418,240.915L153.752,6.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L343.163,256 L123.582,475.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l234.667-234.667 C396.749,262.754,396.749,249.246,388.418,240.915z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div
          className={styles.main_indi_options}
          onClick={() => {
            // setShow_guidelines(true);
            setMenu_selection("2");
          }}
        >
          <div className={styles.upper_line_mio_ud}></div>
          <div className={styles.mio_left_ud}>
            <div className={styles.mio_ud_svg_section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.mio_ud_left_svg}
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
                    d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={styles.hover_stroke_mio}
                  ></path>{" "}
                  <path
                    d="M12 12H15"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={styles.hover_stroke_mio}
                  ></path>{" "}
                  <path
                    d="M12 16H15"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={styles.hover_stroke_mio}
                  ></path>{" "}
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={styles.hover_stroke_mio}
                  ></path>{" "}
                  <circle cx="9" cy="12" r="1" fill="#000000"></circle>{" "}
                  <circle cx="9" cy="16" r="1" fill="#000000"></circle>{" "}
                </g>
              </svg>
            </div>
            <div className={styles.mio_main_name_ud}>All Events</div>
          </div>
          <div className={styles.mio_right_svg_section}>
            <svg
              fill="#000000"
              version="1.1"
              viewBox="0 0 512 512"
              className={`${styles.main_indi_option_svg} ${styles.hover_fill_mio}`}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M388.418,240.915L153.752,6.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L343.163,256 L123.582,475.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l234.667-234.667 C396.749,262.754,396.749,249.246,388.418,240.915z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>

      {menu_selection == "1" ? (
        <div className={styles.table_section}>
          {ad_data.map((indi_user, index) => {
            return (
              <div
                className={
                  index == ad_data.length - 1
                    ? styles.table_row_last
                    : styles.table_row
                }
              >
                <div className={styles.name_section}>
                  <div className={styles.profile_name}>{indi_user.id}</div>
                  <div className={styles.profile_line}></div>
                  <div className={styles.profile_name}>{indi_user.name}</div>
                  <div className={styles.profile_line}></div>
                  <div className={styles.profile_name}>{indi_user.contact}</div>
                  <div className={styles.profile_line}></div>
                  <div className={styles.profile_name}>
                    {indi_user.verified == true ? "Verified" : "Unverified"}
                  </div>
                </div>
                <div className={styles.go_to_profile_section_btn}>
                  <div
                    className={styles.gtpb}
                    onClick={() => {
                      navigate("./ad-profile?id=" + indi_user._id);
                    }}
                  >
                    Go to profile
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : menu_selection == "2" ? (
        <div className={styles.table_section}>
          {event_data.map((indi_user, index) => {
            return (
              <div
                className={
                  index == event_data.length - 1
                    ? styles.table_row_last
                    : styles.table_row
                }
              >
                <div className={styles.name_section}>
                  <div className={styles.profile_name}>{indi_user.id}</div>
                  <div className={styles.profile_line}></div>
                  <div className={styles.profile_name}>{indi_user.name}</div>
                  <div className={styles.profile_line}></div>
                  <div className={styles.profile_name}>
                    {indi_user.verified == true ? "Verified" : "Unverified"}
                  </div>
                </div>
                <div className={styles.go_to_profile_section_btn}>
                  <div
                    className={styles.gtpb}
                    onClick={() => {
                      navigate("./event-profile?id=" + indi_user._id);
                    }}
                  >
                    Go to details
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
