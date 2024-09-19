import ProjectCard from "../components/ProjectCard";
import projects from "../assets/projects";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="text-neutral dark:text-gray-100">
      <div className="bg-secondary-100 dark:bg-gray-700 px-8 md:px-16 pt-10 pb-40 ">
        <h1
          className="font-[700] pt-14 text-[48px] text-primary-800 dark:text-gray-50 text-center"
          data-aos="fade-down"
        >
          Projects
        </h1>

        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 gap-x-10 mt-10 lg:grid-cols-3">
          {projects
            .filter((project) => project?.background == "secondary")
            .map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  imageSrc={project?.imageSrc}
                  alt={project?.alt}
                  title={project?.title}
                  description={project?.title}
                  link={project?.link}
                  data-aos="fade-up"
                />
              );
            })}
        </div>
      </div>

      <div className="bg-secondary-200 dark:bg-gray-800 px-8 md:px-16 py-20">
        <div
          className="grid grid-cols-1 gap-y-16 md:grid-cols-2 gap-x-10 mt-10 lg:grid-cols-3 "
          data-aos="zoom-in"
        >
          {projects
            .filter((project) => project?.background == "secondary")
            .map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  imageSrc={project?.imageSrc}
                  alt={project?.alt}
                  title={project?.title}
                  description={project?.title}
                  link={project?.link}
                  data-aos="fade-up"
                />
              );
            })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to=""
            className="w-fit text-xl py-2 px-8 rounded-lg bg-neutral text-primary shadow-[1px_6px_0px_0px_rgba(0,0,0,0.2)] dark:bg-gray-200 dark:text-gray-700 dark:shadow-[1px_6px_0px_0px_rgba(255,255,255,0.2)]"
            data-aos="fade-up"
          >
            Load More
          </Link>
        </div>
      </div>
    </div>
  );
}
