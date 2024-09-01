import { OnHoldFields } from "./interfaces";
import { TicketedFields } from "./interfaces";
import { TicketCancelFields } from "./interfaces";


// Mock data array object
export const OnHoldData: OnHoldFields[] = [
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
        booking_id: "TB638597297731693819",
        passenger_name: "Jane Smith",
        flight_date: "2024-09-10",
        route: "SPD-DAC",
        pnr: "008MLQ",
        issue_before: "Time Limit",
        total_price: "4,653.01",
        status: "On Hold",
        action: "VB RS",
    },
    {
        booking_date: "20-08-2024 11:50",
        booking_id: "TB638597297731693819",
        passenger_name: "Jane Smith",
        flight_date: "2024-09-10",
        route: "SPD-DAC",
        pnr: "008MLQ",
        issue_before: "Time Limit",
        total_price: "4,653.01",
        status: "On Hold",
        action: "VB RS",
    },
    {
        booking_date: "20-08-2024 11:50",
        booking_id: "TB638597297731693819",
        passenger_name: "Jane Smith",
        flight_date: "2024-09-10",
        route: "SPD-DAC",
        pnr: "008MLQ",
        issue_before: "Time Limit",
        total_price: "4,653.01",
        status: "On Hold",
        action: "VB RS",
    },
    {
        booking_date: "20-08-2024 11:50",
        booking_id: "TB638597297731693819",
        passenger_name: "Jane Smith",
        flight_date: "2024-09-10",
        route: "SPD-DAC",
        pnr: "008MLQ",
        issue_before: "Time Limit",
        total_price: "4,653.01",
        status: "On Hold",
        action: "VB RS",
    },

];


// Mock data array
export const TicketedData: TicketedFields[] = [
    {
        issue_date: "21-08-2024 08:18",
        booking_date: "21-08-2024 08:18",
        booking_id: "TB638598033713836999",
        passenger_name: "John Doe",
        flight_date: "27-08-2024 10:15",
        route: "DAC-DOH",
        pnr: "MZWE3B",
        ticket_number: "7792409146166",
        total_price: "58,648.7",
        status: "Ticketed",
        action: "VT IN RS",
    },
    {
        issue_date: "21-08-2024 08:18",
        booking_date: "20-08-2024 11:50",
        booking_id: "TB638597297731693819",
        passenger_name: "Jane Smith",
        flight_date: "2024-09-10",
        route: "SPD-DAC",
        pnr: "008MLQ",
        ticket_number: "7792409146166",
        total_price: "4,653.01",
        status: "Ticketed",
        action: "VT IN RS",
    },

];

// Mock data array
export const TicketCancelData: TicketCancelFields[] = [
    {
        issue_date: "21-08-2024 08:18",
        booking_date: "21-08-2024 08:18",
        booking_id: "TB638598033713836999",
        passenger_name: "John Doe",
        flight_date: "27-08-2024 10:15",
        route: "DAC-DOH",
        pnr: "MZWE3B",
        ticket_number: "7792409146168",
        total_price: "58,648.7",
        status: "On Hold",
        action: "VT IN RS",
    },
    {
        issue_date: "21-08-2024 08:18",
        booking_date: "20-08-2024 11:50",
        booking_id: "TB638597297731693819",
        passenger_name: "Jane Smith",
        flight_date: "2024-09-10",
        route: "SPD-DAC",
        pnr: "008MLQ",
        ticket_number: "7792409146166",
        total_price: "4,653.01",
        status: "On Hold",
        action: "VT IN RS",
    },

];