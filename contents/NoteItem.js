import React, { useState } from 'react';

const NoteItem = ({ note, index, deleteNote, toggleExpand, editNote, isEditing, setEditingIndex }) => {
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleSave = () => {
    editNote(index, { title: editedTitle, content: editedContent, expanded: true });
  };

  return (
    <div className={`note-item ${note.expanded ? 'expanded' : ''}`} onClick={() => !isEditing && toggleExpand(index)}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          {note.expanded ? (
            <>
              <p>{note.content}</p>
              <button onClick={(e) => { e.stopPropagation(); deleteNote(index); }}>Delete</button>
              <button onClick={(e) => { e.stopPropagation(); setEditingIndex(index); }}>Edit</button>
            </>
          ) : (
            <p>{note.content.substring(0, 50)}...</p>
          )}
        </>
      )}
    </div>
  );
};

export default NoteItem;
