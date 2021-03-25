import React, { useState, useCallback } from'react';

class Function extends React.Component {


    onDelete = useCallback((index) => () => {
        notes.splice(index, 1); 
        setNotes([...notes]);
    }, [notes])


    addNote = useCallback(() => {
        if (inputVal.length) {
            const d = new Date();
            const payload = {
                date: `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`,
                note: inputVal,
            }
            setNotes([payload, ...notes]);
            setInputVal('');
        }
    }, [notes, inputVal]);
}



export default Function;