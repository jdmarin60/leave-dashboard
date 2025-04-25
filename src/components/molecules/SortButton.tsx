// components/molecules/SortButton.tsx
"use client";

import { Button } from "@ui5/webcomponents-react";

interface Props {
  ascending: boolean;
  onToggle: () => void;
}

export default function SortButton({ ascending, onToggle }: Props) {
  return (
    <Button accessibleName="Sort by Date" onClick={onToggle}>
      Sort by Date {ascending ? "↑" : "↓"}
    </Button>
  );
}
