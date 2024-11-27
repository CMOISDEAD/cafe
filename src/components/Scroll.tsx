import { motion, useScroll, useSpring } from "motion/react";

export const Scroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="right-0 bottom-0 left-0 z-50 fixed bg-[#5d221a] h-2"
      style={{ scaleX }}
    />
  );
};
