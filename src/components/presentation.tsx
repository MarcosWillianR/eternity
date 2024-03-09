import {type ComponentProps} from "react";
import {motion} from "framer-motion";

import {Button} from "./ui/button";

import {useStaggerAnimation} from "@/lib/utils";

type ActionProps = ComponentProps<"button">;

export function Action({children, onClick}: ActionProps) {
  return (
    <motion.div {...useStaggerAnimation({delay: 1.3})}>
      <Button size="xl" className="font-bold relative z-10" onClick={onClick}>
        {children}
      </Button>
    </motion.div>
  );
}

interface TitleProps extends ComponentProps<"h1"> {
  highlighted?: string;
}

export function Title(props: TitleProps) {
  return (
    <div className="mb-8 relative z-10">
      <motion.h1
        {...useStaggerAnimation({delay: 0.7})}
        className="break-words text-5xl sm:text-8xl font-bold mt-2 sm:mt-4 block">
        {props.children}
      </motion.h1>
    </div>
  );
}

type LabelProps = ComponentProps<"span">;

export function Label(props: LabelProps) {
  return (
    <motion.p
      {...useStaggerAnimation({delay: 0.4})}
      className="text-lg sm:text-2xl font-medium relative z-10">
      {props.children}
    </motion.p>
  );
}

type RootProps = ComponentProps<"div">;

export function Root(props: RootProps) {
  return (
    <motion.div className="mt-10 mb-5 sm:mt-24 sm:mb-18 text-left sm:text-center relative">
      {props.children}
    </motion.div>
  );
}
