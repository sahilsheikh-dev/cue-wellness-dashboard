import styles from "./Admin.module.css";
import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../DataContext/DataContext";
import axios from "axios";
import enu from "../../Essentails/enu";
export default function AdsManager() {
  const [menu_selection, setMenu_selection] = useState("");
  const [ad_data, setAd_data] = useState([]);
  const { data } = useContext(DataContext);
  const navigate = useNavigate();
  const name_ref = useRef(null);
  const email_ref = useRef(null);
  const mobile_ref = useRef(null);
  const password_ref = useRef(null);
  const designation_ref = useRef(null);
  const [permissions, setPermissions] = useState([]);

  const add_admin = () => {
    if (
      enu(
        name_ref.current.value,
        email_ref.current.value,
        mobile_ref.current.value,
        password_ref.current.value,
        designation_ref.current.value
      )
    ) {
      if (permissions.length == 0) {
        alert("Please grant some permissions to the admin");
      } else {
        axios
          .post(
            data.url + "/admin/admins/add-staff",
            {
              name: name_ref.current.value,
              email: email_ref.current.value,
              mobile: mobile_ref.current.value,
              password: password_ref.current.value,
              designation: designation_ref.current.value,
              permissions: permissions,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
            if (res.data.res == true) {
              alert("Admin added successfully");
            } else {
              alert("Something went wrong, please try again");
            }
          });
      }
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <>
      <div className={styles.important_info_section}>
        <div className={styles.profile_img_section}>
          <img
            src={require("./admin.png")}
            alt=""
            className={styles.profile_img}
          />
        </div>
        <div className={styles.profile_info}>
          <div className={styles.profile_name_pp}>Admins</div>
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
            <div className={styles.mio_main_name_ud}>All Admins</div>
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
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                className={styles.mio_ud_left_svg}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    style={{
                      fill: "none",
                      stroke: "#000000",
                      strokeLinecap: "round",
                      strokeWidth: "1.5px",
                      strokelinejoin: "round",
                    }}
                    className={styles.hover_stroke_mio}
                    d="M3,21.016l.78984-2.87249C5.0964,13.3918,8.5482,10.984,12,10.984"
                  ></path>
                  <circle
                    style={{
                      fill: "none",
                      stroke: "#000000",
                      strokeLinecap: "round",
                      strokeWidth: "1.5px",
                      strokeLinejoin: "bevel",
                    }}
                    className={styles.hover_stroke_mio}
                    cx="12"
                    cy="5.98404"
                    r="5"
                  ></circle>
                  <circle
                    style={{
                      fill: "none",
                      stroke: "#000000",
                      strokeLinecap: "round",
                      strokeWidth: "1.5px",
                      strokelinejoin: "round",
                    }}
                    className={styles.hover_stroke_mio}
                    cx="17"
                    cy="18"
                    r="5"
                  ></circle>
                  <line
                    style={{
                      fill: "none",
                      stroke: "#000000",
                      strokeLinecap: "round",
                      strokeWidth: "1.5px",
                      strokelinejoin: "round",
                    }}
                    x1="15"
                    className={styles.hover_stroke_mio}
                    x2="19"
                    y1="18"
                    y2="18"
                  ></line>
                  <line
                    style={{
                      fill: "none",
                      stroke: "#000000",
                      strokeLinecap: "round",
                      strokeWidth: "1.5px",

                      strokelinejoin: "round",
                    }}
                    x1="17"
                    x2="17"
                    className={styles.hover_stroke_mio}
                    y1="16"
                    y2="20"
                  ></line>
                </g>
              </svg>
            </div>
            <div className={styles.mio_main_name_ud}>Add Admins</div>
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

      {menu_selection == "1" ? null : menu_selection == "2" ? (
        <div className={styles.add_admin_section}>
          <div className={styles.guide_line_making_section}>
            <div className={styles.guide_line_title}>Add Admin</div>

            <div className={styles.input_section}>
              <input
                className={styles.input}
                placeholder="Enter name"
                ref={name_ref}
              ></input>
            </div>
            <div className={styles.input_section}>
              <input
                className={styles.input}
                placeholder="Enter email"
                // ref={add_meaning_ref}
                ref={email_ref}
                type="email"
              ></input>
            </div>
            <div className={styles.input_section}>
              <input
                className={styles.input}
                placeholder="Enter mobile"
                type="number"
                // ref={add_meaning_ref}
                ref={mobile_ref}
              ></input>
            </div>
            <div className={styles.input_section}>
              <input
                className={styles.input}
                placeholder="Enter password"
                type="password"
                // ref={add_meaning_ref}
                ref={password_ref}
              ></input>
            </div>
            <div className={styles.input_section}>
              <input
                className={styles.input}
                placeholder="Enter designation"
                // ref={add_meaning_ref}
                ref={designation_ref}
              ></input>
            </div>
            <div className={styles.permission_section_start}>Permissions</div>
            <div className={styles.all_permissions}>
              <div className={styles.indi_permission}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked == true) {
                      let p = [...permissions];
                      p.push("dashboard");
                      setPermissions([...p]);
                    } else {
                      let p = [...permissions];
                      p = p.filter((item) => item !== "dashboard");
                      setPermissions([...p]);
                    }
                  }}
                />
                <span>Dashboard</span>
              </div>
              <div className={styles.indi_permission}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked == true) {
                      let p = [...permissions];
                      p.push("app");
                      setPermissions([...p]);
                    } else {
                      let p = [...permissions];
                      p = p.filter((item) => item !== "app");
                      setPermissions([...p]);
                    }
                  }}
                />
                <span>App</span>
              </div>
              <div className={styles.indi_permission}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked == true) {
                      let p = [...permissions];
                      p.push("users");
                      setPermissions([...p]);
                    } else {
                      let p = [...permissions];
                      p = p.filter((item) => item !== "users");
                      setPermissions([...p]);
                    }
                  }}
                />
                <span>Users</span>
              </div>
              <div className={styles.indi_permission}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked == true) {
                      let p = [...permissions];
                      p.push("coaches");
                      setPermissions([...p]);
                    } else {
                      let p = [...permissions];
                      p = p.filter((item) => item !== "coaches");
                      setPermissions([...p]);
                    }
                  }}
                />
                <span>Coaches</span>
              </div>
              <div className={styles.indi_permission}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked == true) {
                      let p = [...permissions];
                      p.push("admanager");
                      setPermissions([...p]);
                    } else {
                      let p = [...permissions];
                      p = p.filter((item) => item !== "admanager");
                      setPermissions([...p]);
                    }
                  }}
                />
                <span>Ad Manager</span>
              </div>
              <div className={styles.indi_permission}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked == true) {
                      let p = [...permissions];
                      p.push("questionnaire");
                      setPermissions([...p]);
                    } else {
                      let p = [...permissions];
                      p = p.filter((item) => item !== "questionnaire");
                      setPermissions([...p]);
                    }
                  }}
                />
                <span>Questionnaire</span>
              </div>
              <div className={styles.indi_permission}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked == true) {
                      let p = [...permissions];
                      p.push("reflection");
                      setPermissions([...p]);
                    } else {
                      let p = [...permissions];
                      p = p.filter((item) => item !== "reflection");
                      setPermissions([...p]);
                    }
                  }}
                />
                <span>Reflection</span>
              </div>
              <div className={styles.indi_permission}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked == true) {
                      let p = [...permissions];
                      p.push("admins");
                      setPermissions([...p]);
                    } else {
                      let p = [...permissions];
                      p = p.filter((item) => item !== "admins");
                      setPermissions([...p]);
                    }
                  }}
                />
                <span>Admins</span>
              </div>
              <div className={styles.indi_permission}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked == true) {
                      let p = [...permissions];
                      p.push("transaction");
                      setPermissions([...p]);
                    } else {
                      let p = [...permissions];
                      p = p.filter((item) => item !== "transaction");
                      setPermissions([...p]);
                    }
                  }}
                />
                <span>Transactions</span>
              </div>
              <div className={styles.indi_permission}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked == true) {
                      let p = [...permissions];
                      p.push("events");
                      setPermissions([...p]);
                    } else {
                      let p = [...permissions];
                      p = p.filter((item) => item !== "events");
                      setPermissions([...p]);
                    }
                  }}
                />
                <span>Events</span>
              </div>
              <div className={styles.indi_permission}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked == true) {
                      let p = [...permissions];
                      p.push("journal");
                      setPermissions([...p]);
                    } else {
                      let p = [...permissions];
                      p = p.filter((item) => item !== "journal");
                      setPermissions([...p]);
                    }
                  }}
                />
                <span>Journal</span>
              </div>
              <div className={styles.indi_permission}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked == true) {
                      let p = [...permissions];
                      p.push("retail");
                      setPermissions([...p]);
                    } else {
                      let p = [...permissions];
                      p = p.filter((item) => item !== "retail");
                      setPermissions([...p]);
                    }
                  }}
                />
                <span>Retail</span>
              </div>
            </div>
            <div
              className={styles.guide_line_btn}
              onClick={() => {
                // add_meaning();
                add_admin();
              }}
            >
              Add Admin
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
