"use client";

import { LeaveRequest } from "@/types/leaveRequest";
import { Card, CardHeader, Text } from "@ui5/webcomponents-react";

export default function LeaveRequestItem({
  request,
}: {
  request: LeaveRequest;
}) {
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
      </div>
    </Card>
  );
}
