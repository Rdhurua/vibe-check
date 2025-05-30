import Response from '../models/Response.js'

export const getResponse=async (req, res) => {
  try {
    const { answers, sessionId } = req.body;

    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: 'Invalid answers' });
    }

    const saved = await Response.create({ answers, sessionId });
    res.status(201).json(saved);
  } catch (err) {
    console.error('Error saving response:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
}