/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "./Button";

const About = () => {
  return (
    <section className="bg-text-bgLight py-10">
      <div className="padding-container max-container">
        <div className="flex lg:justify-between lg:gap-0 gap-8 items-center flex-wrap border-b pb-10 border-text-bd">
          <Image
            src={"/digitalside.svg"}
            alt="digital slide"
            width={104}
            height={104}
          />
          <Image src={"/vortex.svg"} alt="vortex" width={104} height={104} />
          <Image
            src={"/travelexplorer.svg"}
            alt="travel-explorer"
            width={104}
            height={104}
          />
          <Image src={"/fuzon.svg"} alt="fuzon" width={104} height={104} />
          <Image
            src={"/mediafury.svg"}
            alt="media fury"
            width={104}
            height={104}
          />
        </div>

        <div className="flex sm:flex-row flex-col justify-between items-center pt-16">
          <div className="flex-1 flex  items-start">
            <Image src="/aboutli.svg" alt="about" width={480} height={390} />
          </div>

          <div className="flex-1 flex flex-col gap-6 sm:mt-0 mt-3">
            <h5 className="regular-16 text-text-lightAccent">About</h5>
            <h2 className="regular-56 text-text-dark">
              An Experience Design Agency
            </h2>
            <p className="regular-20 text-text-dark">
              Provides a full service range
            </p>
            <p className="regular-16 text-text-darkGray">
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team.
            </p>
            <Button title="ABOUT US" type="button" variant="btn-white" />
          </div>
        </div>

        <div className="mt-9 flex flex-wrap justify-between">
          <div className="border border-text-bd flex-1 px-3 py-6">
            <h3 className="regular-40 text-text-dark">42%</h3>
            <span className="regular-20 text-text-dark">
              Years of experience
            </span>
          </div>
          <div className="border border-text-bd flex-1 px-3 py-6">
            <h3 className="regular-40 text-text-dark">73+</h3>
            <span className="regular-20 text-text-dark">Agency members</span>
          </div>
          <div className="border border-text-bd flex-1 px-3 py-6">
            <h3 className="regular-40 text-text-dark">5.000</h3>
            <span className="regular-20 text-text-dark">Projects complete</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
