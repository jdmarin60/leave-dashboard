"use client";

import { LeaveRequest } from "@/types/leaveRequest";
import { Card, CardHeader, Text, Button } from "@ui5/webcomponents-react";

interface Props {
  request: LeaveRequest;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

export default function LeaveRequestItem({
  request,
  onApprove,
  onReject,
}: Props) {
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
        aria-label={request.name}
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
            <Button design="Positive" onClick={() => onApprove(request.id)}>
              Approve
            </Button>
            <Button design="Negative" onClick={() => onReject(request.id)}>
              Reject
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
