import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import StatusFilter from "./StatusFilter";

test("calls onChange with the selected value", () => {
  const handleChange = vi.fn();

  render(<StatusFilter value="ALL" onChange={handleChange} />);

  const select = screen.getByLabelText(/status filter/i);

  fireEvent.change(select, { target: { value: "APPROVED" } });

  expect(handleChange).toHaveBeenCalledWith("APPROVED");
});
