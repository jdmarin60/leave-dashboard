"use client";

import { LeaveRequest } from "@/types/leaveRequest";
import { Card, CardHeader, Text, Button } from "@ui5/webcomponents-react";

interface Props {
  request: LeaveRequest;
  onStatusChange: (id: string, newStatus: "APPROVED" | "REJECTED") => void;
}

export default function LeaveRequestItem({ request, onStatusChange }: Props) {
  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <CardHeader
        titleText={request.name}
        subtitleText={`${formatDate(request.date_from)} → ${formatDate(
          request.date_to
        )}`}
      />
      <div style={{ padding: "1rem" }}>
        <Text>
          Status: <strong>{request.status}</strong>
        </Text>
        <br />
        <Text>
          Type of Leave: <strong>{request.type_of_leave}</strong>
        </Text>
        <br />
        <Text>
          Reason: <strong>{request.reason}</strong>
        </Text>
        {request.status === "PENDING" && (
          <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
            <Button
              design="Positive"
              onClick={() => onStatusChange(request.id, "APPROVED")}
            >
              Approve
            </Button>
            <Button
              design="Negative"
              onClick={() => onStatusChange(request.id, "REJECTED")}
            >
              Reject
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
