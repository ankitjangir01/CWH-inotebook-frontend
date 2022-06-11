import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "629f3004494570a8f9d0b43c",
            "user": "629d70fa689e3d92904d7f24",
            "title": "mytitle",
            "description": "get up early",
            "tag": "General",
            "date": "2022-06-07T11:01:24.254Z",
            "__v": 0
        },
        {
            "_id": "629f307c494570a8f9d0b43e",
            "user": "629d70fa689e3d92904d7f24",
            "title": "mytitle",
            "description": "get up early",
            "tag": "personal",
            "date": "2022-06-07T11:03:24.496Z",
            "__v": 0
        },
        {
            "_id": "629f3082494570a8f9d0b440",
            "user": "629d70fa689e3d92904d7f24",
            "title": "mytitle",
            "description": "get up early",
            "tag": "personal",
            "date": "2022-06-07T11:03:30.608Z",
            "__v": 0
        },
        {
            "_id": "629f3082494570a8f9d0b442",
            "user": "629d70fa689e3d92904d7f24",
            "title": "mytitle",
            "description": "get up early",
            "tag": "personal",
            "date": "2022-06-07T11:03:30.912Z",
            "__v": 0
        },
        {
            "_id": "629f3083494570a8f9d0b446",
            "user": "629d70fa689e3d92904d7f24",
            "title": "mytitle",
            "description": "get up early",
            "tag": "personal",
            "date": "2022-06-07T11:03:31.529Z",
            "__v": 0
        },
        {
            "_id": "629f30ba6e0643191cecfc61",
            "user": "629d70fa689e3d92904d7f24",
            "title": "mytitle",
            "description": "get up early",
            "tag": "personal",
            "date": "2022-06-07T11:04:26.938Z",
            "__v": 0
        },
        {
            "_id": "629f31f468e862079f4df24a",
            "user": "629d70fa689e3d92904d7f24",
            "title": "mytitle",
            "description": "get up early",
            "tag": "personal",
            "date": "2022-06-07T11:09:40.896Z",
            "__v": 0
        },
        {
            "_id": "629f42285ffddee16d625a15",
            "user": "629d70fa689e3d92904d7f24",
            "title": "mytitle",
            "description": "get up early",
            "tag": "personal",
            "date": "2022-06-07T12:18:48.324Z",
            "__v": 0
        },
        {
            "_id": "62a0402f7c783eb712bd20b1",
            "user": "629d70fa689e3d92904d7f24",
            "title": "test note",
            "description": "get up early",
            "tag": "personal",
            "date": "2022-06-08T06:22:39.149Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(initialNotes);

    //add note function
    const addNote = (title, description, tag) => {
        let note = {

            "title": title,
            "description": description,
            "tag": tag
        }
        setNotes(notes.concat(note));
    }

    //delte note function
    const deleteNote = (id) => {

    }

    //edit note function
    const editNote = (id) =>{

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;