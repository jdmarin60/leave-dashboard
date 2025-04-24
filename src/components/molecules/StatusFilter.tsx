"use client";

import { Select, Option } from "@ui5/webcomponents-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function StatusFilter({ value, onChange }: Props) {
  return (
    <Select onChange={(e) => onChange(e.target.value)}>
      <Option selected={value === "ALL"} value="ALL">
        All
      </Option>
      <Option selected={value === "PENDING"} value="PENDING">
        Pending
      </Option>
      <Option selected={value === "APPROVED"} value="APPROVED">
        Approved
      </Option>
      <Option selected={value === "REJECTED"} value="REJECTED">
        Rejected
      </Option>
    </Select>
  );
}
