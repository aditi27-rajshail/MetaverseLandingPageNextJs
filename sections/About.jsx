"use client";
"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.flexCenter} flex-col mx-auto`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the
        <span className="font-extrabold text-white">
          {" "}
          madness of the metaverse
        </span>
        of today, using only
        <span className="font-extrabold text-white"> VR</span> devices you can
        easily
        <span className="font-extrabold text-white">explore</span> the metaverse
        world you want, turn your dreams into reality. Let's explore the madness
        of the metaverse by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrowdown"
        className="opbject-contain h-[28px] w-[18px] mt-3"
      />
    </motion.div>
  </section>
);

export default About;
