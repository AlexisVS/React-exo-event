import React, { useState } from 'react';

const App = () => {

  const [increment, setIncrement] = useState(0)

  let incrementer = () => setIncrement(increment + 1)

  let placePlaceholder = (e) => {
    if (e.key === "Enter") {
      e.target.placeholder = e.target.value
      e.target.value = null

    }
  }

  let copier = (e) => alert(e.target.value)

  return (
    <div>
      <p>{increment}</p>
      <button onClick={() => {incrementer(); alert("Bonjour")}}>incrementer de 1</button>
      <input
        type="text"
        placeholder={"ssf"}
        onKeyDown={(e) => placePlaceholder(e)}
        onCopy={(e) => copier(e)}
        onFocus={(e) => e.target.style.backgroundColor = "green"}
        onBlur={(e) => e.target.style.backgroundColor = "white"}
      />
    </div>
  );
};

export default App;