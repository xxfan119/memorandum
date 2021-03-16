import {ADDNOTE,DELETENOTE  } from "../constant";

export const addNote=data=>(
    {type:ADDNOTE,data}
)
export const deleteNote=data=>(
   {type:DELETENOTE,data}
)