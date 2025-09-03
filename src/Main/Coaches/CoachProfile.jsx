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
  const type = searchParams.get("type"); // This indicates coach type: verified, unverified, half-verified
  const [information, setInformation] = useState({});
  const go_to_users = () => {
    window.location.href = "/users";
  };

  useEffect(() => {
    let endpoint = "";

    console.log(type);

    if (type === "verified") {
      alert("Verified Coach Profile Loading...");
      endpoint = "/coach/get-verified-coach";
    } else if (type === "unverified") {
      alert("Unverified Coach Profile Loading...");
      endpoint = "/coach/get-un-verified-coach";
    } else if (type === "half_verified") {
      alert("Half-Verified Coach Profile Loading...");
      endpoint = "/coach/get-half-verified-coach";
    } else {
      alert("Loading Individual Coach Profile...");
      // Default fallback or error handling
      endpoint = "/coach/get-indi-coach";
    }

    console.log(id);

    console.log(endpoint);

    axios
      .post(data.url + endpoint, { id: id }, { withCredentials: true })
      .then((res) => {
        if (res.data.alert) {
          alert(res.data.alert);
          go_to_users();
        } else if (res.data.redirect) {
          alert("Session expired. Please log in again.");
          // handle redirect if needed
        } else {
          setInformation(res.data.supply);
          console.log(res.data.supply);
        }
      })
      .catch((err) => console.log(err));
  }, [id, type, data.url]);

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

  const [section, setSection] = useState("personal_information");
  return (
    <main className={styles.main_main}>
      <main className={styles.main_main_main}>
        <div className={styles.important_info_section}>
          <div className={styles.profile_img_section}>
            <img
              src={require("../../Images/coaches.jpg")}
              alt=""
              className={styles.profile_img}
            />
          </div>
          <div className={styles.profile_info}>
            <div className={styles.profile_name_pp}>{information.name}</div>
            <div className={styles.profile_create_date}>
              Created : 2025-01-21{" "}
            </div>
          </div>
          <div className={styles.profile_goto_chat_section}>
            {information.verified == false ? (
              <div
                className={styles.profile_goto_chat_btn}
                onClick={() => {
                  alert("Test begawo");
                  verify();
                }}
              >
                Verify
              </div>
            ) : (
              <div className={styles.profile_goto_chat_btn}>Verified</div>
            )}

            <div className={styles.profile_goto_chat_btn}>Go to chat</div>
          </div>
        </div>

        <div className={styles.all_main_options_ud}>
          <div
            className={styles.main_indi_options}
            onClick={() => {
              setSection("personal_information");
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
                      d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z"
                      fill="#292D32"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                    <path
                      d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z"
                      fill="#292D32"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                    <path
                      d="M18.7807 19.36C17.0007 21 14.6207 22.01 12.0007 22.01C9.3807 22.01 7.0007 21 5.2207 19.36C5.4607 18.45 6.1107 17.62 7.0607 16.98C9.7907 15.16 14.2307 15.16 16.9407 16.98C17.9007 17.62 18.5407 18.45 18.7807 19.36Z"
                      fill="#292D32"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className={styles.mio_main_name_ud}>Personal info</div>
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
              setSection("coach_pricing");
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
                      opacity="0.5"
                      d="M3.17157 7.17157C4.01536 6.32778 5.22954 6.09171 7.25179 6.02566L8.75208 6.00188C9.1435 6 9.55885 6 10 6H14C14.4412 6 14.8565 6 15.2479 6.00188L16.7482 6.02566C18.7705 6.09171 19.9846 6.32778 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H9.99998C6.22876 22 4.34314 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14C2 10.2288 2 8.34315 3.17157 7.17157Z"
                      fill="#000000ce"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                    <path
                      d="M12.75 10C12.75 9.58579 12.4142 9.25 12 9.25C11.5858 9.25 11.25 9.58579 11.25 10V10.0102C10.1612 10.2845 9.25 11.143 9.25 12.3333C9.25 13.7903 10.6151 14.75 12 14.75C12.8242 14.75 13.25 15.2826 13.25 15.6667C13.25 16.0507 12.8242 16.5833 12 16.5833C11.1758 16.5833 10.75 16.0507 10.75 15.6667C10.75 15.2525 10.4142 14.9167 10 14.9167C9.58579 14.9167 9.25 15.2525 9.25 15.6667C9.25 16.857 10.1612 17.7155 11.25 17.9898V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V17.9898C13.8388 17.7155 14.75 16.857 14.75 15.6667C14.75 14.2097 13.3849 13.25 12 13.25C11.1758 13.25 10.75 12.7174 10.75 12.3333C10.75 11.9493 11.1758 11.4167 12 11.4167C12.8242 11.4167 13.25 11.9493 13.25 12.3333C13.25 12.7475 13.5858 13.0833 14 13.0833C14.4142 13.0833 14.75 12.7475 14.75 12.3333C14.75 11.143 13.8388 10.2845 12.75 10.0102V10Z"
                      fill="#000000ce"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                    <path
                      d="M12.0522 1.25H11.9482C11.0497 1.24997 10.3005 1.24995 9.70568 1.32991C9.07789 1.41432 8.51109 1.59999 8.05562 2.05546C7.60015 2.51093 7.41448 3.07773 7.33007 3.70552C7.27275 4.13189 7.25653 5.15147 7.25195 6.02566L8.75224 6.00188C8.75677 5.15523 8.77116 4.24407 8.8167 3.9054C8.87874 3.44393 8.98596 3.24644 9.11628 3.11612C9.24659 2.9858 9.44409 2.87858 9.90555 2.81654C10.3886 2.7516 11.0362 2.75 12.0002 2.75C12.9642 2.75 13.6117 2.7516 14.0948 2.81654C14.5562 2.87858 14.7537 2.9858 14.884 3.11612C15.0144 3.24644 15.1216 3.44393 15.1836 3.9054C15.2292 4.24407 15.2436 5.15523 15.2481 6.00188L16.7484 6.02566C16.7438 5.15147 16.7276 4.13189 16.6702 3.70552C16.5858 3.07773 16.4002 2.51093 15.9447 2.05546C15.4892 1.59999 14.9224 1.41432 14.2946 1.32991C13.6999 1.24995 12.9506 1.24997 12.0522 1.25Z"
                      fill="#000000ce"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className={styles.mio_main_name_ud}>Coach Pricing</div>
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
              setSection("billing_information");
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
                      opacity="0.5"
                      d="M17.625 20.5917C18.2666 20.0473 19.2334 20.0473 19.875 20.5917C20.3109 20.9616 21 20.6662 21 20.1094V3.89059C21 3.33383 20.3109 3.03842 19.875 3.40832C19.2334 3.95274 18.2666 3.95274 17.625 3.40832C16.9834 2.86389 16.0166 2.86389 15.375 3.40832C14.7334 3.95274 13.7666 3.95274 13.125 3.40832C12.4834 2.86389 11.5166 2.86389 10.875 3.40832C10.2334 3.95274 9.26659 3.95274 8.625 3.40832C7.98341 2.86389 7.01659 2.86389 6.375 3.40832C5.73341 3.95274 4.76659 3.95274 4.125 3.40832C3.68909 3.03842 3 3.33383 3 3.89059V20.1094C3 20.6662 3.68909 20.9616 4.125 20.5917C4.76659 20.0473 5.73341 20.0473 6.375 20.5917C7.01659 21.1361 7.98341 21.1361 8.625 20.5917C9.26659 20.0473 10.2334 20.0473 10.875 20.5917C11.5166 21.1361 12.4834 21.1361 13.125 20.5917C13.7666 20.0473 14.7334 20.0473 15.375 20.5917C16.0166 21.1361 16.9834 21.1361 17.625 20.5917Z"
                      fill="#1C274C"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                    <path
                      d="M6.75 15.5C6.75 15.0858 7.08579 14.75 7.5 14.75H16.5C16.9142 14.75 17.25 15.0858 17.25 15.5C17.25 15.9142 16.9142 16.25 16.5 16.25H7.5C7.08579 16.25 6.75 15.9142 6.75 15.5Z"
                      fill="#1C274C"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                    <path
                      d="M6.75 12C6.75 11.5858 7.08579 11.25 7.5 11.25H16.5C16.9142 11.25 17.25 11.5858 17.25 12C17.25 12.4142 16.9142 12.75 16.5 12.75H7.5C7.08579 12.75 6.75 12.4142 6.75 12Z"
                      fill="#1C274C"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                    <path
                      d="M6.75 8.5C6.75 8.08579 7.08579 7.75 7.5 7.75H16.5C16.9142 7.75 17.25 8.08579 17.25 8.5C17.25 8.91421 16.9142 9.25 16.5 9.25H7.5C7.08579 9.25 6.75 8.91421 6.75 8.5Z"
                      fill="#1C274C"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className={styles.mio_main_name_ud}>Billing info</div>
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
              setSection("booking");
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
                      d="M14.0137 17L14.0079 19.0029C14.0065 19.4731 14.0058 19.7081 13.8591 19.8541C13.7124 20 13.4767 20 13.0054 20H9.99502C6.21438 20 4.32407 20 3.14958 18.8284C2.34091 18.0218 2.08903 16.8766 2.01058 15.0105C1.99502 14.6405 1.98724 14.4554 2.05634 14.332C2.12545 14.2085 2.40133 14.0545 2.95308 13.7463C3.56586 13.4041 3.98007 12.7503 3.98007 12C3.98007 11.2497 3.56586 10.5959 2.95308 10.2537C2.40133 9.94554 2.12545 9.79147 2.05634 9.66802C1.98724 9.54458 1.99502 9.35954 2.01058 8.98947C2.08903 7.12339 2.34091 5.97823 3.14958 5.17157C4.32407 4 6.21439 4 9.99502 4H13.5052C13.7814 4 14.0056 4.22298 14.0064 4.49855L14.0137 7C14.0137 7.55228 14.4625 8 15.0162 8L15.0162 10C14.4625 10 14.0137 10.4477 14.0137 11V13C14.0137 13.5523 14.4625 14 15.0162 14V16C14.4625 16 14.0137 16.4477 14.0137 17Z"
                      fill="#1C274C"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                    <path
                      opacity="0.5"
                      d="M15.0166 15.9998C15.5703 15.9998 16.0191 16.4475 16.0191 16.9998V18.9763C16.0191 19.4578 16.0191 19.6986 16.1735 19.8462C16.3279 19.9939 16.5641 19.9839 17.0366 19.9639C18.8995 19.885 20.0441 19.633 20.8508 18.8282C21.6595 18.0216 21.9114 16.8764 21.9898 15.0104C22.0054 14.6403 22.0132 14.4552 21.9441 14.3318C21.875 14.2083 21.5991 14.0543 21.0473 13.7462C20.4346 13.404 20.0203 12.7501 20.0203 11.9998C20.0203 11.2495 20.4346 10.5957 21.0473 10.2535C21.5991 9.94536 21.875 9.7913 21.9441 9.66785C22.0132 9.5444 22.0054 9.35936 21.9898 8.98929C21.9114 7.12321 21.6595 5.97805 20.8508 5.17139C19.9731 4.29586 18.6956 4.07463 16.5282 4.01872C16.2486 4.01151 16.0191 4.237 16.0191 4.516V6.99982C16.0191 7.55211 15.5703 7.99982 15.0166 7.99982L15.0166 9.99982C15.5703 9.99982 16.0191 10.4475 16.0191 10.9998V12.9998C16.0191 13.5521 15.5703 13.9998 15.0166 13.9998V15.9998Z"
                      fill="#1C274C"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className={styles.mio_main_name_ud}>Bookings</div>
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
              setSection("event_info");
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
                      d="M6.96006 2C7.37758 2 7.71605 2.30996 7.71605 2.69231V4.08883C8.38663 4.07692 9.13829 4.07692 9.98402 4.07692H14.016C14.8617 4.07692 15.6134 4.07692 16.284 4.08883V2.69231C16.284 2.30996 16.6224 2 17.0399 2C17.4575 2 17.7959 2.30996 17.7959 2.69231V4.15008C19.2468 4.25647 20.1992 4.51758 20.899 5.15838C21.5987 5.79917 21.8838 6.67139 22 8V9H2V8C2.11618 6.67139 2.4013 5.79917 3.10104 5.15838C3.80079 4.51758 4.75323 4.25647 6.20406 4.15008V2.69231C6.20406 2.30996 6.54253 2 6.96006 2Z"
                      fill="#1C274C"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                    <path
                      opacity="0.5"
                      d="M22 14V12C22 11.161 21.9873 9.66527 21.9744 9H2.00586C1.99296 9.66527 2.00564 11.161 2.00564 12V14C2.00564 17.7712 2.00564 19.6569 3.17688 20.8284C4.34813 22 6.23321 22 10.0034 22H14.0023C17.7724 22 19.6575 22 20.8288 20.8284C22 19.6569 22 17.7712 22 14Z"
                      fill="#1C274C"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                    <path
                      d="M18 16.5C18 17.3284 17.3284 18 16.5 18C15.6716 18 15 17.3284 15 16.5C15 15.6716 15.6716 15 16.5 15C17.3284 15 18 15.6716 18 16.5Z"
                      fill="#1C274C"
                      className={styles.hover_fill_mio}
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className={styles.mio_main_name_ud}>Events info</div>
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
        {/* this is the section for the personal info of the coach */}
        {section == "personal_information" ? (
          <div className={styles.personal_section}>
            <header className={styles.ps_ud_header}>
              Personal Information
            </header>
            <main className={styles.ps_ud_main}>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>Name</div>
                <div className={styles.ud_info_value}>{information.name}</div>
              </div>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>Email</div>
                <div className={styles.ud_info_value}>{information.email}</div>
              </div>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>Contact Number</div>
                <div className={styles.ud_info_value}>{information.mobile}</div>
              </div>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>Gender</div>
                <div className={styles.ud_info_value}>{information.gender}</div>
              </div>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>Address</div>
                <div className={styles.ud_info_value}>
                  {information.address}
                </div>
              </div>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>city</div>
                <div className={styles.ud_info_value}>{information.city}</div>
              </div>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>Date of birth</div>
                <div className={styles.ud_info_value}>{information.dob}</div>
              </div>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>Card holder name</div>
                <div className={styles.ud_info_value}>
                  {information.card_holder_name}
                </div>
              </div>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>Card number</div>
                <div className={styles.ud_info_value}>
                  {information.card_number}
                </div>
              </div>
              {/* <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>category</div>
                <div className={styles.ud_info_value}>
                  {information.category}
                </div>
              </div> */}
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>experience</div>
                <div className={styles.ud_info_value}>
                  {information.experience_year} years / {information.months}{" "}
                  months
                </div>
              </div>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>
                  Accepted terms and conditions
                </div>
                <div className={styles.ud_info_value}>yes</div>
              </div>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>Verified</div>
                <div className={styles.ud_info_value}>
                  {information.verified == true ? "Yes" : "No"}
                </div>
              </div>
            </main>
          </div>
        ) : null}

        {/* this is the section for the billing section of the coach */}
        {section == "billing_information" ? (
          <div className={styles.billing_section}>
            <header className={styles.ps_ud_header}>Billing Information</header>
            <main className={styles.ps_ud_main}>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>03-01-2025</div>
                <div className={styles.ud_info_value_green}>AED 1000</div>
              </div>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>03-02-2025</div>
                <div className={styles.ud_info_value_green}>AED 1000</div>
              </div>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>03-03-2025</div>
                <div className={styles.ud_info_value_green}>AED 1000</div>
              </div>
              <div className={styles.ps_ud_main_indi}>
                <div className={styles.ud_info_title}>03-04-2025</div>
                <div className={styles.ud_info_value_green}>AED 1000</div>
              </div>
            </main>
          </div>
        ) : null}

        {/* this is section for the booking of the coach */}
        {section == "booking" ? (
          <div className={styles.outer_bs_ud}>
            <div className={styles.booking_section}>
              <header className={styles.ps_ud_header}>Bookings</header>
              <main className={styles.ps_ud_main}>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Client Name</div>
                  <div className={styles.ud_info_value}>03-03-2025 · 15:00</div>
                </div>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Client Name</div>
                  <div className={styles.ud_info_value}>03-03-2025 · 15:00</div>
                </div>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Client Name</div>
                  <div className={styles.ud_info_value}>03-03-2025 · 15:00</div>
                </div>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Client Name</div>
                  <div className={styles.ud_info_value}>03-03-2025 · 15:00</div>
                </div>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Client Name</div>
                  <div className={styles.ud_info_value}>03-03-2025 · 15:00</div>
                </div>
              </main>
            </div>

            <div className={styles.indi_booking}>
              <header className={styles.indi_booking_ud_header}>
                Client Name · Circuit Training 
              </header>
              <main className={styles.ps_ud_main}>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Session</div>
                  <div className={styles.ud_info_value}>1</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Type</div>
                  <div className={styles.ud_info_value}>Virtual</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Date</div>
                  <div className={styles.ud_info_value}>03-03-2025</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Time</div>
                  <div className={styles.ud_info_value}>08:00</div>
                </div>
                <div className={styles.ps_ud_main_indi_small_bb}>
                  <div className={styles.ud_info_title}>Price</div>
                  <div className={styles.ud_info_value}>AED 60</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Session</div>
                  <div className={styles.ud_info_value}>2</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Type</div>
                  <div className={styles.ud_info_value}>Virtual</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Date</div>
                  <div className={styles.ud_info_value}>05-03-2025</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Time</div>
                  <div className={styles.ud_info_value}>08:00</div>
                </div>
                <div className={styles.ps_ud_main_indi_small_bb}>
                  <div className={styles.ud_info_title}>Price</div>
                  <div className={styles.ud_info_value}>AED 60</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Session</div>
                  <div className={styles.ud_info_value}>3</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Type</div>
                  <div className={styles.ud_info_value}>Virtual</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Date</div>
                  <div className={styles.ud_info_value}>05-03-2025</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Time</div>
                  <div className={styles.ud_info_value}>08:00</div>
                </div>
                <div className={styles.ps_ud_main_indi_small_bb}>
                  <div className={styles.ud_info_title}>Price</div>
                  <div className={styles.ud_info_value}>AED 60</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Total Sessions</div>
                  <div className={styles.ud_info_value}>3</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Total Amount Paid</div>
                  <div className={styles.ud_info_value}>AED 180</div>
                </div>
              </main>
            </div>
          </div>
        ) : null}

        {/* this is the section for the event of the coach */}
        {section == "event_info" ? (
          <div className={styles.outer_es_ud}>
            <div className={styles.booking_section}>
              <header className={styles.ps_ud_header}>Events</header>
              <main className={styles.ps_ud_main}>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Event Name</div>
                  <div className={styles.ud_info_value}>03-03-2025 · 02:00</div>
                </div>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Event Name</div>
                  <div className={styles.ud_info_value}>06-03-2025 · 12:00</div>
                </div>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Event Name</div>
                  <div className={styles.ud_info_value}>12-03-2025 · 15:00</div>
                </div>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Event Name</div>
                  <div className={styles.ud_info_value}>21-03-2025 · 23:00</div>
                </div>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Event Name</div>
                  <div className={styles.ud_info_value}>01-03-2025 · 08:00</div>
                </div>
              </main>
            </div>

            <div className={styles.indi_event}>
              <header className={styles.indi_booking_ud_header}>
                Event Name
              </header>
              <main className={styles.ps_ud_main}>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Date</div>
                  <div className={styles.ud_info_value}>28-01-2025</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Time</div>
                  <div className={styles.ud_info_value}>10:00 - 12:00</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Location</div>
                  <div className={styles.ud_info_value}>
                    FitWell Community Center, Downtown{" "}
                  </div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Type</div>
                  <div className={styles.ud_info_value}>In-person</div>
                </div>
              </main>
            </div>
          </div>
        ) : null}

        {/* this is the section for the coach pricing */}
        {section == "coach_pricing" ? (
          <div className={styles.outer_cp_ud}>
            <div className={styles.coach_pricing_section}>
              <header className={styles.ps_ud_header}>Coach Pricing</header>
              <main className={styles.ps_ud_main}>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Trail</div>
                  <div className={styles.ud_info_value}>Private</div>
                </div>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Trail</div>
                  <div className={styles.ud_info_value}>Group</div>
                </div>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Introductory</div>
                  <div className={styles.ud_info_value}>Private</div>
                </div>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Introductory</div>
                  <div className={styles.ud_info_value}>Group</div>
                </div>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Main</div>
                  <div className={styles.ud_info_value}>Private</div>
                </div>
                <div
                  className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                >
                  <div className={styles.ud_info_title}>Main</div>
                  <div className={styles.ud_info_value}>Group</div>
                </div>
              </main>
            </div>

            <div className={styles.indi_event}>
              <header className={styles.indi_booking_ud_header}>
                Trail ­· Private
              </header>
              <main className={styles.ps_ud_main}>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Duration</div>
                  <div className={styles.ud_info_value}>90 min</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Price</div>
                  <div className={styles.ud_info_value}>100 AED</div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Avalibility</div>
                  <div className={styles.ud_info_value}>
                    <span className={styles.left_space}></span>01-03-2025 ·
                    08:30 PM
                  </div>
                  <div className={styles.ud_info_value}>
                    <span className={styles.left_space}></span>02-03-2025 ·
                    09:30 PM
                  </div>
                  <div className={styles.ud_info_value}>
                    <span className={styles.left_space}></span>03-03-2025 ·
                    10:30 PM
                  </div>
                  <div className={styles.ud_info_value}>
                    <span className={styles.left_space}></span>04-03-2025 ·
                    11:30 PM
                  </div>
                </div>
                <div className={styles.ps_ud_main_indi_small}>
                  <div className={styles.ud_info_title}>Discount</div>
                  <div className={styles.ud_info_value}>
                    <span className={styles.left_space}></span>10% · 90 AED
                  </div>
                </div>
              </main>
            </div>
          </div>
        ) : null}

        <div className={styles.main_empty_section}></div>
      </main>
    </main>
  );
}
