// pages/api/sendToDiscord.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text1, text2 } = req.body;

    const webhookURL = 'https://ptb.discord.com/api/webhooks/1345216302268026943/Q5JMVaP8gX8TpYHOuC4AnHAE4TUNUdIou6B7D2YV3Vo1GRN09yZUQOdsOo3T0a2qJjdP'; // Replace with your webhook URL

    const payload = {
      content: `Text Box 1: ${text1}\nText Box 2: ${text2}`,
    };

    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        return res.status(200).json({ message: 'Message sent to Discord!' });
      } else {
        return res.status(500).json({ error: 'Failed to send message to Discord' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Error sending message to Discord' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
