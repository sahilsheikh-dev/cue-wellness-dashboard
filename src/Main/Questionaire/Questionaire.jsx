import axios from "axios";
import styles from "./Questionnaire.module.css";
import { useState, useEffect, useContext, useRef } from "react";
import DataContext from "../../DataContext/DataContext";
import { useNavigate } from "react-router-dom";
// import enu from "../../../../cuewellnessBackend/essentials/enu";
// import { countDocuments } from "../../../../cuewellnessBackend/Database/user/userSchema";
export default function Questionaire() {
  const navigate = useNavigate();
  const { data } = useContext(DataContext);
  const [show_guidelines, setShow_guidelines] = useState(false);
  const [edit_indi_guideline, setEdit_indi_guide] = useState({});
  const [editting_guideline, setEditting_guideline] = useState(false);
  const [awareness, setAwareness] = useState([]);
  const [show_subtopics, setShow_subTopics] = useState(false);
  const [sub_topic, setSub_topic] = useState(null);
  const [edit_awareness, setEdit_Awareness] = useState(false);
  const [to_edit_awareness, setToEdit_awareness] = useState(null);
  const [edit_sub_topic, setEdit_sub_topic] = useState(null);
  const [to_edit_sub_topic, setTo_edit_sub_topic] = useState(null);
  // creating the ref for creating the guidelin
  const type_ref = useRef(null);
  const content_ref = useRef(null);

  const awareness_input_ref = useRef(null);
  const add_sub_topic_ref = useRef(null);
  const awareness_input_ref_edit = useRef(null);
  const sub_topic_edit_ref = useRef(null);

  const edit_type_ref = useRef(null);
  const edit_content_ref = useRef(null);
  const [guidelines, setGuidelines] = useState([
    {
      id: "anhujhgt35dg",
      type: "title",
      content: "This is the title of the guideline",
    },
  ]);

  // this is for questions section
  const [current_question, setCurrent_question] = useState({});
  const [open_questions, setOpen_question] = useState(false);
  const [open_edit_question, setOpen_edit_question] = useState(false);
  const [current_edit_question, setCurrent_edit_question] = useState(null);

  // this is the section for creating the ref of questions
  const add_question_ref = useRef(null);
  const edit_question_ref = useRef(null);

  // functions for questions

  const get_awareness_question = (id) => {
    axios
      .post(
        data.url + "/admin/questionnaire/get-awareness",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else {
          setAwareness(res.data.supply);
          for (let i = 0; i < res.data.supply.length; i++) {
            if (res.data.supply[i]._id == id) {
              setSub_topic(res.data.supply[i]);
              for (let j = 0; j < res.data.supply[i].subTopics.length; j++) {
                if (res.data.supply[i].subTopics[j].id == current_question.id) {
                  setCurrent_question(res.data.supply[i].subTopics[j]);
                }
              }
            }
          }

          add_question_ref.current.value = "";
          // setEdit_sub_topic(false);
        }
      });
  };

  const add_to_current_question = (id) => {
    for (let i = 0; i < sub_topic.subTopics.length; i++) {
      if (sub_topic.subTopics[i].id == id) {
        return sub_topic.subTopics[i];
      }
    }
  };

  const add_question = () => {
    if (add_question_ref.current.value == "") {
      alert("Please enter a valid question");
    } else {
      // console.log(sub_topic.id);
      // console.log(add_question_ref.current.value);
      // console.log(current_question.id);
      // console.log(current_question.id);
      axios
        .post(
          data.url + "/admin/questionnaire/add-question",
          {
            id: current_question._id,
            question: add_question_ref.current.value,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            add_question_ref.current.value = "";
            get_questions(current_question._id);
          }
        });
    }
  };

  // this is to get guidelines
  useEffect(() => {
    axios
      .post(
        data.url + "/admin/questionnaire/get-guideline",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else {
          setGuidelines(res.data.supply);
        }
      });
  }, []);

  // this is to get the questionnaire
  const get_awareness = () => {
    axios
      .post(
        data.url + "/admin/questionnaire/get-awareness",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else {
          setAwareness(res.data.supply);
        }
      });
  };

  const get_awareness_sub = (id) => {
    axios
      .post(
        data.url + "/admin/questionnaire/get-awareness",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else {
          setAwareness(res.data.supply);
          for (let i = 0; i < res.data.supply.length; i++) {
            if (res.data.supply[i]._id == id) {
              setSub_topic(res.data.supply[i]);
            }
          }
          add_sub_topic_ref.current.value = "";
        }
      });
  };

  const get_awareness_sub_edit = (id) => {
    axios
      .post(
        data.url + "/admin/questionnaire/get-awareness",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else {
          setAwareness(res.data.supply);
          for (let i = 0; i < res.data.supply.length; i++) {
            if (res.data.supply[i]._id == id) {
              setSub_topic(res.data.supply[i]);
            }
          }
          sub_topic_edit_ref.current.value = "";
          setEdit_sub_topic(false);
        }
      });
  };

  const get_awareness_after_edit_questio = (id) => {
    axios
      .post(
        data.url + "/admin/questionnaire/get-awareness",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else {
          setAwareness(res.data.supply);
          for (let i = 0; i < res.data.supply.length; i++) {
            if (res.data.supply[i]._id == id) {
              setSub_topic(res.data.supply[i]);
              for (let j = 0; j < res.data.supply[i].subTopics.length; j++) {
                if (res.data.supply[i].subTopics[j].id == current_question.id) {
                  setCurrent_question(res.data.supply[i].subTopics[j]);
                }
              }
            }
          }

          // edit_question_ref.current.value = "";
          // console.log(edit_question_ref.current.value);
          // setEdit_sub_topic(false);
        }
      });
  };

  const setCurrent_edit_question_fun = () => {
    if (edit_question_ref.current.value == "") {
      alert("Please enter a valid question");
    } else {
      axios
        .post(
          data.url + "/admin/questionnaire/edit-question",
          {
            id: current_question._id,
            question_id: current_edit_question.id,
            question: current_edit_question.content,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_questions(current_question._id);
            edit_question_ref.current.value = "";
            setOpen_edit_question(false);
          }
        });
    }
  };

  useEffect(() => {
    get_awareness();
  }, []);

  // generating the id here
  const generate_id = (length = 12) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // adding a guideline here
  const add_guideline = () => {
    let new_guide = {
      index: guidelines.length + 1,
      id: generate_id(12),
      type: type_ref.current.value,
      content: content_ref.current.value,
    };

    setGuidelines([...guidelines, new_guide]);
    type_ref.current.value = "default";
    content_ref.current.value = "";
  };

  // this function is to delete a guideline
  const delete_guideline = (id) => {
    if (id == "" || id == undefined || id == null) {
      alert("Something went wrong");
    } else {
      setGuidelines((prevGuidelines) =>
        prevGuidelines.filter((item) => item.id !== id)
      );
    }
  };

  // this function is to edit a guideline
  const edit_guideline = (id) => {
    setEdit_indi_guide(
      (() => {
        for (let i = 0; i < guidelines.length; i++) {
          if (guidelines[i].id == id) {
            setEditting_guideline(true);
            setEdit_indi_guide(guidelines[i]);
            return guidelines[i];
          }
        }
      })()
    );
  };

  const edited_guideline = () => {
    let new_guidelines = guidelines;
    for (let i = 0; i < new_guidelines.length; i++) {
      if (new_guidelines[i].id == edit_indi_guideline.id) {
        console.log(edit_indi_guideline);
        new_guidelines[i].type = edit_indi_guideline.type;
        new_guidelines[i].content = edit_indi_guideline.content;
        setGuidelines([...new_guidelines]);
        edit_type_ref.current.value = "default";
        edit_content_ref.current.value = "";
        setEditting_guideline(false);
        break;
      }
    }
  };

  const save = () => {
    axios
      .post(
        data.url + "/admin/questionnaire/save-guideline",
        {
          guidelines: guidelines,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.res == false && res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else {
          alert("Changes saved successfully");
        }
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  };

  const add_awareness = () => {
    if (
      awareness_input_ref.current.value != null &&
      awareness_input_ref.current.value != undefined &&
      awareness_input_ref != ""
    ) {
      axios
        .post(
          data.url + "/admin/questionnaire/add-awareness",
          {
            awareness: awareness_input_ref.current.value,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            navigate(res.data.redirect);
          } else if (res.data.res) {
            awareness_input_ref.current.value = "";
            // alert("Awareness added successfully");
            get_awareness();
          }
        });
    } else {
      alert("Please add an awareness");
    }
  };

  const isolate_indi_awareness = (id, title) => {
    // for (let i = 0; i < awareness.length; i++) {
    //   if (awareness[i]._id == id) {
    //     setSub_topic(awareness[i]);
    //   }
    // }

    axios
      .post(
        data.url + "/admin/questionnaire/get-subTopics",
        {
          awareness_id: id,
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
          console.log(res.data.supply);
          setSub_topic({ title: title, sub_topics: res.data.supply, id: id });
          setShow_subTopics(true);
        }
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  };

  const isolate_indi_awareness_return = (id) => {
    for (let i = 0; i < awareness.length; i++) {
      if (awareness[i]._id == id) {
        return awareness[i];
      }
    }
  };

  const modify_awareness = () => {
    axios
      .post(
        data.url + "/admin/questionnaire/edit-awareness",
        {
          id: to_edit_awareness._id,
          title: to_edit_awareness.title,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          get_awareness();
        }
      });
  };

  const add_sub_topic = () => {
    if (add_sub_topic_ref.current.value == "") {
      alert("Please enter a valid sub topic");
    } else {
      console.log(add_sub_topic_ref.current.value);
      axios
        .post(
          data.url + "/admin/questionnaire/add-sub-topic",
          {
            sub_topic: add_sub_topic_ref.current.value,
            id: sub_topic.id,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            navigate("/login");
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            add_sub_topic_ref.current.value = "";
            isolate_indi_awareness(sub_topic.id, sub_topic.title);
          }
        });
    }
  };

  const isolate_indi_sub_topic = (id) => {
    // console.log(id);
    for (let i = 0; i < sub_topic.subTopics.length; i++) {
      // console.log(sub_topic.subTopics[i]);
      if (sub_topic.subTopics[i].id == id) {
        return sub_topic.subTopics[i];
      }
    }
  };

  const edit_sub_topic_fun = () => {
    // sub_topic_edit_ref
    console.log(to_edit_sub_topic._id);
    console.log(sub_topic_edit_ref.current.value);
    axios
      .post(
        data.url + "/admin/questionnaire/edit-sub-topic",
        {
          id: to_edit_sub_topic._id,
          title: sub_topic_edit_ref.current.value,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          isolate_indi_awareness(sub_topic.id, sub_topic.title);
          sub_topic_edit_ref.current.value = "";
          setEdit_sub_topic(false);
        }
      });
  };

  // here starts the guide section starts here
  const [open_guide_section, setOpen_guide_section] = useState(false);
  const [current_guide, setCurrent_guide] = useState(null);
  const [edit_guide, setEdit_guide] = useState(false);

  const add_guide_ref = useRef(null);
  const add_guide_title_ref = useRef(null);
  const edit_guide_ref = useRef(null);
  const edit_guide_title_ref = useRef(null);

  const add_guide = () => {
    if (add_guide_ref.current.value == "") {
      alert("Please enter a valid meaning");
    } else {
      axios
        .post(
          data.url + "/admin/questionnaire/add-guide",
          {
            id: current_question._id,
            guide_content: add_guide_ref.current.value,
            guide_title: add_guide_title_ref.current.value,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_questions_meaning(current_question._id);
            add_guide_ref.current.value = "";
            add_guide_title_ref.current.value = "";
          }
        });
    }
  };

  const edit_guide_fun = () => {
    if (
      edit_guide_ref.current.value == "" ||
      edit_guide_title_ref.current.value == ""
    ) {
      alert("Please enter a valid guide");
    } else {
      axios
        .post(
          data.url + "/admin/questionnaire/edit-guide",
          {
            id: current_question._id,
            guide_id: current_guide.id,
            guide_title: edit_guide_title_ref.current.value,
            guide_content: edit_guide_ref.current.value,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_questions_meaning(current_question._id);
            edit_guide_ref.current.value = "";
            edit_guide_title_ref.current.value = "";
            setEdit_guide(false);
          }
        });
    }
  };

  // here starts the meaning section
  const [open_meaning_section, setOpen_meaning_section] = useState(false);
  const [current_meaning, setCurrent_meaning] = useState(null);
  const [edit_meaning, setEdit_meaning] = useState(false);

  const add_meaning_ref = useRef(null);
  const edit_meaning_ref = useRef(null);

  const get_awareness_after_mg = (id) => {
    axios
      .post(
        data.url + "/admin/questionnaire/get-awareness",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else {
          setAwareness(res.data.supply);
          for (let i = 0; i < res.data.supply.length; i++) {
            if (res.data.supply[i]._id == id) {
              setSub_topic(res.data.supply[i]);
              for (let j = 0; j < res.data.supply[i].subTopics.length; j++) {
                if (res.data.supply[i].subTopics[j].id == current_question.id) {
                  setCurrent_question(res.data.supply[i].subTopics[j]);
                }
              }
            }
          }

          // add_question_ref.current.value = "";
          // setEdit_sub_topic(false);
        }
      });
  };

  const add_meaning = () => {
    if (add_meaning_ref.current.value == "") {
      alert("Please enter a valid meaning");
    } else {
      console.log(sub_topic);
      axios
        .post(
          data.url + "/admin/questionnaire/add-meaning",
          {
            // awareness_id: sub_topic._id,
            id: current_question._id,
            meaning: add_meaning_ref.current.value,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            add_meaning_ref.current.value = "";
            get_questions_meaning(current_question._id);
          }
        });
    }
  };

  const edit_meaning_fun = () => {
    if (edit_meaning_ref.current.value == "") {
      alert("Please enter a valid meaning");
    } else {
      axios
        .post(
          data.url + "/admin/questionnaire/edit-meaning",
          {
            id: current_question._id,
            meaning_id: current_meaning.id,
            meaning: edit_meaning_ref.current.value,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_questions_meaning(current_question._id);
            edit_meaning_ref.current.value = "";
            setEdit_meaning(false);
          }
        });
    }
  };

  const contains_sub_topics = (id) => {
    console.log(id);
    axios
      .post(
        data.url + "/admin/questionnaire/contains-sub-topics",
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
          console.log("everything good");
          isolate_indi_awareness(sub_topic.id, sub_topic.title);
        }
      });
  };

  const get_questions = (id) => {
    axios
      .post(
        data.url + "/admin/questionnaire/get-questions",
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
          // set Questions here
          setShow_subTopics(false);
          console.log("question");
          console.log(res.data.supply);
          setCurrent_question(res.data.supply);
          // setSub_topic({title:res.data.supply.title, });
          // setSub_topic();
          setOpen_question(true);
        }
      });
  };

  const get_questions_meaning = (id) => {
    axios
      .post(
        data.url + "/admin/questionnaire/get-questions",
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
          // set Questions here
          setShow_subTopics(false);
          setCurrent_question(res.data.supply);
          // setSub_topic({title:res.data.supply.title, });
          // setSub_topic();
          // setOpen_question(true);
        }
      });
  };

  // uploading things starts here
  const [uploading, setUploading] = useState(false);
  const [uploading_awareness, setUploading_awareness] = useState("");
  const uploading_awareness_ref = useRef("");

  const delete_awareness = (id) => {
    if (id != undefined || id != null || id != "") {
      let do_it = window.confirm("Are you sure, you want to delete this?");
      if (do_it == true) {
        axios
          .post(
            data.url + "/admin/questionnaire/delete",
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
              get_awareness();
            }
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
        axios
          .post(
            data.url + "/admin/questionnaire/delete",
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
              isolate_indi_awareness(sub_topic.id, sub_topic.title);
            }
          });
      }
    } else {
      alert("Something went wrong");
    }
  };

  const delete_question = (question) => {
    if (question != undefined || question != null || question != "") {
      let do_it = window.confirm("Are you sure, you want to delete this?");
      if (do_it) {
        axios
          .post(
            data.url + "/admin/questionnaire/delete-question",
            {
              id: question.id,
              sub_topic: current_question._id,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            if (res.data.alert != undefined) {
              alert(res.data.alert);
            } else if (res.data.redirect != undefined) {
              // navigate(res.data.redirect);
            } else {
              // do something
              // isolate_indi_awareness(sub_topic.id, sub_topic.title);
              get_questions(current_question._id);
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

  const delete_meaning = (item) => {
    if (item != undefined || item != null || item != "") {
      let do_it = window.confirm("Are you sure, you want to delete this?");
      if (do_it) {
        axios
          .post(
            data.url + "/admin/questionnaire/delete-meaning",
            {
              id: item.id,
              sub_topic: current_question._id,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            if (res.data.alert != undefined) {
              alert(res.data.alert);
            } else if (res.data.redirect != undefined) {
              // navigate(res.data.redirect);
            } else {
              // do something
              // isolate_indi_awareness(sub_topic.id, sub_topic.title);
              get_questions_meaning(current_question._id);
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
  const delete_guide = (item) => {
    if (item != undefined || item != null || item != "") {
      let do_it = window.confirm("Are you sure, you want to delete this?");
      if (do_it) {
        axios
          .post(
            data.url + "/admin/questionnaire/delete-guide",
            {
              id: item.id,
              sub_topic: current_question._id,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            if (res.data.alert != undefined) {
              alert(res.data.alert);
            } else if (res.data.redirect != undefined) {
              // navigate(res.data.redirect);
            } else {
              // do something
              // isolate_indi_awareness(sub_topic.id, sub_topic.title);
              get_questions_meaning(current_question._id);
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
  return (
    <>
      <div className={styles.important_info_section}>
        <div className={styles.profile_img_section}>
          <img
            src={require("./questionnaire.jpg")}
            alt=""
            className={styles.profile_img}
          />
        </div>
        <div className={styles.profile_info}>
          <div className={styles.profile_name_pp}>Questionnaire</div>
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
            <div className={styles.mio_main_name_ud}>Awareness</div>
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

      {/* this is the awareness section*/}

      {uploading ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.guidelines_section}>
            <div>
              <label
                htmlFor="input_excel"
                className={styles.input_section_label}
              >
                {uploading_awareness == ""
                  ? "Choose Awareness excel file here"
                  : uploading_awareness}
              </label>
              <input
                type="file"
                id="input_excel"
                hidden
                ref={uploading_awareness_ref}
                onChange={(e) => {
                  setUploading_awareness(
                    e.target.value.split("\\")[
                      e.target.value.split("\\").length - 1
                    ]
                  );
                }}
              />
            </div>
            <div className={styles.guidelines_options}>
              <div
                className={styles.indi_guideline_options}
                onClick={() => {
                  // save();
                }}
              >
                Upload
              </div>
            </div>
          </div>
        </div>
      ) : show_guidelines ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.guidelines_section}>
            <div className={styles.guidelines_options}>
              <div
                className={styles.indi_guideline_options}
                onClick={() => {
                  save();
                }}
              >
                Save
              </div>
            </div>

            {guidelines.length == 0 ? (
              <div className={styles.ng_text}>
                No Guidelines yet, choose an option to add one
              </div>
            ) : (
              guidelines.map((item) => {
                return (
                  <>
                    <div className={styles.main_guideline_section} draggable>
                      <div
                        className={styles.dropable_space}
                        onDragOver={(e) => {
                          e.preventDefault();
                        }}
                      ></div>
                      <div className={styles.indi_guideline}>
                        <div className={styles.ig_mover_section}>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.ig_mover_svg}
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <g id="style=bulk">
                                {" "}
                                <g id="menu-kebab">
                                  {" "}
                                  <path
                                    id="vector (Stroke)"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 2.75C13.2426 2.75 14.25 3.75736 14.25 5C14.25 6.24264 13.2426 7.25 12 7.25C10.7574 7.25 9.75 6.24264 9.75 5C9.75 3.75736 10.7574 2.75 12 2.75Z"
                                    fill="#000000"
                                  ></path>{" "}
                                  <path
                                    id="vector (Stroke)_2"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12C9.75 10.7574 10.7574 9.75 12 9.75Z"
                                    fill="#000000"
                                  ></path>{" "}
                                  <path
                                    id="vector (Stroke)_3"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 16.75C13.2426 16.75 14.25 17.7574 14.25 19C14.25 20.2426 13.2426 21.25 12 21.25C10.7574 21.25 9.75 20.2426 9.75 19C9.75 17.7574 10.7574 16.75 12 16.75Z"
                                    fill="#000000"
                                  ></path>{" "}
                                </g>{" "}
                              </g>{" "}
                            </g>
                          </svg>
                        </div>
                        <div className={styles.ig_content}>
                          <span className={styles.type_of_content_text}>
                            {item.type} :
                          </span>{" "}
                          {item.content}
                        </div>

                        <div className={styles.ig_indi_btns}>
                          <div
                            className={styles.ig_ib_indi_btn}
                            onClick={() => {
                              delete_guideline(item.id);
                            }}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={styles.ig_de_btn_svg}
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
                                  d="M10 11V17"
                                  stroke="#fff"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                                <path
                                  d="M14 11V17"
                                  stroke="#fff"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                                <path
                                  d="M4 7H20"
                                  stroke="#fff"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                                <path
                                  d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                                  stroke="#fff"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                                <path
                                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                  stroke="#fff"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                              </g>
                            </svg>
                          </div>
                          <div
                            className={styles.ig_ib_indi_btn}
                            onClick={() => {
                              edit_guideline(item.id);
                            }}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={styles.ig_de_btn_svg}
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
                                  d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                                  stroke="#fff"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                                <path
                                  d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                                  stroke="#fff"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            )}
          </div>

          {editting_guideline ? (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.backarrow}
                  onClick={() => {
                    edit_type_ref.current.value = "default";
                    edit_content_ref.current.value = "";
                    setEditting_guideline(false);
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
                Edit GuideLine
              </div>
              <div className={styles.guide_line_seclect}>
                <select
                  className={styles.guide_line_i_select}
                  ref={edit_type_ref}
                  value={edit_indi_guideline.type}
                  onChange={(e) => {
                    setEdit_indi_guide({
                      ...edit_indi_guideline,
                      type: e.target.value,
                    });
                  }}
                >
                  <option value="default" disabled selected>
                    Choose type
                  </option>
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                  <option value="list title">List Title</option>
                  <option value="list option">List Option</option>
                </select>
              </div>
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter the guideline here"
                  ref={edit_content_ref}
                  value={edit_indi_guideline.content}
                  onInput={(e) => {
                    setEdit_indi_guide({
                      ...edit_indi_guideline,
                      content: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edited_guideline();
                }}
              >
                Edit Guideline
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add GuideLine</div>
              <div className={styles.guide_line_seclect}>
                <select className={styles.guide_line_i_select} ref={type_ref}>
                  <option value="default" disabled selected>
                    Choose type
                  </option>
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                  <option value="list title">List Title</option>
                  <option value="list option">List Option</option>
                </select>
              </div>
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter the guideline here"
                  ref={content_ref}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  add_guideline();
                }}
              >
                Add Guideline
              </div>
            </div>
          )}
        </div>
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
            </header>
            <main className={styles.ps_ud_main}>
              {sub_topic.sub_topics.length == 0 ? (
                <div className={styles.no_show}>No Subtopics to show</div>
              ) : null}
              {sub_topic.sub_topics.map((item) => {
                return (
                  <div
                    className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                    onClick={() => {
                      // setCurrent_question(add_to_current_question(item.id));
                      // setOpen_question(true);
                      // setShow_subTopics(false);

                      //  if their are no more subtopics then open the questions section and if their are subtopics then open the subtopics section

                      if (item.contains_subtopic == true) {
                        isolate_indi_awareness(item._id, item.title);
                      } else {
                        get_questions(item._id);
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
                          contains_sub_topics(item._id);
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
                    ) : null}

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.awareness_edit_svg}
                      onClick={(e) => {
                        setTo_edit_sub_topic(item);
                        setEdit_sub_topic(true);
                        // awareness_input_ref_edit.current.value = item.topic;
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
                        delete_sub_topic(item._id);
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
                    <div className={styles.ud_info_value}>
                      {item.contains_subtopic == true
                        ? "Contains subtopics"
                        : item.questions.length + " questions"}
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
                    // edit_type_ref.current.value = "default";
                    // edit_content_ref.current.value = "";
                    setEdit_sub_topic(false);
                    sub_topic_edit_ref.current.value = "";
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
                  ref={sub_topic_edit_ref}
                  value={to_edit_sub_topic.title}
                  onInput={(e) => {
                    // to_edit_sub_topic.topic = sub_topic_edit_ref.current.value;
                    setTo_edit_sub_topic({
                      ...to_edit_sub_topic,
                      title: sub_topic_edit_ref.current.value,
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
                  ref={add_sub_topic_ref}
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
      ) : open_questions ? (
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
                    setOpen_question(false);
                    get_awareness();
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
              <div className={styles.mg_section}>
                <button
                  className={styles.mg_btn}
                  onClick={() => {
                    setOpen_question(false);
                    setOpen_meaning_section(true);
                  }}
                >
                  Meaning
                </button>
                <button
                  className={styles.mg_btn}
                  onClick={() => {
                    setOpen_question(false);
                    setOpen_guide_section(true);
                  }}
                >
                  Guide
                </button>
              </div>
            </header>
            <main className={styles.ps_ud_main}>
              {current_question.questions.length == 0 ? (
                <div className={styles.no_show}>No questions to show</div>
              ) : null}
              {current_question.questions.map((indi_question, index) => {
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
                        // e.stopPropagation();
                        setOpen_edit_question(true);
                        setCurrent_edit_question(indi_question);
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
                        delete_question(indi_question);
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
                Edit Question
              </div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Edit question here"
                  ref={edit_question_ref}
                  value={current_edit_question.content}
                  onInput={(e) => {
                    setCurrent_edit_question({
                      ...current_edit_question,
                      content: edit_question_ref.current.value,
                    });
                  }}
                ></input>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  setCurrent_edit_question_fun();
                }}
              >
                Edit Question
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add question</div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter your question here"
                  ref={add_question_ref}
                ></input>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  add_question();
                }}
              >
                Add Question
              </div>
            </div>
          )}
        </div>
      ) : open_guide_section ? (
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
                    setOpen_guide_section(false);
                    setOpen_question(true);
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
                {current_question.guide.length == 0 ? (
                  <div className={styles.no_show}>No guide to show</div>
                ) : null}
                {current_question.guide.map((item) => {
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
                      <div className={styles.infi_des_title}>{item.title}</div>
                      <div>{item.content}</div>
                    </div>
                  );
                })}
              </div>
            </main>
          </div>

          {edit_guide ? (
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
                      title: edit_guide_title_ref.current.value,
                    });
                  }}
                ></input>
              </div>
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Edit the guide here"
                  ref={edit_guide_ref}
                  value={current_guide.content}
                  onChange={(e) => {
                    setCurrent_guide({
                      ...current_guide,
                      content: edit_guide_ref.current.value,
                    });
                  }}
                ></textarea>
              </div>
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
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter your guide content here"
                  ref={add_guide_ref}
                ></textarea>
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
      ) : open_meaning_section ? (
        <div className={styles.outer_cp_ud_indi_awareness}>
          <div className={styles.indi_event_meaning}>
            <header className={styles.indi_booking_ud_header}>
              <div className={styles.questions_heading}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.backarrow}
                  onClick={() => {
                    setOpen_meaning_section(false);
                    setOpen_question(true);
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
                Meaning
              </div>
            </header>
            <main className={styles.ps_ud_main}>
              <div className={styles.ps_ud_main_indi_small}>
                {current_question.meaning.length == 0 ? (
                  <div className={styles.no_show}>No Meaning to show</div>
                ) : null}
                {current_question.meaning.map((item) => {
                  return (
                    <div className={styles.ud_info_des}>
                      {" "}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.mg_edit_svg}
                        onClick={(e) => {
                          setCurrent_meaning(item);
                          setEdit_meaning(true);
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
                          delete_meaning(item);
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
                      {item.content}
                    </div>
                  );
                })}
              </div>
            </main>
          </div>

          {edit_meaning ? (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.backarrow}
                  onClick={() => {
                    setEdit_meaning(false);
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
                Edit Meaning
              </div>

              <div className={styles.ta_section}>
                <textarea
                  className={styles.input}
                  placeholder="Edit meaning here"
                  ref={edit_meaning_ref}
                  value={current_meaning.content}
                  onInput={(e) => {
                    setCurrent_meaning({
                      ...current_meaning,
                      content: edit_meaning_ref.current.value,
                    });
                  }}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_meaning_fun();
                }}
              >
                Edit Meaning
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Meaning</div>

              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter your meaning paragraph here"
                  ref={add_meaning_ref}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  add_meaning();
                }}
              >
                Add Meaning
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.outer_cp_ud}>
          <div className={styles.coach_pricing_section}>
            <header className={styles.ps_ud_header}>Awareness</header>
            <main className={styles.ps_ud_main}>
              {awareness.length == 0 ? (
                <div className={styles.no_show}>No Awareness to show</div>
              ) : null}
              {awareness.map((item) => {
                return (
                  <div
                    className={`${styles.ps_ud_main_indi} ${styles.pumi_hover}`}
                    onClick={() => {
                      isolate_indi_awareness(item._id, item.title);
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.awareness_edit_svg}
                      onClick={(e) => {
                        setToEdit_awareness(item);
                        setEdit_Awareness(true);
                        // awareness_input_ref_edit.current.value = item.topic;
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
                        delete_awareness(item._id);
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
                    {/* <div className={styles.ud_info_value}>
                      {item.subTopics.length} Sub Topics
                    </div> */}
                  </div>
                );
              })}
            </main>
          </div>
          {edit_awareness ? (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.backarrow}
                  onClick={() => {
                    setEdit_Awareness(false);
                    awareness_input_ref_edit.current.value = "";
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
                Edit Awareness
              </div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter new Awareness here"
                  ref={awareness_input_ref_edit}
                  value={to_edit_awareness.title}
                  onInput={() => {
                    setToEdit_awareness({
                      ...to_edit_awareness,
                      title: awareness_input_ref_edit.current.value,
                    });
                  }}
                ></input>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  awareness_input_ref_edit.current.value = "";
                  setEdit_Awareness(false);
                  modify_awareness();
                }}
              >
                Edit Awareness
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Awareness</div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter new Awareness here"
                  ref={awareness_input_ref}
                ></input>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  add_awareness();
                }}
              >
                Add Awareness
              </div>
            </div>
          )}
        </div>
      )}

      <div className={styles.main_empty_section}></div>
    </>
  );
}
