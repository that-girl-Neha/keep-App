import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import './App.css';

const CreateNote = ({ passNote, editingNote, updateNote }) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    if (editingNote) {
      setNote(editingNote);
      setExpand(true);
    }
  }, [editingNote]);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (editingNote) {
      updateNote(note);
    } else {
      passNote(note);
    }
    setNote({
      title: '',
      content: '',
    });
    setExpand(false);
  };

  const expandIt = () => {
    setExpand(true);
  };

  const backToNormal = () => {
    setExpand(false);
  };

  return (
    <div className='main_note'>
      <form>
        {expand ? (
          <input
            type="text"
            name='title'
            value={note.title}
            onChange={inputEvent}
            placeholder='Title'
            autoComplete='off'
          />
        ) : null}
        <textarea
          value={note.content}
          name="content"
          onClick={expandIt}
          onDoubleClick={backToNormal}
          onChange={inputEvent}
          rows=''
          column=''
          placeholder='Write a note here...'
        />
        {expand ? (
          <Button onClick={handleSubmit}>
            {editingNote ? <EditIcon className='plus_sign' /> : <AddIcon className='plus_sign' />}
          </Button>
        ) : null}
      </form>
    </div>
  );
};

export default CreateNote;