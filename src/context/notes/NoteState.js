import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const initialNotes = [];
    const [notes, setNotes] = useState(initialNotes);
    const host = "http://localhost:5000";

    //fetch all notes function
    const fetchAllNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'get',
            headers: {
                'auth-token': localStorage.getItem('authtoken')
            }
        });
        const json = await response.json();
        setNotes(json);
    }

    //add note function
    const addNote = async (title, description, tag) => {
        //api call
        const res = await fetch(`${host}/api/notes/addnote`, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'auth-token': localStorage.getItem('authtoken')
            },
            body: JSON.stringify({ title, description, tag })
        });
        let json = await res.json();
        return json;
    }

    //delete note function
    const deleteNote = async (id) => {
        //api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'auth-token': localStorage.getItem('authtoken')
            }
        });
        let json = await response.json();
        fetchAllNotes();
        return json;
    }

    //edit note function
    const editNote = async (id, title, description, tag) => {
        //api call
        const res = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'auth-token': localStorage.getItem('authtoken')
            },
            body: JSON.stringify({ title, description, tag })
        });
        let json = await res.json();

        for (let i = 0; i < notes.length; i++) {
            if (notes[i]._id === id) {
                notes[i].title = title;
                notes[i].description = description;
                notes[i].tag = tag;
            }
        }
        return json;
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, fetchAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;