import styles from "./Shop.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../DataContext/DataContext";
import axios from "axios";
export default function Shop() {
  const [menu_selection, setMenu_selection] = useState("");
  const [ad_data, setAd_data] = useState([]);
  const { data } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(
        data.url + "/admin/shop/get-all-shops",
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
        alert("Something went wrong, please login again to comtinue");
      });
  }, []);
  return (
    <>
      <div className={styles.important_info_section}>
        <div className={styles.profile_img_section}>
          <img
            src={require("./shop.png")}
            alt=""
            className={styles.profile_img}
          />
        </div>
        <div className={styles.profile_info}>
          <div className={styles.profile_name_pp}>Retail</div>
        </div>
        <div className={styles.profile_goto_chat_section}>
          {/* <div className={styles.profile_goto_chat_btn}>Go to chat</div> */}
        </div>
      </div>

      <div className={styles.all_main_options_ud}>
        {/* <div
          className={styles.main_indi_options}
          onClick={() => {
            // setShow_guidelines(false);
          }}
        >
          <div className={styles.upper_line_mio_ud}></div>
          <div className={styles.mio_left_ud}>
            <div className={styles.mio_ud_svg_section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className={styles.mio_ud_left_svg}
                xmlns="http://www.w3.org/2000/svg"
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
                    opacity="0.5"
                    d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"
                    fill="#1C274C"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                  <path
                    d="M12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75Z"
                    fill="#1C274C"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                  <path
                    d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                    fill="#1C274C"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
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
        </div> */}

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
            <div className={styles.mio_main_name_ud}>All Shops</div>
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

        {/* <div
              className={styles.main_indi_options}
              onClick={() => {
                setUploading(true);
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 15.75C12.4142 15.75 12.75 15.4142 12.75 15V4.02744L14.4306 5.98809C14.7001 6.30259 15.1736 6.33901 15.4881 6.06944C15.8026 5.79988 15.839 5.3264 15.5694 5.01191L12.5694 1.51191C12.427 1.34567 12.2189 1.25 12 1.25C11.7811 1.25 11.573 1.34567 11.4306 1.51191L8.43056 5.01191C8.16099 5.3264 8.19741 5.79988 8.51191 6.06944C8.8264 6.33901 9.29988 6.30259 9.56944 5.98809L11.25 4.02744L11.25 15C11.25 15.4142 11.5858 15.75 12 15.75Z"
                        fill="#1C274C"
                        // opacity="0.5"
                        className={styles.hover_fill_mio}
                      ></path>{" "}
                      <path
                        d="M16 9C15.2978 9 14.9467 9 14.6945 9.16851C14.5853 9.24148 14.4915 9.33525 14.4186 9.44446C14.25 9.69667 14.25 10.0478 14.25 10.75L14.25 15C14.25 16.2426 13.2427 17.25 12 17.25C10.7574 17.25 9.75004 16.2426 9.75004 15L9.75004 10.75C9.75004 10.0478 9.75004 9.69664 9.58149 9.4444C9.50854 9.33523 9.41481 9.2415 9.30564 9.16855C9.05341 9 8.70227 9 8 9C5.17157 9 3.75736 9 2.87868 9.87868C2 10.7574 2 12.1714 2 14.9998V15.9998C2 18.8282 2 20.2424 2.87868 21.1211C3.75736 21.9998 5.17157 21.9998 8 21.9998H16C18.8284 21.9998 20.2426 21.9998 21.1213 21.1211C22 20.2424 22 18.8282 22 15.9998V14.9998C22 12.1714 22 10.7574 21.1213 9.87868C20.2426 9 18.8284 9 16 9Z"
                        fill="#1C274C"
                        opacity="0.5"
                        className={styles.hover_fill_mio}
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div className={styles.mio_main_name_ud}>Upload</div>
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
            </div> */}
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
                      navigate("./shop-profile?id=" + indi_user._id);
                    }}
                  >
                    Go to profile
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
