import { Request, Response } from "express";

export const renderUser = (req: Request, res: Response) => {
  res.render("pages/user", { user });
};
