import React, { Component, useState } from "react";
import "./App.css";
import uniqid from "uniqid";
import GeneralInfo from "./components/GeneralInfo";
import GenInfoEdit from "./components/GenInfoEdit";
import EduInfo from "./components/EduInfo";
import EduEdit from "./components/EduEdit";
import ExpInfo from "./components/ExpInfo";
import ExpEdit from "./components/ExpEdit";
import Footer from "./Footer";

function App() {
  const [onEditGen, setOnEditGen] = useState(false);
  const [onEditEdu, setOnEditEdu] = useState("");
  const [onEditExp, setOnEditExp] = useState("");
  const [genInfo, setGenInfo] = useState({
    name: "Peatr Cap",
    email: "react@master.com",
    phoneNumber: "+1 123 4567",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Convallis posuere morbi leo urna. Blandit massa enim nec dui nunc mattis enim ut tellus. Magna etiam tempor orci eu. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi.",
  });
  const [eduInfos, setEduInfos] = useState([
    {
      school: "React University",
      title: "Bachelor",
      dateFrom: "2013-03-01",
      dateTo: "2017-02-28",
      id: uniqid(),
    },
  ]);
  const [expInfos, setExpInfos] = useState([
    {
      company: "React Company",
      position: "React master",
      mainTask:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Convallis posuere morbi leo urna. Blandit massa enim nec dui nunc mattis enim ut tellus. Magna etiam tempor orci eu. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi.",
      dateFrom: "2023-06-27",
      dateTo: "2023-06-28",
      id: uniqid(),
    },
  ]);

  const handleChange = (e, key, id = null) => {
    const item = e.target.id;

    if (id) {
      if (key === "eduInfos") {
        setEduInfos((prevState) =>
          prevState.map((info) => {
            if (info.id === id) {
              return {
                ...info,
                [item]: e.target.value,
              };
            }
            return info;
          })
        );
      } else if (key === "expInfos") {
        setExpInfos((prevState) =>
          prevState.map((info) => {
            if (info.id === id) {
              return {
                ...info,
                [item]: e.target.value,
              };
            }
            return info;
          })
        );
      }
    } else {
      setGenInfo((prevState) => ({
        ...prevState,
        [item]: e.target.value,
      }));
    }
  };

  const toggleGen = () => {
    setOnEditGen((prevOnEditGen) => !prevOnEditGen);
  };

  const toggleEdu = (e) => {
    setOnEditEdu(e.target.parentNode.parentNode.id);
  };

  const toggleExp = (e) => {
    setOnEditExp(e.target.parentNode.parentNode.id);
  };

  const addEdu = () => {
    const newId = uniqid();
    setOnEditEdu(newId);
    setEduInfos((prevEduInfos) => [
      ...prevEduInfos,
      {
        school: "",
        title: "",
        dateFrom: "",
        dateTo: "",
        id: newId,
      },
    ]);
  };

  const addExp = () => {
    const newId = uniqid();
    setOnEditExp(newId);
    setExpInfos((prevExpInfos) => [
      ...prevExpInfos,
      {
        company: "",
        position: "",
        mainTask: "",
        dateFrom: "",
        dateTo: "",
        id: newId,
      },
    ]);
  };

  const deleteItem = (key, id) => {
    if (key === "eduInfos") {
      setEduInfos((prevEduInfos) =>
        prevEduInfos.filter((info) => {
          return info.id !== id;
        })
      );
    } else if (key === "expInfos") {
      setExpInfos((prevExpInfos) =>
        prevExpInfos.filter((info) => {
          return info.id !== id;
        })
      );
    }
  };

  const genDiv = onEditGen ? (
    <GenInfoEdit genInfo={genInfo} toggle={toggleGen} change={handleChange} />
  ) : (
    <GeneralInfo genInfo={genInfo} toggle={toggleGen} />
  );
  const eduDivs = eduInfos.map((info) => {
    return onEditEdu === info.id ? (
      <EduEdit eduInfo={info} toggle={toggleEdu} change={handleChange} />
    ) : (
      <EduInfo eduInfo={info} toggle={toggleEdu} onDelete={deleteItem} />
    );
  });
  const expDivs = expInfos.map((info) => {
    return onEditExp === info.id ? (
      <ExpEdit expInfo={info} toggle={toggleExp} change={handleChange} />
    ) : (
      <ExpInfo expInfo={info} toggle={toggleExp} onDelete={deleteItem} />
    );
  });
  return (
    <div className="App">
      <div className="content">
        <h1>CV</h1>
        {genDiv}
        {eduDivs}
        <button onClick={addEdu} type="button" className="add">
          + Add education
        </button>
        {expDivs}
        <button onClick={addExp} type="button" className="add">
          + Add experience
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
