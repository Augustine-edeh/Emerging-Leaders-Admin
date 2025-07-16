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

enum AdminStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  PENDING = "Pending",
  DEACTIVATED = "Deactivated",
}

interface AdminUser {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: AdminStatus;
  createdAt: string;
  updatedAt: string;
}

export { type SupportTicket, SupportTicketStatus, type AdminUser, AdminStatus };