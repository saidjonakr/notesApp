import React, { useState } from 'react';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Track the note being edited

  const addNote = (note) => {
    setNotes([...notes, { ...note, expanded: false }]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const toggleExpand = (index) => {
    const newNotes = [...notes];
    newNotes[index].expanded = !newNotes[index].expanded;
    setNotes(newNotes);
  };

  const editNote = (index, updatedNote) => {
    const newNotes = [...notes];
    newNotes[index] = updatedNote;
    setNotes(newNotes);
    setEditingIndex(null); // Exit edit mode
  };

  return (
    <div className="app">
      <Header />
      <NoteForm addNote={addNote} />
      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        toggleExpand={toggleExpand}
        editNote={editNote}
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex} // Pass setEditingIndex to NoteList
      />
    </div>
  );
};

export default App;
