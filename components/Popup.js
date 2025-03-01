// components/FormComponent.js
import { useState } from 'react';

export default function FormComponent() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    console.log("Text 1:", text1);
    console.log("Text 2:", text2);
  };

  return (
    <div>
      <div>
        <label htmlFor="text1">Text Box 1:</label>
        <input
          type="text"
          id="text1"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="text2">Text Box 2:</label>
        <input
          type="text"
          id="text2"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleButtonClick}>Interactable Box</button>
        {isClicked && (
          <div>
            <p>You clicked the button!</p>
            <p>Text 1: {text1}</p>
            <p>Text 2: {text2}</p>
          </div>
        )}
      </div>
    </div>
  );
}
