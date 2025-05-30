import Question from '../models/Questions.js'


export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    // console.log(questions);
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


