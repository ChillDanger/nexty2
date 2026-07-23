import { auth } from "@clerk/nextjs/server";
import { SignInButton } from "@clerk/nextjs";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default async function GalleryPage() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center">
        <div className="max-w-md rounded-3xl border p-10 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Private Gallery
          </h1>

          <p className="mb-8 text-muted-foreground">
            Sign in to view my photo collection.
          </p>

          <SignInButton mode="modal">
            <button
  type="button"
  className="rounded-xl bg-black px-6 py-3 text-white"
>
              Sign In
            </button>
          </SignInButton>
        </div>
      </main>
    );
  }

  return <GalleryGrid />;
}