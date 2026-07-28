"use client";

interface EnterMuseumOverlayProps {
  onEnter: () => void;
}

export default function EnterMuseumOverlay({
  onEnter,
}: EnterMuseumOverlayProps) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur">
      <div className="max-w-lg rounded-3xl border border-white/20 bg-black/60 p-10 text-center text-white">

        <h1 className="mb-3 text-5xl font-bold">
          Daniel Alswanger
        </h1>

        <p className="mb-8 text-neutral-300">
          Virtual Museum
        </p>

        <button
          type="button"
          onClick={onEnter}
          className="rounded-xl bg-white px-8 py-4 text-black transition hover:scale-105"
        >
          Enter Museum
        </button>

        <div className="mt-8 space-y-2 text-left text-sm text-neutral-400">
          <p>🖱 Click — Enter Museum</p>
          <p>⌨ WASD — Move</p>
          <p>⇧ Shift — Sprint</p>
          <p>🖱 Mouse — Look Around</p>
          <p>⎋ Esc — Release Mouse</p>
        </div>

      </div>
    </div>
  );
}