interface SupportTicket {
    ticketId: string;
    date: string;
    subject: string;
    name: string;
    status: SupportTicketStatus;
    lastUpdate: string;
    description?: string;
  }

enum SupportTicketStatus {
    PENDING = "Pending",
    IN_PROGRESS = "InProgress",
    RESOLVED = "Resolved",
    ALL = "All"
}

export { type SupportTicket, SupportTicketStatus };