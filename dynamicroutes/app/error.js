"use client";

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()} // tries to re-render the route
        style={{ marginTop: "10px" }}
      >
        Try again
      </button>
    </div>
  );
}
