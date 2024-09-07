import { AddPassengerInterface, AllHistoryInterface, BookingCancelInterface, OnHoldInterface, QuickPassengerInterface, TicketCancelInterface, TicketedInterface } from "./interfaces";

export const onHoldFields: { label: string; key: keyof OnHoldInterface }[] = [
    { label: 'Booking Date', key: 'booking_date' },
    { label: 'Booking ID', key: 'booking_id' },
    { label: 'Passenger Name', key: 'passenger_name' },
    { label: 'Flight Date', key: 'flight_date' },
    { label: 'Route', key: 'route' },
    { label: 'PNR', key: 'pnr' },
    { label: 'Issue Before', key: 'issue_before' },
    { label: 'Total Price', key: 'total_price' },
    { label: 'Status', key: 'status' },
    { label: 'Action', key: 'action' },
];

export const ticketCancelFields: { label: string; key: keyof TicketCancelInterface }[] = [
    { label: 'Issue Date', key: 'issue_date' },
    { label: 'Booking Date', key: 'booking_date' },
    { label: 'Booking ID', key: 'booking_id' },
    { label: 'Passenger Name', key: 'passenger_name' },
    { label: 'Flight Date', key: 'flight_date' },
    { label: 'Route', key: 'route' },
    { label: 'PNR', key: 'pnr' },
    { label: 'Ticket Number', key: 'ticket_number' },
    { label: 'Total Price', key: 'total_price' },
    { label: 'Status', key: 'status' },
    { label: 'Action', key: 'action' },
];

export const ticketedFields: { label: string; key: keyof TicketedInterface }[] = [
    { label: 'Issue Date', key: 'issue_date' },
    { label: 'Booking Date', key: 'booking_date' },
    { label: 'Booking ID', key: 'booking_id' },
    { label: 'Passenger Name', key: 'passenger_name' },
    { label: 'Flight Date', key: 'flight_date' },
    { label: 'Route', key: 'route' },
    { label: 'PNR', key: 'pnr' },
    { label: 'Ticket Number', key: 'ticket_number' },
    { label: 'Total Price', key: 'total_price' },
    { label: 'Status', key: 'status' },
    { label: 'Action', key: 'action' },
];


export const BookingCancelFields: { label: string; key: keyof BookingCancelInterface }[] = [
    { label: 'Booking Date', key: 'booking_date' },
    { label: 'Booking ID', key: 'booking_id' },
    { label: 'Passenger Name', key: 'passenger_name' },
    { label: 'Flight Date', key: 'flight_date' },
    { label: 'Route', key: 'route' },
    { label: 'PNR', key: 'pnr' },
    { label: 'Total Price', key: 'total_price' },
    { label: 'Status', key: 'status' },
    { label: 'Action', key: 'action' },
];

export   // Field labels and their corresponding keys
    const AllHistoryFields: { label: string; key: keyof AllHistoryInterface }[] = [
        { label: 'Issue Date', key: 'issue_date' },
        { label: 'Booking Date', key: 'booking_date' },
        { label: 'Booking ID', key: 'booking_id' },
        { label: 'Passenger Name', key: 'passenger_name' },
        { label: 'Flight Date', key: 'flight_date' },
        { label: 'Route', key: 'route' },
        { label: 'PNR', key: 'pnr' },
        { label: 'Ticket Number', key: 'ticket_number' },
        { label: 'Total Price', key: 'total_price' },
        { label: 'Status', key: 'status' },
        { label: 'Action', key: 'action' },
    ];

export const AddPassengerFields: { label: string; key: keyof AddPassengerInterface }[] = [
    { label: 'SL', key: 'sl' },
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'DOB', key: 'dob' },
    { label: 'Gender', key: 'gender' },
    { label: 'Passport Number', key: 'passport_number' },
    { label: 'Passport Expire Date', key: 'passport_expire_date' },
    { label: 'Passport Copy', key: 'passport_copy' },
    { label: 'Visa Copy', key: 'visa_copy' },
    { label: 'Action', key: 'action' },
];

export const QuickPassengerFields: { label: string; key: keyof QuickPassengerInterface }[] = [
    { label: 'SL', key: 'sl' },
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'DOB', key: 'dob' },
    { label: 'Gender', key: 'gender' },
    { label: 'Passport Number', key: 'passport_number' },
    { label: 'Passport Expire Date', key: 'passport_expire_date' },
    { label: 'Passport Copy', key: 'passport_copy' },
    { label: 'Visa Copy', key: 'visa_copy' },
    { label: 'Action', key: 'action' },
];