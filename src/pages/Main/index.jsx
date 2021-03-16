import React, { Component } from "react";
import "./index.scss";
import { TabBar } from "antd-mobile";

import AllNotes from "../Allnodes";
import Allbacklogs from "../Allbacklogs";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "notes",
    };
  }
  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: "#f1f1f1", height: "100%" }}>
        {this.state.path === "notes" ? <AllNotes /> : <Allbacklogs />}
      </div>
    );
  }
  add = () => {
    if (this.state.path === "notes") {
      this.props.history.push("/note/0");
    } else {
      console.log(1);
    }
  };
  render() {
    return (
      <div>
        <button className="addbutton" onClick={this.add}>
          +
        </button>
        <div style={{ position: "fixed", height: "100%", width: "100%" }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="#eeeded"
          >
            <TabBar.Item
              title="笔记"
              key="note"
              icon={
                <div className="iconfont tabicon icon-biaoqianA01_biji-99" />
              }
              selectedIcon={
                <div className="iconfont tabicon icon-biaoqianA01_biji-99" />
              }
              selected={this.state.path === "notes"}
              onPress={() => {
                this.setState({
                  path: "notes",
                });
              }}
            >
              {this.renderContent("note")}
            </TabBar.Item>
            <TabBar.Item
              icon={<div className="iconfont tabicon icon-daiban" />}
              selectedIcon={<div className="iconfont tabicon icon-daiban" />}
              title="待办"
              key="backlog"
              selected={this.state.path === "backlogs"}
              onPress={() => {
                this.setState({
                  path: "backlogs",
                });
              }}
            >
              {this.renderContent("backlog")}
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}
export default Main;
