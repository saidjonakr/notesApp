import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, deleteNote, toggleExpand, editNote, editingIndex, setEditingIndex }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <NoteItem
          key={index}
          note={note}
          index={index}
          deleteNote={deleteNote}
          toggleExpand={toggleExpand}
          editNote={editNote}
          isEditing={editingIndex === index}
          setEditingIndex={setEditingIndex} // Forward setEditingIndex to NoteItem
        />
      ))}
    </div>
  );
};

export default NoteList;
