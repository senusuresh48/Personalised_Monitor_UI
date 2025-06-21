import React, { useState } from 'react';

const JournalEditor = () => {
  const [entry, setEntry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
  };

  return (
    <div className="journal-editor">
      <form onSubmit={handleSubmit}>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write your thoughts..."
        />
        <button type="submit">Save Entry</button>
      </form>
    </div>
  );
};

export default JournalEditor;
