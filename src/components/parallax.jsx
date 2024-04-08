import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Menu from "../componentMenu";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "1000%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <>
      <Menu />
      <div
        className="parallax"
        ref={ref}
        style={{ background: "linear-gradient(180deg, #111132, #0c0c1d)" }}
      >
        <motion.h3 style={{ y: yText }}>
          React Components For Make Your Work Simple And Creative
        </motion.h3>
        <motion.div className="mountains"></motion.div>
        <motion.div
          className="planets"
          style={{
            y: yBg,
            backgroundImage: `url(/src/assets/images/planets.png)`,
          }}
        ></motion.div>
        <motion.div style={{ x: yBg }} className="stars"></motion.div>
      </div>
    </>
  );
};

export default Parallax;
