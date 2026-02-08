import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitch — Enclara",
};

export default function Pitch() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-24 pb-20">
      <div className="w-full max-w-4xl">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
          <iframe
            src="https://www.youtube.com/embed/9hBKhfxlmnM"
            title="Enclara Pitch"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
