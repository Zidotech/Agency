import Image from "next/image";
import Button from "./Button";

/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <section className=" bg-text-bgDark  lg:h-dvh h-min pt-[116px] pb-5 ">
      <div className="max-container padding-container flex justify-between lg:flex-row flex-col-reverse">
        <div className="flex-1 flex flex-col gap-y-1">
          <h5 className="regular-16 text-text-lightAccent">Modern Studio</h5>
          <h1 className="lg:regular-72 regular-56 text-text-light  lg:text-text-lightAccent">
            We Help To Build Your Dream Project
          </h1>
          <p className="regular-16 text-text-lightGray">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>

          <div className="flex gap-3 mt-3">
            <Button title="How we work" type="button" variant="btn-accent" />
            <Button title="Contact" type="button" variant="btn-transparent" />
          </div>

          <div className="flex gap-3 mt-4">
            <Image src="/meta.svg" alt="meta" width={48} height={48} />
            <div className="flex flex-col">
              <span className="regular-16 text-text-lightGray">
                "Put themselves in the merchant's shoes"
              </span>
              <span className="regular-16 text-text-light -mt-2">
                Meta Inc.
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex lg:justify-end justify-center items-start">
          <Image src="/heroli.svg" alt="hero-img" width={400} height={320} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
