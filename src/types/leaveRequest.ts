export interface LeaveRequest {
  id: string;
  name: string;
  type_of_leave:
    | "SICK"
    | "VACATION"
    | "BEREAVEMENT"
    | "PARENTAL"
    | "UNPAID"
    | "MILITARY"
    | "STUDY"
    | "EMERGENCY"
    | "REMOTE"
    | "PERSONAL"; // Type of leave
  date_to: Date; // Updated to Date type
  date_from: Date; // Updated to Date type
  status: "PENDING" | "APPROVED" | "REJECTED";
  reason: string;
}
