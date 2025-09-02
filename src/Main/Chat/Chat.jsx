import styles from "./Chat.module.css";
import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../DataContext/DataContext";
import axios from "axios";
import enu from "../../Essentails/enu";
import { useCallback } from "react";
export default function Chat() {
  const [menu_selection, setMenu_selection] = useState("");
  const [indi_chat, setIndi_chat] = useState("");
  const [indi_chat_content, setindi_chat_content] = useState([]);
  const [ad_data, setAd_data] = useState([]);
  const { data } = useContext(DataContext);
  const navigate = useNavigate();
  const name_ref = useRef(null);
  const email_ref = useRef(null);
  const mobile_ref = useRef(null);
  const password_ref = useRef(null);
  const designation_ref = useRef(null);
  const [permissions, setPermissions] = useState([]);
  const [all_chats, setAll_chats] = useState([]);
  const input_ref = useRef(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      switch (menu_selection) {
        case "1":
          axios
            .post(
              data.url + "/admin/chat/get-client-chats",
              {},
              {
                withCredentials: true,
              }
            )
            .then((res) => {
              if (res.data.alert !== undefined) {
                alert(res.data.alert);
              } else if (res.data.logout === true) {
              } else {
                setAll_chats(res.data.supply);
                // setmessagesData(res.data.supply);
              }
            })
            .catch((err) => {});
          break;
        case "2":
          axios
            .post(
              data.url + "/admin/chat/get-coach-chats",
              {},
              { withCredentials: true }
            )
            .then((res) => {
              if (res.data.alert !== undefined) {
                alert(res.data.alert);
              } else if (res.data.logout === true) {
              } else {
                // setmessagesData(res.data.supply);
              }
            })
            .catch((err) => {});
          break;
        case "3":
          axios
            .post(
              data.url + "/admin/chat/get-event-chats",
              {},
              { withCredentials: true }
            )
            .then((res) => {
              if (res.data.alert !== undefined) {
                alert(res.data.alert);
              } else if (res.data.logout === true) {
              } else {
                // setmessagesData(res.data.supply);
              }
            })
            .catch((err) => {});
          break;
        case "4":
          axios
            .post(
              data.url + "/admin/chat/get-product-chats",
              {},
              { withCredentials: true }
            )
            .then((res) => {
              if (res.data.alert !== undefined) {
                alert(res.data.alert);
              } else if (res.data.logout === true) {
              } else {
                // setmessagesData(res.data.supply);
              }
            })
            .catch((err) => {});
          break;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [menu_selection]);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (menu_selection) {
        case "1":
          axios
            .post(
              data.url + "/admin/chat/get-client-indi-chats",
              { chat_id: indi_chat },
              {
                withCredentials: true,
              }
            )
            .then((res) => {
              //   console.log(res.data);
              if (res.data.alert !== undefined) {
                alert(res.data.alert);
              } else if (res.data.logout === true) {
              } else {
                // console.log(indi_chat_content.length);
                // console.log(indi_chat_content);
                if (indi_chat_content.length == 0) {
                  //   console.log("setting");
                  setindi_chat_content(res.data.supply);
                } else {
                  if (
                    indi_chat_content[indi_chat_content.length - 1]
                      .message_number ==
                    res.data.supply[res.data.supply.length - 1].message_number
                  ) {
                    // console.log("already their");
                  } else {
                    // console.log("setting indi chat");
                    setindi_chat_content(res.data.supply);
                  }
                }
                // setmessagesData(res.data.supply);
              }
            })
            .catch((err) => {});
          break;
        case "2":
          axios
            .post(
              data.url + "/admin/chat/get-coach-indi-chats",
              { chat_id: indi_chat },
              { withCredentials: true }
            )
            .then((res) => {
              if (res.data.alert !== undefined) {
                alert(res.data.alert);
              } else if (res.data.logout === true) {
              } else {
                // setmessagesData(res.data.supply);
              }
            })
            .catch((err) => {});
          break;
        case "3":
          axios
            .post(
              data.url + "/admin/chat/get-event-indi-chats",
              { chat_id: indi_chat },
              { withCredentials: true }
            )
            .then((res) => {
              if (res.data.alert !== undefined) {
                alert(res.data.alert);
              } else if (res.data.logout === true) {
              } else {
                // setmessagesData(res.data.supply);
              }
            })
            .catch((err) => {});
          break;
        case "4":
          axios
            .post(
              data.url + "/admin/chat/get-product-indi-chats",
              { chat_id: indi_chat },
              { withCredentials: true }
            )
            .then((res) => {
              if (res.data.alert !== undefined) {
                alert(res.data.alert);
              } else if (res.data.logout === true) {
              } else {
                // setmessagesData(res.data.supply);
              }
            })
            .catch((err) => {});
          break;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [indi_chat]);

  const send_text = () => {
    let text = input_ref.current.value;
    if (text == "") {
      alert("Type a message to send");
    } else {
      axios
        .post(
          data.url + "/admin/chat/client-text-reply",
          {
            text: text,
            chat_id: indi_chat,
          },
          {
            withCredentials: true,
          }
        )
        .then(() => {});
    }
  };

  return (
    <>
      <div className={styles.important_info_section}>
        <div className={styles.profile_img_section}>
          <img
            src={require("./chat.png")}
            alt=""
            className={styles.profile_img}
          />
        </div>
        <div className={styles.profile_info}>
          <div className={styles.profile_name_pp}>Chats</div>
        </div>
        <div className={styles.profile_goto_chat_section}>
          {/* <div className={styles.profile_goto_chat_btn}>Go to chat</div> */}
        </div>
      </div>

      <div className={styles.all_main_options_ud}>
        {/* clients */}
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
                    opacity="0.4"
                    d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
                    fill="#292D32"
                  ></path>{" "}
                  <path
                    d="M14.0809 14.1499C11.2909 12.2899 6.74094 12.2899 3.93094 14.1499C2.66094 14.9999 1.96094 16.1499 1.96094 17.3799C1.96094 18.6099 2.66094 19.7499 3.92094 20.5899C5.32094 21.5299 7.16094 21.9999 9.00094 21.9999C10.8409 21.9999 12.6809 21.5299 14.0809 20.5899C15.3409 19.7399 16.0409 18.5999 16.0409 17.3599C16.0309 16.1299 15.3409 14.9899 14.0809 14.1499Z"
                    fill="#292D32"
                  ></path>{" "}
                  <path
                    opacity="0.4"
                    d="M19.9894 7.3401C20.1494 9.2801 18.7694 10.9801 16.8594 11.2101C16.8494 11.2101 16.8494 11.2101 16.8394 11.2101H16.8094C16.7494 11.2101 16.6894 11.2101 16.6394 11.2301C15.6694 11.2801 14.7794 10.9701 14.1094 10.4001C15.1394 9.4801 15.7294 8.1001 15.6094 6.6001C15.5394 5.7901 15.2594 5.0501 14.8394 4.4201C15.2194 4.2301 15.6594 4.1101 16.1094 4.0701C18.0694 3.9001 19.8194 5.3601 19.9894 7.3401Z"
                    fill="#292D32"
                  ></path>{" "}
                  <path
                    d="M21.9902 16.5899C21.9102 17.5599 21.2902 18.3999 20.2502 18.9699C19.2502 19.5199 17.9902 19.7799 16.7402 19.7499C17.4602 19.0999 17.8802 18.2899 17.9602 17.4299C18.0602 16.1899 17.4702 14.9999 16.2902 14.0499C15.6202 13.5199 14.8402 13.0999 13.9902 12.7899C16.2002 12.1499 18.9802 12.5799 20.6902 13.9599C21.6102 14.6999 22.0802 15.6299 21.9902 16.5899Z"
                    fill="#292D32"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className={styles.mio_main_name_ud}>Clients</div>
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
        {/* coaches */}
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
                    d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
                    fill="#292D32"
                  ></path>{" "}
                  <path
                    d="M17.0809 14.1606C14.2909 12.3006 9.74094 12.3006 6.93094 14.1606C5.66094 15.0006 4.96094 16.1506 4.96094 17.3806C4.96094 18.6106 5.66094 19.7506 6.92094 20.5906C8.32094 21.5306 10.1609 22.0006 12.0009 22.0006C13.8409 22.0006 15.6809 21.5306 17.0809 20.5906C18.3409 19.7406 19.0409 18.6006 19.0409 17.3606C19.0309 16.1406 18.3409 14.9906 17.0809 14.1606ZM14.3309 16.5606L11.8109 19.0806C11.6909 19.2006 11.5309 19.2606 11.3709 19.2606C11.2109 19.2606 11.0509 19.1906 10.9309 19.0806L9.67094 17.8206C9.43094 17.5806 9.43094 17.1806 9.67094 16.9406C9.91094 16.7006 10.3109 16.7006 10.5509 16.9406L11.3709 17.7606L13.4509 15.6806C13.6909 15.4406 14.0909 15.4406 14.3309 15.6806C14.5809 15.9206 14.5809 16.3206 14.3309 16.5606Z"
                    fill="#292D32"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className={styles.mio_main_name_ud}>Coaches</div>
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
        {/* ad manager */}
        <div
          className={styles.main_indi_options}
          onClick={() => {
            // setShow_guidelines(true);
            setMenu_selection("3");
          }}
        >
          <div className={styles.upper_line_mio_ud}></div>
          <div className={styles.mio_left_ud}>
            <div className={styles.mio_ud_svg_section}>
              <svg
                fill="#000000"
                version="1.1"
                viewBox="0 0 436.38 436.381"
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
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M218.19,232c54.735,0,99.107-51.936,99.107-116c0-88.842-44.371-116-99.107-116c-54.736,0-99.107,27.158-99.107,116 C119.083,180.064,163.455,232,218.19,232z"></path>{" "}
                      <path d="M432.47,408.266l-50-112.636c-1.838-4.142-5.027-7.534-9.045-9.626l-79.62-41.445c-4.809-2.504-10.423-2.947-15.564-1.231 c-5.141,1.715-9.364,5.442-11.707,10.329L232.7,324.266l4.261-38.408c0.133-1.201-0.174-2.412-0.865-3.405l-13.8-19.839 c-0.048-0.068-0.104-0.131-0.154-0.195l11.935-9.061c1.028-0.781,1.633-1.998,1.633-3.291c0-4.834-3.935-8.769-8.77-8.769h-17.498 c-4.835,0-8.769,3.935-8.769,8.769c0,1.293,0.604,2.51,1.633,3.291l11.934,9.061c-0.051,0.064-0.106,0.127-0.154,0.195 l-13.8,19.839c-0.691,0.993-0.999,2.204-0.865,3.405l4.26,38.408l-33.834-70.609c-2.342-4.887-6.566-8.614-11.707-10.329 c-5.14-1.716-10.757-1.271-15.564,1.231l-79.62,41.445c-4.018,2.092-7.207,5.484-9.045,9.626l-50,112.636 c-2.746,6.188-2.177,13.342,1.512,19.018c3.689,5.674,9.999,9.098,16.768,9.098h392c6.769,0,13.078-3.424,16.768-9.1 C434.648,421.607,435.216,414.453,432.47,408.266z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div className={styles.mio_main_name_ud}>Ad Managers</div>
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
        {/* shop */}
        <div
          className={styles.main_indi_options}
          onClick={() => {
            // setShow_guidelines(true);
            setMenu_selection("4");
          }}
        >
          <div className={styles.upper_line_mio_ud}></div>
          <div className={styles.mio_left_ud}>
            <div className={styles.mio_ud_svg_section}>
              <svg
                fill="#000000"
                version="1.1"
                viewBox="0 0 484.656 484.656"
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
                  <g>
                    {" "}
                    <path d="M451.074,438.034h-9.837V195.806h-0.008c-12.084,0-23.525-3.944-33.045-10.585c-6.411,4.508-13.791,7.84-21.954,9.467 c-3.746,0.746-7.553,1.118-11.322,1.118c-2.499,0-4.943-0.278-7.371-0.595v180.184c0,10.282-8.339,18.62-18.629,18.62h-66.923 v-51.032l23.595,39.378c2.785,4.657,7.72,7.236,12.782,7.236c2.595,0,5.237-0.683,7.634-2.119 c7.045-4.228,9.338-13.362,5.108-20.414l-47.429-79.167c-2.936-4.912-8.268-7.339-13.607-7.037 c-0.357-0.033-54.953-0.041-55.286-0.017c-5.411-0.372-10.822,2.079-13.805,7.054l-47.43,79.167 c-4.229,7.052-1.937,16.186,5.109,20.414c2.397,1.436,5.039,2.119,7.634,2.119c5.062,0,9.997-2.579,12.782-7.236l23.746-39.631 v51.285h-67.066c-10.291,0-18.629-8.337-18.629-18.62V195.211c-2.427,0.317-4.872,0.595-7.371,0.595 c-3.745,0-7.554-0.372-11.361-1.126c-8.157-1.626-15.52-4.951-21.923-9.459c-9.52,6.641-20.953,10.585-33.038,10.585h-0.008 v242.228h-9.837c-12.877,0-23.311,10.433-23.311,23.311c0,12.877,10.434,23.311,23.311,23.311h417.492 c12.878,0,23.311-10.434,23.311-23.311C474.385,448.467,463.952,438.034,451.074,438.034z"></path>{" "}
                    <path d="M242.321,197.226c-17.115,0-31.007,15.877-31.007,35.474c0,19.581,13.892,35.473,31.007,35.473 c17.13,0,31.015-15.892,31.015-35.473C273.335,213.103,259.451,197.226,242.321,197.226z"></path>{" "}
                    <path d="M33.938,169.553c3.167,0.936,6.356,1.387,9.506,1.387c14.265,0,27.453-9.29,31.744-23.666l1.745-5.832 c1.563,13.973,11.798,25.968,26.318,28.857c2.181,0.436,4.363,0.642,6.506,0.642c15.495,0,29.34-10.916,32.482-26.682l0.809-4.054 c1.143,15.78,13.409,28.952,29.689,30.57c1.12,0.11,2.23,0.158,3.333,0.158c16.821,0,31.237-12.757,32.943-29.863l0.246-2.46 c0.452,17.923,15.044,32.323,33.07,32.323c18.025,0,32.617-14.4,33.069-32.323l0.245,2.46 c1.707,17.106,16.123,29.863,32.944,29.863c1.103,0,2.213-0.047,3.332-0.158c16.28-1.618,28.555-14.79,29.689-30.57l0.809,4.054 c3.143,15.773,16.987,26.682,32.481,26.682c2.144,0,4.326-0.206,6.507-0.642c14.52-2.889,24.764-14.884,26.318-28.857l1.745,5.832 c4.292,14.377,17.479,23.666,31.744,23.666c3.149,0,6.339-0.452,9.506-1.387c17.549-5.246,27.515-23.716,22.279-41.25 L443.076,28.158C438.086,11.449,422.718,0,405.279,0H79.377C61.938,0,46.57,11.449,41.58,28.158L11.659,128.303 C6.423,145.837,16.389,164.307,33.938,169.553z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div className={styles.mio_main_name_ud}>Product Company</div>
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

      {menu_selection == "2" ? null : menu_selection == "1" ? (
        <div className={styles.main_chat_section}>
          <div className={styles.all_chat_section}>
            <header className={styles.chat_header}>Messages</header>
            <div className={styles.search_section}>
              <input
                type="text"
                placeholder="Search here"
                className={styles.search_input}
              />
              <div className={styles.search_btn}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
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
                      d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
            <div className={styles.all_indi_chats}>
              {all_chats.map((item) => {
                return (
                  <div
                    className={styles.indi_chat_in_all_chat}
                    onClick={() => {
                      setIndi_chat(item.chat_id);
                    }}
                  >
                    <div className={styles.profile_img_section_chat}>
                      <img
                        src={data.url + "/" + item.profile_image}
                        alt=""
                        className={styles.pimg}
                      />
                    </div>
                    <div className={styles.indi_chat_middle}>
                      <div className={styles.chat_name}>
                        {item.name} |
                        <span className={styles.all_chat_date}>
                          {item.last_message_time.split("T")[0]}
                        </span>
                      </div>
                      <div className={styles.chat_chat}>
                        {item.last_message_text}
                      </div>
                    </div>
                    <div>
                      <div className={styles.unread}>
                        {item.unread_by_management}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.indi_chat_section}>
            <header className={styles.chat_header_indi}>
              Ankit · CL-01-2025
            </header>
            <div className={styles.all_indi_chats_indi}>
              {indi_chat_content.map((item) => {
                if (item.send_by == "client") {
                  return (
                    <>
                      <div className={styles.client_whole_msg}>
                        {item.content_type == "text" ? (
                          <div className={styles.client_text_message}>
                            {item.content}
                          </div>
                        ) : item.content_type == "img" ? (
                          <div className={styles.client_img_message}>
                            <img
                              src={data.url + "/" + item.content}
                              alt=""
                              className={styles.client_img}
                            />
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.client_date_time}>
                        {item.send_at}
                      </div>
                    </>
                  );
                } else if (item.send_by == "management") {
                  return (
                    <>
                      <div className={styles.staff_whole_msg}>
                        <div className={styles.staff_text_message}>
                          {item.content}
                        </div>
                      </div>
                      <div className={styles.staff_date_time}>
                        {item.send_at}
                      </div>
                    </>
                  );
                }
              })}

              {/* <div className={styles.staff_whole_msg}>
                <div className={styles.staff_text_message}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  laudantium nulla recusandae numquam voluptas aut nihil, ut ab
                  tempora quaerat nobis optio! Tempora expedita nemo perferendis
                  repudiandae voluptates consectetur sapiente.
                </div>
              </div>
              <div className={styles.staff_date_time}>
                Gavin · 03-07-2025 · 12:45 pm
              </div>
              <div className={styles.staff_whole_msg}>
                <div className={styles.staff_img_message}>
                  <img
                    src={data.url + "/product_5ZGECHIhWD0t.jpg"}
                    alt=""
                    className={styles.client_img}
                  />
                </div>
              </div>
              <div className={styles.staff_date_time}>
                Gavin · 03-07-2025 · 12:45 pm
              </div>
              <div className={styles.staff_whole_msg}>
                <div className={styles.staff_audio_message}>
                  <audio
                    src={data.url + "/2RnZlHZK2wII.wav"}
                    controls
                    className={styles.client_audio}
                  ></audio>
                </div>
              </div>
              <div className={styles.staff_date_time}>
                Gavin · 03-07-2025 · 12:45 pm
              </div> */}
            </div>
            <div className={styles.search_section}>
              <input
                type="text"
                placeholder="Type message here..."
                className={styles.search_input_indi}
                ref={input_ref}
              />
              <div className={styles.search_btn}>
                <svg
                  fill="#fff"
                  viewBox="0 0 24 24"
                  class="icon line-color"
                  height={20}
                  width={20}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      id="primary"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18,10v5a6,6,0,0,1-6,6h0a6,6,0,0,1-6-6V7a4,4,0,0,1,4-4h0a4,4,0,0,1,4,4v8a2,2,0,0,1-2,2h0a2,2,0,0,1-2-2V7"
                    ></path>
                  </g>
                </svg>
              </div>
              <div
                className={styles.search_btn}
                onClick={() => {
                  send_text();
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
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
                      d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
