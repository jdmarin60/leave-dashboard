import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import { LeaveRequest } from "@/types/leaveRequest";
import LeaveRequestList from "./LeaveRequestList";

const mockData: LeaveRequest[] = [
  {
    id: "1",
    name: "Alice",
    status: "APPROVED",
    date_from: new Date(),
    date_to: new Date(),
    type_of_leave: "SICK",
    reason: "Fever",
  },
  {
    id: "2",
    name: "Bob",
    status: "PENDING",
    date_from: new Date(),
    date_to: new Date(),
    type_of_leave: "VACATION",
    reason: "Rest",
  },
];

test("filters by status", () => {
  render(<LeaveRequestList requests={mockData} />);

  fireEvent.change(screen.getByLabelText("status filter"), {
    target: { value: "PENDING" },
  });

  expect(screen.getByLabelText("Bob")).toBeInTheDocument();
  expect(screen.queryByLabelText("Alice")).not.toBeInTheDocument();
});
