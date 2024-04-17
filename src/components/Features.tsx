/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "./Button";

const Features = () => {
  return (
    <section className="padding-container section">
      <div className="flex flex-col sm:flex-row mt-16 gap-y-6 justify-center sm:justify-between items-center">
        <div className="flex-1 flex flex-col gap-y-2">
          <h5 className="regular-16 text-text-darkAccent">Features</h5>
          <h2 className="sm:regular-56 regular-40 text-text-dark">
            Give Your Site A New Look
          </h2>
          <h2 className="regular-20 text-text-dark">
            Service range including technical skills, design, business
            understanding.
          </h2>
          <div>
            <div className="flex gap-x-5 ">
              <Image src={"/check.png"} width={34} height={24} alt="check" />{" "}
              <p className="regular-16 text-text-darkGray">
                Range including tech
              </p>
            </div>
            <div className="flex gap-x-5 mt-4">
              <Image src={"/check.png"} width={34} height={24} alt="check" />{" "}
              <p className="regular-16 text-text-darkGray">
                Business understanding
              </p>
            </div>
            <div className="flex gap-x-5 mt-4">
              <Image src={"/check.png"} width={34} height={24} alt="check" />{" "}
              <p className="regular-16 text-text-darkGray">
                Partner on the long run
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex sm:justify-end">
          <Image
            src="/featureRi.svg"
            alt="video reel"
            width={390}
            height={320}
          />
        </div>
      </div>

      <div className="mt-20 flex flex-col sm:flex-row gap-y-5">
        <div className="flex-1 flex flex-col gap-y-2">
          <h5 className="regular-16 text-text-darkAccent">Features</h5>
          <h2 className="regular-20 text-text-dark">
            Long run, and work as an extension of the merchant's team.
          </h2>
          <Button title="Read More" type="button" variant="btn-transparent2" />
        </div>

        <div className="flex-1 flex flex-col gap-y-5 sm:flex-row items-end">
          <div className=" border border-text-bd px-5 py-5">
            <div className="rounded-f">
              <Image
                src={"/Combined Shape.png"}
                width={24}
                height={24}
                alt="combined-shape"
              />
            </div>
            <h4 className="regular-24 text-text-dark mt-3">Professional</h4>
            <p className="regular-16 text-text-darkGray mt-3">
              Full service range including technical skills, design.
            </p>
          </div>

          <div className=" border border-text-bd px-5 py-4">
            <h4 className="regular-24 text-text-dark mt-3">Accessibility</h4>
            <p className="regular-16 text-text-darkGray mt-3">
              Business understanding, ability to put themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
