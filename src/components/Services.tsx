import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, service4 } from "../assets";
import { danceImages } from "../constants";
import { DanceMessage, Gradient, LawnMowerMessage } from "./design/Services";
import { useState } from "react";

// import Generating from "./Generating";

const Services = () => {
  const [danceImage, setDanceImage] = useState(0);

  const onDanceImageChange = (index: number) => {
    setDanceImage(index);
  };

  return (
    <Section
      id="services"
      crosses
      // customPaddings
      crossesOffset="lg:translate-y-[6.25rem] "
    >
      {/* Row 1 */}
      <div className="container mt-8">
        <Heading
          title="Not Just a Crime Fighter"
          text="Discover Rob-O-Cop's Array of Surprisingly Handy Services."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] ">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right brightness-80 "
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>
            <div className="bg-slate-900 bg-opacity-75  p-2 rounded-md relative z-1 max-w-[17rem] ml-auto md:bg-opacity-30 lg:mb-60">
              <h4 className="h6 md:h5 mb-4">Experience The Future</h4>
              <p className="body-2 md:mb-[3rem] text-n-23">
                Where Security Meets Home Delivery
              </p>
            </div>

            {/* <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" /> */}
          </div>

          {/* Row 2 */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">
                  Grocery Delivery With A Side Of Justice
                </h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Forget drones, get your groceries delivered with tactical
                  precision by Rob-O-Cop. From organic circuits to motor oil
                  marinades, we&apos;ve got your pantry covered. Satisfaction
                  guaranteed, or we&apos;ll reboot your order.
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Lawn Mowing with Laser Precision</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Rob-O-Cop trims your lawn with the same precision he applies
                  to crime scenes. Equipped with laser-guided technology,
                  ensuring every blade of grass is legally compliant with
                  neighborhood regulations. No grass blade left unturned, no
                  dandelion safe.
                </p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <LawnMowerMessage />
                {/* <VideoBar /> */}
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Jive-Drive: The Dance-Along Escort</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Safety meets rhythm! Book Rob-O-Cop for your next bachelorette
                  party or other event. Relax as he escorts you through the
                  dangerous streets with a beat, teaching you survival tactics
                  and sick dance moves simultaneously. Stay safe, stay obedient,
                  stay groovy.
                </p>

                <ul className="flex items-center justify-between">
                  {danceImages.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => onDanceImageChange(index)}
                      className={`cursor-pointer rounded-2xl flex items-center justify-center ${
                        index === danceImage
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === danceImage
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        {/* <button
                          //   onClick={() => onDanceImageChange(index)}
                          className="w-full h-full bg-n-6 rounded-[1rem]"
                        > */}
                        {index + 1}
                        {/* </button> */}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={danceImages[danceImage]}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <DanceMessage index={danceImage} />
                {/* <VideoBar /> */}
              </div>
            </div>

            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service4}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">CyberPet Walking Services</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Even robotic dogs need to stretch their servos. Let Rob-O-Cop
                  take your cybernetic companions for a walk in the datascape.
                  Bonus: He&apos;s immune to electric shocks from cyber cats.
                </p>
              </div>

              {/* <PhotoChatMessage /> */}
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
