import { auth } from "@clerk/nextjs/server";
import { SignInButton } from "@clerk/nextjs";
import { MuseumCanvas } from "@/components/museum/MuseumCanvas";

export default async function GalleryPage() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black">
        <div className="max-w-md rounded-3xl border border-neutral-800 bg-neutral-900/80 p-10 text-center backdrop-blur">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Virtual Museum
          </h1>

          <p className="mb-8 text-neutral-400">
            Sign in to enter my private photography exhibition.
          </p>

          <SignInButton mode="modal">
            <button
              type="button"
              className="rounded-xl bg-white px-6 py-3 text-black transition hover:scale-105"
            >
              Enter Museum
            </button>
          </SignInButton>
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen w-screen overflow-hidden bg-black">
      <MuseumCanvas />
    </main>
  );
}