import React, { Component } from "react";
import uniqid from "uniqid";
import GeneralInfo from "./components/GeneralInfo";
import GenInfoEdit from "./components/GenInfoEdit";
import EduInfo from "./components/EduInfo";
import EduEdit from "./components/EduEdit";
import ExpInfo from "./components/ExpInfo";
import ExpEdit from "./components/ExpEdit";

class App extends Component {
  constructor() {
    super();
    this.state = {
      onEditGen: true,
      onEditEdu: "",
      onEditExp: "",
      genInfo: {
        name: "abc",
        email: "aaa@bbb.com",
        phoneNumber: "12341234",
      },
      eduInfos: [
        {
          school: "Yonsei",
          title: "Bachelor",
          dateFrom: "2013-03-01",
          dateTo: "2020-02-28",
          id: uniqid(),
        },
        {
          school: "Korea",
          title: "Bachelor",
          dateFrom: "2013-03-01",
          dateTo: "2020-02-28",
          id: uniqid(),
        },
      ],
      expInfos: [
        {
          company: "Good Bank",
          position: "Salad bar master",
          mainTask: "make salad",
          dateFrom: "2018-05-03",
          dateTo: "2019-04-07",
          id: uniqid(),
        },
        {
          company: "Super fit",
          position: "Salad bar master",
          mainTask: "make salad",
          dateFrom: "2018-05-03",
          dateTo: "2019-04-07",
          id: uniqid(),
        },
      ],
    };

    this.toggleGen = this.toggleGen.bind(this);
    this.toggleEdu = this.toggleEdu.bind(this);
    this.toggleExp = this.toggleExp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addEdu = this.addEdu.bind(this);
    this.addExp = this.addExp.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange(e, key, id = null) {
    const item = e.target.id;

    if (id) {
      this.setState((prevState) => ({
        [key]: prevState[key].map((info) => {
          if (info.id === id) {
            return {
              ...info,
              [item]: e.target.value,
            };
          }
          return info;
        }),
      }));
    } else {
      this.setState((prevState) => ({
        [key]: {
          ...prevState[key],
          [item]: e.target.value,
        },
      }));
    }
  }

  toggleGen() {
    const { onEditGen } = this.state;
    this.setState({
      onEditGen: !onEditGen,
    });
  }

  toggleEdu(e) {
    this.setState({
      onEditEdu: e.target.parentNode.id,
    });
  }

  toggleExp(e) {
    this.setState({
      onEditExp: e.target.parentNode.id,
    });
  }

  addEdu() {
    const newId = uniqid();
    this.setState((prevState) => ({
      eduInfos: prevState.eduInfos.concat({
        school: "",
        title: "",
        dateFrom: "",
        dateTo: "",
        id: newId,
      }),
      onEditEdu: newId,
    }));
  }

  addExp() {
    const newId = uniqid();
    this.setState((prevState) => ({
      expInfos: prevState.expInfos.concat({
        company: "",
        position: "",
        mainTask: "",
        dateFrom: "",
        dateTo: "",
        id: newId,
      }),
      onEditExp: newId,
    }));
  }

  deleteItem(key, id) {
    this.setState((prevState) => ({
      [key]: prevState[key].filter((info) => {
        return info.id !== id;
      }),
    }));
  }

  render() {
    const { genInfo, onEditGen, eduInfos, onEditEdu, expInfos, onEditExp } =
      this.state;
    const genDiv = onEditGen ? (
      <GenInfoEdit
        genInfo={genInfo}
        toggle={this.toggleGen}
        change={this.handleChange}
      />
    ) : (
      <GeneralInfo genInfo={genInfo} toggle={this.toggleGen} />
    );
    const eduDivs = eduInfos.map((info) => {
      return onEditEdu === info.id ? (
        <EduEdit
          eduInfo={info}
          toggle={this.toggleEdu}
          change={this.handleChange}
        />
      ) : (
        <EduInfo
          eduInfo={info}
          toggle={this.toggleEdu}
          onDelete={this.deleteItem}
        />
      );
    });
    const expDivs = expInfos.map((info) => {
      return onEditExp === info.id ? (
        <ExpEdit
          expInfo={info}
          toggle={this.toggleExp}
          change={this.handleChange}
        />
      ) : (
        <ExpInfo
          expInfo={info}
          toggle={this.toggleExp}
          onDelete={this.deleteItem}
        />
      );
    });
    return (
      <div className="App">
        <h1>CV</h1>
        {genDiv}
        {eduDivs}
        <button onClick={this.addEdu} type="button">
          Add education
        </button>
        {expDivs}
        <button onClick={this.addExp} type="button">
          Add experience
        </button>
      </div>
    );
  }
}

/*
  create one page for everything
  if onEdit : textfield, otherwise p
    onEdit - Save, Cancel
  First page : general info on edit, edu, exp: add button only
  when add, onEdit on, display it
  when done, display from an array
*/

export default App;

/*
  when edit -> open eduedit instead of eduinfo
    when save -> modify existing eduinfo
  when add -> open new empty eduEdit at the bottom
    when save -> add eduinfo into eduLists, empty inputs
*/
