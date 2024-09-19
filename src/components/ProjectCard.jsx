import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function ProjectCard({
  imageSrc,
  alt,
  title,
  description,
  link,
}) {
  return (
    <div className="max-w-[400px] text-center flex flex-col items-center gap-2 w-full mx-auto">
      <div className="w-full h-[280px]">
        <img src={imageSrc} alt={alt} className="rounded-lg object-cover w-full h-full" />
      </div>
      <h3 className="text-2xl text-primary-600 font-[700] mt-4 dark:text-secondary-400">{title}</h3>
      <p className="text-primary-400 dark:text-secondary-200">{description}</p>
      <Link
        to={link}
        className="w-fit text-xl rounded-lg text-primary bg-secondary-400 py-2 px-8 border-[1px] border-neutral dark:border-gray-200 text-secondary-900 bg-primary-200 shadow-[1px_6px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[1px_6px_0px_0px_rgba(255,255,255,0.2)] mt-5"
      >
        View More
      </Link>
    </div>
  );
}

ProjectCard.propTypes = {
  imageSrc: propTypes.string,
  alt: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  link: propTypes.string,
};
