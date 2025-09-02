import { useState } from "react";
import styles from "./Aside.module.css";
import { useNavigate } from "react-router-dom";

export default function Aside() {
  const navigate = useNavigate();
  return (
    <aside className={styles.aside}>
      {/* home */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.4"
                  d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Dashboard</div>
        </div>
      </div>
      {/* App */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/app");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.4"
                  d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>App</div>
        </div>
      </div>
      {/* users */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/users");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.4"
                  d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M14.0809 14.1499C11.2909 12.2899 6.74094 12.2899 3.93094 14.1499C2.66094 14.9999 1.96094 16.1499 1.96094 17.3799C1.96094 18.6099 2.66094 19.7499 3.92094 20.5899C5.32094 21.5299 7.16094 21.9999 9.00094 21.9999C10.8409 21.9999 12.6809 21.5299 14.0809 20.5899C15.3409 19.7399 16.0409 18.5999 16.0409 17.3599C16.0309 16.1299 15.3409 14.9899 14.0809 14.1499Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  opacity="0.4"
                  d="M19.9894 7.3401C20.1494 9.2801 18.7694 10.9801 16.8594 11.2101C16.8494 11.2101 16.8494 11.2101 16.8394 11.2101H16.8094C16.7494 11.2101 16.6894 11.2101 16.6394 11.2301C15.6694 11.2801 14.7794 10.9701 14.1094 10.4001C15.1394 9.4801 15.7294 8.1001 15.6094 6.6001C15.5394 5.7901 15.2594 5.0501 14.8394 4.4201C15.2194 4.2301 15.6594 4.1101 16.1094 4.0701C18.0694 3.9001 19.8194 5.3601 19.9894 7.3401Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M21.9902 16.5899C21.9102 17.5599 21.2902 18.3999 20.2502 18.9699C19.2502 19.5199 17.9902 19.7799 16.7402 19.7499C17.4602 19.0999 17.8802 18.2899 17.9602 17.4299C18.0602 16.1899 17.4702 14.9999 16.2902 14.0499C15.6202 13.5199 14.8402 13.0999 13.9902 12.7899C16.2002 12.1499 18.9802 12.5799 20.6902 13.9599C21.6102 14.6999 22.0802 15.6299 21.9902 16.5899Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Users</div>
        </div>
      </div>
      {/* Coaches */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/coaches");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.4"
                  d="M18 3H6C3.79 3 2 4.78 2 6.97V17.03C2 19.22 3.79 21 6 21H18C20.21 21 22 19.22 22 17.03V6.97C22 4.78 20.21 3 18 3Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M19 8.75H14C13.59 8.75 13.25 8.41 13.25 8C13.25 7.59 13.59 7.25 14 7.25H19C19.41 7.25 19.75 7.59 19.75 8C19.75 8.41 19.41 8.75 19 8.75Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M19 12.75H15C14.59 12.75 14.25 12.41 14.25 12C14.25 11.59 14.59 11.25 15 11.25H19C19.41 11.25 19.75 11.59 19.75 12C19.75 12.41 19.41 12.75 19 12.75Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M19 16.75H17C16.59 16.75 16.25 16.41 16.25 16C16.25 15.59 16.59 15.25 17 15.25H19C19.41 15.25 19.75 15.59 19.75 16C19.75 16.41 19.41 16.75 19 16.75Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M8.49945 11.7899C9.77523 11.7899 10.8095 10.7557 10.8095 9.47992C10.8095 8.20414 9.77523 7.16992 8.49945 7.16992C7.22368 7.16992 6.18945 8.20414 6.18945 9.47992C6.18945 10.7557 7.22368 11.7899 8.49945 11.7899Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M9.29954 13.1098C8.76954 13.0598 8.21954 13.0598 7.68954 13.1098C6.00954 13.2698 4.65954 14.5998 4.49954 16.2798C4.48954 16.4198 4.52954 16.5598 4.62954 16.6598C4.72954 16.7598 4.85954 16.8298 4.99954 16.8298H11.9995C12.1395 16.8298 12.2795 16.7698 12.3695 16.6698C12.4595 16.5698 12.5095 16.4298 12.4995 16.2898C12.3295 14.5998 10.9895 13.2698 9.29954 13.1098Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Coaches</div>
        </div>
      </div>
      {/* ads */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/ads-manager");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.6"
                  d="M22 7.81V12H9V2H16.19C19.83 2 22 4.17 22 7.81Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M9 2V22H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2H9Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  opacity="0.4"
                  d="M22 12V16.19C22 19.83 19.83 22 16.19 22H9V12H22Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Ads Manager</div>
        </div>
      </div>
      {/* questionaire */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/questionnaire");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M19.75 9C19.75 4.73 16.27 1.25 12 1.25C7.73 1.25 4.25 4.73 4.25 9C4.25 9.41 4.59 9.75 5 9.75C5.41 9.75 5.75 9.41 5.75 9C5.75 5.55 8.55 2.75 12 2.75C15.45 2.75 18.25 5.55 18.25 9C18.25 12.45 15.45 15.25 12 15.25C11.59 15.25 11.25 15.59 11.25 16V22C11.25 22.41 11.59 22.75 12 22.75C12.41 22.75 12.75 22.41 12.75 22V16.71C16.67 16.33 19.75 13.02 19.75 9Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  opacity="0.4"
                  d="M15 19.75H9C8.59 19.75 8.25 19.41 8.25 19C8.25 18.59 8.59 18.25 9 18.25H15C15.41 18.25 15.75 18.59 15.75 19C15.75 19.41 15.41 19.75 15 19.75Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Questionnaire</div>
        </div>
      </div>
      {/* connection */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/connection");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.4"
                  d="M12 15.7V16.31H2V15.7C2 13.94 2.43997 13.5 4.21997 13.5H9.78003C11.56 13.5 12 13.94 12 15.7Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M2 16.3101V17.8101V19.8001C2 21.5601 2.43997 22.0001 4.21997 22.0001H9.78003C11.56 22.0001 12 21.5601 12 19.8001V17.8101V16.3101H2Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <g opacity="0.4">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 14.25C22.4142 14.25 22.75 14.5858 22.75 15C22.75 19.2842 19.2842 22.75 15 22.75C14.7298 22.75 14.4805 22.6047 14.3474 22.3695C14.2142 22.1344 14.2179 21.8458 14.3569 21.6141L15.4069 19.8641C15.62 19.5089 16.0807 19.3938 16.4359 19.6069C16.791 19.82 16.9062 20.2807 16.6931 20.6359L16.4218 21.0881C19.1909 20.4456 21.25 17.9666 21.25 15C21.25 14.5858 21.5858 14.25 22 14.25Z"
                    fill="rgba(30, 63, 142, 1)"
                    className={styles.fill_ig_hover}
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.57821 2.91194C4.8091 3.55436 2.75 6.03342 2.75 9C2.75 9.41421 2.41421 9.75 2 9.75C1.58579 9.75 1.25 9.41421 1.25 9C1.25 4.71579 4.71579 1.25 9 1.25C9.2702 1.25 9.51952 1.39534 9.65265 1.63047C9.78578 1.8656 9.78214 2.15417 9.64312 2.38587L8.59313 4.13587C8.38002 4.49105 7.91933 4.60623 7.56414 4.39312C7.20896 4.18001 7.09378 3.71932 7.30689 3.36413L7.57821 2.91194Z"
                    fill="rgba(30, 63, 142, 1)"
                    className={styles.fill_ig_hover}
                  ></path>
                </g>
                <path
                  opacity="0.4"
                  d="M23 6.5H14C14 8.98 16.02 11 18.5 11C20.99 11 23 8.98 23 6.5Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M23 6.5C23 4.01 20.99 2 18.5 2C16.02 2 14 4.01 14 6.5H23Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Connections</div>
        </div>
      </div>
      {/* reflection */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/reflection");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.4"
                  d="M12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M18 22.75H6C5.59 22.75 5.25 22.41 5.25 22C5.25 21.59 5.59 21.25 6 21.25H18C18.41 21.25 18.75 21.59 18.75 22C18.75 22.41 18.41 22.75 18 22.75Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Reflection</div>
        </div>
      </div>
      {/* settings */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/settings");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.4"
                  d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Settings</div>
        </div>
      </div>
      {/* admin */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/admin");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  opacity="0.4"
                  d="M17.0809 14.1599C14.2909 12.2999 9.74094 12.2999 6.93094 14.1599C5.66094 14.9999 4.96094 16.1499 4.96094 17.3799C4.96094 18.6099 5.66094 19.7499 6.92094 20.5899C8.32094 21.5299 10.1609 21.9999 12.0009 21.9999C13.8409 21.9999 15.6809 21.5299 17.0809 20.5899C18.3409 19.7399 19.0409 18.5999 19.0409 17.3599C19.0309 16.1399 18.3409 14.9899 17.0809 14.1599Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M11.3702 19.26C11.2102 19.26 11.0502 19.19 10.9302 19.08L9.67023 17.82C9.43023 17.58 9.43023 17.18 9.67023 16.94C9.91023 16.7 10.3102 16.7 10.5502 16.94L11.3702 17.76L13.4502 15.68C13.6902 15.44 14.0902 15.44 14.3302 15.68C14.5702 15.92 14.5702 16.32 14.3302 16.56L11.8102 19.08C11.6902 19.2 11.5302 19.26 11.3702 19.26Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Admins</div>
        </div>
      </div>
      {/* transaction */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/transaction");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.4"
                  d="M22 9V16.46C22 18.75 20.14 20.6 17.85 20.6H6.15C3.86 20.6 2 18.75 2 16.46V9H22Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M22 7.5399V8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H17.85C20.14 3.3999 22 5.2499 22 7.5399Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Transactions</div>
        </div>
      </div>
      {/* profile */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/profile");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.4"
                  d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M18.7807 19.36C17.0007 21 14.6207 22.01 12.0007 22.01C9.3807 22.01 7.0007 21 5.2207 19.36C5.4607 18.45 6.1107 17.62 7.0607 16.98C9.7907 15.16 14.2307 15.16 16.9407 16.98C17.9007 17.62 18.5407 18.45 18.7807 19.36Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Profile</div>
        </div>
      </div>
      {/* events */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/events");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M13.1807 11.8601C12.7807 11.8601 12.4207 11.6401 12.2507 11.2801L10.8007 8.39013L10.3807 9.17009C10.1507 9.60009 9.69071 9.87011 9.20071 9.87011H8.4707C8.0607 9.87011 7.7207 9.53011 7.7207 9.12011C7.7207 8.71011 8.0607 8.37011 8.4707 8.37011H9.11069L9.9007 6.91008C10.0907 6.57008 10.4707 6.3401 10.8307 6.3601C11.2207 6.3601 11.5707 6.5901 11.7507 6.9301L13.1807 9.79009L13.5207 9.10009C13.7507 8.64009 14.2007 8.3601 14.7207 8.3601H15.5307C15.9407 8.3601 16.2807 8.7001 16.2807 9.1101C16.2807 9.5201 15.9407 9.8601 15.5307 9.8601H14.8207L14.1107 11.2701C13.9307 11.6401 13.5807 11.8601 13.1807 11.8601Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  opacity="0.4"
                  d="M2.74982 18.6501C2.33982 18.6501 1.99982 18.3101 1.99982 17.9001V12.2001C1.94982 9.49007 2.95981 6.93007 4.83981 5.01007C6.71981 3.10007 9.23983 2.05005 11.9498 2.05005C17.4898 2.05005 21.9998 6.56004 21.9998 12.1V17.8C21.9998 18.21 21.6598 18.55 21.2498 18.55C20.8398 18.55 20.4998 18.21 20.4998 17.8V12.1C20.4998 7.39004 16.6698 3.55005 11.9498 3.55005C9.63983 3.55005 7.49982 4.44006 5.90982 6.06006C4.30982 7.69006 3.45982 9.86005 3.49982 12.1801V17.8901C3.49982 18.3101 3.16982 18.6501 2.74982 18.6501Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M5.94 12.4502H5.81C3.71 12.4502 2 14.1602 2 16.2602V18.1402C2 20.2402 3.71 21.9502 5.81 21.9502H5.94C8.04 21.9502 9.75 20.2402 9.75 18.1402V16.2602C9.75 14.1602 8.04 12.4502 5.94 12.4502Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M18.19 12.4502H18.06C15.96 12.4502 14.25 14.1602 14.25 16.2602V18.1402C14.25 20.2402 15.96 21.9502 18.06 21.9502H18.19C20.29 21.9502 22 20.2402 22 18.1402V16.2602C22 14.1602 20.29 12.4502 18.19 12.4502Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Events</div>
        </div>
      </div>
      {/* journal */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/journal");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.4"
                  d="M20.5 7V15H6.35C4.78 15 3.5 16.28 3.5 17.85V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M20.5 15V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15H20.5Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M16 7.75H8C7.59 7.75 7.25 7.41 7.25 7C7.25 6.59 7.59 6.25 8 6.25H16C16.41 6.25 16.75 6.59 16.75 7C16.75 7.41 16.41 7.75 16 7.75Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M13 11.25H8C7.59 11.25 7.25 10.91 7.25 10.5C7.25 10.09 7.59 9.75 8 9.75H13C13.41 9.75 13.75 10.09 13.75 10.5C13.75 10.91 13.41 11.25 13 11.25Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Journal</div>
        </div>
      </div>
      {/* shop */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/shop");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.4"
                  d="M21.3709 11.3901V17.3801C21.3709 20.1401 19.1309 22.3801 16.3709 22.3801H7.63086C4.87086 22.3801 2.63086 20.1401 2.63086 17.3801V11.4601C3.39086 12.2801 4.47086 12.7501 5.64086 12.7501C6.90086 12.7501 8.11086 12.1201 8.87086 11.1101C9.55086 12.1201 10.7109 12.7501 12.0009 12.7501C13.2809 12.7501 14.4209 12.1501 15.1109 11.1501C15.8809 12.1401 17.0709 12.7501 18.3109 12.7501C19.5209 12.7501 20.6209 12.2601 21.3709 11.3901Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M14.9894 1.25H8.98936L8.24936 8.61C8.18936 9.29 8.28936 9.93 8.53936 10.51C9.11936 11.87 10.4794 12.75 11.9994 12.75C13.5394 12.75 14.8694 11.89 15.4694 10.52C15.6494 10.09 15.7594 9.59 15.7694 9.08V8.89L14.9894 1.25Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  opacity="0.6"
                  d="M22.3598 8.27L22.0698 5.5C21.6498 2.48 20.2798 1.25 17.3498 1.25H13.5098L14.2498 8.75C14.2598 8.85 14.2698 8.96 14.2698 9.15C14.3298 9.67 14.4898 10.15 14.7298 10.58C15.4498 11.9 16.8498 12.75 18.3098 12.75C19.6398 12.75 20.8398 12.16 21.5898 11.12C22.1898 10.32 22.4598 9.31 22.3598 8.27Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  opacity="0.6"
                  d="M6.58965 1.25C3.64965 1.25 2.28965 2.48 1.85965 5.53L1.58965 8.28C1.48965 9.35 1.77965 10.39 2.40965 11.2C3.16965 12.19 4.33965 12.75 5.63965 12.75C7.09965 12.75 8.49965 11.9 9.20965 10.6C9.46965 10.15 9.63965 9.63 9.68965 9.09L10.4697 1.26H6.58965V1.25Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
                <path
                  d="M11.3491 16.66C10.0791 16.79 9.11914 17.87 9.11914 19.15V22.38H14.8691V19.5C14.8791 17.41 13.6491 16.42 11.3491 16.66Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Retail</div>
        </div>
      </div>
      {/* Chat */}
      <div
        className={styles.indi_option_aside}
        onClick={() => {
          navigate("/chat");
        }}
      >
        <div className={styles.indi_option_inner}>
          <div className={styles.ip_svg_section}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.ip_svg}
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
                  d="M13.6288 20.4718L13.0867 21.3877C12.6035 22.204 11.3965 22.204 10.9133 21.3877L10.3712 20.4718C9.95073 19.7614 9.74049 19.4063 9.40279 19.2098C9.06509 19.0134 8.63992 19.0061 7.78958 18.9915C6.53422 18.9698 5.74689 18.8929 5.08658 18.6194C3.86144 18.1119 2.88807 17.1386 2.3806 15.9134C2 14.9946 2 13.8297 2 11.5V10.5C2 7.22657 2 5.58985 2.7368 4.38751C3.14908 3.71473 3.71473 3.14908 4.38751 2.7368C5.58985 2 7.22657 2 10.5 2H13.5C16.7734 2 18.4101 2 19.6125 2.7368C20.2853 3.14908 20.8509 3.71473 21.2632 4.38751C22 5.58985 22 7.22657 22 10.5V11.5C22 13.8297 22 14.9946 21.6194 15.9134C21.1119 17.1386 20.1386 18.1119 18.9134 18.6194C18.2531 18.8929 17.4658 18.9698 16.2104 18.9915C15.36 19.0061 14.9349 19.0134 14.5972 19.2098C14.2595 19.4062 14.0492 19.7614 13.6288 20.4718Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>{" "}
                <path
                  d="M17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>{" "}
                <path
                  d="M13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>{" "}
                <path
                  d="M9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z"
                  fill="rgba(30, 63, 142, 1)"
                  className={styles.fill_ig_hover}
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className={styles.ip_name_section}>Chat</div>
        </div>
      </div>
      <div className={styles.empty_space}></div>
    </aside>
  );
}
