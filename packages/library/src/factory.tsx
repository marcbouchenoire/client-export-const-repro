import React, { useState } from "react";

export function createComponents(id: string) {
  function Input() {
    const [value, setValue] = useState("");

    return (
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    );
  }

  return {
    id,
    Input,
  };
}
