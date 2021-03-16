import {ADDBACKLOG,DELETEBACKLOG  } from "../constant";
const initState=[]
export default  function countReducer(preState=initState,action){
    // if(preState===undefined)preState=0
 const {type,data}=action
 switch (type) {
            case ADDBACKLOG:
                preState=[...preState,data]
                break
            case DELETEBACKLOG:
                preState=preState.filter(item=>item.id!==data.id)
                break
            default:
                break
        }
   return preState 
}