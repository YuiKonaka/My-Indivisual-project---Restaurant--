import { Router } from "express";
import { renderUser } from "../controllers/userController";
imoprt { Router } from "../controllers/userController";

export const router = Router();

router.get("/", renderUser);
