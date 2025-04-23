export interface LeaveRequest {
  id: string;
  employeeName: string;
  startDate: string;
  endDate: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  reason: string;
}
