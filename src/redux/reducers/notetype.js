import {ADDNOTETYPE,DELETENOTETYPE  } from "../constant";

const initState=[ { name: "旅游", color: "#ffbb00" },
{ name: "个人", color: "#03a582" },
{ name: "生活", color: "#44d17a" },
{ name: "工作", color: "#ff0707" },]
export default  function countReducer(preState=initState,action){
    // if(preState===undefined)preState=0
 const {type,data}=action
 switch (type) {
            case ADDNOTETYPE:
                preState=[...preState,data]
                break
            case DELETENOTETYPE:
                preState=preState.filter(item=>item.id!==data.id)
                break
            default:
                break
        }
   return preState 
}


