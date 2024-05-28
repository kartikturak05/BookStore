import express from "express";
import { getBook } from "../controller/Book.controller.js";

const router = express.Router();

router.get("/books",getBook);

export default router;
