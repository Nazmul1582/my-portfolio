import { FiEye, FiGithub } from "react-icons/fi";
import { works } from "../constant";

const Works = () => {
  return (
    <section id="works" className="pt-28 scroll-m-28">
      <div className="container mx-auto">
        <h2 className="heading underline-offset-[10px]">My Works</h2>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {works.map((website) => (
            <div key={website.alt} className="max-w-[485px] mx-auto relative">
              <img
                src={website.img}
                alt="project image"
                className="rounded-xl object-cover w-[485px] h-[260px]"
              />
              <div className="overlay">
                <a
                  href={website.link1}
                  target="_blank"
                  rel="noreferrer"
                  className="overlay-icon"
                >
                  <FiGithub />
                </a>
                <a
                  href={website.link2}
                  target="_blank"
                  rel="noreferrer"
                  className="overlay-icon"
                >
                  <FiEye />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
