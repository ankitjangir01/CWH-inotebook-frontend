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
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5ZDcwZmE2ODllM2Q5MjkwNGQ3ZjI0In0sImlhdCI6MTY1NDQ5OTU5OH0.6bKRNgML54AHqpnzt2JBmLSrStDqPyGkQh8FlqMAujE'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        let note = {

            "title": title,
            "description": description,
            "tag": tag
        }
        setNotes(notes.concat(note));
    }

    //delte note function
    const deleteNote = (id) => {
        const newNote = notes.filter((note) => { return note._id !== id });
        setNotes(newNote);
    }

    //edit note function
    const editNote = async (id, title, description, tag) => {
        //api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5ZDcwZmE2ODllM2Q5MjkwNGQ3ZjI0In0sImlhdCI6MTY1NDQ5OTU5OH0.6bKRNgML54AHqpnzt2JBmLSrStDqPyGkQh8FlqMAujE'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();


        for (let i = 0; i < notes.length; i++) {
            if (notes[i]._id === id) {
                notes[i].title = title;
                notes[i].description = description;
                notes[i].tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, fetchAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;