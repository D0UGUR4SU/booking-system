export interface Reservation {
  id: number;
  date: Date;
  venue: Venue;
}

export interface Venue {
  id: number;
  name: string;
  description: string;
  capacity: string;
}
