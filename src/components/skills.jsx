import { motion } from "framer-motion";
import { skillsData } from "../data/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    };
  },
};

export default function Skills() {
  return (
    <section className="mb-[22rem] max-w-[53rem] text-center sm:mb-[22rem]">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Technical Skills
      </h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-[#ECDFCC] borderBlack rounded-xl px-5 py-3"
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            variants={fadeInAnimationVariants}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
