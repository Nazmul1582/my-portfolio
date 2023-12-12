import image from "../assets/images/nazmul-hasan.jpg";
import resume from "../assets/MERN_Stack_Developer_Resume_of_Md_Nazmul_Hasan.pdf";

const About = () => {
  return (
    <section id="about" className="container mx-auto pt-28 scroll-m-28">
      <h2 className="heading mb-20">About Me</h2>
      <div className="flex items-center justify-center flex-col md:flex-row gap-10">
        <div className="flex-1">
          <div className="mx-auto about-img-bg w-60 h-72 rounded-xl">
            <img
              className="max-w-full w-60 h-72 object-cover rotate-12 hover:rotate-0 duration-300 rounded-xl"
              src={image}
              alt="about"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="dark:text-slate-100">
            <h2 className="text-md font-bold">Hello!</h2>
            <p className="mt-2 text-justify">
            I&apos;m Md. Nazmul Hasan, hailing from the vibrant landscape of Bangladesh. While my forte lies in front-end development, my aspiration is to become an exceptional MERN Stack Developer. Eager to learn and grow, I&apos;m on a journey to refine my skills and contribute meaningfully. My goal is to secure a position in a top-tier company, where I can bring my passion for front-end and desire to master the MERN stack to new heights. Beyond borders and boundaries, I am dedicated to pushing the boundaries of what&apos;s possible in web development.
            </p>
            <button className="button my-6">
              <a href={resume} download="Resume of Md Nazmul Hasan">
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
