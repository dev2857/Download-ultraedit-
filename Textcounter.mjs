import React, { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState('');

  function handleonclick(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <textarea value={text} onChange={handleonclick} />
      <p>Character count: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;