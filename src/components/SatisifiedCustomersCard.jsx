import propTypes from "prop-types";

export default function SatisifiedCustomersCard({
  img,
  alt,
  name,
  rating,
  review,
  position,
  company,
}) {
  return (
    <div className="py-8 flex flex-col max-w-[430px] mx-auto items-center md:items-start ">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="text-2xl font-[700] text-gray-700 dark:text-gray-100 mb-4 text-center md:text-left">
        {review}
      </p>
      <div className="mb-4">
        <img src={img} alt={alt} className="w-20 h-20 rounded-full" />
      </div>
      <h4 className="font-semibold text-gray-800 dark:text-gray-200">{name}</h4>
      <p className="text-gray-500 dark:text-gray-300 text-sm">
        {position} {company}
      </p>
    </div>
  );
}

SatisifiedCustomersCard.propTypes = {
  img: propTypes.string,
  alt: propTypes.string,
  name: propTypes.string,
  title: propTypes.string,
  rating: propTypes.number,
  review: propTypes.string,
  position: propTypes.string,
  company: propTypes.string,
};
