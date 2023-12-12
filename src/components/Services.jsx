import { services } from "../index";

const Services = () => {
  return (
    <section id="services" className="dark:text-slate-100 pt-28">
      <div className="container mx-auto">
        <h2 className="heading">Services</h2>

        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div key={service.id} className="single-service">
              <h4 className="text-2xl font-bold mb-3 dark:text-white">
                {service.title}
              </h4>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
