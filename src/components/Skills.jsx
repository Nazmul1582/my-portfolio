import { skills } from "../constant";

const Skills = () => {
  return (
    <section id="skills" className="pt-24">
      <div className="container mx-auto">
        <h2 className="heading">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-items-center gap-10 dark:text-slate-100">
          {skills.map((skill) => (
            <div key={skill.id} className="">
              <div
                className="dark:bg-slate-800 bg-slate-200 w-32 lg:w-40 h-32 lg:h-40 rounded-full flex justify-center items-center"
              >
                <img
                  src={skill.img}
                  className="w-16 lg:w-24"
                  alt={skill.name}
                />
              </div>
              <p className="mt-2 text-center font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
