import {ADDBACKLOG,DELETEBACKLOG  } from "../constant";

export const addBacklog=data=>(
    {type:ADDBACKLOG,data}
)
export const deleteBacklog=data=>(
   {type:DELETEBACKLOG,data}
)