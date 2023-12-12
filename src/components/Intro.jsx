import { Typewriter } from "react-simple-typewriter";
import img from "../assets/images/nazmul-hasan-2.png";

const Intro = () => {
  return (
    <div id="home" className="container mx-auto mt-20">
      <div className="flex items-center justify-center flex-col md:flex-row gap-10 md:gap-2 pt-28 scroll-m-28">
        <div className="sm:flex-1  dark:text-white">
          <h3 className="text-xl font-semibold text-slate-500">
            Hi! I&apos;m Nazmul Hasan
          </h3>
          <h2 className="text-xl font-bold mt-3">
            I&apos;m a
            <span className="gradientText text-2xl sm:text-4xl md:text-2xl lg:text-4xl">
              {" "}
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Web Developer",
                  "Front End Developer",
                  "Back End Developer",
                  "Full Stack Developer!",
                ]}
                loop={false}
                cursor
                cursorStyle="|"
                cursorColor="#f59e0b"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="my-5">
          Passionate Junior MERN Stack Developer, React Aficionado, and Front-End Enthusiast. Crafting seamless digital experiences with creativity, precision, and a dash of innovation. Let&apos;s elevate your web projects together!
          </p>
          <button className="button">
            <a href="#contact">Hire Me</a>
          </button>
        </div>
        <div className="sm:flex-1 grid place-items-center">
          <div className="flex justify-center items-end bg-gradient-to-b from-orange-400 to-slate-900 w-60 h-60 rounded-t-full">
            <img
              className="max-w-full w-52 h-56 object-cover rounded-t-3xl"
              src={img}
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
