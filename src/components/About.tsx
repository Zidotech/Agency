/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "./Button";

const About = () => {
  return (
    <section className="padding-container section  py-10">
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
          <h2 className="sm:regular-56 regular-40 text-text-dark">
            An Experience Design Agency
          </h2>
          <p className="regular-20 text-text-dark">
            Provides a full service range
          </p>
          <p className="regular-16 text-text-darkGray">
            Ability to put themselves in the merchant's shoes. It is meant to
            partner on the long run, and work as an extension of the merchant's
            team.
          </p>
          <Button title="ABOUT US" type="button" variant="btn-white" />
        </div>
      </div>

      <div className="mt-9 flex flex-wrap justify-between">
        <div className="border border-text-bd flex-1 px-3 py-6">
          <h3 className="regular-40 text-text-dark">42%</h3>
          <span className="regular-20 text-text-dark">Years of experience</span>
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

      {/* how we work div */}
      <div className="mt-16 flex sm:flex-row flex-col justify-between items-center gap-y-6 border-b pb-14 border-text-bd">
        <div className="flex-1 flex flex-col gap-y-3">
          <h5 className="regular-16 text-text-darkAccent">How we work</h5>
          <h3 className="regular-40 text-text-dark">
            Making Your Projects Look Awesome
          </h3>
          <span className="regular-16 text-text-darkGray">
            Technical skills, design, business understanding, ability to put
            themselves in the merchant's shoes.
          </span>
          <Button title="Read More" type="button" variant="btn-transparent2" />
        </div>

        <div className="flex-1 flex sm:justify-end ">
          <ul className=" marker:text-text-dark list-decimal sm:marker:regular-56  pl-7 sm:pl-0">
            <li className="sm:pl-3 pl-2 regular-24 text-text-dark mb-8">
              Full service range including
            </li>
            <li className="sm:pl-3 pl-2 regular-24 text-text-dark mb-8">
              Technical skills, design, business
            </li>
            <li className="sm:pl-3 pl-2 regular-24 text-text-dark">
              Themselves in the merchant's
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mt-16 gap-y-6">
        <div className="flex-1">
          <Image
            src="/videohill.png"
            alt="video reel"
            width={390}
            height={320}
          />
        </div>

        <div className="flex-1 flex flex-col gap-y-4">
          <h5 className="regular-16 text-text-darkAccent">Video Reel</h5>
          <h3 className="regular-40 text-text-dark">
            Unlock The Greatest Value Possible
          </h3>
          <span className="regular-16 text-text-darkGray">
            Design, business understanding, ability to put themselves in the
            merchant's shoes meant to partner.
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
