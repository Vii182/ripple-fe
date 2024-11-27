import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

export default function FeaturedItems({ items }) {
  return (
    <section className="py-2 bg-transparent w-[95%]">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={true}
        autoPlay={true}
        interval={3000}
        centerMode={true}
        centerSlidePercentage={80}
        transitionTime={500}
        className="px-4 bg-transparent"
      >
        {items.map((item) => (
          <Link
            key={item.item_id}
            href={`/items/${item.item_id}`} // Dynamic route for each item
            passHref
          >
            <div
              key={item.item_id}
              className="p-2 bg-transparent shadow-md rounded-lg"
            >
              <div className="max-w-[1200px] h-[350px] lg:h-[500px] relative mx-auto">
                <img
                  src={item.image_url}
                  alt={item.item_name}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className=" bg-white bg-opacity-80 p-2 rounded-lg font-Quicksand">
                    <h3 className="text-lime-500 text-xl sm:text-2xl font-semibold">
                      {item.item_name.toUpperCase()}
                    </h3>
                    <p className="text-textPrimary-light text-base sm:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </section>
  );
}
