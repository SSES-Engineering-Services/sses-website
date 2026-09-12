import { clients } from "../../data/client";

const ClientsCarousel = () => {
  const carouselClients = [...clients, ...clients];

  return (
    <section
      className="overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
      aria-labelledby="clients-heading"
    >
      <style>{`
        @keyframes client-carousel-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .client-carousel-track {
          animation: client-carousel-scroll 55s linear infinite;
          will-change: transform;
        }

        .client-carousel-wrapper:hover .client-carousel-track,
        .client-carousel-wrapper:focus-within .client-carousel-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .client-carousel-track {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>

      {/* Section Heading */}
      <div className="mx-auto mb-12 max-w-4xl px-5 text-center sm:mb-14 sm:px-6 lg:mb-16">
        <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6">
          <span
            className="h-px w-8 bg-orange-500 sm:w-10"
            aria-hidden="true"
          />

          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-orange-600 sm:text-xs sm:tracking-[0.22em]">
            Our Clients
          </span>

          <span
            className="h-px w-8 bg-orange-500 sm:w-10"
            aria-hidden="true"
          />
        </div>

        <h2
          id="clients-heading"
          className="
            font-display
            text-[36px]
            font-extrabold
            leading-tight
            tracking-tight
            text-navy-950
            sm:text-[44px]
            lg:text-5xl
          "
        >
          Trusted Relationships
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-[17px] font-medium leading-8 text-slate-700 sm:mt-6 sm:text-[18px] sm:leading-8">
          Organizations represented through our client relationships across
          engineering, safety, infrastructure and industrial environments.
        </p>
      </div>

      {/* Client Carousel */}
      <div
        className="
          client-carousel-wrapper
          relative
          w-full
          overflow-hidden
          bg-[#E9EFF4]
          py-8
          sm:py-10
          lg:py-12
        "
      >
        <div
          className="client-carousel-track flex w-max"
          aria-label="Client organizations"
        >
          {carouselClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="
                mx-2
                flex
                h-36
                w-56
                shrink-0
                items-center
                justify-center
                border
                border-slate-200
                bg-white
                px-6
                py-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-slate-300
                hover:shadow-[0_12px_30px_rgba(8,26,43,0.10)]
                sm:mx-2.5
                sm:h-38
                sm:w-60
                sm:px-7
                lg:mx-3
                lg:h-40
                lg:w-64
                lg:px-8
              "
            >
              <img
                src={client.logo}
                alt={client.name}
                className="
                  block
                  max-h-22
                  max-w-46.25
                  object-contain
                  transition-transform
                  duration-300
                  hover:scale-[1.03]
                  sm:max-h-24
                  sm:max-w-48.75
                  lg:max-h-25
                  lg:max-w-52.5
                "
                loading={index < clients.length ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;