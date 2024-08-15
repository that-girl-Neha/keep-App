import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const addNote = (note) => {
    setAddItem((prev) => [...prev, note]);
  };

  const onDelete = (id) => {
    setAddItem((prev) => prev.filter((curr, i) => i !== id));
  };

  const onEdit = (id) => {
    const noteToEdit = addItem[id];
    setEditingNote({ id, ...noteToEdit });
  };

  const updateNote = (updatedNote) => {
    setAddItem((prev) =>
      prev.map((note, index) =>
        index === updatedNote.id ? { title: updatedNote.title, content: updatedNote.content } : note
      )
    );
    setEditingNote(null);
  };

  return (
    <>
      <Header />
      <CreateNote
        passNote={addNote}
        editingNote={editingNote}
        updateNote={updateNote}
      />
      {addItem.map((val, index) => (
        <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
          editItem={onEdit}
        />
      ))}
      <Footer />
    </>
  );
};

export default App;