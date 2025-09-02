import { SupportTicketStatus } from "@/types/types";

const tickets = [
  {
    ticketId: "1234567890",
    date: "2025-01-01",
    subject: "System Login Issues",
    name: "Jane Adebayo",
    status: SupportTicketStatus.IN_PROGRESS,
    lastUpdate: "Jun 10, 2025",
  },
  {
    ticketId: "1234567891",
    date: "2025-01-02",
    subject: "Password Reset Request",
    name: "John Smith",
    status: SupportTicketStatus.PENDING,
    lastUpdate: "Jun 11, 2025",
  },
  {
    ticketId: "1234567892",
    date: "2025-01-03",
    subject: "Email Configuration Problem",
    name: "Sarah Johnson",
    status: SupportTicketStatus.RESOLVED,
    lastUpdate: "Jun 12, 2025",
  },
  {
    ticketId: "1234567893",
    date: "2025-01-04",
    subject: "Database Connection Error",
    name: "Mike Wilson",
    status: SupportTicketStatus.IN_PROGRESS,
    lastUpdate: "Jun 13, 2025",
  },
  {
    ticketId: "1234567894",
    date: "2025-01-05",
    subject: "File Upload Issues",
    name: "Emily Davis",
    status: SupportTicketStatus.PENDING,
    lastUpdate: "Jun 14, 2025",
  },
  {
    ticketId: "1234567895",
    date: "2025-01-06",
    subject: "API Integration Problem",
    name: "David Brown",
    status: SupportTicketStatus.RESOLVED,
    lastUpdate: "Jun 15, 2025",
  },
  {
    ticketId: "1234567896",
    date: "2025-01-07",
    subject: "Mobile App Crash",
    name: "Lisa Anderson",
    status: SupportTicketStatus.IN_PROGRESS,
    lastUpdate: "Jun 16, 2025",
  },
  {
    ticketId: "1234567897",
    date: "2025-01-08",
    subject: "Payment Gateway Error",
    name: "Robert Taylor",
    status: SupportTicketStatus.PENDING,
    lastUpdate: "Jun 17, 2025",
  },
];

export default tickets;
