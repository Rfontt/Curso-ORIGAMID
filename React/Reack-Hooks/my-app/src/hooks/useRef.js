import React, { useRef, useEffect, useState } from 'react';

export default function Hooks() {
    const [comments, setComments] = useState(['Rita de Cassia', 'Dalila Fontenele']);
    const [input, setInput] = useState();
    const inputRef = useRef();

    function handleClick() {
        setComments([...comments, input]);
        setInput('');
        inputRef.current.focus();
    }

    return (
        <div>
          <ul>
              {comments.map(comment => {
                  return <li key={comment}>{comment}</li>
              })}
          </ul>

          <input type="text"
            value={input}
            onChange={({ target }) => setInput(target.value)}
            ref={inputRef} />  

          <button onClick={handleClick}>Send</button>
        </div>
    )
}

