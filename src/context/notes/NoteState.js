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
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5ZDcwZmE2ODllM2Q5MjkwNGQ3ZjI0In0sImlhdCI6MTY1NDQ5OTU5OH0.6bKRNgML54AHqpnzt2JBmLSrStDqPyGkQh8FlqMAujE'
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
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5ZDcwZmE2ODllM2Q5MjkwNGQ3ZjI0In0sImlhdCI6MTY1NDQ5OTU5OH0.6bKRNgML54AHqpnzt2JBmLSrStDqPyGkQh8FlqMAujE'
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
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5ZDcwZmE2ODllM2Q5MjkwNGQ3ZjI0In0sImlhdCI6MTY1NDQ5OTU5OH0.6bKRNgML54AHqpnzt2JBmLSrStDqPyGkQh8FlqMAujE'
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
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5ZDcwZmE2ODllM2Q5MjkwNGQ3ZjI0In0sImlhdCI6MTY1NDQ5OTU5OH0.6bKRNgML54AHqpnzt2JBmLSrStDqPyGkQh8FlqMAujE'
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