import {ADDNOTETYPE,DELETENOTETYPE  } from "../constant";

export const addNoteType=data=>(
    {type:ADDNOTETYPE,data}
)
export const deleteNoteType=data=>(
   {type:DELETENOTETYPE,data}
)