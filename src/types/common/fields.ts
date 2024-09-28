import { AddPassengerInterface, AllHistoryInterface, BookingCancelInterface, GroupTourHistoryInterface, HotelHistoryInterface, OnHoldInterface, QuickPassengerInterface, RefundHistoryInterface, ReissueHistoryInterface, TicketCancelInterface, TicketedInterface, TourPackageHistoryInterface, VisaHistoryInterface, VoidHistoryInterface } from "./interfaces";
import { MyBankAccountData } from './mockData';

export const OnHoldFields: string[] = [
    'Booking Date',
    'Booking ID',
    'Passenger Name',
    'Flight Date',
    'Route',
    'PNR',
    'Issue Before',
    'Total Price',
    'Status',
    'Action',
];

export const VoidHistoryFields: string[] = [
    'PNR',
    'Airlines PNR',
    'Requested By',
    'Void Search ID',
    'Booking Code',
    'Status',
    'Account Status',
    'Created At',
    'Details',
];
export const RefundHistoryFields: string[] = [
    'PNR',
    'Airlines PNR',
    'Requested By',
    'Void Search ID',
    'Booking Code',
    'Status',
    'Account Status',
    'Created At',
    'Details',
];
export const ReissueHistoryFields: string[] = [
    'PNR',
    'Airlines PNR',
    'Requested By',
    'Void Search ID',
    'Booking Code',
    'Status',
    'Account Status',
    'Created At',
    'Details',
];
export const HotelHistoryFields: string[] = [
    'Booked By',
    'Hotel Name',
    'City',
    'Country',
    'Booking ID',
    'Total Price',
    'Refundable',
    'Booking Status',
    'Payment Status',
    'Payment Type',
    'Agent Confirmation Status',
    'Check-in Date',
    'Check-out Date',
    'Last Cancellation Date',
];

export const VisaHistoryFields: string[] = [
    'Booked By',
    'Booking Code',
    'Destination Country',
    'Visa Type',
    'Entry Date',
    'Exit Date',
    'Total Amount',
    'Payment Status',
    'Visa Status',
    'Booking Date',
    'Traveller Country',
];

export const TourPackageHistoryFields: string[] = [
    'Category',
    'Created At',
    'Request Status',
    'Actions',
];

export const TicketCancelFields: string[] = [
    'Issue Date',
    'Booking Date',
    'Booking ID',
    'Passenger Name',
    'Flight Date',
    'Route',
    'PNR',
    'Ticket Number',
    'Total Price',
    'Status',
    'Action',
];

export const TicketedFields: string[] = [
    'Issue Date',
    'Booking Date',
    'Booking ID',
    'Passenger Name',
    'Flight Date',
    'Route',
    'PNR',
    'Ticket Number',
    'Total Price',
    'Status',
    'Action',
];
export const GroupTourHistoryFields: string[] = [
    'Category',
    'Created At',
    'Request Status',
    'Actions',
];

export const BookingCancelFields: string[] = [
    'Booking Date',
    'Booking ID',
    'Passenger Name',
    'Flight Date',
    'Route',
    'PNR',
    'Total Price',
    'Status',
    'Action',
];

export   // Field labels and their corresponding keys
    const AllHistoryFields: string[] = [
        'Issue Date',
        'Booking Date',
        'Booking ID',
        'Passenger Name',
        'Flight Date',
        'Route',
        'PNR',
        'Ticket Number',
        'Total Price',
        'Status',
        'Action',
    ];

export const AddPassengerFields: string[] = [
    'SL',
    'Name',
    'Email',
    'DOB',
    'Gender',
    'Passport Number',
    'Passport Expire Date',
    'Passport Copy',
    'Visa Copy',
    'Action',
];

export const QuickPassengerFields: string[] = [
    'SL',
    'Name',
    'Email',
    'DOB',
    'Gender',
    'Passport Number',
    'Passport Expire Date',
    'Passport Copy',
    'Visa Copy',
    'Action',
];


export const BankListFields: string[] = [
    " sl",
    "name",
    "location",
    "account_no",
    " routing_no",
    "account_name",
    "payment_changes",
];

export const TransactionFields: string[] = [
    "Submitted Date",
    "Deposite Type",
    "Tnx Number",
    "Reference",
    "Status",
    "Amount",
    "Bank Charge",
    "Topup Amount",
    "image",
];

export const MyBankAccountFields: string[] = [
    "SL",
    "Account Name",
    "Status",
    "Account Numner",
    "Bank Name",
    "Branch Name",
]