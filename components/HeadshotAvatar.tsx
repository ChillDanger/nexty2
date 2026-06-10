import Image from "next/image";

export function HeaderAvatar() {
  return (
    <div className="relative cursor-pointer">
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-white/20
          blur-lg
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
          group-hover:scale-125
        "
      />

      {/* Glass Border */}
      <div
        className="
          relative
          rounded-full
          p-[2px]
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          shadow-lg
          overflow-hidden
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:-translate-y-1
          group-hover:border-white/50
          group-hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]
        "
      >
        {/* Highlight */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-gradient-to-b
            from-white/40
            via-transparent
            to-transparent
            pointer-events-none
          "
        />

        <Image
          src="/profile.jpg"
          alt="Daniel Alswanger"
          width={38}
          height={38}
          priority
          className="
            relative
            rounded-full
            object-cover
            transition-transform
            duration-300
            hover:scale-110
          "
        />
      </div>
    </div>
  );
}