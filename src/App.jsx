import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Main from "./pages/Main/index";
import NoteContent from "./pages/noteContent";
export default class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Main} />
        <Route path="/note/:id" exact component={NoteContent} />
      </div>
    );
  }
}
