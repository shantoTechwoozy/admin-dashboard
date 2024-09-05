export interface OnHoldInterface {
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
export interface TicketedInterface {
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

export interface TicketCancelInterface {
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

export interface BookingCancelInterface {
    booking_date: string;
    booking_id: string;
    passenger_name: string;
    flight_date: string;
    route: string;
    pnr: string;
    total_price: string;
    status: string;
    action: string;
}

export interface AllHistoryInterface {
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

export interface AddPassengerInterface {
    sl: number;
    name: string;
    email: string;
    dob: string;
    gender: string;
    passport_number: string;
    passport_expire_date: string;
    passport_copy: string;
    visa_copy: string;
    action: string;
}

export interface QuickPassengerInterface {
    sl: number;
    name: string;
    email: string;
    dob: string;
    gender: string;
    passport_number: string;
    passport_expire_date: string;
    passport_copy: string;
    visa_copy: string;
    action: string;
}
