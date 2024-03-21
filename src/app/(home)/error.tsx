"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div
      style={{
        padding: "10rem",
      }}
    >
      <h1>:c</h1>
      <p>An Unexpected Error Has Occurred</p>
      <button onClick={reset}>try again</button>
    </div>
  );
}
