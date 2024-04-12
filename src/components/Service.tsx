/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "./Button";
import { ServiceCard } from "@/constant";

const Service = () => {
  return (
    <section className="padding-container section">
      <div className="flex sm:flex-row flex-col justify-between items-center pt-16">
        <div className="flex-1 flex  items-start">
          <Image src="/servicesli.svg" alt="about" width={480} height={390} />
        </div>

        <div className="flex-1 flex flex-col gap-6 sm:mt-0 mt-3">
          <h5 className="regular-16 text-text-lightAccent">Service</h5>
          <h2 className="sm:regular-56 regular-40 text-text-dark ">
            Making Complex Digital Products
          </h2>
          <p className="regular-20 text-text-dark">
            Agency provides a full service range including technical skills,
            design, business.
          </p>
          <div className="flex gap-3 mt-4 sm:items-center items-start">
            <Image src="/jenny.svg" alt="meta" width={55} height={58} />
            <div className="flex flex-col">
              <span className="regular-16 text-text-darkGray">
                "Understanding, ability to put themselves in the merchant's
                shoes. It is meant to partner."
              </span>
              <span className="regular-16 text-text-dark ">Jenny Murtaugh</span>
            </div>
          </div>
          <Button title="Explore" type="button" variant="btn-white" />
        </div>
      </div>

      <div className="mt-16">
        <h5 className="regular-16 text-text-darkAccent">Service</h5>
        <h3 className="text-text-dark sm:regular-40 text-[38px]">
          How Our Agency Can Help
        </h3>

        <div className="flex flex-wrap sm:flex-row gap-y-5 mt-9">
          {ServiceCard.map((service) => (
            <Services
              key={service.id}
              title={service.title}
              icon={service.icon}
              description={service.description}
              btn={service.btn}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type ServiceCard = {
  title: string;
  icon: string;
  description: string;
  btn: string;
};

export default Service;

const Services = ({ title, icon, description, btn }: ServiceCard) => {
  return (
    <div className="flex-1 flex flex-col gap-y-4 px-5 py-7 border border-text-bd">
      <div className="rounded-f">
        <Image src={icon} alt={title} width={24} height={24} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <Button title={btn} type="button" variant="btn-transparent2" />
    </div>
  );
};
