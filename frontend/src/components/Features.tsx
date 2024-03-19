import { benefits } from "../constants";
import Heading from "./Shared/Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { cn } from "@/lib/utils";
import { benefitImage } from "@/assets";

const Features = () => {
  return (
    <Section id="features" crosses crossesOffset="lg:translate-y-[5.25rem]">
      <div className="container relative z-2 mt-9">
        <Heading
          className="text-center md:max-w-md lg:max-w-2xl"
          title="Welcome to the future of law enforcement"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item, idx) => (
            <div
              className={cn(
                `block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]`,
                item.backgroundUrl
              )}
              // style={{
              //   backgroundImage: `url(${item.backgroundUrl})`,
              // }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col h-[100%] min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center justify-center mt-auto">
                  <img
                    src={item.image}
                    width={258}
                    height={238}
                    alt={item.title}
                  />
                </div>
              </div>
              {item.light && <GradientLight />}
              {/* <div
                className="absolute inset-[2.125rem] bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  <img
                    src={benefitImage}
                    width={400}
                    height={362}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <ClipPath /> */}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Features;
