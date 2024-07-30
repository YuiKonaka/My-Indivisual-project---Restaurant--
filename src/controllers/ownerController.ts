import { Request, Response } from "express";

export const renderOwner = (req: Request, res: Response) => {
  res.render("pages/owner", { owner });
};
