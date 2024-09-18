import { AddPassengerInterface, AllHistoryInterface, BookingCancelInterface, GroupTourHistoryInterface, HotelHistoryInterface, OnHoldInterface, QuickPassengerInterface, RefundHistoryInterface, ReissueHistoryInterface, TicketCancelInterface, TicketedInterface, TourPackageHistoryInterface, VisaHistoryInterface, VoidHistoryInterface } from "./interfaces";

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

export const VoidHistoryFields: { label: string; key: keyof VoidHistoryInterface }[] = [
    { label: 'PNR', key: 'pnr' },
    { label: 'Airlines PNR', key: 'airlines_pnr' },
    { label: 'Requested By', key: 'requested_by' },
    { label: 'Void Search ID', key: 'void_search_id' },
    { label: 'Booking Code', key: 'booking_code' },
    { label: 'Status', key: 'status' },
    { label: 'Account Status', key: 'account_status' },
    { label: 'Created At', key: 'created_at' },
    { label: 'Details', key: 'details' },
];
export const RefundHistoryFields: { label: string; key: keyof RefundHistoryInterface }[] = [
    { label: 'PNR', key: 'pnr' },
    { label: 'Airlines PNR', key: 'airlines_pnr' },
    { label: 'Requested By', key: 'requested_by' },
    { label: 'Void Search ID', key: 'void_search_id' },
    { label: 'Booking Code', key: 'booking_code' },
    { label: 'Status', key: 'status' },
    { label: 'Account Status', key: 'account_status' },
    { label: 'Created At', key: 'created_at' },
    { label: 'Details', key: 'details' },
];
export const ReissueHistoryFields: { label: string; key: keyof ReissueHistoryInterface }[] = [
    { label: 'PNR', key: 'pnr' },
    { label: 'Airlines PNR', key: 'airlines_pnr' },
    { label: 'Requested By', key: 'requested_by' },
    { label: 'Void Search ID', key: 'void_search_id' },
    { label: 'Booking Code', key: 'booking_code' },
    { label: 'Status', key: 'status' },
    { label: 'Account Status', key: 'account_status' },
    { label: 'Created At', key: 'created_at' },
    { label: 'Details', key: 'details' },
];
export const hotelHistoryFields: { label: string; key: keyof HotelHistoryInterface }[] = [
    { label: 'Booked By', key: 'booked_by' },
    { label: 'Hotel Name', key: 'hotel_name' },
    { label: 'City', key: 'city' },
    { label: 'Country', key: 'country' },
    { label: 'Booking ID', key: 'booking_id' },
    { label: 'Total Price', key: 'total_price' },
    { label: 'Refundable', key: 'refundable' },
    { label: 'Booking Status', key: 'booking_status' },
    { label: 'Payment Status', key: 'payment_status' },
    { label: 'Payment Type', key: 'payment_type' },
    { label: 'Agent Confirmation Status', key: 'agent_confirmation_status' },
    { label: 'Check-in Date', key: 'checkin_date' },
    { label: 'Check-out Date', key: 'checkout_date' },
    { label: 'Last Cancellation Date', key: 'last_cancellation_date' },
];

export const visaHistoryFields: { label: string; key: keyof VisaHistoryInterface }[] = [
    { label: 'Booked By', key: 'booked_by' },
    { label: 'Booking Code', key: 'booking_code' },
    { label: 'Destination Country', key: 'destination_country' },
    { label: 'Visa Type', key: 'visa_type' },
    { label: 'Entry Date', key: 'entry_date' },
    { label: 'Exit Date', key: 'exit_date' },
    { label: 'Total Amount', key: 'total_amount' },
    { label: 'Payment Status', key: 'payment_status' },
    { label: 'Visa Status', key: 'visa_status' },
    { label: 'Booking Date', key: 'booking_date' },
    { label: 'Traveller Country', key: 'traveller_country' },
];

export const tourPackageHistoryFields: { label: string; key: keyof TourPackageHistoryInterface }[] = [
    { label: 'Category', key: 'category' },
    { label: 'Created At', key: 'created_at' },
    { label: 'Request Status', key: 'request_status' },
    { label: 'Actions', key: 'actions' },
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
export const groupTourHistoryFields: { label: string; key: keyof GroupTourHistoryInterface }[] = [
    { label: 'Category', key: 'category' },
    { label: 'Created At', key: 'created_at' },
    { label: 'Request Status', key: 'request_status' },
    { label: 'Actions', key: 'actions' },
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