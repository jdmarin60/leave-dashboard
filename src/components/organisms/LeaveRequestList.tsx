"use client";

import { LeaveRequest } from "@/types/leaveRequest";
import LeaveRequestItem from "../molecules/LeaveRequestItem";

export default function LeaveRequestList({
  requests,
}: {
  requests: LeaveRequest[];
}) {
  console.log(requests);
  return (
    <div>
      {requests.map((req) => (
        <LeaveRequestItem key={req.id} request={req} />
      ))}
    </div>
  );
}
