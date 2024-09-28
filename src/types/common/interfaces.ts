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
export interface VoidHistoryInterface {
    pnr: string;
    airlines_pnr: string;
    requested_by: string;
    void_search_id: string;
    booking_code: string;
    status: string;
    account_status: string;
    created_at: string;
    details: string;
}
export interface RefundHistoryInterface {
    pnr: string;
    airlines_pnr: string;
    requested_by: string;
    void_search_id: string;
    booking_code: string;
    status: string;
    account_status: string;
    created_at: string;
    details: string;
}
export interface ReissueHistoryInterface {
    pnr: string;
    airlines_pnr: string;
    requested_by: string;
    void_search_id: string;
    booking_code: string;
    status: string;
    account_status: string;
    created_at: string;
    details: string;
}
export interface HotelHistoryInterface {
    booked_by: string;
    hotel_name: string;
    city: string;
    country: string;
    booking_id: string;
    total_price: string;
    refundable: string;
    booking_status: string;
    payment_status: string;
    payment_type: string;
    agent_confirmation_status: string;
    checkin_date: string;
    checkout_date: string;
    last_cancellation_date: string;
}
export interface VisaHistoryInterface {
    booked_by: string;
    booking_code: string;
    destination_country: string;
    visa_type: string;
    entry_date: string;
    exit_date: string;
    total_amount: string;
    payment_status: string;
    visa_status: string;
    booking_date: string;
    traveller_country: string;
}
export interface TourPackageHistoryInterface {
    category: string;
    created_at: string;
    request_status: string;
    actions: string;
}
export interface GroupTourHistoryInterface {
    category: string;
    created_at: string;
    request_status: string;
    actions: string;
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

export interface BankListInterface {
    sl: number;
    name: string;
    location: string;
    account_no: string;
    routing_no: string;
    account_name: string;
    payment_changes: string;
}
export interface TransactionInterface {
    submitted_date: string;
    depositeType: string;
    tnxNumber: string;
    reference: string;
    status: string;
    amount: string;
    bankCharge: string;
    topupAmount: string;
    image: string;
}
export interface MyBankAccountInterface {
    sl: string;
    account_name: string;
    status: string;
    account_numner: string;
    bank_name: string;
    branch_name: string;
}

