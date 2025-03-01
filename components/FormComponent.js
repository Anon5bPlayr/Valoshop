// FormComponent.js
import { useState } from 'react';

export default function FormComponent() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsClicked(true);
    setLoading(true);

    try {
      // Send data to your Next.js API route
      const response = await fetch('/api/sendToDiscord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text1, text2 }), // Pass form data
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Message sent to Discord:', data.message);
      } else {
        console.error('Failed to send message to Discord:', data.error);
      }
    } catch (error) {
      console.error('Error sending message to Discord:', error);
    }

    setLoading(false);
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
        <button onClick={handleButtonClick} disabled={loading}>
          {loading ? 'Sending...' : 'Send to Discord'}
        </button>
        {isClicked && !loading && (
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
