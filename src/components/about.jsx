import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-44"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        About me
      </h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae id
        in recusandae fuga eveniet rerum natus, aperiam, repellat exercitationem
        est reiciendis officiis! Porro assumenda eaque iure non voluptas nostrum
        repellat.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Repudiandae id in recusandae fuga eveniet rerum natus, aperiam, repellat
        exercitationem est reiciendis officiis! Porro assumenda eaque iure non
        voluptas nostrum repellat. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Repudiandae id in recusandae fuga eveniet rerum natus,
        aperiam, repellat exercitationem est reiciendis officiis! Porro
        assumenda eaque iure non voluptas nostrum repellat.
      </p>
    </motion.section>
  );
}
