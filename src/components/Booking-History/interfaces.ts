export interface OnHoldFields {
    booking_date: string;
    booking_id: string;
    passenger_name: string;
    flight_date: string;
    route: string;
    pnr: string;
    issue_before: string;
    total_price: string;
    status: string;
    action: string;
}
export interface TicketedFields {
    issue_date: string;
    booking_date: string;
    booking_id: string;
    passenger_name: string;
    flight_date: string;
    route: string;
    pnr: string;
    ticket_number: string;
    total_price: string;
    status: string;
    action: string;
}

export interface TicketCancelFields {
    issue_date: string;
    booking_date: string;
    booking_id: string;
    passenger_name: string;
    flight_date: string;
    route: string;
    pnr: string;
    ticket_number: string;
    total_price: string;
    status: string;
    action: string;
}