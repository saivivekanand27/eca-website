import Link from "next/link";
import Image from "next/image";
import galleryData from "../../data/gallery.json";

export default function Gallery() {
  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      <section className="text-center mb-20">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
          ECA <span className="text-blue-600">Gallery</span>
        </h1>
        <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
          Explore moments captured from workshops, coding competitions, open sessions and hackathons.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryData.map((event) => (
          <Link key={event.slug} href={`/gallery/${event.slug}`}>
            <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-2xl font-semibold group-hover:-translate-y-1 transition">
                  {event.title}
                </h2>
                <p className="text-sm text-gray-200 opacity-80">View Event Photos →</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}