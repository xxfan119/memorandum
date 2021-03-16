import { combineReducers } from "redux";
import note from './note'
import backlog from './backlog'
import notetype from './notetype'
export default combineReducers({
    noteList:note,
    backlogList:backlog,
    notetypeList:notetype
})