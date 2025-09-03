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
      <div className={styles.search_section}>
        <div className={styles.title_section}>Coaches</div>
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

      <div className={styles.all_main_options_ud}>
        <div
          className={styles.main_indi_options}
          onClick={() => {
            // setShow_guidelines(true);
            setMenu_selection("1");
            setUser_data([]);
            get_all_coaches();
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
                    opacity="0.4"
                    d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
                    fill="#292D32"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                  <path
                    d="M14.0809 14.1499C11.2909 12.2899 6.74094 12.2899 3.93094 14.1499C2.66094 14.9999 1.96094 16.1499 1.96094 17.3799C1.96094 18.6099 2.66094 19.7499 3.92094 20.5899C5.32094 21.5299 7.16094 21.9999 9.00094 21.9999C10.8409 21.9999 12.6809 21.5299 14.0809 20.5899C15.3409 19.7399 16.0409 18.5999 16.0409 17.3599C16.0309 16.1299 15.3409 14.9899 14.0809 14.1499Z"
                    fill="#292D32"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                  <path
                    opacity="0.4"
                    d="M19.9894 7.3401C20.1494 9.2801 18.7694 10.9801 16.8594 11.2101C16.8494 11.2101 16.8494 11.2101 16.8394 11.2101H16.8094C16.7494 11.2101 16.6894 11.2101 16.6394 11.2301C15.6694 11.2801 14.7794 10.9701 14.1094 10.4001C15.1394 9.4801 15.7294 8.1001 15.6094 6.6001C15.5394 5.7901 15.2594 5.0501 14.8394 4.4201C15.2194 4.2301 15.6594 4.1101 16.1094 4.0701C18.0694 3.9001 19.8194 5.3601 19.9894 7.3401Z"
                    className={styles.hover_fill_mio}
                    fill="#292D32"
                  ></path>{" "}
                  <path
                    d="M21.9902 16.5899C21.9102 17.5599 21.2902 18.3999 20.2502 18.9699C19.2502 19.5199 17.9902 19.7799 16.7402 19.7499C17.4602 19.0999 17.8802 18.2899 17.9602 17.4299C18.0602 16.1899 17.4702 14.9999 16.2902 14.0499C15.6202 13.5199 14.8402 13.0999 13.9902 12.7899C16.2002 12.1499 18.9802 12.5799 20.6902 13.9599C21.6102 14.6999 22.0802 15.6299 21.9902 16.5899Z"
                    fill="#292D32"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className={styles.mio_main_name_ud}>Verified Coaches</div>
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
            setUser_data([]);
            get_all_unverified_coaches();
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
                    opacity="0.4"
                    d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
                    fill="#292D32"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                  <path
                    d="M14.0809 14.1499C11.2909 12.2899 6.74094 12.2899 3.93094 14.1499C2.66094 14.9999 1.96094 16.1499 1.96094 17.3799C1.96094 18.6099 2.66094 19.7499 3.92094 20.5899C5.32094 21.5299 7.16094 21.9999 9.00094 21.9999C10.8409 21.9999 12.6809 21.5299 14.0809 20.5899C15.3409 19.7399 16.0409 18.5999 16.0409 17.3599C16.0309 16.1299 15.3409 14.9899 14.0809 14.1499Z"
                    fill="#292D32"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                  <path
                    opacity="0.4"
                    d="M19.9894 7.3401C20.1494 9.2801 18.7694 10.9801 16.8594 11.2101C16.8494 11.2101 16.8494 11.2101 16.8394 11.2101H16.8094C16.7494 11.2101 16.6894 11.2101 16.6394 11.2301C15.6694 11.2801 14.7794 10.9701 14.1094 10.4001C15.1394 9.4801 15.7294 8.1001 15.6094 6.6001C15.5394 5.7901 15.2594 5.0501 14.8394 4.4201C15.2194 4.2301 15.6594 4.1101 16.1094 4.0701C18.0694 3.9001 19.8194 5.3601 19.9894 7.3401Z"
                    className={styles.hover_fill_mio}
                    fill="#292D32"
                  ></path>{" "}
                  <path
                    d="M21.9902 16.5899C21.9102 17.5599 21.2902 18.3999 20.2502 18.9699C19.2502 19.5199 17.9902 19.7799 16.7402 19.7499C17.4602 19.0999 17.8802 18.2899 17.9602 17.4299C18.0602 16.1899 17.4702 14.9999 16.2902 14.0499C15.6202 13.5199 14.8402 13.0999 13.9902 12.7899C16.2002 12.1499 18.9802 12.5799 20.6902 13.9599C21.6102 14.6999 22.0802 15.6299 21.9902 16.5899Z"
                    fill="#292D32"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className={styles.mio_main_name_ud}>Unverified Coaches</div>
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
            setMenu_selection("3");
            setUser_data([]);
            get_all_half_verified_coaches();
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
                    opacity="0.4"
                    d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
                    fill="#292D32"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                  <path
                    d="M14.0809 14.1499C11.2909 12.2899 6.74094 12.2899 3.93094 14.1499C2.66094 14.9999 1.96094 16.1499 1.96094 17.3799C1.96094 18.6099 2.66094 19.7499 3.92094 20.5899C5.32094 21.5299 7.16094 21.9999 9.00094 21.9999C10.8409 21.9999 12.6809 21.5299 14.0809 20.5899C15.3409 19.7399 16.0409 18.5999 16.0409 17.3599C16.0309 16.1299 15.3409 14.9899 14.0809 14.1499Z"
                    fill="#292D32"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                  <path
                    opacity="0.4"
                    d="M19.9894 7.3401C20.1494 9.2801 18.7694 10.9801 16.8594 11.2101C16.8494 11.2101 16.8494 11.2101 16.8394 11.2101H16.8094C16.7494 11.2101 16.6894 11.2101 16.6394 11.2301C15.6694 11.2801 14.7794 10.9701 14.1094 10.4001C15.1394 9.4801 15.7294 8.1001 15.6094 6.6001C15.5394 5.7901 15.2594 5.0501 14.8394 4.4201C15.2194 4.2301 15.6594 4.1101 16.1094 4.0701C18.0694 3.9001 19.8194 5.3601 19.9894 7.3401Z"
                    className={styles.hover_fill_mio}
                    fill="#292D32"
                  ></path>{" "}
                  <path
                    d="M21.9902 16.5899C21.9102 17.5599 21.2902 18.3999 20.2502 18.9699C19.2502 19.5199 17.9902 19.7799 16.7402 19.7499C17.4602 19.0999 17.8802 18.2899 17.9602 17.4299C18.0602 16.1899 17.4702 14.9999 16.2902 14.0499C15.6202 13.5199 14.8402 13.0999 13.9902 12.7899C16.2002 12.1499 18.9802 12.5799 20.6902 13.9599C21.6102 14.6999 22.0802 15.6299 21.9902 16.5899Z"
                    fill="#292D32"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className={styles.mio_main_name_ud}>Half Verified Coaches</div>
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
                      navigate("./coach-profile?id=" + indi_user.id);
                    }}
                  >
                    Go to profile
                  </div>
                </div>
              </div>
            );
          })}

          {user_data.length == 0 ? <div>No coaches to show</div> : null}
        </div>
      ) : null}

      {menu_selection == "2" ? (
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
                      navigate("./coach-profile?id=" + indi_user.id);
                    }}
                  >
                    Go to profile
                  </div>
                </div>
              </div>
            );
          })}

          {user_data.length == 0 ? <div>No coaches to show</div> : null}
        </div>
      ) : null}

      {menu_selection == "3" ? (
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
                      navigate("./coach-profile?id=" + indi_user.id);
                    }}
                  >
                    Go to profile
                  </div>
                </div>
              </div>
            );
          })}

          {user_data.length == 0 ? <div>No coaches to show</div> : null}
        </div>
      ) : null}

      <div className={styles.main_empty_section}></div>
    </>
  );
}
