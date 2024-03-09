import React from "react";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

import {Header} from "@/components/header";
import * as Presentation from "@/components/presentation";

import csImage from "@/assets/cs.png";
import fortniteImage from "@/assets/fortnite.png";
import lolImage from "@/assets/lol.png";

import {useStaggerAnimation} from "@/lib/utils";

export function Home() {
  const navigate = useNavigate();

  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  }, []);

  return (
    <>
      {showContent && (
        <div className="min-h-screen scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-gray-100 h-32 overflow-y-hidden overflow-x-hidden">
          <Header />

          <main className="max-w-5.5xl flex mx-auto px-5 mt-20">
            <Presentation.Root>
              <div className="absolute inset-0 flex space-x-2 justify-center items-center gap-8 mx-8">
                <motion.img
                  {...useStaggerAnimation({delay: 0.7, type: "fromLeft"})}
                  src={csImage}
                  alt="Counter Strike"
                  className="w-1/3 h-auto opacity-75 bottom-1/3 relative"
                />
                <motion.img
                  {...useStaggerAnimation({delay: 1.4})}
                  src={fortniteImage}
                  alt="Fortnite"
                  className="w-1/3 h-auto opacity-75 top-1/3 relative"
                />
                <motion.img
                  {...useStaggerAnimation({delay: 2.1, type: "fromRight"})}
                  src={lolImage}
                  alt="League of Legends"
                  className="w-1/3 h-auto opacity-75 bottom-1/3 relative"
                />
              </div>

              <Presentation.Label>Feito para os melhores</Presentation.Label>

              <Presentation.Title>
                Cheats indetectáveis de alta qualidade
              </Presentation.Title>

              <Presentation.Action
                onClick={() => {
                  navigate("products");
                }}>
                Ver cheats
              </Presentation.Action>
            </Presentation.Root>
          </main>
        </div>
      )}
    </>
  );
}
