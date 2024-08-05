import { Router } from "express";
import { renderBook, renderUser } from "../controllers/userController";

export const router = Router();

router.get("/", renderUser);
router.post("/", renderBook);
