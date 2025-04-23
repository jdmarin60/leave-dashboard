import { API_ENDPOINTS } from "@/config/api";
import { LeaveRequest } from "@/types/leaveRequest";

export async function getAllLeaveRequests(): Promise<LeaveRequest[]> {
  const res = await fetch(API_ENDPOINTS.leaveRequests);

  if (!res.ok) {
    throw new Error(`Failed to fetch leave requests: ${res.status}`);
  }

  return res.json();
}
