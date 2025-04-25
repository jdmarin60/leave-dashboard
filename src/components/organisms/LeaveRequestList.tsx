"use client";

import { useState } from "react";
import { LeaveRequest } from "@/types/leaveRequest";
import StatusFilter from "../molecules/StatusFilter";
import SortButton from "../molecules/SortButton";
import LeaveRequestItem from "../molecules/LeaveRequestItem";

export default function LeaveRequestList({
  requests,
}: {
  requests: LeaveRequest[];
}) {
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [ascending, setAscending] = useState(true);
  const [allRequests, setAllRequests] = useState(requests);

  const handleStatusChange = (
    id: string,
    newStatus: "APPROVED" | "REJECTED"
  ) => {
    setAllRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  const filteredRequests = allRequests
    .filter((r) => (statusFilter === "ALL" ? true : r.status === statusFilter))
    .sort((a, b) =>
      ascending
        ? new Date(a.date_from).getTime() - new Date(b.date_from).getTime()
        : new Date(b.date_from).getTime() - new Date(a.date_from).getTime()
    );
  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <StatusFilter value={statusFilter} onChange={setStatusFilter} />
        <SortButton
          ascending={ascending}
          onToggle={() => setAscending(!ascending)}
        />
      </div>
      {filteredRequests.map((request) => (
        <LeaveRequestItem
          key={request.id}
          request={request}
          onApprove={(id) => handleStatusChange(id, "APPROVED")}
          onReject={(id) => handleStatusChange(id, "REJECTED")}
        />
      ))}
    </div>
  );
}
