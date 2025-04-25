import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { LeaveRequest } from "@/types/leaveRequest";
import LeaveRequestItem from "./LeaveRequestItem";

const request: LeaveRequest = {
  id: "1",
  name: "John",
  date_from: new Date(),
  date_to: new Date(),
  type_of_leave: "PERSONAL",
  status: "PENDING",
  reason: "Trip",
};

test("calls approve and reject", () => {
  const onApprove = vi.fn();
  const onReject = vi.fn();

  render(
    <LeaveRequestItem
      request={request}
      onApprove={onApprove}
      onReject={onReject}
    />
  );

  fireEvent.click(screen.getByText("Approve"));
  expect(onApprove).toHaveBeenCalledWith("1");

  fireEvent.click(screen.getByText("Reject"));
  expect(onReject).toHaveBeenCalledWith("1");
});
