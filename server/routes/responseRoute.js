
import express from 'express';
import { getResponse } from "../controllers/responseController.js";
const router=express.Router();

router.post("/responses",getResponse);

export default router;