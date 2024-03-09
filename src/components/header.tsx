import {Link} from "react-router-dom";
import {motion} from "framer-motion";

import {Button} from "./ui/button";

import {useStaggerAnimation} from "@/lib/utils";

export function Header() {
  return (
    <motion.div
      {...useStaggerAnimation({delay: 0.2})}
      className="px-5 py-3 lg:px-15 lg:py-6 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-base lg:text-2xl font-bold">Eternity</h1>
      </Link>

      <Button className="sm:block hidden" variant="outline" size="xl">
        login
      </Button>
    </motion.div>
  );
}
