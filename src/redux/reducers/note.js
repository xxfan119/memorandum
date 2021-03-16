import {ADDNOTE,DELETENOTE  } from "../constant";

// {id:'001',content:'新建笔记',title:'aa',type:'未分类',isCollect:true}
const initState=[]
export default  function countReducer(preState=initState,action){
    // if(preState===undefined)preState=0
 const {type,data}=action
 switch (type) {
            case ADDNOTE:
                preState=[...preState,data]
                break
            case DELETENOTE:
                preState=preState.filter(item=>item.id!==data.id)
                break
            default:
                break
        }
   return preState 
}


