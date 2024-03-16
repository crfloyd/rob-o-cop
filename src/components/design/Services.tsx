import { gradient, play } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";

export const Gradient = () => {
  return (
    <div
      id="services-gradient"
      className="absolute top-0 -left-[10rem] w-[31.625rem] h-[2.625rem] opacity-50 mix-blend-color-dodge pointer-events-none"
    >
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const LawnMowerMessage = () => {
  return (
    <div className="absolute top-2 right-[.125rem] w-full max-w-[8rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-xs md:text-base md:top-8 md:max-w-[17.5rem]">
      Grass, meet cyber justice!
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
        ROB-O-COP
      </p>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-n-6"
      />
    </div>
  );
};

const messages = [
  "Dance mode engaged!",
  "Who's down for some justice?",
  "Executing groove.exe",
  "Rhythm protocol: Activated!",
  "Shuffling rythms... Let's groove!",
  "Error 404: Dance not found.",
];

export const DanceMessage = ({ index }: { index: number }) => {
  const m = messages[index];
  return (
    <div className="absolute top-2 right-[.125rem] w-full max-w-[7rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-xs md:text-base md:top-8 md:max-w-[13.5rem]">
      {m}
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-n-6"
      />
    </div>
  );
};

export const VideoBar = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
      <img
        src={play}
        width={24}
        height={24}
        alt="Play"
        className="object-contain mr-3"
      />

      <div className="flex-1 bg-[#D9D9D9]">
        <div className="w-1/2 h-0.5 bg-color-1"></div>
      </div>
    </div>
  );
};
