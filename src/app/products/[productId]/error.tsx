"use client";
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message}
      <button onClick={reset}>Try again</button>
    </div>
  );
}
