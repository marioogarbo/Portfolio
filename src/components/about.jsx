import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-[616px] max-w-[45rem]">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        About me
      </h2>
      <motion.div
        className="mb-28 leading-6 sm:mb-24 text-justify px-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <img
          src="public/garbo.jpg"
          // srcSet="/mario.jpg 1x, /mario@2x.jpg 2x"
          srcSet="/garbo.jpg 480w, /garbo.jpg 800w, /garbo.jpg 1200w"
          alt="Mario Garbo Portrait"
          className="border-4 border-[#ECDFCC] rounded-full shadow-xl mx-auto mb-8 h-64 w-64 sm:h-52 sm:w-52"
          // fetchPriority="true" // load this first //update not working
          loading="eager"
        />

        <h1 className="font-semibold mb-2">Hello!</h1>
        <p>
          Hey there! 👋 I'm Mario Jose Garbo, hailing from the beautiful hills
          of Antipolo City, Rizal, and I'm on the exciting journey of completing
          my BS Information Technology at ICCT College Cainta! 🎓 As a
          full-stack web developer, I don’t just design websites – I craft
          digital experiences and build powerful APIs that bring ideas to life.
          💻✨ I’m always geeking out over the latest tech, pushing boundaries,
          and leveling up my skills like it's a video game. 🚀 Whether you're
          curious about my work or have a cool project brewing, let’s chat and
          create something awesome together! Hit me up anytime – I’m just a
          click away. 😎👨‍💻
        </p>
        <h1 className="font-semibold mb-2 mt-8">My Goal!</h1>
        <p>
          I see myself as a full-stack web developer working with people who
          develop and innovate responsive and progressive web applications that
          could help the community.
        </p>
      </motion.div>
    </section>
  );
}
