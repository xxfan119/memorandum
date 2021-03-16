import React, { Component } from "react";
import "./index.scss";
import Menu from "../../compoement/Menu";

import { connect } from "react-redux";
import { addBacklog, deleteBacklog } from "../../redux/actions/backlog";
class index extends Component {
  render() {
    return (
      <div className="allbacklogs">
        <Menu title="待办" />
        {this.props.length ? (
          <ul>
            {this.props.backlogList.map((item) => {
              return <li key={item.id}>{item.content} </li>;
            })}
          </ul>
        ) : (
          <div className="empty">
            <div className="iconfont icon-19"></div>
            <div>没有待办</div>
          </div>
        )}
      </div>
    );
  }
}
const BacklogContainer = connect(
  (state) => ({ backlogList: state.backlogList }),
  {
    addBacklog,
    deleteBacklog,
  }
)(index);
export default BacklogContainer;
