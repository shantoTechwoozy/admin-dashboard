import { AllHistoryInterface, BookingCancelInterface, OnHoldInterface, TicketCancelInterface, TicketedInterface } from "./interfaces";

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