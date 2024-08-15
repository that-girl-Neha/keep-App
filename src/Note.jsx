import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import './App.css';

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  const editNote = () => {
    props.editItem(props.id);
  };

  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <br />
      <p>{props.content}</p>
      <button className='btn' onClick={deleteNote}>
        <DeleteOutlineIcon className='deleteIcon' />
      </button>
      <button className='btn' onClick={editNote}>
        <EditIcon className='editIcon' />
      </button>
    </div>
  );
};

export default Note;