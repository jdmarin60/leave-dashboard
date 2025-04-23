import DashboardLayout from "@/components/layouts/DashboardLayout";
import LeaveRequestList from "@/components/organisms/LeaveRequestList";
import { getAllLeaveRequests } from "@/domain/leaveRequest/leaveRequest.service";

export default async function LeaveRequestsPage() {
  const leaveRequests = await getAllLeaveRequests();

  return (
    <DashboardLayout>
      <LeaveRequestList requests={leaveRequests} />
    </DashboardLayout>
  );
}
