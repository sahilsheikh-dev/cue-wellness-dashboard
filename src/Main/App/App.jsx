import axios from "axios";
import styles from "./App.module.css";
import { useState, useEffect, useContext, useRef } from "react";
import DataContext from "../../DataContext/DataContext";
import { useNavigate } from "react-router-dom";
// import enu from "../../../../cuewellnessBackend/essentials/enu";
// import { countDocuments } from "../../../../cuewellnessBackend/Database/user/userSchema";
export default function App() {
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

  //   section for terms and condition and privacy policy
  const [indi_tandc_edit, setInditandc_edit] = useState({});
  const [open_tandc_edit, setOpen_tandc_edit] = useState(false);
  const [indi_pp_edit, setIndi_pp_edit] = useState({});
  const [open_pp_edit, setOpen_pp_edit] = useState(false);
  //   the section ends here

  const awareness_input_ref = useRef(null);
  const add_sub_topic_ref = useRef(null);
  const awareness_input_ref_edit = useRef(null);
  const sub_topic_edit_ref = useRef(null);

  const edit_type_ref = useRef(null);
  const edit_content_ref = useRef(null);
  const [guidelines, setGuidelines] = useState([]);

  const [termsAndConditions_client, setTermsAndConditions_client] = useState(
    []
  );
  const [termsAndConditions_coach, setTermsAndConditions_coach] = useState([]);
  const [termsAndConditions_ad, setTermsAndConditions_ad] = useState([]);
  const [termsAndConditions_shop, setTermsAndConditions_shop] = useState([]);
  const [guidelines_awareness, setGuidelines_awareness] = useState([]);
  const [guidelines_connection_clinet, setGuidelines_connection_client] =
    useState([]);
  const [guidelines_connection_coach, setGuidelines_connection_coach] =
    useState([]);
  const [guidelines_reflection, setGuidelines_reflection] = useState([]);
  const [guidelines_journal, setGuidelines_journal] = useState([]);
  const [guidelines_events, setGuidelines_events] = useState([]);
  const [guidelines_shop, setGuidelines_shop] = useState([]);
  const [privacyPolicy, setPrivacyPolicy] = useState([]);

  // this is for questions section
  const [current_question, setCurrent_question] = useState({});
  const [open_questions, setOpen_question] = useState(false);
  const [open_edit_question, setOpen_edit_question] = useState(false);
  const [current_edit_question, setCurrent_edit_question] = useState(null);

  // this is the section for creating the ref of questions
  const add_question_ref = useRef(null);
  const edit_question_ref = useRef(null);

  // functions for questions

  // this is to get guidelines

  // this is to get the questionnaire

  // useEffect(() => {
  //   get_awareness();
  // }, []);

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

  // whole get section
  const get_terms_and_condition_client = () => {
    axios
      .post(
        data.url + "/admin/app/get-termsAndConditions-client",
        {},
        { withCredentials: true, timeout: 600000 }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          setTermsAndConditions_client(res.data.supply);
        }
      })
      .catch(() => {
        get_terms_and_condition_client();
      });
  };

  const get_terms_and_condition_coach = () => {
    axios
      .post(
        data.url + "/admin/app/get-termsAndConditions-coach",
        {},
        { withCredentials: true, timeout: 600000 }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          setTermsAndConditions_coach(res.data.supply);
        }
      })
      .catch(() => {
        get_terms_and_condition_coach();
      });
  };

  const get_terms_and_condition_ad = () => {
    axios
      .post(
        data.url + "/admin/app/get-termsAndConditions-ad",
        {},
        { withCredentials: true, timeout: 600000 }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          setTermsAndConditions_ad(res.data.supply);
        }
      })
      .catch(() => {
        get_terms_and_condition_ad();
      });
  };

  const get_terms_and_condition_shop = () => {
    axios
      .post(
        data.url + "/admin/app/get-termsAndConditions-shop",
        {},
        { withCredentials: true, timeout: 600000 }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          setTermsAndConditions_shop(res.data.supply);
        }
      })
      .catch(() => {
        get_terms_and_condition_shop();
      });
  };

  const get_guidelines_awareness = () => {
    axios
      .post(
        data.url + "/admin/app/get-guidelines-awareness",
        {},
        { withCredentials: true, timeout: 600000 }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          setGuidelines_awareness(res.data.supply);
        }
      })
      .catch(() => {
        get_guidelines_awareness();
      });
  };

  const get_guidelines_connection_client = () => {
    axios
      .post(
        data.url + "/admin/app/get-guidelines-connection-client",
        {},
        { withCredentials: true, timeout: 600000 }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          setGuidelines_connection_client(res.data.supply);
        }
      })
      .catch(() => {
        get_guidelines_connection_client();
      });
  };

  const get_guidelines_connection_coach = () => {
    axios
      .post(
        data.url + "/admin/app/get-guidelines-connection-coach",
        {},
        { withCredentials: true, timeout: 600000 }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          setGuidelines_connection_coach(res.data.supply);
        }
      })
      .catch(() => {
        get_guidelines_connection_coach();
      });
  };

  const get_guidelines_reflection = () => {
    axios
      .post(
        data.url + "/admin/app/get-guidelines-reflection",
        {},
        { withCredentials: true, timeout: 600000 }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          setGuidelines_reflection(res.data.supply);
        }
      })
      .catch(() => {
        get_guidelines_reflection();
      });
  };

  const get_guidelines_journal = () => {
    axios
      .post(
        data.url + "/admin/app/get-guidelines-journal",
        {},
        { withCredentials: true, timeout: 600000 }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          setGuidelines_journal(res.data.supply);
        }
      })
      .catch(() => {
        get_guidelines_journal();
      });
  };

  const get_guidelines_events = () => {
    axios
      .post(
        data.url + "/admin/app/get-guidelines-events",
        {},
        { withCredentials: true, timeout: 600000 }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          setGuidelines_events(res.data.supply);
        }
      })
      .catch(() => {
        get_guidelines_events();
      });
  };

  const get_guidelines_shop = () => {
    axios
      .post(
        data.url + "/admin/app/get-guidelines-shop",
        {},
        { withCredentials: true, timeout: 600000 }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          setGuidelines_shop(res.data.supply);
        }
      })
      .catch(() => {
        get_guidelines_shop();
      });
  };

  // useEffect(() => {
  //   get_terms_and_condition_client();
  //   get_terms_and_condition_coach();
  //   get_terms_and_condition_ad();
  //   get_terms_and_condition_shop();
  // }, []);

  const edit_termsandcondition_client = (id) => {
    setInditandc_edit(
      (() => {
        for (let i = 0; i < termsAndConditions_client.length; i++) {
          if (termsAndConditions_client[i].id == id) {
            setOpen_tandc_edit(true);
            // setEdit_indi_guide(termsAndConditions[i]);
            return termsAndConditions_client[i];
          }
        }
      })()
    );
  };

  const edit_termsandcondition_coach = (id) => {
    setInditandc_edit(
      (() => {
        for (let i = 0; i < termsAndConditions_coach.length; i++) {
          if (termsAndConditions_coach[i].id == id) {
            setOpen_tandc_edit(true);
            // setEdit_indi_guide(termsAndConditions[i]);
            return termsAndConditions_coach[i];
          }
        }
      })()
    );
  };

  const edit_termsandcondition_ad = (id) => {
    setInditandc_edit(
      (() => {
        for (let i = 0; i < termsAndConditions_ad.length; i++) {
          if (termsAndConditions_ad[i].id == id) {
            setOpen_tandc_edit(true);
            // setEdit_indi_guide(termsAndConditions[i]);
            return termsAndConditions_ad[i];
          }
        }
      })()
    );
  };

  const edit_termsandcondition_shop = (id) => {
    setInditandc_edit(
      (() => {
        for (let i = 0; i < termsAndConditions_shop.length; i++) {
          if (termsAndConditions_shop[i].id == id) {
            setOpen_tandc_edit(true);
            // setEdit_indi_guide(termsAndConditions[i]);
            return termsAndConditions_shop[i];
          }
        }
      })()
    );
  };

  const edit_guideline_awareness = (id) => {
    setInditandc_edit(
      (() => {
        for (let i = 0; i < guidelines_awareness.length; i++) {
          if (guidelines_awareness[i].id == id) {
            setOpen_tandc_edit(true);
            // setEdit_indi_guide(termsAndConditions[i]);
            return guidelines_awareness[i];
          }
        }
      })()
    );
  };

  const edit_guideline_connection_client = (id) => {
    setInditandc_edit(
      (() => {
        for (let i = 0; i < guidelines_connection_clinet.length; i++) {
          if (guidelines_connection_clinet[i].id == id) {
            setOpen_tandc_edit(true);
            // setEdit_indi_guide(termsAndConditions[i]);
            return guidelines_connection_clinet[i];
          }
        }
      })()
    );
  };

  const edit_guideline_connection_coach = (id) => {
    setInditandc_edit(
      (() => {
        for (let i = 0; i < guidelines_connection_coach.length; i++) {
          if (guidelines_connection_coach[i].id == id) {
            setOpen_tandc_edit(true);
            // setEdit_indi_guide(termsAndConditions[i]);
            return guidelines_connection_coach[i];
          }
        }
      })()
    );
  };

  const edit_guideline_reflection = (id) => {
    setInditandc_edit(
      (() => {
        for (let i = 0; i < guidelines_reflection.length; i++) {
          if (guidelines_reflection[i].id == id) {
            setOpen_tandc_edit(true);
            // setEdit_indi_guide(termsAndConditions[i]);
            return guidelines_reflection[i];
          }
        }
      })()
    );
  };

  const edit_guideline_journal = (id) => {
    setInditandc_edit(
      (() => {
        for (let i = 0; i < guidelines_journal.length; i++) {
          if (guidelines_journal[i].id == id) {
            setOpen_tandc_edit(true);
            // setEdit_indi_guide(termsAndConditions[i]);
            return guidelines_journal[i];
          }
        }
      })()
    );
  };

  const edit_guideline_events = (id) => {
    setInditandc_edit(
      (() => {
        for (let i = 0; i < guidelines_events.length; i++) {
          if (guidelines_events[i].id == id) {
            setOpen_tandc_edit(true);
            // setEdit_indi_guide(termsAndConditions[i]);
            return guidelines_events[i];
          }
        }
      })()
    );
  };

  const edit_guideline_shop = (id) => {
    setInditandc_edit(
      (() => {
        for (let i = 0; i < guidelines_shop.length; i++) {
          if (guidelines_shop[i].id == id) {
            setOpen_tandc_edit(true);
            // setEdit_indi_guide(termsAndConditions[i]);
            return guidelines_shop[i];
          }
        }
      })()
    );
  };

  // whole delete section

  const delete_termsandcondition_client = (id) => {
    if (id == "" || id == undefined || id == null) {
      alert("Something went wrong");
    } else {
      axios.post(
        data.url + "/admin/app/delete-termsAndConditions-client",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      );
      setTermsAndConditions_client((preterms) =>
        preterms.filter((item) => item.id !== id)
      );
    }
  };

  const delete_termsandcondition_coach = (id) => {
    if (id == "" || id == undefined || id == null) {
      alert("Something went wrong");
    } else {
      axios.post(
        data.url + "/admin/app/delete-termsAndConditions-coach",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      );
      setTermsAndConditions_coach((preterms) =>
        preterms.filter((item) => item.id !== id)
      );
    }
  };

  const delete_termsandcondition_ad = (id) => {
    if (id == "" || id == undefined || id == null) {
      alert("Something went wrong");
    } else {
      axios.post(
        data.url + "/admin/app/delete-termsAndConditions-ad",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      );
      setTermsAndConditions_ad((preterms) =>
        preterms.filter((item) => item.id !== id)
      );
    }
  };

  const delete_termsandcondition_shop = (id) => {
    if (id == "" || id == undefined || id == null) {
      alert("Something went wrong");
    } else {
      axios.post(
        data.url + "/admin/app/delete-termsAndConditions-shop",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      );
      setTermsAndConditions_shop((preterms) =>
        preterms.filter((item) => item.id !== id)
      );
    }
  };

  const delete_guide_awareness = (id) => {
    if (id == "" || id == undefined || id == null) {
      alert("Something went wrong");
    } else {
      axios.post(
        data.url + "/admin/app/delete-guidelines-awareness",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      );
      setGuidelines_awareness((preterms) =>
        preterms.filter((item) => item.id !== id)
      );
    }
  };

  const delete_guide_connection_client = (id) => {
    if (id == "" || id == undefined || id == null) {
      alert("Something went wrong");
    } else {
      axios.post(
        data.url + "/admin/app/delete-guidelines-connection-client",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      );
      setGuidelines_connection_client((preterms) =>
        preterms.filter((item) => item.id !== id)
      );
    }
  };

  const delete_guide_connection_coach = (id) => {
    if (id == "" || id == undefined || id == null) {
      alert("Something went wrong");
    } else {
      axios.post(
        data.url + "/admin/app/delete-guidelines-connection-coach",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      );
      setGuidelines_connection_coach((preterms) =>
        preterms.filter((item) => item.id !== id)
      );
    }
  };

  const delete_guide_reflection = (id) => {
    if (id == "" || id == undefined || id == null) {
      alert("Something went wrong");
    } else {
      axios.post(
        data.url + "/admin/app/delete-guidelines-reflection",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      );
      setGuidelines_reflection((preterms) =>
        preterms.filter((item) => item.id !== id)
      );
    }
  };

  const delete_guide_journal = (id) => {
    if (id == "" || id == undefined || id == null) {
      alert("Something went wrong");
    } else {
      axios.post(
        data.url + "/admin/app/delete-guidelines-journal",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      );
      setGuidelines_journal((preterms) =>
        preterms.filter((item) => item.id !== id)
      );
    }
  };

  const delete_guide_events = (id) => {
    if (id == "" || id == undefined || id == null) {
      alert("Something went wrong");
    } else {
      axios.post(
        data.url + "/admin/app/delete-guidelines-events",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      );
      setGuidelines_events((preterms) =>
        preterms.filter((item) => item.id !== id)
      );
    }
  };

  const delete_guide_shop = (id) => {
    if (id == "" || id == undefined || id == null) {
      alert("Something went wrong");
    } else {
      axios.post(
        data.url + "/admin/app/delete-guidelines-shop",
        {
          id: id,
        },
        {
          withCredentials: true,
        }
      );
      setGuidelines_shop((preterms) =>
        preterms.filter((item) => item.id !== id)
      );
    }
  };

  // whole add section
  const add_tand_client = () => {
    let new_guide = {
      id: generate_id(12),
      type: type_ref.current.value,
      content: content_ref.current.value,
    };

    axios
      .post(
        data.url + "/admin/app/save-termsAndConditions-client",
        {
          id: new_guide.id,
          type: new_guide.type,
          content: new_guide.content,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        }
      });

    setTermsAndConditions_client([...termsAndConditions_client, new_guide]);
    type_ref.current.value = "default";
    content_ref.current.value = "";
  };

  const add_tand_coach = () => {
    let new_guide = {
      id: generate_id(12),
      type: type_ref.current.value,
      content: content_ref.current.value,
    };

    axios
      .post(
        data.url + "/admin/app/save-termsAndConditions-coach",
        {
          id: new_guide.id,
          type: new_guide.type,
          content: new_guide.content,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        }
      });

    setTermsAndConditions_coach([...termsAndConditions_coach, new_guide]);
    type_ref.current.value = "default";
    content_ref.current.value = "";
  };

  const add_tand_ad = () => {
    let new_guide = {
      id: generate_id(12),
      type: type_ref.current.value,
      content: content_ref.current.value,
    };

    axios
      .post(
        data.url + "/admin/app/save-termsAndConditions-ad",
        {
          id: new_guide.id,
          type: new_guide.type,
          content: new_guide.content,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        }
      });

    setTermsAndConditions_ad([...termsAndConditions_ad, new_guide]);
    type_ref.current.value = "default";
    content_ref.current.value = "";
  };

  const add_tand_shop = () => {
    let new_guide = {
      id: generate_id(12),
      type: type_ref.current.value,
      content: content_ref.current.value,
    };

    axios
      .post(
        data.url + "/admin/app/save-termsAndConditions-shop",
        {
          id: new_guide.id,
          type: new_guide.type,
          content: new_guide.content,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        }
      });

    setTermsAndConditions_shop([...termsAndConditions_shop, new_guide]);
    type_ref.current.value = "default";
    content_ref.current.value = "";
  };

  const add_guide_awareness = () => {
    let new_guide = {
      id: generate_id(12),
      type: type_ref.current.value,
      content: content_ref.current.value,
    };

    axios
      .post(
        data.url + "/admin/app/save-guidelines-awareness",
        {
          id: new_guide.id,
          type: new_guide.type,
          content: new_guide.content,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        }
      });

    setGuidelines_awareness([...guidelines_awareness, new_guide]);
    type_ref.current.value = "default";
    content_ref.current.value = "";
  };

  const add_guide_connection_client = () => {
    let new_guide = {
      id: generate_id(12),
      type: type_ref.current.value,
      content: content_ref.current.value,
    };

    axios
      .post(
        data.url + "/admin/app/save-guidelines-connection-client",
        {
          id: new_guide.id,
          type: new_guide.type,
          content: new_guide.content,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        }
      });

    setGuidelines_connection_client([
      ...guidelines_connection_clinet,
      new_guide,
    ]);
    type_ref.current.value = "default";
    content_ref.current.value = "";
  };

  const add_guide_connection_coach = () => {
    let new_guide = {
      id: generate_id(12),
      type: type_ref.current.value,
      content: content_ref.current.value,
    };

    axios
      .post(
        data.url + "/admin/app/save-guidelines-connection-coach",
        {
          id: new_guide.id,
          type: new_guide.type,
          content: new_guide.content,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        }
      });

    setGuidelines_connection_coach([...guidelines_connection_coach, new_guide]);
    type_ref.current.value = "default";
    content_ref.current.value = "";
  };

  const add_guide_reflection = () => {
    let new_guide = {
      id: generate_id(12),
      type: type_ref.current.value,
      content: content_ref.current.value,
    };

    axios
      .post(
        data.url + "/admin/app/save-guidelines-reflection",
        {
          id: new_guide.id,
          type: new_guide.type,
          content: new_guide.content,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        }
      });

    setGuidelines_reflection([...guidelines_reflection, new_guide]);
    type_ref.current.value = "default";
    content_ref.current.value = "";
  };

  const add_guide_journal = () => {
    let new_guide = {
      id: generate_id(12),
      type: type_ref.current.value,
      content: content_ref.current.value,
    };

    axios
      .post(
        data.url + "/admin/app/save-guidelines-journal",
        {
          id: new_guide.id,
          type: new_guide.type,
          content: new_guide.content,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        }
      });

    setGuidelines_journal([...guidelines_journal, new_guide]);
    type_ref.current.value = "default";
    content_ref.current.value = "";
  };

  const add_guide_events = () => {
    let new_guide = {
      id: generate_id(12),
      type: type_ref.current.value,
      content: content_ref.current.value,
    };

    axios
      .post(
        data.url + "/admin/app/save-guidelines-events",
        {
          id: new_guide.id,
          type: new_guide.type,
          content: new_guide.content,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        }
      });

    setGuidelines_events([...guidelines_events, new_guide]);
    type_ref.current.value = "default";
    content_ref.current.value = "";
  };

  const add_guide_shop = () => {
    let new_guide = {
      id: generate_id(12),
      type: type_ref.current.value,
      content: content_ref.current.value,
    };

    axios
      .post(
        data.url + "/admin/app/save-guidelines-shop",
        {
          id: new_guide.id,
          type: new_guide.type,
          content: new_guide.content,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.alert != undefined) {
          alert(res.data.alert);
        }
      });

    setGuidelines_shop([...guidelines_shop, new_guide]);
    type_ref.current.value = "default";
    content_ref.current.value = "";
  };
  // whole edit section

  const edit_tandc_client = (id) => {
    console.log(id);
    if (
      indi_tandc_edit.type == undefined ||
      indi_tandc_edit.content == undefined
    ) {
      alert("Please fill all the fields");
    } else {
      axios
        .post(
          data.url + "/admin/app/edit-terms-and-condition-client",
          {
            id: id,
            type: indi_tandc_edit.type,
            content: indi_tandc_edit.content,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            // navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_terms_and_condition_client();
            edit_content_ref.current.value = "";
            edit_type_ref.current.value = "default";
            setOpen_tandc_edit(false);
          }
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }
  };

  const edit_tandc_coach = (id) => {
    console.log(id);
    if (
      indi_tandc_edit.type == undefined ||
      indi_tandc_edit.content == undefined
    ) {
      alert("Please fill all the fields");
    } else {
      axios
        .post(
          data.url + "/admin/app/edit-terms-and-condition-coach",
          {
            id: id,
            type: indi_tandc_edit.type,
            content: indi_tandc_edit.content,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            // navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_terms_and_condition_coach();
            edit_content_ref.current.value = "";
            edit_type_ref.current.value = "default";
            setOpen_tandc_edit(false);
          }
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }
  };

  const edit_tandc_ad = (id) => {
    console.log(id);
    if (
      indi_tandc_edit.type == undefined ||
      indi_tandc_edit.content == undefined
    ) {
      alert("Please fill all the fields");
    } else {
      axios
        .post(
          data.url + "/admin/app/edit-terms-and-condition-ad",
          {
            id: id,
            type: indi_tandc_edit.type,
            content: indi_tandc_edit.content,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            // navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_terms_and_condition_ad();
            edit_content_ref.current.value = "";
            edit_type_ref.current.value = "default";
            setOpen_tandc_edit(false);
          }
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }
  };

  const edit_tandc_shop = (id) => {
    console.log(id);
    if (
      indi_tandc_edit.type == undefined ||
      indi_tandc_edit.content == undefined
    ) {
      alert("Please fill all the fields");
    } else {
      axios
        .post(
          data.url + "/admin/app/edit-terms-and-condition-shop",
          {
            id: id,
            type: indi_tandc_edit.type,
            content: indi_tandc_edit.content,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            // navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_terms_and_condition_shop();
            edit_content_ref.current.value = "";
            edit_type_ref.current.value = "default";
            setOpen_tandc_edit(false);
          }
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }
  };

  const edit_guide_awareness = (id) => {
    console.log(id);
    if (
      indi_tandc_edit.type == undefined ||
      indi_tandc_edit.content == undefined
    ) {
      alert("Please fill all the fields");
    } else {
      axios
        .post(
          data.url + "/admin/app/edit-guidelines-awareness",
          {
            id: id,
            type: indi_tandc_edit.type,
            content: indi_tandc_edit.content,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            // navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_guidelines_awareness();
            edit_content_ref.current.value = "";
            edit_type_ref.current.value = "default";
            setOpen_tandc_edit(false);
          }
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }
  };

  const edit_guide_connection_client = (id) => {
    console.log(id);
    if (
      indi_tandc_edit.type == undefined ||
      indi_tandc_edit.content == undefined
    ) {
      alert("Please fill all the fields");
    } else {
      axios
        .post(
          data.url + "/admin/app/edit-guidelines-connection-client",
          {
            id: id,
            type: indi_tandc_edit.type,
            content: indi_tandc_edit.content,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            // navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_guidelines_connection_client();
            edit_content_ref.current.value = "";
            edit_type_ref.current.value = "default";
            setOpen_tandc_edit(false);
          }
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }
  };

  const edit_guide_connection_coach = (id) => {
    console.log(id);
    if (
      indi_tandc_edit.type == undefined ||
      indi_tandc_edit.content == undefined
    ) {
      alert("Please fill all the fields");
    } else {
      axios
        .post(
          data.url + "/admin/app/edit-guidelines-connection-coach",
          {
            id: id,
            type: indi_tandc_edit.type,
            content: indi_tandc_edit.content,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            // navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_guidelines_connection_coach();
            edit_content_ref.current.value = "";
            edit_type_ref.current.value = "default";
            setOpen_tandc_edit(false);
          }
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }
  };

  const edit_guide_reflection = (id) => {
    console.log(id);
    if (
      indi_tandc_edit.type == undefined ||
      indi_tandc_edit.content == undefined
    ) {
      alert("Please fill all the fields");
    } else {
      axios
        .post(
          data.url + "/admin/app/edit-guidelines-reflection",
          {
            id: id,
            type: indi_tandc_edit.type,
            content: indi_tandc_edit.content,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            // navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_guidelines_reflection();
            edit_content_ref.current.value = "";
            edit_type_ref.current.value = "default";
            setOpen_tandc_edit(false);
          }
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }
  };

  const edit_guide_journal = (id) => {
    console.log(id);
    if (
      indi_tandc_edit.type == undefined ||
      indi_tandc_edit.content == undefined
    ) {
      alert("Please fill all the fields");
    } else {
      axios
        .post(
          data.url + "/admin/app/edit-guidelines-journal",
          {
            id: id,
            type: indi_tandc_edit.type,
            content: indi_tandc_edit.content,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            // navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_guidelines_reflection();
            edit_content_ref.current.value = "";
            edit_type_ref.current.value = "default";
            setOpen_tandc_edit(false);
          }
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }
  };

  const edit_guide_events = (id) => {
    console.log(id);
    if (
      indi_tandc_edit.type == undefined ||
      indi_tandc_edit.content == undefined
    ) {
      alert("Please fill all the fields");
    } else {
      axios
        .post(
          data.url + "/admin/app/edit-guidelines-events",
          {
            id: id,
            type: indi_tandc_edit.type,
            content: indi_tandc_edit.content,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            // navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_guidelines_events();
            edit_content_ref.current.value = "";
            edit_type_ref.current.value = "default";
            setOpen_tandc_edit(false);
          }
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }
  };

  const edit_guide_shop = (id) => {
    console.log(id);
    if (
      indi_tandc_edit.type == undefined ||
      indi_tandc_edit.content == undefined
    ) {
      alert("Please fill all the fields");
    } else {
      axios
        .post(
          data.url + "/admin/app/edit-guidelines-shop",
          {
            id: id,
            type: indi_tandc_edit.type,
            content: indi_tandc_edit.content,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            // navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_guidelines_shop();
            edit_content_ref.current.value = "";
            edit_type_ref.current.value = "default";
            setOpen_tandc_edit(false);
          }
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }
  };

  // this is the privacy policy section
  const get_privacy_policy = () => {
    axios
      .post(
        data.url + "/admin/app/get-privacy-policy",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          setPrivacyPolicy(res.data.supply);
        }
      });
  };

  useEffect(() => {
    get_privacy_policy();
  }, []);

  const edit_privacy_policy = (id) => {
    setIndi_pp_edit(
      (() => {
        for (let i = 0; i < privacyPolicy.length; i++) {
          if (privacyPolicy[i].id == id) {
            console.log(privacyPolicy[i]);
            setOpen_pp_edit(true);
            // setEdit_indi_guide(termsAndConditions[i]);
            return privacyPolicy[i];
          }
        }
      })()
    );
  };

  const delete_privacy_policy = (id) => {
    if (id == "" || id == undefined || id == null) {
      alert("Something went wrong");
    } else {
      setPrivacyPolicy((preterms) => preterms.filter((item) => item.id !== id));
      axios
        .post(
          data.url + "/admin/app/delete-privacy-policy",
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
          }
        });
    }
  };

  const add_pp = () => {
    let new_guide = {
      id: generate_id(12),
      type: type_ref.current.value,
      content: content_ref.current.value,
    };

    axios
      .post(
        data.url + "/admin/app/add-privacy-policy",
        {
          id: new_guide.id,
          type: new_guide.type,
          content: new_guide.content,
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
        }
      });

    setPrivacyPolicy([...privacyPolicy, new_guide]);
    type_ref.current.value = "default";
    content_ref.current.value = "";
  };

  const edit_pp = (id) => {
    if (indi_pp_edit.type == "" || indi_pp_edit.content == "") {
      alert("Please fill all the fields");
    } else {
      axios
        .post(
          data.url + "/admin/app/edit-privacy-policy",
          {
            id: id,
            type: indi_pp_edit.type,
            content: indi_pp_edit.content,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.redirect != undefined) {
            // navigate(res.data.redirect);
          } else if (res.data.alert != undefined) {
            alert(res.data.alert);
          } else {
            get_privacy_policy();
            edit_content_ref.current.value = "";
            edit_type_ref.current.value = "default";
            setOpen_pp_edit(false);
          }
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }
  };

  const save_pp = () => {
    axios
      .post(
        data.url + "/admin/app/save-privacy-policy",
        {
          privacyPolicy: privacyPolicy,
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

  // country section is here

  // uploading things starts here
  // const [uploading, setUploading] = useState(false);
  // const [uploading_awareness, setUploading_awareness] = useState("");
  // const uploading_awareness_ref = useRef("");

  //   manage app starts here
  const [open_section, setOpen_section] = useState("");

  const scrollRef = useRef(null);

  const handleWheel = (e) => {
    if (scrollRef.current) {
      e.preventDefault(); // Prevent the default vertical scroll
      scrollRef.current.scrollLeft += e.deltaY / 6; // Convert vertical scroll to horizontal
    }
  };

  // ref for country section
  const country_name = useRef(null);
  const country_code = useRef(null);
  const number_of_digit = useRef(null);
  const country_flag = useRef(null);
  const currency = useRef(null);
  const stripe_abbrivation = useRef(null);
  const app_ios_ref = useRef(null);
  const app_android_ref = useRef(null);
  const reflection_android_ref = useRef(null);
  const reflection_ios_ref = useRef(null);

  // edit country ref section
  const country_name_edit = useRef(null);
  const country_code_edit = useRef(null);
  const number_of_digit_edit = useRef(null);
  const country_flag_edit = useRef(null);

  // use State for country section
  const [flag_name, setFlag_name] = useState("");
  const [flag_file, setFlag_file] = useState("");
  const [flag_name_edit, setFlag_name_edit] = useState("");
  const [flag_file_edit, setFlag_file_edit] = useState("");
  const [countries, setCountrues] = useState([]);
  const [open_edit_country, setOpen_edit_country] = useState(false);
  const [to_edit_country, setTo_edit_country] = useState(null);

  const get_countries = () => {
    axios
      .post(
        data.url + "/admin/app/get-countries",
        {},
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
          setCountrues(res.data.supply);
        }
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  };

  useEffect(() => {
    get_countries();
  }, []);

  const change_flag = (flag, file) => {
    let new_flag = flag.split("\\")[flag.split("\\").length - 1];
    setFlag_file(file);
    setFlag_name(new_flag);
  };

  const change_flag_edit = (flag, file) => {
    let new_flag = flag.split("\\")[flag.split("\\").length - 1];
    setFlag_file_edit(file);
    setFlag_name_edit(new_flag);
  };

  const add_country = () => {
    const formData = new FormData();
    formData.append("country_flag", flag_file);
    formData.append("country_name", country_name.current.value);
    formData.append("country_code", country_code.current.value);
    formData.append("country_no_of_digit", number_of_digit.current.value);
    formData.append("currency", currency.current.value);
    formData.append("app_ios", app_ios_ref.current.value);
    formData.append("app_android", app_android_ref.current.value);
    formData.append("reflection_android", reflection_android_ref.current.value);
    formData.append("reflection_ios", reflection_ios_ref.current.value);
    axios
      .post(data.url + "/admin/app/add-country", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          get_countries();
        }
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  };

  const edit_country = () => {
    const formData = new FormData();
    formData.append("country_flag", flag_file_edit);
    formData.append("country_name", country_name_edit.current.value);
    formData.append("country_code", country_code_edit.current.value);
    formData.append("country_no_of_digit", number_of_digit_edit.current.value);
    formData.append("id", to_edit_country._id);
    axios
      .post(data.url + "/admin/app/edit-country", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.redirect != undefined) {
          navigate(res.data.redirect);
        } else if (res.data.alert != undefined) {
          alert(res.data.alert);
        } else {
          get_countries();
          country_code_edit.current.value = "";
          country_name_edit.current.value = "";
          country_flag_edit.current.value = "";
          number_of_digit_edit.current.value = "";
          setFlag_file_edit("");
          setFlag_name_edit("");
          setOpen_edit_country(false);
        }
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  };

  // langauge
  const language_ref = useRef(null);
  const [all_languages, setAll_languages] = useState([]);
  const language_edit_ref = useRef(null);
  const [to_edit_language, setTo_edit_language] = useState(undefined);
  const [open_edit_language, setOpen_edit_language] = useState(false);

  const get_languages = () => {
    axios
      .post(
        data.url + "/admin/app/get-languages",
        {},
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
          setAll_languages(res.data.supply);
        }
      });
  };

  const add_language = () => {
    if (language_ref.current.value == "") {
      alert("Please enter a valid language");
    } else {
      axios
        .post(
          data.url + "/admin/app/add-language",
          {
            language: language_ref.current.value,
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
            get_languages();
            language_ref.current.value = "";
          }
        });
    }
  };

  const edit_language = () => {
    if (language_edit_ref.current.value == "") {
      alert("Please enter a valid language");
    } else {
      axios
        .post(
          data.url + "/admin/app/edit-language",
          {
            id: to_edit_language._id,
            language: to_edit_language.name,
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
            get_languages();
            language_edit_ref.current.value = "";
            setOpen_edit_language(false);
          }
        });
    }
  };

  useEffect(() => {
    get_languages();
  }, []);

  let no_of_title_client = 0;
  let no_of_title_coach = 0;
  let no_of_title_ad = 0;
  let no_of_title_product = 0;

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
          <div className={styles.profile_name_pp}>Manage App</div>
          <div className={styles.profile_create_date}></div>
        </div>
        <div className={styles.profile_goto_chat_section}>
          {/* <div className={styles.profile_goto_chat_btn}>Go to chat</div> */}
        </div>
      </div>

      <div
        className={styles.all_main_options_ud}
        ref={scrollRef}
        onWheel={handleWheel}
      >
        <div
          className={styles.main_indi_options}
          onClick={() => {
            setOpen_section("pp");
            get_privacy_policy();
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
            <div className={styles.mio_main_name_ud}>Privacy policy</div>
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
            setOpen_section("t&c-client");
            get_terms_and_condition_client();
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
            <div className={styles.mio_main_name_ud}>
              Terms and Conditions - client
            </div>
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
            setOpen_section("t&c-coach");
            get_terms_and_condition_coach();
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
            <div className={styles.mio_main_name_ud}>
              Terms and Conditions - coach
            </div>
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
            setOpen_section("t&c-ad");
            get_terms_and_condition_ad();
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
            <div className={styles.mio_main_name_ud}>
              Terms and Conditions - Ad
            </div>
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
            setOpen_section("t&c-shop");
            get_terms_and_condition_shop();
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
            <div className={styles.mio_main_name_ud}>
              Terms and Conditions - Shop
            </div>
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
            setOpen_section("guide-awareness");
            get_guidelines_awareness();
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
            <div className={styles.mio_main_name_ud}>Awareness Guidelines</div>
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
            setOpen_section("guide-connection-client");
            get_guidelines_connection_client();
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
            <div className={styles.mio_main_name_ud}>
              Connection Guidelines for Client
            </div>
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
            setOpen_section("guide-connection-coach");
            get_guidelines_connection_coach();
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
            <div className={styles.mio_main_name_ud}>
              Connection Guidelines for Coach
            </div>
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
            setOpen_section("guide-reflection");
            get_guidelines_reflection();
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
            <div className={styles.mio_main_name_ud}>Reflection Guidelines</div>
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
            setOpen_section("guide-journal");
            get_guidelines_journal();
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
            <div className={styles.mio_main_name_ud}>Journal Guidelines</div>
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
            setOpen_section("guide-events");
            get_guidelines_events();
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
            <div className={styles.mio_main_name_ud}>Events Guidelines</div>
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
            setOpen_section("guide-shop");
            get_guidelines_shop();
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
            <div className={styles.mio_main_name_ud}>Shop Guidelines</div>
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
            setOpen_section("countries");
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.5 1.75C6.5 1.33579 6.16421 1 5.75 1C5.33579 1 5 1.33579 5 1.75V21.75C5 22.1642 5.33579 22.5 5.75 22.5C6.16421 22.5 6.5 22.1642 6.5 21.75V13.6V3.6V1.75Z"
                    fill="#1C274C"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                  <path
                    d="M13.5582 3.87333L13.1449 3.70801C11.5821 3.08288 9.8712 2.9258 8.22067 3.25591L6.5 3.60004V13.6L8.22067 13.2559C9.8712 12.9258 11.5821 13.0829 13.1449 13.708C14.8385 14.3854 16.7024 14.5119 18.472 14.0695L18.5721 14.0445C19.1582 13.898 19.4361 13.2269 19.1253 12.7089L17.5647 10.1078C17.2232 9.53867 17.0524 9.25409 17.0119 8.94455C16.9951 8.81543 16.9951 8.68466 17.0119 8.55553C17.0524 8.24599 17.2232 7.96141 17.5647 7.39225L18.8432 5.26136C19.1778 4.70364 18.6711 4.01976 18.0401 4.17751C16.5513 4.54971 14.9831 4.44328 13.5582 3.87333Z"
                    fill="#1C274C"
                    className={styles.hover_fill_mio}
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className={styles.mio_main_name_ud}>Countries</div>
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
            setOpen_section("languages");
          }}
        >
          <div className={styles.upper_line_mio_ud}></div>
          <div className={styles.mio_left_ud}>
            <div className={styles.mio_ud_svg_section}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`${styles.mio_ud_left_svg} ${styles.hover_fill_mio_stroke}`}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M5 8l6 6"></path>
                  <path d="M4 14l6-6 2-3"></path>
                  <path d="M2 5h12"></path>
                  <path d="M7 2h1"></path>
                  <path d="M22 22l-5-10-5 10"></path>
                  <path d="M14 18h6"></path>
                </g>
              </svg>
            </div>
            <div className={styles.mio_main_name_ud}>Languages</div>
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

      {open_section == "t&c-client" ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.guidelines_section}>
            <div className={styles.guidelines_options}>
              <div className={styles.indi_guideline_options}>
                Client Terms and Conditions
              </div>
            </div>

            {termsAndConditions_client.length == 0 ? (
              <div className={styles.ng_text}>No Terms and condition yet,</div>
            ) : (
              termsAndConditions_client.map((item, index) => {
                if (item.type == "title") {
                  no_of_title_client += 1;
                }
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
                          {item.type == "title" ? no_of_title_client : ""}
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
                              delete_termsandcondition_client(item.id);
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
                              edit_termsandcondition_client(item.id);
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

          {open_tandc_edit ? (
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
                    setOpen_tandc_edit(false);
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
                Edit Terms and conditions
              </div>
              <div className={styles.guide_line_seclect}>
                <select
                  className={styles.guide_line_i_select}
                  ref={edit_type_ref}
                  value={indi_tandc_edit.type}
                  onChange={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
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
                  value={indi_tandc_edit.content}
                  onInput={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
                      content: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_tandc_client(indi_tandc_edit.id);
                }}
              >
                Edit Terms and condition
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>
                Add Terms and Conditions
              </div>
              <div className={styles.guide_line_seclect}>
                <select className={styles.guide_line_i_select} ref={type_ref}>
                  <option value="default" disabled selected>
                    Choose type
                  </option>
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                  <option value="list title">Subtitle</option>
                  <option value="list option">Bullet points</option>
                </select>
              </div>
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter the Terms here"
                  ref={content_ref}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  //   add_guideline();
                  add_tand_client();
                }}
              >
                Add T&C
              </div>
            </div>
          )}
        </div>
      ) : open_section == "t&c-coach" ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.guidelines_section}>
            <div className={styles.guidelines_options}>
              <div
                className={styles.indi_guideline_options}
                onClick={() => {
                  // save_coach();
                }}
              >
                Terms and conditions for coach
              </div>
            </div>

            {termsAndConditions_coach.length == 0 ? (
              <div className={styles.ng_text}>No Terms and condition yet,</div>
            ) : (
              termsAndConditions_coach.map((item, index) => {
                if (item.type == "title") {
                  no_of_title_coach += 1;
                }
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
                          {item.type == "title" ? no_of_title_coach : ""}
                          {/* {item.type == "title" ? no_of_title_coach : ""} */}
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
                              delete_termsandcondition_coach(item.id);
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
                              edit_termsandcondition_coach(item.id);
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

          {open_tandc_edit ? (
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
                    setOpen_tandc_edit(false);
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
                Edit Terms and conditions
              </div>
              <div className={styles.guide_line_seclect}>
                <select
                  className={styles.guide_line_i_select}
                  ref={edit_type_ref}
                  value={indi_tandc_edit.type}
                  onChange={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
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
                  value={indi_tandc_edit.content}
                  onInput={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
                      content: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_tandc_coach(indi_tandc_edit.id);
                }}
              >
                Edit Terms and condition
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>
                Add Terms and Conditions
              </div>
              <div className={styles.guide_line_seclect}>
                <select className={styles.guide_line_i_select} ref={type_ref}>
                  <option value="default" disabled selected>
                    Choose type
                  </option>
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                  <option value="list title">Subtitle</option>
                  <option value="list option">Bullet points</option>
                </select>
              </div>
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter the Terms here"
                  ref={content_ref}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  //   add_guideline();
                  add_tand_coach();
                }}
              >
                Add T&C
              </div>
            </div>
          )}
        </div>
      ) : open_section == "t&c-ad" ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.guidelines_section}>
            <div className={styles.guidelines_options}>
              <div
                className={styles.indi_guideline_options}
                onClick={() => {
                  // save_ad();
                }}
              >
                Terms and conditions for ad
              </div>
            </div>

            {termsAndConditions_ad.length == 0 ? (
              <div className={styles.ng_text}>No Terms and condition yet,</div>
            ) : (
              termsAndConditions_ad.map((item, index) => {
                if (item.type == "title") {
                  no_of_title_ad += 1;
                }
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
                          {item.type == "title" ? no_of_title_ad : ""}
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
                              delete_termsandcondition_ad(item.id);
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
                              edit_termsandcondition_ad(item.id);
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

          {open_tandc_edit ? (
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
                    setOpen_tandc_edit(false);
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
                Edit Terms and conditions
              </div>
              <div className={styles.guide_line_seclect}>
                <select
                  className={styles.guide_line_i_select}
                  ref={edit_type_ref}
                  value={indi_tandc_edit.type}
                  onChange={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
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
                  value={indi_tandc_edit.content}
                  onInput={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
                      content: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_tandc_ad(indi_tandc_edit.id);
                }}
              >
                Edit Terms and condition
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>
                Add Terms and Conditions
              </div>
              <div className={styles.guide_line_seclect}>
                <select className={styles.guide_line_i_select} ref={type_ref}>
                  <option value="default" disabled selected>
                    Choose type
                  </option>
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                  <option value="list title">Subtitle</option>
                  <option value="list option">Bullet points</option>
                </select>
              </div>
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter the Terms here"
                  ref={content_ref}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  //   add_guideline();
                  add_tand_ad();
                }}
              >
                Add T&C
              </div>
            </div>
          )}
        </div>
      ) : open_section == "t&c-shop" ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.guidelines_section}>
            <div className={styles.guidelines_options}>
              <div
                className={styles.indi_guideline_options}
                onClick={() => {
                  // save_shop();
                }}
              >
                Terms and conditions for shop
              </div>
            </div>

            {termsAndConditions_shop.length == 0 ? (
              <div className={styles.ng_text}>No Terms and condition yet,</div>
            ) : (
              termsAndConditions_shop.map((item, index) => {
                if (item.type == "title") {
                  no_of_title_product += 1;
                }
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
                          {item.type == "title" ? no_of_title_product : ""}
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
                              delete_termsandcondition_shop(item.id);
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
                              edit_termsandcondition_shop(item.id);
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

          {open_tandc_edit ? (
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
                    setOpen_tandc_edit(false);
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
                Edit Terms and conditions
              </div>
              <div className={styles.guide_line_seclect}>
                <select
                  className={styles.guide_line_i_select}
                  ref={edit_type_ref}
                  value={indi_tandc_edit.type}
                  onChange={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
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
                  value={indi_tandc_edit.content}
                  onInput={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
                      content: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_tandc_shop(indi_tandc_edit.id);
                }}
              >
                Edit Terms and condition
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>
                Add Terms and Conditions
              </div>
              <div className={styles.guide_line_seclect}>
                <select className={styles.guide_line_i_select} ref={type_ref}>
                  <option value="default" disabled selected>
                    Choose type
                  </option>
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                  <option value="list title">Subtitle</option>
                  <option value="list option">Bullet points</option>
                </select>
              </div>
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter the Terms here"
                  ref={content_ref}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  //   add_guideline();
                  add_tand_shop();
                }}
              >
                Add T&C
              </div>
            </div>
          )}
        </div>
      ) : open_section == "pp" ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.guidelines_section}>
            <div className={styles.guidelines_options}>
              <div
                className={styles.indi_guideline_options}
                onClick={() => {
                  // save_pp();
                }}
              >
                Privacy Policy
              </div>
            </div>

            {privacyPolicy.length == 0 ? (
              <div className={styles.ng_text}>No Policy yet,</div>
            ) : (
              privacyPolicy.map((item) => {
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
                              delete_privacy_policy(item.id);
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
                              edit_privacy_policy(item.id);
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

          {open_pp_edit ? (
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
                    setOpen_pp_edit(false);
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
                Edit Privacy Policy
              </div>
              <div className={styles.guide_line_seclect}>
                <select
                  className={styles.guide_line_i_select}
                  ref={edit_type_ref}
                  value={indi_pp_edit.type}
                  onChange={(e) => {
                    setIndi_pp_edit({
                      ...indi_pp_edit,
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
                  placeholder="Enter the privacy policy here"
                  ref={edit_content_ref}
                  value={indi_pp_edit.content}
                  onInput={(e) => {
                    setIndi_pp_edit({
                      ...indi_pp_edit,
                      content: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_pp(indi_pp_edit.id);
                }}
              >
                Edit Privacy Policy
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Privacy Policy</div>
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
                  placeholder="Enter the Terms here"
                  ref={content_ref}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  //   add_guideline();
                  add_pp();
                }}
              >
                Add Privacy policy
              </div>
            </div>
          )}
        </div>
      ) : open_section == "countries" ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.country_section}>
            {/* <div className={styles.guidelines_options}>
              <div className={styles.indi_guideline_options}>
                Refresh the list
              </div>
            </div> */}

            {countries.length == 0 ? (
              <div className={styles.no_show}>No Countries to show</div>
            ) : null}
            {countries.map((item) => {
              return (
                <div
                  className={`${styles.ps_ud_main_indi}`}
                  onClick={() => {
                    // isolate_indi_awareness(item._id);
                    // setShow_subTopics(true);
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.awareness_edit_svg}
                    onClick={(e) => {
                      setTo_edit_country(item);
                      setOpen_edit_country(true);
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
                  <div className={styles.ud_info_title}>
                    <img
                      src={data.url + "/" + item.img}
                      alt=""
                      className={styles.country_img}
                    />{" "}
                    {item.country} ∙ {item.code}
                  </div>
                  <div className={styles.ud_info_value}></div>
                  Number of digit in contact number: {item.number_of_digit}
                </div>
              );
            })}
          </div>

          {open_edit_country ? (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.backarrow}
                  onClick={() => {
                    country_code_edit.current.value = "";
                    country_name_edit.current.value = "";
                    country_flag_edit.current.value = "";
                    number_of_digit_edit.current.value = "";
                    setFlag_file_edit("");
                    setFlag_name_edit("");
                    setOpen_edit_country(false);
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
                </svg>{" "}
                Edit Country
              </div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter Country name here"
                  ref={country_name_edit}
                  value={to_edit_country.country}
                  onInput={() => {
                    setTo_edit_country({
                      ...to_edit_country,
                      country: country_name_edit.value,
                    });
                  }}
                />
              </div>
              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter Country code"
                  ref={country_code_edit}
                  value={to_edit_country.code}
                  onInput={() => {
                    setTo_edit_country({
                      ...to_edit_country,
                      code: country_code_edit.value,
                    });
                  }}
                />
              </div>
              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter number of digit in this country's contact number"
                  ref={number_of_digit_edit}
                  value={to_edit_country.number_of_digit}
                  onInput={() => {
                    setTo_edit_country({
                      ...to_edit_country,
                      number_of_digit: number_of_digit_edit.value,
                    });
                  }}
                />
              </div>
              {/* <div className={styles.input_section}> */}

              {flag_name_edit == "" ? (
                <label
                  className={styles.input_section_label_img}
                  htmlFor="country_flag"
                >
                  <div className={styles.country_flag_edit_dark_section}>
                    Change
                  </div>
                  <img
                    src={data.url + "/" + to_edit_country.img}
                    alt=""
                    className={styles.edit_country_img}
                  />
                </label>
              ) : (
                <label
                  className={styles.input_section_label_value}
                  htmlFor="country_flag"
                >
                  {flag_name_edit}
                </label>
              )}
              <input
                // className={styles.input}
                // placeholder="Enter number of digit in this country's contact "
                ref={country_flag_edit}
                type="file"
                hidden
                id="country_flag"
                onChange={(e) => {
                  change_flag_edit(
                    country_flag_edit.current.value,
                    e.target.files[0]
                  );
                }}
              />
              {/* </div> */}
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_country();
                }}
              >
                Edit Country
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Country</div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter Country name here"
                  ref={country_name}
                />
              </div>
              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter Country code"
                  ref={country_code}
                />
              </div>
              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter number of digit in this country's contact number"
                  ref={number_of_digit}
                />
              </div>
              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter currency"
                  ref={currency}
                />
              </div>
              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter App subscription fee for ios"
                  ref={app_ios_ref}
                />
              </div>
              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter Reflection subscription fee for ios"
                  ref={reflection_ios_ref}
                />
              </div>
              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter App subscription fee for android"
                  ref={app_android_ref}
                />
              </div>
              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter Reflection subscription fee for android"
                  ref={reflection_android_ref}
                />
              </div>
              {/* <div className={styles.input_section}> */}

              {flag_name == "" ? (
                <label
                  className={styles.input_section_label}
                  htmlFor="country_flag"
                >
                  Uplaod country flag here
                </label>
              ) : (
                <label
                  className={styles.input_section_label_value}
                  htmlFor="country_flag"
                >
                  {flag_name}
                </label>
              )}
              <input
                // className={styles.input}
                // placeholder="Enter number of digit in this country's contact "
                ref={country_flag}
                type="file"
                hidden
                id="country_flag"
                onChange={(e) => {
                  change_flag(country_flag.current.value, e.target.files[0]);
                }}
              />
              {/* </div> */}
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  add_country();
                }}
              >
                Add Country
              </div>
            </div>
          )}
        </div>
      ) : open_section == "languages" ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.country_section}>
            {all_languages.length == 0 ? (
              <div className={styles.no_show}>No Languages to show</div>
            ) : null}
            {all_languages.map((item) => {
              return (
                <div className={`${styles.ps_ud_main_indi}`} onClick={() => {}}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.awareness_edit_svg}
                    onClick={(e) => {
                      setOpen_edit_language(true);
                      setTo_edit_language(item);
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
                  {item.name}
                </div>
              );
            })}
          </div>

          {open_edit_language ? (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.backarrow}
                  onClick={() => {
                    language_edit_ref.current.value = "";
                    setOpen_edit_language(false);
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
                </svg>{" "}
                Edit Country
              </div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter Language"
                  ref={language_edit_ref}
                  value={to_edit_language.name}
                  onInput={() => {
                    setTo_edit_language({
                      ...to_edit_language,
                      name: language_edit_ref.current.value,
                    });
                  }}
                />
              </div>

              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_language();
                }}
              >
                Edit Country
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Language</div>

              <div className={styles.input_section}>
                <input
                  className={styles.input}
                  placeholder="Enter Language"
                  ref={language_ref}
                />
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  add_language();
                }}
              >
                Add Language
              </div>
            </div>
          )}
        </div>
      ) : null}

      {open_section == "guide-awareness" ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.guidelines_section}>
            <div className={styles.guidelines_options}>
              <div className={styles.indi_guideline_options}>
                Awareness Guideline
              </div>
            </div>

            {guidelines_awareness.length == 0 ? (
              <div className={styles.ng_text}>No Guidelines yet</div>
            ) : (
              guidelines_awareness.map((item) => {
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
                              delete_guide_awareness(item.id);
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
                              edit_guideline_awareness(item.id);
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

          {open_tandc_edit ? (
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
                    setOpen_tandc_edit(false);
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
                Edit Guideline
              </div>
              <div className={styles.guide_line_seclect}>
                <select
                  className={styles.guide_line_i_select}
                  ref={edit_type_ref}
                  value={indi_tandc_edit.type}
                  onChange={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
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
                  value={indi_tandc_edit.content}
                  onInput={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
                      content: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_guide_awareness(indi_tandc_edit.id);
                }}
              >
                Edit Guideline
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Guideline</div>
              <div className={styles.guide_line_seclect}>
                <select className={styles.guide_line_i_select} ref={type_ref}>
                  <option value="default" disabled selected>
                    Choose type
                  </option>
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                  <option value="list title">Subtitle</option>
                  <option value="list option">Bullet points</option>
                </select>
              </div>
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter the Terms here"
                  ref={content_ref}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  //   add_guideline();
                  add_guide_awareness();
                }}
              >
                Add Guideline
              </div>
            </div>
          )}
        </div>
      ) : null}

      {open_section == "guide-connection-client" ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.guidelines_section}>
            <div className={styles.guidelines_options}>
              <div className={styles.indi_guideline_options}>
                Connection Guideline for client
              </div>
            </div>

            {guidelines_connection_clinet.length == 0 ? (
              <div className={styles.ng_text}>No Guidelines yet</div>
            ) : (
              guidelines_connection_clinet.map((item) => {
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
                              delete_guide_connection_client(item.id);
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
                              edit_guideline_connection_client(item.id);
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

          {open_tandc_edit ? (
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
                    setOpen_tandc_edit(false);
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
                Edit Guideline
              </div>
              <div className={styles.guide_line_seclect}>
                <select
                  className={styles.guide_line_i_select}
                  ref={edit_type_ref}
                  value={indi_tandc_edit.type}
                  onChange={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
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
                  value={indi_tandc_edit.content}
                  onInput={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
                      content: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_guide_connection_client(indi_tandc_edit.id);
                }}
              >
                Edit Guideline
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Guideline</div>
              <div className={styles.guide_line_seclect}>
                <select className={styles.guide_line_i_select} ref={type_ref}>
                  <option value="default" disabled selected>
                    Choose type
                  </option>
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                  <option value="list title">Subtitle</option>
                  <option value="list option">Bullet points</option>
                </select>
              </div>
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter the Terms here"
                  ref={content_ref}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  //   add_guideline();
                  add_guide_connection_client();
                }}
              >
                Add Guideline
              </div>
            </div>
          )}
        </div>
      ) : null}

      {open_section == "guide-connection-coach" ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.guidelines_section}>
            <div className={styles.guidelines_options}>
              <div className={styles.indi_guideline_options}>
                Connection Guideline for coach
              </div>
            </div>

            {guidelines_connection_coach.length == 0 ? (
              <div className={styles.ng_text}>No Guidelines yet</div>
            ) : (
              guidelines_connection_coach.map((item) => {
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
                              delete_guide_connection_coach(item.id);
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
                              edit_guideline_connection_coach(item.id);
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

          {open_tandc_edit ? (
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
                    setOpen_tandc_edit(false);
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
                Edit Guideline
              </div>
              <div className={styles.guide_line_seclect}>
                <select
                  className={styles.guide_line_i_select}
                  ref={edit_type_ref}
                  value={indi_tandc_edit.type}
                  onChange={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
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
                  value={indi_tandc_edit.content}
                  onInput={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
                      content: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_guide_connection_coach(indi_tandc_edit.id);
                }}
              >
                Edit Guideline
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Guideline</div>
              <div className={styles.guide_line_seclect}>
                <select className={styles.guide_line_i_select} ref={type_ref}>
                  <option value="default" disabled selected>
                    Choose type
                  </option>
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                  <option value="list title">Subtitle</option>
                  <option value="list option">Bullet points</option>
                </select>
              </div>
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter the Terms here"
                  ref={content_ref}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  //   add_guideline();
                  add_guide_connection_coach();
                }}
              >
                Add Guideline
              </div>
            </div>
          )}
        </div>
      ) : null}

      {open_section == "guide-reflection" ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.guidelines_section}>
            <div className={styles.guidelines_options}>
              <div className={styles.indi_guideline_options}>
                Reflection Guideline
              </div>
            </div>

            {guidelines_reflection.length == 0 ? (
              <div className={styles.ng_text}>No Guidelines yet</div>
            ) : (
              guidelines_reflection.map((item) => {
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
                              delete_guide_reflection(item.id);
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
                              edit_guideline_reflection(item.id);
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

          {open_tandc_edit ? (
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
                    setOpen_tandc_edit(false);
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
                Edit Guideline
              </div>
              <div className={styles.guide_line_seclect}>
                <select
                  className={styles.guide_line_i_select}
                  ref={edit_type_ref}
                  value={indi_tandc_edit.type}
                  onChange={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
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
                  value={indi_tandc_edit.content}
                  onInput={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
                      content: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_guide_reflection(indi_tandc_edit.id);
                }}
              >
                Edit Guideline
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Guideline</div>
              <div className={styles.guide_line_seclect}>
                <select className={styles.guide_line_i_select} ref={type_ref}>
                  <option value="default" disabled selected>
                    Choose type
                  </option>
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                  <option value="list title">Subtitle</option>
                  <option value="list option">Bullet points</option>
                </select>
              </div>
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter the Terms here"
                  ref={content_ref}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  //   add_guideline();
                  add_guide_reflection();
                }}
              >
                Add Guideline
              </div>
            </div>
          )}
        </div>
      ) : null}

      {open_section == "guide-journal" ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.guidelines_section}>
            <div className={styles.guidelines_options}>
              <div className={styles.indi_guideline_options}>
                journal Guideline
              </div>
            </div>

            {guidelines_journal.length == 0 ? (
              <div className={styles.ng_text}>No Guidelines yet</div>
            ) : (
              guidelines_journal.map((item) => {
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
                              delete_guide_journal(item.id);
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
                              edit_guideline_journal(item.id);
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

          {open_tandc_edit ? (
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
                    setOpen_tandc_edit(false);
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
                Edit Guideline
              </div>
              <div className={styles.guide_line_seclect}>
                <select
                  className={styles.guide_line_i_select}
                  ref={edit_type_ref}
                  value={indi_tandc_edit.type}
                  onChange={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
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
                  value={indi_tandc_edit.content}
                  onInput={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
                      content: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_guide_journal(indi_tandc_edit.id);
                }}
              >
                Edit Guideline
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Guideline</div>
              <div className={styles.guide_line_seclect}>
                <select className={styles.guide_line_i_select} ref={type_ref}>
                  <option value="default" disabled selected>
                    Choose type
                  </option>
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                  <option value="list title">Subtitle</option>
                  <option value="list option">Bullet points</option>
                </select>
              </div>
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter the Terms here"
                  ref={content_ref}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  //   add_guideline();
                  add_guide_journal();
                }}
              >
                Add Guideline
              </div>
            </div>
          )}
        </div>
      ) : null}

      {open_section == "guide-events" ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.guidelines_section}>
            <div className={styles.guidelines_options}>
              <div className={styles.indi_guideline_options}>
                events Guideline
              </div>
            </div>

            {guidelines_events.length == 0 ? (
              <div className={styles.ng_text}>No Guidelines yet</div>
            ) : (
              guidelines_events.map((item) => {
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
                              delete_guide_events(item.id);
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
                              edit_guideline_events(item.id);
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

          {open_tandc_edit ? (
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
                    setOpen_tandc_edit(false);
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
                Edit Guideline
              </div>
              <div className={styles.guide_line_seclect}>
                <select
                  className={styles.guide_line_i_select}
                  ref={edit_type_ref}
                  value={indi_tandc_edit.type}
                  onChange={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
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
                  value={indi_tandc_edit.content}
                  onInput={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
                      content: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_guide_events(indi_tandc_edit.id);
                }}
              >
                Edit Guideline
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Guideline</div>
              <div className={styles.guide_line_seclect}>
                <select className={styles.guide_line_i_select} ref={type_ref}>
                  <option value="default" disabled selected>
                    Choose type
                  </option>
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                  <option value="list title">Subtitle</option>
                  <option value="list option">Bullet points</option>
                </select>
              </div>
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter the Terms here"
                  ref={content_ref}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  //   add_guideline();
                  add_guide_events();
                }}
              >
                Add Guideline
              </div>
            </div>
          )}
        </div>
      ) : null}

      {open_section == "guide-shop" ? (
        <div className={styles.outer_guildelines}>
          <div className={styles.guidelines_section}>
            <div className={styles.guidelines_options}>
              <div className={styles.indi_guideline_options}>
                shop Guideline
              </div>
            </div>

            {guidelines_shop.length == 0 ? (
              <div className={styles.ng_text}>No Guidelines yet</div>
            ) : (
              guidelines_shop.map((item) => {
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
                              delete_guide_shop(item.id);
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
                              edit_guideline_shop(item.id);
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

          {open_tandc_edit ? (
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
                    setOpen_tandc_edit(false);
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
                Edit Guideline
              </div>
              <div className={styles.guide_line_seclect}>
                <select
                  className={styles.guide_line_i_select}
                  ref={edit_type_ref}
                  value={indi_tandc_edit.type}
                  onChange={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
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
                  value={indi_tandc_edit.content}
                  onInput={(e) => {
                    setInditandc_edit({
                      ...indi_tandc_edit,
                      content: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  edit_guide_shop(indi_tandc_edit.id);
                }}
              >
                Edit Guideline
              </div>
            </div>
          ) : (
            <div className={styles.guide_line_making_section}>
              <div className={styles.guide_line_title}>Add Guideline</div>
              <div className={styles.guide_line_seclect}>
                <select className={styles.guide_line_i_select} ref={type_ref}>
                  <option value="default" disabled selected>
                    Choose type
                  </option>
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                  <option value="list title">Subtitle</option>
                  <option value="list option">Bullet points</option>
                </select>
              </div>
              <div className={styles.ta_section}>
                <textarea
                  className={styles.ta}
                  placeholder="Enter the Terms here"
                  ref={content_ref}
                ></textarea>
              </div>
              <div
                className={styles.guide_line_btn}
                onClick={() => {
                  //   add_guideline();
                  add_guide_shop();
                }}
              >
                Add Guideline
              </div>
            </div>
          )}
        </div>
      ) : null}

      <div className={styles.main_empty_section}></div>
    </>
  );
}
