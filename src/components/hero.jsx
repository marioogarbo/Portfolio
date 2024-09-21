import { motion } from "framer-motion";
// import { BsArrowRight } from "react-icons/bs";
import { MdCallMade } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="mb-[10rem] mt-11 max-w-[50rem] text-center sm:mb-[162px]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <img
              src="public/mario.jpg"
              // srcSet="/mario.jpg 1x, /mario@2x.jpg 2x"
              srcSet="/mario.jpg 480w, /mario.jpg 800w, /mario.jpg 1200w"
              alt="Mario Garbo Portrait"
              width={152}
              height={152}
              className="rounded-full border-[#697565] border-4 shadow-xl"
              fetchPriority="high" // load this first //update not working
              loading="eager"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-2 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-4 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Mario.</span> a{" "}
        <span className="font-bold text-[#FABC3F] capitalize">full-stack </span>
        web developer passionate about creating{" "}
        <span className="font-bold">web</span> application. I enjoy building{" "}
        <span className="italic">dynamic sites and applications</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex mb-4 sm:gap-4">
          <Link
            to={"./contact"}
            href="#contact"
            className="group bg-[#697565] text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-[#ECDFCC] hover:text-[#1E201E] active:scale-105 transition"
            // onClick={() => {
            //   setActiveSection("Contact");
            //   setTimeOfLastClick(Date.now());
            // }}
          >
            Contact me{" "}
            <MdCallMade className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="https://drive.google.com/file/d/1wwQtKaBvRJXc9vh5pd5HJ0VJzBsdQuz5/view?usp=drive_link"
            target="_blank"
          >
            Resume{" "}
            <HiDownload className="opacity-60 group-hover:translate-x-1 transition" />
          </a>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <a
            className="flex items-center text-white text-3xl rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
            href="https://github.com/marioogarbo"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            className="flex items-center text-white text-3xl rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer "
            href="https://www.linkedin.com/in/mariojosegarbo/ "
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="flex items-center text-white text-3xl rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer "
            href="https://www.facebook.com/mariojosegarbo"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
