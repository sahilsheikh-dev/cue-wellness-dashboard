import axios from "axios";
import styles from "./Reflection.module.css";
import { useState, useEffect, useContext, useRef } from "react";
import DataContext from "../../DataContext/DataContext";
import { useNavigate } from "react-router-dom";

export default function Connection() {
  const navigate = useNavigate();
  const { data } = useContext(DataContext);

  // all connections layer 1 is here

  const [show_guidelines, setShow_guidelines] = useState(false);
  const [show_subtopics, setShow_subTopics] = useState(false);
  const [show_questions, setShow_questions] = useState(false);
  const [show_guide, setShow_guide] = useState(false);

  // all connection related useSttaes
  const [all_connections, setAll_connections] = useState([]);
  const [edit_connection, setEdit_connection] = useState(false);
  const [to_edit_connection, setTo_edit_connection] = useState({});
  const connection_input_ref = useRef(null);
  const connection_checkbox_ref = useRef(null);
  // edit_connection ref
  const edit_connection_input_ref = useRef(null);
  const edit_connection_checkbox_ref = useRef(null);

  // all sub topic related variables
  const [all_subTopics, setAll_subTopics] = useState([]);
  const [sub_topic, setSubTopic] = useState({});

  // ref starts ahere
  const add_sub_topic_input_ref = useRef(null);
  const add_sub_topic_checkbox_ref = useRef(null);

  // edit sub_topic
  const [edit_sub_topic, setEdit_sub_topic] = useState(false);
  const [to_edit_sub_topic, setTo_edit_sub_topic] = useState({});
  const edit_sub_topic_input_ref = useRef(null);
  const edit_sub_topic_checkbox_ref = useRef(null);

  // questions
  const [all_questions, setAll_questions] = useState([]);
  const [current_question, setCurrent_question] = useState({});
  const [open_edit_question, setOpen_edit_question] = useState(false);
  const [to_edit_question, setTo_edit_question] = useState({});
  const add_question_ref = useRef(null);
  const edit_question_ref = useRef(null);

  const add_question = () => {
    if (add_question_ref.current.value != "") {
      axios
        .post(
          data.url + "/admin/reflection/add-question",
          {
            sub_topic_id: current_question.id,
            question: add_question_ref.current.value,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          add_question_ref.current.value = "";
          if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else if (res.data.redirect != undefined) {
            navigate("/login");
          } else {
            get_questions(current_question.id);
          }
        });
    } else {
      alert("Please enter a question");
    }
  };

  const delete_question = (id) => {
    let do_it = window.confirm("Are you sure, you want to delete this?");
    if (do_it) {
      axios
        .post(
          data.url + "/admin/reflection/delete-question",
          {
            id: id,
            sub_topic_id: current_question.id,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else if (res.data.redirect) {
            navigate(res.data.redirect);
          } else {
            get_questions(current_question.id);
          }
        });
    }
  };

  const edit_question = () => {
    if (edit_question_ref.current.value != undefined) {
      axios
        .post(
          data.url + "/admin/reflection/edit-question",
          {
            content: edit_question_ref.current.value,
            id: to_edit_question.id,
            sub_topic_id: current_question.id,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else if (res.data.redirect != undefined) {
            navigate(res.data.redirect);
          } else {
            get_questions(current_question.id);
            edit_question_ref.current.value = "";
            setOpen_edit_question(false);
          }
        });
    } else {
      alert("Please enter the point");
    }
  };

  // guide
  const [all_guides, setAll_guides] = useState([]);
  const [current_guide, setCurrent_guide] = useState({});
  const [open_edit_guide, setOpen_edit_guide] = useState(false);
  const [to_edit_guide, setTo_edit_guide] = useState({});
  const add_guide_ref = useRef(null);
  const add_guide_title_ref = useRef(null);
  const [add_guide_all, setAdd_guide_all] = useState([""]);
  const edit_guide_ref = useRef(null);

  const add_guide = () => {
    let all_fill = true;
    for (let i = 0; i < add_guide_all.length; i++) {
      if (add_guide_all[i] == "") {
        alert("Please fill in all the input boxes");
        all_fill = false;
        break;
      }
    }

    if (add_guide_title_ref.current.value == "") {
      alert("Please enter the title");
      all_fill = false;
    }

    if (all_fill == true) {
      axios
        .post(
          data.url + "/admin/reflection/add-guide",
          {
            sub_topic_id: current_guide.id,
            title: add_guide_title_ref.current.value,
            content: add_guide_all,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else if (res.data.redirect != undefined) {
            navigate(res.data.redirect);
          } else {
            // get teh guides
            setAdd_guide_all([""]);
            add_guide_title_ref.current.value = "";
            get_guide(current_guide.id);
          }
        });
    }
  };

  const get_guide = (id) => {
    axios
      .post(
        data.url + "/admin/reflection/get-guide",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else {
          setAll_guides(res.data.supply);
        }
      });
  };

  const add_connection = () => {
    if (connection_input_ref.current.value == "") {
      alert("Please enter a reflection name");
    } else {
      axios
        .post(
          data.url + "/admin/reflection/add-reflection",
          {
            reflection: connection_input_ref.current.value,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else if (res.data.redirect != undefined) {
            navigate("/login");
          } else {
            // get the connections here
            connection_input_ref.current.value = "";
            get_connections();
          }
        });
    }
  };

  const get_connections = () => {
    axios
      .post(
        data.url + "/admin/reflection/get-reflections",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else {
          setAll_connections(res.data.supply);
        }
      });
  };

  useEffect(() => {
    get_connections();
  }, []);

  // to edit connection function
  const edit_connection_fun = () => {
    if (edit_connection_input_ref.current.value != "") {
      axios
        .post(
          data.url + "/admin/reflection/edit-reflection",
          {
            id: to_edit_connection.id,
            title: to_edit_connection.title,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else if (res.data.redirect != undefined) {
            navigate("/login");
          } else {
            edit_connection_input_ref.current.value = "";
            setEdit_connection(false);
            get_connections();
          }
        });
    } else {
      alert("Please enter a valid connection react");
    }
  };

  const get_sub_topics = (id) => {
    axios
      .post(
        data.url + "/admin/reflection/get-sub-topics",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else if (res.data.redirect != undefined) {
          navigate("/login");
        } else {
          setAll_subTopics(res.data.supply);
        }
      });
  };

  // questions
  const get_questions = (id) => {
    axios
      .post(
        data.url + "/admin/reflection/get-questions",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else if (res.data.redirect != undefined) {
          navigate("/login");
        } else {
          setAll_questions(res.data.supply);
        }
      });
  };

  // guide

  const add_sub_topic = () => {
    if (add_sub_topic_input_ref.current.value == "") {
      alert("Please enter a valid sub topic");
    } else {
      axios
        .post(
          data.url + "/admin/reflection/add-sub-topic",
          {
            sub_topic: add_sub_topic_input_ref.current.value,
            outer_id: sub_topic.id,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else if (res.data.redirect != undefined) {
            navigate("/login");
          } else {
            get_sub_topics(sub_topic.id);
            add_sub_topic_input_ref.current.value = "";
          }
        });
    }
  };

  const contains_sub_topics = (id) => {
    axios
      .post(
        data.url + "/admin/reflection/contain-sub-topics",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else if (res.data.redirect != undefined) {
          navigate("/login");
        } else {
          get_sub_topics(sub_topic.id);
        }
      });
  };

  const contains_questions = (id) => {
    axios
      .post(
        data.url + "/admin/reflection/contain-questions",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else if (res.data.redirect != undefined) {
          navigate("/login");
        } else {
          get_sub_topics(sub_topic.id);
        }
      });
  };

  const contains_guide = (id) => {
    axios
      .post(
        data.url + "/admin/reflection/contains-guide",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else if (res.data.redirect != undefined) {
          navigate("/login");
        } else {
          get_sub_topics(sub_topic.id);
        }
      });
  };

  const edit_sub_topic_fun = () => {
    axios
      .post(
        data.url + "/admin/reflection/edit-sub-topic",
        {
          id: to_edit_sub_topic.id,
          title: to_edit_sub_topic.title,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else if (res.data.redirect != undefined) {
          navigate("/login");
        } else {
          get_sub_topics(sub_topic.id);
          edit_sub_topic_input_ref.current.value = "";
          setEdit_sub_topic(false);
        }
      });
  };

  const delete_reflection = (id) => {
    if (id != undefined || id != null || id != "") {
      let do_it = window.confirm("Are you sure, you want to delete this?");
      if (do_it == true) {
        axios
          .post(
            data.url + "/admin/reflection/delete",
            {
              id: id,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            if (res.data.alert != undefined) {
              alert(res.data.alert);
            } else if (res.data.redirect != undefined) {
              navigate(res.data.redirect);
            } else {
              // do something
              get_connections();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      alert("Something went wrong");
    }
  };

  const delete_sub_topic = (id) => {
    if (id != undefined || id != null || id != "") {
      let do_it = window.confirm("Are you sure, you want to delete this?");
      if (do_it) {
        console.log(id);
        axios
          .post(
            data.url + "/admin/reflection/delete",
            {
              id: id,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            if (res.data.alert != undefined) {
              alert(res.data.alert);
            } else if (res.data.redirect != undefined) {
              navigate(res.data.redirect);
            } else {
              // do something
              get_sub_topics(sub_topic.id);
            }
          });
      }
    } else {
      alert("Something went wrong");
    }
  };

  const delete_guide = (id) => {
    axios
      .post(
        data.url + "/admin/reflection/delete-guide",
        {
          id: id.id,
          sub_topic_id: current_guide.id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else {
          get_guide(current_guide.id);
        }
      });
  };

  const edit_guide_fun = () => {
    console.log(current_guide);
    console.log(sub_topic);
    axios
      .post(
        data.url + "/admin/reflection/edit-guide",
        {
          id: sub_topic.id,
          guide: current_guide,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else if (res.data.redirect) {
          navigate("/login");
        } else {
          get_guide(sub_topic.id);
          edit_guide_title_ref.current.value = "";
          setOpen_edit_guide(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [edit_guide, setEdit_guide] = useState(false);
  const edit_guide_title_ref = useRef(null);

  return (
    <>
      <div className={styles.important_info_section}>
        <div className={styles.profile_img_section}>
          <img
            src={require("./reflection.jpg")}
            alt=""
            className={styles.profile_img}
          />
        </div>
        <div className={styles.profile_info}>
          <div className={styles.profile_name_pp}>Reflections</div>
        </div>
        <div className={styles.profile_goto_chat_section}>
          {/* <div className={styles.profile_goto_chat_btn}>Go to chat</div> */}
        </div>
      </div>

      <div className={styles.all_main_options_ud}>
        <div
          className={styles.main_indi_options}
          onClick={() => {
            setShow_guidelines(false);
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
            <div className={styles.mio_main_name_ud}>Connections</div>
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
            setShow_guidelines(true);
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
                    d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z"
                    fill="#1C274C"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                  <path
                    d="M16.5189 16.5013C16.6939 16.3648 16.8526 16.2061 17.1701 15.8886L21.1275 11.9312C21.2231 11.8356 21.1793 11.6708 21.0515 11.6264C20.5844 11.4644 19.9767 11.1601 19.4083 10.5917C18.8399 10.0233 18.5356 9.41561 18.3736 8.94849C18.3292 8.82066 18.1644 8.77687 18.0688 8.87254L14.1114 12.8299C13.7939 13.1474 13.6352 13.3061 13.4987 13.4811C13.3377 13.6876 13.1996 13.9109 13.087 14.1473C12.9915 14.3476 12.9205 14.5606 12.7786 14.9865L12.5951 15.5368L12.3034 16.4118L12.0299 17.2323C11.9601 17.4419 12.0146 17.6729 12.1708 17.8292C12.3271 17.9854 12.5581 18.0399 12.7677 17.9701L13.5882 17.6966L14.4632 17.4049L15.0135 17.2214L15.0136 17.2214C15.4394 17.0795 15.6524 17.0085 15.8527 16.913C16.0891 16.8004 16.3124 16.6623 16.5189 16.5013Z"
                    fill="#1C274C"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                  <path
                    d="M22.3665 10.6922C23.2112 9.84754 23.2112 8.47812 22.3665 7.63348C21.5219 6.78884 20.1525 6.78884 19.3078 7.63348L19.1806 7.76071C19.0578 7.88348 19.0022 8.05496 19.0329 8.22586C19.0522 8.33336 19.0879 8.49053 19.153 8.67807C19.2831 9.05314 19.5288 9.54549 19.9917 10.0083C20.4545 10.4712 20.9469 10.7169 21.3219 10.847C21.5095 10.9121 21.6666 10.9478 21.7741 10.9671C21.945 10.9978 22.1165 10.9422 22.2393 10.8194L22.3665 10.6922Z"
                    fill="#1C274C"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H14.5C14.9142 8.25 15.25 8.58579 15.25 9C15.25 9.41421 14.9142 9.75 14.5 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9ZM7.25 13C7.25 12.5858 7.58579 12.25 8 12.25H11C11.4142 12.25 11.75 12.5858 11.75 13C11.75 13.4142 11.4142 13.75 11 13.75H8C7.58579 13.75 7.25 13.4142 7.25 13ZM7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H9.5C9.91421 16.25 10.25 16.5858 10.25 17C10.25 17.4142 9.91421 17.75 9.5 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17Z"
                    fill="#1C274C"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className={styles.mio_main_name_ud}>Guidelines</div>
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

      {show_guidelines ? (
        <div>this is guideline section</div>
      ) : show_subtopics ? (
        <div className={styles.outer_cp_ud_indi_awareness}>
          <div className={styles.coach_pricing_section}>
            <header className={styles.ps_ud_header}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.backarrow}
                onClick={() => {
                  setShow_subTopics(false);
                }}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                    fill="#0F0F0F"
                  ></path>
                </g>
              </svg>
              {sub_topic.title}

              <div className={styles.instructions}>
                <div className={styles.indi_instruction}>Guide</div>
                <div className={styles.indi_instruction}>Points</div>
                <div className={styles.indi_instruction}>Subtopic</div>
                <div className={styles.indi_instruction}>Delete</div>
                <div className={styles.indi_instruction}>Edit</div>
              </div>
            </header>
            <main className={styles.ps_ud_main}>
              {all_subTopics.length == 0 ? (
                <div className={styles.no_show}>No Subtopics to show</div>
              ) : null}
              {all_subTopics.map((item) => {
                console.log(item);
                return (
                  <div
                    className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                    onClick={() => {
                      // setCurrent_question(add_to_current_question(item.id));
                      // setOpen_question(true);
                      // setShow_subTopics(false);

                      //  if their are no more subtopics then open the questions section and if their are subtopics then open the subtopics section

                      if (item.contains_subtopic == true) {
                        setSubTopic({ title: item.title, id: item.id });
                        setShow_questions(false);
                        setShow_guide(false);
                        setShow_subTopics(true);
                        get_sub_topics(item.id);
                      } else if (item.contain_guide == true) {
                        setSubTopic({ title: item.title, id: item.id });
                        setCurrent_guide({ title: item.title, id: item.id });
                        setShow_subTopics(false);
                        setShow_questions(false);
                        setShow_guide(true);
                        get_guide(item.id);
                        // get_sub_topics(item.id);
                      } else if (item.contain_questions == true) {
                        console.log("here 2");
                        setSubTopic({ title: item.title, id: item.id });
                        setCurrent_question({ title: item.title, id: item.id });
                        setShow_subTopics(false);
                        setShow_guide(false);
                        setShow_questions(true);
                        get_questions(item.id);
                      }
                    }}
                  >
                    {item.contains_subtopic == false ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.awareness_add_svg}
                        onClick={(e) => {
                          contains_sub_topics(item.id);
                          e.stopPropagation();
                        }}
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                          ></circle>{" "}
                          <path
                            d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.awareness_add_svg}
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <circle
                            opacity="0.5"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                          ></circle>{" "}
                          <path
                            d="M8.5 12.5L10.5 14.5L15.5 9.5"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    )}

                    {item.contain_guide == false ? (
                      <svg
                        viewBox="0 0 24 24"
                        id="magicoon-Filled"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1e3f8e"
                        className={styles.awareness_guide_svg}
                        onClick={(e) => {
                          contains_guide(item.id);
                          e.stopPropagation();
                        }}
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <defs> </defs> <title>menu</title>{" "}
                          <g id="menu-Filled">
                            {" "}
                            <path
                              id="menu-Filled-2"
                              data-name="menu-Filled"
                              class="cls-1"
                              d="M2,5A1,1,0,0,1,3,4H16a1,1,0,0,1,0,2H3A1,1,0,0,1,2,5Zm19,6H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-9,7H3a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
                            ></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.awareness_guide_svg}
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <circle
                            opacity="0.5"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                          ></circle>{" "}
                          <path
                            d="M8.5 12.5L10.5 14.5L15.5 9.5"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    )}

                    {item.contain_questions == false ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.awareness_question_svg}
                        onClick={(e) => {
                          contains_questions(item.id);
                          e.stopPropagation();
                        }}
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                          ></circle>{" "}
                          <path
                            d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <circle cx="12" cy="16" r="1" fill="#1e3f8e"></circle>{" "}
                        </g>
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.awareness_question_svg}
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <circle
                            opacity="0.5"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                          ></circle>{" "}
                          <path
                            d="M8.5 12.5L10.5 14.5L15.5 9.5"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    )}

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.awareness_edit_svg}
                      onClick={(e) => {
                        setTo_edit_sub_topic(item);
                        setEdit_sub_topic(true);
                        e.stopPropagation();
                      }}
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.awareness_delete_svg_st}
                      onClick={(e) => {
                        delete_sub_topic(item.id);
                        e.stopPropagation();
                      }}
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
                          d="M3 6.98996C8.81444 4.87965 15.1856 4.87965 21 6.98996"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M8.00977 5.71997C8.00977 4.6591 8.43119 3.64175 9.18134 2.8916C9.93148 2.14146 10.9489 1.71997 12.0098 1.71997C13.0706 1.71997 14.0881 2.14146 14.8382 2.8916C15.5883 3.64175 16.0098 4.6591 16.0098 5.71997"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 13V18"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M19 9.98999L18.33 17.99C18.2225 19.071 17.7225 20.0751 16.9246 20.8123C16.1266 21.5494 15.0861 21.9684 14 21.99H10C8.91389 21.9684 7.87336 21.5494 7.07541 20.8123C6.27745 20.0751 5.77745 19.071 5.67001 17.99L5 9.98999"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>

                    <div className={styles.ud_info_title}>{item.title}</div>
                    {item.contains_subtopic ? (
                      <div className={styles.ud_info_value}>
                        Contains subtopics
                      </div>
                    ) : item.contain_guide ? (
                      <div className={styles.ud_info_value}>Contains Guide</div>
                    ) : item.contain_questions ? (
                      <div className={styles.ud_info_value}>
                        Contains Questions
                      </div>
                    ) : null}
                    <div className={styles.ud_info_value}>
                      {item.show_to_coach == true ? "Shown to coach" : ""}
                    </div>
                  </div>
                );
              })}
            </main>
          </div>

          {edit_sub_topic ? (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.backarrow}
                  onClick={() => {
                    edit_sub_topic_input_ref.current.value = "";
                    setEdit_sub_topic(false);
                  }}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                      fill="#0F0F0F"
                      className={styles.backarrow_svg_hover}
                    ></path>
                  </g>
                </svg>
                Edit Sub Topic
              </div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Edit sub topic here"
                  ref={edit_sub_topic_input_ref}
                  value={to_edit_sub_topic.title}
                  onInput={(e) => {
                    setTo_edit_sub_topic({
                      ...to_edit_sub_topic,
                      title: edit_sub_topic_input_ref.current.value,
                    });
                  }}
                ></input>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_sub_topic_fun();
                }}
              >
                Edit Sub Topic
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Sub Topic</div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter new sub topic here"
                  ref={add_sub_topic_input_ref}
                ></input>
              </div>

              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  add_sub_topic();
                }}
              >
                Add Sub Topic
              </div>
            </div>
          )}
        </div>
      ) : show_questions ? (
        <div className={styles.outer_cp_ud_indi_awareness}>
          <div className={styles.indi_event_questions}>
            <header className={styles.indi_booking_ud_header}>
              <div className={styles.questions_heading}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.backarrow}
                  onClick={() => {
                    setShow_questions(false);
                    get_connections();
                  }}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                      fill="#0F0F0F"
                    ></path>
                  </g>
                </svg>
                {current_question.title}
              </div>
            </header>
            <main className={styles.ps_ud_main}>
              {all_questions.length == 0 ? (
                <div className={styles.no_show}>No Points to show</div>
              ) : null}
              {all_questions.map((indi_question, index) => {
                return (
                  <div className={`${styles.ps_ud_main_indi}`}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.awareness_edit_svg}
                      onClick={(e) => {
                        // setTo_edit_sub_topic(isolate_indi_sub_topic(item.id));
                        // setEdit_sub_topic(true);
                        // awareness_input_ref_edit.current.value = item.topic;
                        e.stopPropagation();
                        setOpen_edit_question(true);
                        setTo_edit_question(indi_question);
                        // setOpen_edit_question(true);
                        // setCurrent_edit_question(indi_question);
                      }}
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.awareness_delete_svg}
                      onClick={(e) => {
                        delete_question(indi_question.id);
                        e.stopPropagation();
                      }}
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
                          d="M3 6.98996C8.81444 4.87965 15.1856 4.87965 21 6.98996"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M8.00977 5.71997C8.00977 4.6591 8.43119 3.64175 9.18134 2.8916C9.93148 2.14146 10.9489 1.71997 12.0098 1.71997C13.0706 1.71997 14.0881 2.14146 14.8382 2.8916C15.5883 3.64175 16.0098 4.6591 16.0098 5.71997"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 13V18"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M19 9.98999L18.33 17.99C18.2225 19.071 17.7225 20.0751 16.9246 20.8123C16.1266 21.5494 15.0861 21.9684 14 21.99H10C8.91389 21.9684 7.87336 21.5494 7.07541 20.8123C6.27745 20.0751 5.77745 19.071 5.67001 17.99L5 9.98999"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>

                    <div className={styles.ud_info_title}>
                      {index + 1 + "."}{" "}
                      <span className={styles.flc}>
                        {indi_question.content}
                      </span>
                    </div>
                  </div>
                );
              })}
            </main>
          </div>

          {open_edit_question ? (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.backarrow}
                  onClick={() => {
                    // edit_type_ref.current.value = "default";
                    // edit_content_ref.current.value = "";
                    // setEdit_sub_topic(false);
                    setOpen_edit_question(false);
                    edit_question_ref.current.value = "";
                  }}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                      fill="#0F0F0F"
                      className={styles.backarrow_svg_hover}
                    ></path>
                  </g>
                </svg>
                Edit Point
              </div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Edit question here"
                  ref={edit_question_ref}
                  value={to_edit_question.content}
                  onInput={(e) => {
                    // setCurrent_edit_question({
                    //   ...current_edit_question,
                    //   content: edit_question_ref.current.value,
                    // });
                    setTo_edit_question({
                      ...to_edit_question,
                      content: edit_question_ref.current.value,
                    });
                  }}
                ></input>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_question();
                }}
              >
                Edit Point
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add points</div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter your point here"
                  ref={add_question_ref}
                ></input>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  add_question();
                }}
              >
                Add Point
              </div>
            </div>
          )}
        </div>
      ) : show_guide ? (
        <div className={styles.outer_cp_ud_indi_awareness}>
          <div className={styles.indi_event_guide}>
            <header className={styles.indi_booking_ud_header}>
              <div className={styles.questions_heading}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.backarrow}
                  onClick={() => {
                    setShow_guide(false);
                    setShow_subTopics(true);
                  }}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                      fill="#0F0F0F"
                    ></path>
                  </g>
                </svg>
                Guide
              </div>
            </header>
            <main className={styles.ps_ud_main}>
              <div className={styles.ps_ud_main_indi_small}>
                {all_guides.length == 0 ? (
                  <div className={styles.no_show}>No guide to show</div>
                ) : null}
                {all_guides.map((item, index) => {
                  return (
                    <div className={styles.ud_info_des}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.mg_edit_svg}
                        onClick={(e) => {
                          setCurrent_guide(item);
                          setEdit_guide(true);
                          setOpen_edit_guide(true);
                        }}
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.mg_delete_svg}
                        onClick={(e) => {
                          delete_guide(item);
                          e.stopPropagation();
                        }}
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
                            d="M3 6.98996C8.81444 4.87965 15.1856 4.87965 21 6.98996"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M8.00977 5.71997C8.00977 4.6591 8.43119 3.64175 9.18134 2.8916C9.93148 2.14146 10.9489 1.71997 12.0098 1.71997C13.0706 1.71997 14.0881 2.14146 14.8382 2.8916C15.5883 3.64175 16.0098 4.6591 16.0098 5.71997"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M12 13V18"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M19 9.98999L18.33 17.99C18.2225 19.071 17.7225 20.0751 16.9246 20.8123C16.1266 21.5494 15.0861 21.9684 14 21.99H10C8.91389 21.9684 7.87336 21.5494 7.07541 20.8123C6.27745 20.0751 5.77745 19.071 5.67001 17.99L5 9.98999"
                            stroke="#1e3f8e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      <div className={styles.infi_des_title}>
                        {index + 1}. {item.title}
                      </div>
                      {item.content.map((content_item, index) => {
                        let numbering = "";
                        switch (index) {
                          case 0:
                            numbering = "a";
                            break;
                          case 1:
                            numbering = "b";
                            break;
                          case 2:
                            numbering = "c";
                            break;
                          case 3:
                            numbering = "d";
                            break;
                          case 4:
                            numbering = "e";
                            break;
                          case 5:
                            numbering = "f";
                            break;
                          case 6:
                            numbering = "g";
                            break;
                          case 7:
                            numbering = "h";
                            break;
                          case 8:
                            numbering = "i";
                            break;
                          case 9:
                            numbering = "j";
                            break;
                        }

                        if (index == 0) {
                          return (
                            <div className={styles.indi_question_guide}>
                              <span className={styles.numbering}>
                                {numbering + ") "}
                              </span>
                              {content_item}
                            </div>
                          );
                        } else {
                          return (
                            <>
                              <div className={styles.g_line}></div>
                              <div className={styles.indi_question_guide}>
                                <span className={styles.numbering}>
                                  {numbering + ") "}
                                </span>
                                {content_item}
                              </div>
                            </>
                          );
                        }
                      })}
                    </div>
                  );
                })}
              </div>
            </main>
          </div>

          {open_edit_guide ? (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.backarrow}
                  onClick={() => {
                    setEdit_guide(false);
                  }}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                      fill="#0F0F0F"
                      className={styles.backarrow_svg_hover}
                    ></path>
                  </g>
                </svg>
                Edit Guide
              </div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Edit the title here"
                  ref={edit_guide_title_ref}
                  value={current_guide.title}
                  onChange={(e) => {
                    setCurrent_guide({
                      ...current_guide,
                      title: e.target.value,
                    });
                  }}
                ></input>
              </div>
              {current_guide.content.map((item, index) => {
                return (
                  <div className={styles.ta_section}>
                    <textarea
                      className={styles.ta}
                      placeholder="Edit the guide here"
                      // ref={edit_guide_ref}
                      value={item}
                      onChange={(e) => {
                        setCurrent_guide({
                          ...current_guide,
                          content: current_guide.content.map((val, i) =>
                            i === index ? e.target.value : val
                          ),
                        });
                      }}
                    ></textarea>
                  </div>
                );
              })}
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_guide_fun();
                }}
              >
                Edit Guide
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Guide</div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter your guide title here"
                  ref={add_guide_title_ref}
                ></input>
              </div>

              {add_guide_all.map((item, index) => {
                return (
                  <div className={styles.ta_section}>
                    <textarea
                      className={styles.ta}
                      placeholder="Enter your guide content here"
                      value={item}
                      onInput={(e) => {
                        let all_guide_add = add_guide_all;
                        all_guide_add[index] = e.target.value;
                        setAdd_guide_all([...all_guide_add]);
                        // setAdd_guide_all([])
                      }}
                    ></textarea>
                  </div>
                );
              })}

              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  setAdd_guide_all([...add_guide_all, ""]);
                }}
              >
                Add Input Box
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  add_guide();
                }}
              >
                Add Guide
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.outer_cp_ud}>
          <div className={styles.coach_pricing_section}>
            <header className={styles.ps_ud_header}>Reflections</header>
            <main className={styles.ps_ud_main}>
              {all_connections.length == 0 ? (
                <div className={styles.no_show}>No Reflections to show</div>
              ) : null}
              {all_connections.map((item) => {
                return (
                  <div
                    className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                    onClick={() => {
                      setSubTopic({ title: item.title, id: item.id });
                      setShow_subTopics(true);
                      get_sub_topics(item.id);
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.awareness_edit_svg}
                      onClick={(e) => {
                        setTo_edit_connection(item);
                        setEdit_connection(true);
                        e.stopPropagation();
                      }}
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.awareness_delete_svg}
                      onClick={(e) => {
                        delete_reflection(item.id);
                        e.stopPropagation();
                      }}
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
                          d="M3 6.98996C8.81444 4.87965 15.1856 4.87965 21 6.98996"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M8.00977 5.71997C8.00977 4.6591 8.43119 3.64175 9.18134 2.8916C9.93148 2.14146 10.9489 1.71997 12.0098 1.71997C13.0706 1.71997 14.0881 2.14146 14.8382 2.8916C15.5883 3.64175 16.0098 4.6591 16.0098 5.71997"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 13V18"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M19 9.98999L18.33 17.99C18.2225 19.071 17.7225 20.0751 16.9246 20.8123C16.1266 21.5494 15.0861 21.9684 14 21.99H10C8.91389 21.9684 7.87336 21.5494 7.07541 20.8123C6.27745 20.0751 5.77745 19.071 5.67001 17.99L5 9.98999"
                          stroke="#1e3f8e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>

                    <div className={styles.ud_info_title}>{item.title}</div>
                  </div>
                );
              })}
            </main>
          </div>
          {edit_connection ? (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.backarrow}
                  onClick={() => {
                    edit_connection_input_ref.current.value = "";
                    edit_connection_checkbox_ref.current.checked = false;
                    setEdit_connection(false);
                  }}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                      fill="#0F0F0F"
                    ></path>
                  </g>
                </svg>{" "}
                Edit Reflection
              </div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter new Connection here"
                  value={to_edit_connection.title}
                  ref={edit_connection_input_ref}
                  onChange={() => {
                    setTo_edit_connection({
                      ...to_edit_connection,
                      title: edit_connection_input_ref.current.value,
                    });
                  }}
                ></input>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_connection_fun();
                  edit_connection_input_ref.current.value = "";
                }}
              >
                Edit Reflection
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Reflection</div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter new Connection here"
                  ref={connection_input_ref}
                ></input>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  add_connection();
                }}
              >
                Add Reflection
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
