import React, { Component } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { addNote, deleteNote } from "../../redux/actions/note";
import { addNoteType } from "../../redux/actions/notetype";

import { Popover, Toast } from "antd-mobile";
const Item = Popover.Item;
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      type: "未分类",
      color: "",
    };
  }
  titleRef = React.createRef();
  contentRef = React.createRef();
  editor = () => {
    let title = this.titleRef.current.value;
    let content = this.contentRef.current.value;
    if (title || content) {
      let newNote = {
        id: new Date().toISOString(),
        content,
        title,
        type: this.state.type,
        isCollect: false,
      };
      Toast.success("添加成功", 2);
      this.props.addNote(newNote);
    } else {
      return;
    }
  };
  back = () => {
    this.props.history.goBack();
  };
  onSelect = (opt) => {
    this.setState({
      visible: false,
      type: opt.props.value,
      color: opt.props.icon.props.style.color,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    if (id !== "0") {
      let thisContent = this.props.noteList.find((item) => item.id === id);
      let type = null;
      if (thisContent.type !== "未分类") {
        type = this.props.notetypeList.find(
          (item) => item.name === thisContent.type
        );
      }
      this.setState({
        type: type.name,
        color: type.color,
      });
    }
  }
  render() {
    let id = this.props.match.params.id;
    let thisContent = { content: "", title: "" };
    if (id !== "0") {
      thisContent = this.props.noteList.find((item) => item.id === id);
    }

    return (
      <div className="notecontent">
        <div className="nav">
          <span
            onClick={this.back}
            className="iconfont icon-houtui"
            style={{ fontSize: "20px" }}
          ></span>
          <span
            onClick={this.editor}
            className="iconfont icon-gou"
            style={{ fontSize: "20px" }}
          ></span>
        </div>
        <div className="title">
          <input
            placeholder="标题"
            ref={this.titleRef}
            defaultValue={id !== "0" ? thisContent.title : ""}
          />
        </div>
        <div className="type">
          <span>今天 {new Date().toLocaleString().slice(9, 14)} </span>
          <span>
            <div id="notetype">
              <Popover
                visible={this.state.visible}
                overlay={[
                  this.props.notetypeList.map((item) => {
                    return (
                      <Item
                        value={item.name}
                        icon={
                          <span
                            className="iconfont icon-tubiaozhizuomoban-"
                            style={{ color: item.color, fontSize: "20px" }}
                          ></span>
                        }
                      >
                        &nbsp;
                        <span> {item.name}</span>
                      </Item>
                    );
                  }),
                  <Item
                    value="未分类"
                    icon={
                      <span
                        className="iconfont icon-tubiaozhizuomoban-"
                        style={{ fontSize: "20px" }}
                      ></span>
                    }
                  >
                    &nbsp;
                    <span>未分类</span>
                  </Item>,
                  <Item
                    icon={<span className="iconfont icon-biaoqian1"></span>}
                  >
                    &nbsp;
                    <span>新建</span>
                  </Item>,
                ]}
                align={{
                  overflow: { adjustY: 0, adjustX: 0 },
                  offset: [-10, 0],
                }}
                onVisibleChange={this.handleVisibleChange}
                onSelect={this.onSelect}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <span
                      className="iconfont icon-tubiaozhizuomoban-"
                      style={{ fontSize: "20px", color: this.state.color }}
                    ></span>
                    {this.state.type}
                    <span className="iconfont icon-xiaosanjiaodown"></span>
                  </div>
                </div>
              </Popover>
            </div>
          </span>
        </div>
        <div className="content">
          <textarea
            type="text"
            ref={this.contentRef}
            defaultValue={id !== "0" ? thisContent.content : ""}
          />
        </div>
      </div>
    );
  }
}
const compileNote = connect(
  (state) => ({ noteList: state.noteList, notetypeList: state.notetypeList }),
  {
    addNote,
    deleteNote,
    addNoteType,
  }
)(index);
export default compileNote;
