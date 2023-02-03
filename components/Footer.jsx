"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import { socials } from "../constants";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div
      className={`${styles.innerWidth} mx-auto justify-between flex-wrap gap-5`}
    >
      <div className="flex items-center justify-between flex-wrap gap-8">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse{" "}
        </h4>
        <button
          type="button"
          className="flex items-center py-4 px-6 h-fit bg-[#25618b] rounded-[32px] gap-[12px]"
        >
          <img
            src="/headset.svg"
            alt="heatset"
            className="object-contain w-[24px] h-[24px]"
          />
          <p className="font-normal text-[16px] text-white">ENTER METAVERSE</p>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="bg-white opacity-10 mb-[50px] h-[2px] sm:mt-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-bold text-[24px] text-white">METAVERSUS</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                src={social.url}
                key={social.name}
                alt={social.name}
                className="object-contain cursor-pointer w-[24px] h-[24px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
