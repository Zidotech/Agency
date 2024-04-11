import Image from "next/image";

const Features = () => {
  return (
    <section className="padding-container max-container">
      <div className="flex flex-col sm:flex-row mt-16 gap-y-6 justify-center sm:justify-between items-center">
        <div className="flex-1 flex flex-col gap-y-2">
          <h5 className="regular-16 text-text-darkAccent">Features</h5>
          <h2 className="regular-56 text-text-dark">
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
    </section>
  );
};

export default Features;
