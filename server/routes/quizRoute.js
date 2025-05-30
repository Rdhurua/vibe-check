import { getQuestions } from "../controllers/quizController.js";
import express from 'express';
const router=express.Router();

router.get("/questions",getQuestions);

export default router;