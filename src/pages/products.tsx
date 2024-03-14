import React from "react";
import {motion} from "framer-motion";

import {useStaggerAnimation} from "@/lib/utils";

import {Header} from "@/components/header";
import {ProductModal} from "@/components/product-modal";
import {Button} from "@/components/ui/button";

import csImage from "@/assets/cs.png";
import fortniteImage from "@/assets/fortnite.png";
import lolImage from "@/assets/lol.png";
import soonImage from "@/assets/soon-1.png";

export function Products() {
  const [isOpenProductModal, setIsOpenProductModal] = React.useState(false);

  return (
    <>
      <ProductModal
        open={isOpenProductModal}
        onCancel={() => {
          setIsOpenProductModal(false);
        }}
      />

      <div className="min-h-screen scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-gray-100 h-32 overflow-y-scroll overflow-x-hidden">
        <Header />

        <main className="flex flex-col items-center mx-auto px-5">
          <div className="grid grid-cols-3 gap-8 p-4">
            <motion.div
              {...useStaggerAnimation({delay: 0.4, type: "fromLeft"})}>
              <img src={csImage} />
              <div className="flex items-center flex-col gap-8 p-4">
                <h3 className="text-2xl font-bold">CS-GO</h3>
                <Button
                  size="sm"
                  className="font-bold"
                  onClick={() => {
                    setIsOpenProductModal(true);
                  }}>
                  Comprar
                </Button>
              </div>
            </motion.div>

            <motion.div
              {...useStaggerAnimation({delay: 0.8, type: "fromLeft"})}>
              <img src={fortniteImage} />
              <div className="flex items-center flex-col gap-8 p-4">
                <h3 className="text-white text-2xl font-bold">Fortnite</h3>
                <Button
                  size="sm"
                  className="font-bold"
                  onClick={() => {
                    setIsOpenProductModal(true);
                  }}>
                  Comprar
                </Button>
              </div>
            </motion.div>

            <motion.div
              {...useStaggerAnimation({delay: 1.2, type: "fromLeft"})}>
              <img src={lolImage} />
              <div className="flex items-center flex-col gap-8 p-4">
                <h3 className="text-white text-2xl font-bold">
                  League of Legends
                </h3>
                <Button
                  size="sm"
                  className="font-bold"
                  onClick={() => {
                    setIsOpenProductModal(true);
                  }}>
                  Comprar
                </Button>
              </div>
            </motion.div>

            <motion.div
              {...useStaggerAnimation({delay: 1.6, type: "fromLeft"})}>
              <img src={soonImage} />
            </motion.div>

            <motion.div
              {...useStaggerAnimation({delay: 2.0, type: "fromLeft"})}>
              <img src={soonImage} />
            </motion.div>

            <motion.div
              {...useStaggerAnimation({delay: 2.4, type: "fromLeft"})}>
              <img src={soonImage} />
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}
