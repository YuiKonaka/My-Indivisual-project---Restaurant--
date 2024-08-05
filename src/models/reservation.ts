export interface Reservation {
  id: number;
  reservationName: string;
  reservationDate: string;
  reservationTime: string;
  reservationEmail: string;
  reservationPhone: number;
}

export const reservations: Reservation[] = [];
export const book = (
  reservationName: string,
  reservationDate: string,
  reservationTime: string,
  reservationEmail: string,
  reservationPhone: number
): Reservation => {
  const newBook: Reservation = {
    id: reservations.length + 1,
    reservationName,
    reservationDate,
    reservationTime,
    reservationEmail,
    reservationPhone,
  };

  reservations.push(newBook);
  return newBook;
};
