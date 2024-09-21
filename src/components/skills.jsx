import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100, // Start off-screen
  },
  animate: (index) => ({
    opacity: 1,
    y: 0, // Fade in to its position
    transition: {
      delay: 0.1 * index, // Staggering delay based on index
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

const iconsVariants = (duration) => ({
  animate: {
    y: [10, -10], // Bouncing effect
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  const skills = [
    {
      icon: <AiFillHtml5 className="text-7xl text-[#E5532D]" />,
      duration: 1.2,
    },
    { icon: <IoLogoCss3 className="text-7xl text-[#2D53E5]" />, duration: 3 },
    {
      icon: <IoLogoJavascript className="text-7xl text-[#F7E025]" />,
      duration: 1.8,
    },
    {
      icon: <BiLogoTypescript className="text-7xl text-[#377CC8]" />,
      duration: 2.4,
    },
    {
      icon: <RiNextjsFill className="text-7xl text-[#080808]" />,
      duration: 3.0,
    },
    {
      icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
      duration: 1.5,
    },
    {
      icon: <RiTailwindCssFill className="text-7xl text-[#13B8D5]" />,
      duration: 2.2,
    },
    {
      icon: <FaNodeJs className="text-7xl text-[#87CF30]" />,
      duration: 2.8,
    },
    {
      icon: <FaGitAlt className="text-7xl text-[#F05539]" />,
      duration: 3.5,
    },
    {
      icon: <DiMongodb className="text-7xl text-[#13B8D5]" />,
      duration: 1.7,
    },
    {
      icon: <FaPython className="text-7xl text-[#FFD43B]" />,
      duration: 2.6,
    },
    {
      icon: <TbBrandFramerMotion className="text-7xl text-[#F308B1]" />,
      duration: 3.2,
    },
  ];

  return (
    <section className="mb-[148px] max-w-[53rem] text-center sm:mb-[252px]">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Technical Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }} // Only animate once on scroll into view
            className="rounded-2xl border-4 border-[#1E201E] bg-[#3C3D37] p-4"
          >
            <motion.div
              variants={iconsVariants(skill.duration)}
              initial={{ y: 0 }} // Initial position for smooth transition
              animate="animate"
            >
              {skill.icon}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
