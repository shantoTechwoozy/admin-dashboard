import { AddPassengerInterface, AllHistoryInterface, BankListInterface, BookingCancelInterface, GroupTourHistoryInterface, HotelHistoryInterface, MyBankAccountInterface, OnHoldInterface, QuickPassengerInterface, RefundHistoryInterface, ReissueHistoryInterface, TicketCancelInterface, TicketedInterface, TourPackageHistoryInterface, VisaHistoryInterface, VoidHistoryInterface } from "../../types/common/interfaces";
import { TransactionInterface } from './interfaces';

// Mock data array object
export const OnHoldData: OnHoldInterface[] = [
    {
        booking_date: "21-08-2024 08:18",
        booking_id: "TB638598033713836999",
        passenger_name: "John Doe",
        flight_date: "27-08-2024 10:15",
        route: "DAC-DOH",
        pnr: "MZWE3B",
        issue_before: "Time Limit",
        total_price: "58,648.7",
        status: "On Hold",
        action: "VB RS",
    },
    {
        booking_date: "20-08-2024 11:50",
        booking_id: "TB638597297731693823",
        passenger_name: "Emily Johnson",
        flight_date: "2024-09-11",
        route: "SPD-DAC",
        pnr: "FRK234",
        issue_before: "Time Limit",
        total_price: "4,653.01",
        status: "On Hold",
        action: "VB RS",
    },
    {
        booking_date: "20-08-2024 12:00",
        booking_id: "TB638597297731693824",
        passenger_name: "Michael Smith",
        flight_date: "2024-09-12",
        route: "JFK-LAX",
        pnr: "PLK582",
        issue_before: "Time Limit",
        total_price: "15,732.50",
        status: "On Hold",
        action: "VB RS",
    },
    {
        booking_date: "20-08-2024 13:20",
        booking_id: "TB638597297731693825",
        passenger_name: "Sarah Williams",
        flight_date: "2024-09-13",
        route: "LHR-JFK",
        pnr: "GTD896",
        issue_before: "Time Limit",
        total_price: "12,483.60",
        status: "On Hold",
        action: "VB RS",
    },
    {
        booking_date: "20-08-2024 14:45",
        booking_id: "TB638597297731693826",
        passenger_name: "David Brown",
        flight_date: "2024-09-14",
        route: "CDG-SYD",
        pnr: "JHY542",
        issue_before: "Time Limit",
        total_price: "9,564.30",
        status: "On Hold",
        action: "VB RS",
    },
];
export const VoidHistoryData: VoidHistoryInterface[] = [
    {
        pnr: "ABC123",
        airlines_pnr: "XYZ456",
        requested_by: "John Doe",
        void_search_id: "V001",
        booking_code: "BOOK789",
        status: "Confirmed",
        account_status: "Active",
        created_at: "2024-09-18T10:30:00Z",
        details: "Round-trip flight from New York to Los Angeles."
    },
    {
        pnr: "DEF456",
        airlines_pnr: "LMN789",
        requested_by: "Jane Smith",
        void_search_id: "V002",
        booking_code: "BOOK123",
        status: "Pending",
        account_status: "Pending",
        created_at: "2024-09-18T12:45:00Z",
        details: "One-way flight from Chicago to Miami."
    },
    {
        pnr: "GHI789",
        airlines_pnr: "OPQ123",
        requested_by: "Robert Johnson",
        void_search_id: "V003",
        booking_code: "BOOK456",
        status: "Cancelled",
        account_status: "Inactive",
        created_at: "2024-09-17T09:15:00Z",
        details: "Business class flight from San Francisco to Tokyo."
    },
    {
        pnr: "JKL012",
        airlines_pnr: "RST345",
        requested_by: "Emily Davis",
        void_search_id: "V004",
        booking_code: "BOOK678",
        status: "Void",
        account_status: "Void",
        created_at: "2024-09-16T08:00:00Z",
        details: "Economy class flight from Dallas to Paris."
    }
];
export const RefundHistoryData: RefundHistoryInterface[] = [
    {
        pnr: "ABC123",
        airlines_pnr: "XYZ456",
        requested_by: "John Doe",
        void_search_id: "V001",
        booking_code: "BOOK789",
        status: "Confirmed",
        account_status: "Active",
        created_at: "2024-09-18T10:30:00Z",
        details: "Round-trip flight from New York to Los Angeles."
    },
    {
        pnr: "DEF456",
        airlines_pnr: "LMN789",
        requested_by: "Jane Smith",
        void_search_id: "V002",
        booking_code: "BOOK123",
        status: "Pending",
        account_status: "Pending",
        created_at: "2024-09-18T12:45:00Z",
        details: "One-way flight from Chicago to Miami."
    },
    {
        pnr: "GHI789",
        airlines_pnr: "OPQ123",
        requested_by: "Robert Johnson",
        void_search_id: "V003",
        booking_code: "BOOK456",
        status: "Cancelled",
        account_status: "Inactive",
        created_at: "2024-09-17T09:15:00Z",
        details: "Business class flight from San Francisco to Tokyo."
    },
    {
        pnr: "JKL012",
        airlines_pnr: "RST345",
        requested_by: "Emily Davis",
        void_search_id: "V004",
        booking_code: "BOOK678",
        status: "Void",
        account_status: "Void",
        created_at: "2024-09-16T08:00:00Z",
        details: "Economy class flight from Dallas to Paris."
    }
];
export const ReissueHistoryData: ReissueHistoryInterface[] = [
    {
        pnr: "ABC123",
        airlines_pnr: "XYZ456",
        requested_by: "John Doe",
        void_search_id: "V001",
        booking_code: "BOOK789",
        status: "Confirmed",
        account_status: "Active",
        created_at: "2024-09-18T10:30:00Z",
        details: "Round-trip flight from New York to Los Angeles."
    },
    {
        pnr: "DEF456",
        airlines_pnr: "LMN789",
        requested_by: "Jane Smith",
        void_search_id: "V002",
        booking_code: "BOOK123",
        status: "Pending",
        account_status: "Pending",
        created_at: "2024-09-18T12:45:00Z",
        details: "One-way flight from Chicago to Miami."
    },
    {
        pnr: "GHI789",
        airlines_pnr: "OPQ123",
        requested_by: "Robert Johnson",
        void_search_id: "V003",
        booking_code: "BOOK456",
        status: "Cancelled",
        account_status: "Inactive",
        created_at: "2024-09-17T09:15:00Z",
        details: "Business class flight from San Francisco to Tokyo."
    },
    {
        pnr: "JKL012",
        airlines_pnr: "RST345",
        requested_by: "Emily Davis",
        void_search_id: "V004",
        booking_code: "BOOK678",
        status: "Void",
        account_status: "Void",
        created_at: "2024-09-16T08:00:00Z",
        details: "Economy class flight from Dallas to Paris."
    }
];

export const HotelHistoryData: HotelHistoryInterface[] = [
    {
        booked_by: 'John Doe',
        hotel_name: 'Grand Hotel',
        city: 'Paris',
        country: 'France',
        booking_id: 'H123456789',
        total_price: '350 USD',
        refundable: 'Yes',
        booking_status: 'Confirmed',
        payment_status: 'Paid',
        payment_type: 'Credit Card',
        agent_confirmation_status: 'Confirmed',
        checkin_date: '2024-09-10',
        checkout_date: '2024-09-15',
        last_cancellation_date: '2024-09-01',
    },
];

export const VisaHistoryData: VisaHistoryInterface[] = [
    {
        booked_by: 'Sarah Connor',
        booking_code: 'VISA987654',
        destination_country: 'Canada',
        visa_type: 'Tourist Visa',
        entry_date: '2024-08-20',
        exit_date: '2024-09-20',
        total_amount: '150 USD',
        payment_status: 'Paid',
        visa_status: 'Approved',
        booking_date: '2024-07-30',
        traveller_country: 'USA',
    },
];

export const TourPackageHistoryData: TourPackageHistoryInterface[] = [
    {
        category: 'Luxury Tour',
        created_at: '2024-07-25',
        request_status: 'Pending',
        actions: 'View/Edit/Delete',
    },
];
export const GroupTourHistoryData: GroupTourHistoryInterface[] = [
    {
        category: 'Family Tour',
        created_at: '2024-06-15',
        request_status: 'Confirmed',
        actions: 'View/Edit/Delete',
    },
];
// Mock data array
export const TicketedData: TicketedInterface[] = [
    {
        issue_date: "21-08-2024 08:18",
        booking_date: "21-08-2024 08:18",
        booking_id: "TB638598033713836991",
        passenger_name: "James Lee",
        flight_date: "27-08-2024 10:15",
        route: "LAX-SFO",
        pnr: "QWE123",
        ticket_number: "7792409146161",
        total_price: "450.99",
        status: "Ticketed",
        action: "VT IN RS",
    },
    {
        issue_date: "22-08-2024 10:25",
        booking_date: "21-08-2024 09:30",
        booking_id: "TB638597297731693821",
        passenger_name: "Olivia Green",
        flight_date: "2024-09-10",
        route: "ORD-MIA",
        pnr: "HJU568",
        ticket_number: "7792409146162",
        total_price: "850.00",
        status: "Ticketed",
        action: "VT IN RS",
    },
];

// Mock data array
export const TicketCancelData: TicketCancelInterface[] = [
    {
        issue_date: "21-08-2024 08:18",
        booking_date: "21-08-2024 08:18",
        booking_id: "TB638598033713836993",
        passenger_name: "Benjamin Young",
        flight_date: "27-08-2024 10:15",
        route: "SEA-JFK",
        pnr: "TYU754",
        ticket_number: "7792409146164",
        total_price: "620.55",
        status: "Canceled",
        action: "VT IN RS",
    },
    {
        issue_date: "23-08-2024 09:18",
        booking_date: "22-08-2024 10:30",
        booking_id: "TB638597297731693822",
        passenger_name: "Sophia White",
        flight_date: "2024-09-15",
        route: "JFK-MAD",
        pnr: "NKL789",
        ticket_number: "7792409146165",
        total_price: "1,150.25",
        status: "Canceled",
        action: "VT IN RS",
    },
];

export const BookingCancelData: BookingCancelInterface[] = [
    {
        booking_date: "21-08-2024 08:18",
        booking_id: "TB638598033713836995",
        passenger_name: "Mason Harris",
        flight_date: "27-08-2024 10:15",
        route: "MIA-ORD",
        pnr: "CVR983",
        total_price: "780.40",
        status: "Canceled",
        action: "VB RS",
    },
    {
        booking_date: "20-08-2024 11:50",
        booking_id: "TB638597297731693827",
        passenger_name: "Ava Martinez",
        flight_date: "2024-09-20",
        route: "SFO-LAX",
        pnr: "BFU462",
        total_price: "300.00",
        status: "Canceled",
        action: "VB RS",
    },
];

export const AllHistoryData: AllHistoryInterface[] = [
    {
        issue_date: "21-08-2024 08:18",
        booking_date: "21-08-2024 08:18",
        booking_id: "TB638598033713836996",
        passenger_name: "Charlotte Rodriguez",
        flight_date: "27-08-2024 10:15",
        route: "JFK-LHR",
        pnr: "XDF758",
        ticket_number: "7792409146169",
        total_price: "1,340.55",
        status: "Ticketed",
        action: "VT IN RS",
    },
    {
        issue_date: "23-08-2024 09:18",
        booking_date: "22-08-2024 10:30",
        booking_id: "TB638597297731693828",
        passenger_name: "Liam Wright",
        flight_date: "2024-09-25",
        route: "ORD-SEA",
        pnr: "KLP874",
        ticket_number: "7792409146170",
        total_price: "920.45",
        status: "Ticketed",
        action: "VT IN RS",
    },
];

export const AddPassengerData: AddPassengerInterface[] = [
    {
        sl: 1,
        name: "Ms. Maria Thompson (ADT)",
        email: "maria.thompson@example.com",
        dob: "15-Aug-1985",
        gender: "Female",
        passport_number: "X12345678",
        passport_expire_date: "10-Oct-2030",
        passport_copy: "N/A",
        visa_copy: "N/A",
        action: "Edit/Delete",
    },
    {
        sl: 2,
        name: "Mr. Jacob Williams (ADT)",
        email: "jacob.williams@example.com",
        dob: "30-Dec-1990",
        gender: "Male",
        passport_number: "Y98765432",
        passport_expire_date: "15-Nov-2035",
        passport_copy: "N/A",
        visa_copy: "N/A",
        action: "Edit/Delete",
    },
];

export const QuickPassengerData: QuickPassengerInterface[] = [
    {
        sl: 1,
        name: "Mr. David Miller (ADT)",
        email: "david.miller@example.com",
        dob: "22-Mar-1988",
        gender: "Male",
        passport_number: "B12345678",
        passport_expire_date: "01-Jan-2032",
        passport_copy: "N/A",
        visa_copy: "N/A",
        action: "Edit/Delete",
    },
    {
        sl: 2,
        name: "Ms. Emma Scott (ADT)",
        email: "emma.scott@example.com",
        dob: "10-Jul-1992",
        gender: "Female",
        passport_number: "C98765432",
        passport_expire_date: "05-Feb-2033",
        passport_copy: "N/A",
        visa_copy: "N/A",
        action: "Edit/Delete",
    },
];


export const BankListData: BankListInterface[] = [
    {
        sl: 1,
        name: "Mr. David Miller (ADT)",
        location: "Gulshan Head office, Dhaka",
        account_no: "01193548965",
        routing_no: "253564679",
        account_name: "TRIP BEYOND",
        payment_changes: "Inter City Change/applicable for cash deposits on Totla ammount",
    },
    {
        sl: 2,
        name: "Mr. David Miller (ADT)",
        location: "Gulshan Head office, Dhaka",
        account_no: "01193548962",
        routing_no: "253564679",
        account_name: "TRIP BEYOND",
        payment_changes: "Inter City Change/applicable for cash deposits on Totla ammount",
    },
];


export const TransactionData: TransactionInterface[] = [
    {
        submitted_date: "21-08-2024 08:18",
        depositeType: "Bank Deposite",
        tnxNumber: "MR0185452454645454",
        reference: "123",
        status: "Approved",
        amount: "BDT 10,000",
        bankCharge: "BDT 0",
        topupAmount: "BDT 10,000",
        image: "img_url",
    },
    {
        submitted_date: "21-08-2024 08:18",
        depositeType: "Bank Deposite",
        tnxNumber: "MR0185452454645454",
        reference: "456",
        status: "Approved",
        amount: "BDT 10,000",
        bankCharge: "BDT 0",
        topupAmount: "BDT 10,000",
        image: "img_url",
    },
    {
        submitted_date: "21-08-2024 08:18",
        depositeType: "Bank Deposite",
        tnxNumber: "MR0185452454645454",
        reference: "123",
        status: "Approved",
        amount: "BDT 10,000",
        bankCharge: "BDT 0",
        topupAmount: "BDT 10,000",
        image: "img_url",
    },
    {
        submitted_date: "21-08-2024 08:18",
        depositeType: "Bank Deposite",
        tnxNumber: "MR0185452454645454",
        reference: "123",
        status: "Approved",
        amount: "BDT 10,000",
        bankCharge: "BDT 0",
        topupAmount: "BDT 10,000",
        image: "img_url",
    },
];



export const MyBankAccountData: MyBankAccountInterface[] = [
    {
        sl: "1",
        account_name: "Sazzad Alam Niloy",
        status: "Active",
        account_numner: "3411580005662",
        bank_name: "Dutch Bangla Bank PLC",
        branch_name: "Green Road",
    },
    {
        sl: "2",
        account_name: "TRIP BEYOND",
        status: "Active",
        account_numner: "05013100233939",
        bank_name: "EXIM BANK",
        branch_name: "BARISAL",
    },
    {
        sl: "3",
        account_name: "Sazzad Alam Niloy",
        status: "Active",
        account_numner: "1502923125001",
        bank_name: "CITY BANK",
        branch_name: "UTTARA",
    },
];