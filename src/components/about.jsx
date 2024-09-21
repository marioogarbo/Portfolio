import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="sm:min-h-[532px] min-h-[616px] max-w-[45rem]">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        About me
      </h2>
      <motion.div
        className="mb-28 leading-6 sm:mb-44 text-justify px-6 sm:"
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
          I'm Mario Jose Garbo from Antipolo City, Rizal. I am a graduating
          student taking up BS Information Technology at ICCT College Cainta. As
          a full stack web developer, I specialize in designing websites and
          creating APIs. I'm always passionate about exploring new technologies
          and constantly improving my skills in the field. If you're interested
          in learning more about my work or have a project in mind, I'd be happy
          to discuss it with you. Feel free to reach out to me anytime.
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
