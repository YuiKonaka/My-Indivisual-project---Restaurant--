import { Request, Response } from "express";
import { book } from "../models/reservation";

export const renderUser = (req: Request, res: Response) => {
  res.render("pages/user");
};

export const renderBook = (req: Request, res: Response) => {
  const {
    reservationName,
    reservationDate,
    reservationTime,
    reservationEmail,
    reservationPhone,
  } = req.body;

  book(
    reservationDate,
    reservationTime,
    reservationName,
    reservationEmail,
    reservationPhone
  );

  res.render("pages/user");
};

// Customer Data into the Reservation Form by POST
