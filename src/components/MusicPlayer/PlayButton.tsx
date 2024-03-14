import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../Button";
import { Noise } from "../../lib/noise";
import { request } from "http";
import { render } from "react-dom";

interface Props {
  play: () => void;
  stop: () => void;
  isPlaying: boolean;
}

let w = 0;
let h = 0;
let nt = 0;

const PlayButton = ({ play, stop, isPlaying }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const requestRef = useRef<number | undefined>();
  const isPlayingRef = useRef<Boolean>(isPlaying);
  const noise = new Noise(Math.random());

  useEffect(() => {
    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext("2d");
      if (renderCtx) {
        setContext(renderCtx);
      }
      w = canvasRef.current.width;
      h = canvasRef.current.height;
    }
  }, [canvasRef]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  //   const render = () => {
  //     const playing = isPlayingRef.current;
  //     clear();
  //     if (playing) {
  //       drawWave(8);
  //     }
  //     requestRef.current = requestAnimationFrame(render);
  //   };

  function drawWave(n: number) {
    nt += 0.02;
    if (context == null) return;
    for (let i = 0; i < n; i++) {
      context.beginPath();
      context.strokeStyle = "hsla(" + (220 + 17 * i) + ",100%,50%,.5)";
      for (let x = 0; x < w; x++) {
        var y = noise.perlin2(x / 300, nt) * 150;
        context.lineTo(x, y * ((i + 1) / 4) + h / 2);
      }
      context.stroke();
      context.closePath();
    }
  }

  function clear() {
    if (context === null) return;
    context.fillStyle = "#110D18";
    context.fillRect(0, 0, w, h);
  }

  function handleClick() {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  }

  //   useEffect(() => {
  //     requestRef.current = requestAnimationFrame(render);
  //     return () => {
  //       if (requestRef.current) {
  //         cancelAnimationFrame(requestRef.current);
  //       }
  //     };
  //   }, []);

  return (
    <div className="hidden lg:flex items-center justify-center flex-row">
      <Button
        className="flex text-xs"
        onClick={handleClick}
        px={isPlaying ? "px-10" : "px-3 "}
      >
        {isPlaying ? "Pause" : "Play Theme Music"}
      </Button>
    </div>
  );
};

export default PlayButton;
