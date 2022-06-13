import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className='col-md-3 my-1'>
            <div className="card bg-light border-info rounded">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-file-pen mx-2" onClick={() => updateNote(note)}></i>
                        <i className="fa-solid fa-trash-can mx-2" onClick={() => deleteNote(note._id)}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;