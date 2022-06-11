import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/NoteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, fetchAllNotes } = context;

    useEffect(() => {
        return () => {
            fetchAllNotes();
        }
    })

    return (
        <>
            <AddNote />
            <div className='row my-3'>
                <h2>Your Notes</h2>
                {
                    notes.map((note) => {
                        return <NoteItem key={note._id} note={note} />
                    })
                }
            </div>
        </>
    )
}

export default Notes;