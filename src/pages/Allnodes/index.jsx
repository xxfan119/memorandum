import React, { Component } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addNote, deleteNote } from "../../redux/actions/note";
import Menu from "../../compoement/Menu";

// function mapState(state) {
//     return {
//         noteList: state.noteList
//     }
// }

class index extends Component {
  toEdit = (id) => {
    return () => {
      this.props.history.push(`/note/${id}`);
    };
  };
  render() {
    return (
      <div className="allnotes">
        <Menu title="笔记" />
        {this.props.noteList.length ? (
          <ul>
            {this.props.noteList.map((item) => {
              return (
                <li key={item.id} onClick={this.toEdit(item.id)}>
                  {item.title ? (
                    <div className="title">{item.title}</div>
                  ) : (
                    <div className="title">{item.content}</div>
                  )}
                  {item.title ? (
                    <div className="content">
                      {item.isCollect && (
                        <span className="iconfont icon-shoucangxing2">
                          {" "}
                          &nbsp;
                        </span>
                      )}
                      {item.id.slice(0, 8)} | {item.content}
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="empty">
            <div className="iconfont icon-19"></div>
            <div>没有笔记</div>
          </div>
        )}
      </div>
    );
  }
}
const NodeContainer = connect((state) => ({ noteList: state.noteList }), {
  addNote,
  deleteNote,
})(index);
export default withRouter(NodeContainer);
