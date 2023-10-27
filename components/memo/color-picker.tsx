"use client";

import { useState } from "react";

export default function ColorPicker({
  children,
}: {
  children: React.ReactNode;
}) {
  const [color, setColor] = useState("Chocolate");
  return (
    <div style={{ color }}>
      <input value={color} onChange={(event) => setColor(event.target.value)} />
      {children}
    </div>
  );
}
