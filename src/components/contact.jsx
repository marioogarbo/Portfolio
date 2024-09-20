import { motion } from "framer-motion";
import SubmitBtn from "./submitBtn";

export default function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Contact
      </h2>

      <motion.section
        className="mb-20 sm:mb-[88px] w-[min(100%,38rem)] text-center"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <p className="-mb-6">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:mro.garbo@gmail.com">
            mro.garbo@gmail.com
          </a>{" "}
          or through this form.
        </p>
        <form
          className="mt-10 flex flex-col my-3"
          // action={async (formData) => {
          //   const { data, error } = await sendEmail(formData);

          //   if (error) {
          //     toast.error(error);
          //     return;
          //   }

          //   toast.success("Email sent successfully!");
          // }}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack transition-all "
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 rounded-lg my-3 borderBlack p-4 transition-all "
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </motion.section>
    </section>
  );
}
