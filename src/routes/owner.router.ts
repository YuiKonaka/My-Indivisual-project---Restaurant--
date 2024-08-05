import { Router } from "express";
import { renderOwner } from "../controllers/ownerController";

export const router = Router();

router.get("/", renderOwner);
router.post("/", renderOwner);
