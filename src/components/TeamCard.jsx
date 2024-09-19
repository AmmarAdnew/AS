import propTypes from "prop-types";
import { FaGithub, FaGlobe, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

export default function TeamCard({
  img,
  alt,
  name,
  postition,
  description,
  linkedinUrl,
  githubUrl,
  telegramUrl,
  portfolioUrl,
}) {
  return (
    <div className="flex flex-col items-center max-w-[400px] mx-auto text-center md:items-start md:text-left">
      <div>
        <img src={img} alt={alt} className="w-20 object-cover rounded-full" />
      </div>
      <h2 className="text-xl mt-2">{name}</h2>
      <p className="text-xl">{postition}</p>
      <p className="text-[16px] mt-4">{description}</p>
      <div className="flex gap-5 text-3xl mt-6">
        {linkedinUrl && (
          <a href={linkedinUrl}>
            <FaLinkedin />
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl}>
            <FaGithub />
          </a>
        )}
        {telegramUrl && (
          <a href={telegramUrl}>
            <FaTelegramPlane />
          </a>
        )}
        {portfolioUrl && (
          <a href={portfolioUrl}>
            <FaGlobe />
          </a>
        )}
      </div>
    </div>
  );
}

TeamCard.propTypes = {
  img: propTypes.string,
  alt: propTypes.string,
  name: propTypes.string,
  postition: propTypes.string,
  description: propTypes.string,
  linkedinUrl: propTypes.string,
  githubUrl: propTypes.string,
  telegramUrl: propTypes.string,
  portfolioUrl: propTypes.string,
};
