import NoteContext from "./NoteContext";
import { useState } from 'react';

const NoteState = (props) => {
    const s1 = {
        name: "Ankit Jangir",
        class: "10a"
    }

    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(() => {
            setState({
                name: "Mahim Mittal",
                class: "8b"
            })
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{ state, update }}>    {/* here we mean value = {{state:state, update:update}} */}
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;