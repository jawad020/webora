import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import Heading from "./Heading";


const teamMembers = [
  {
    name: "Team Member 1",
    role: "Role / Position",
    img: "https://ui-avatars.com/api/?name=Team+Member+1&background=1a3a8f&color=fff&size=400",
    social: [
      { icon: FaLinkedin, link: "#" },
      { icon: FaTwitter, link: "#" },
      { icon: FaGithub, link: "#" },
      { icon: FaInstagram, link: "#" },
    ],
  },
  {
    name: "Team Member 2",
    role: "Role / Position",
    img: "https://ui-avatars.com/api/?name=Team+Member+2&background=1a3a8f&color=fff&size=400",
    social: [
      { icon: FaLinkedin, link: "#" },
      { icon: FaTwitter, link: "#" },
      { icon: FaGithub, link: "#" },
      { icon: FaInstagram, link: "#" },
    ],
  },
  {
    name: "Team Member 3",
    role: "Role / Position",
    img: "https://ui-avatars.com/api/?name=Team+Member+3&background=1a3a8f&color=fff&size=400",
    social: [
      { icon: FaLinkedin, link: "#" },
      { icon: FaTwitter, link: "#" },
      { icon: FaGithub, link: "#" },
      { icon: FaInstagram, link: "#" },
    ],
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TeamSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-blue-900 py-16 px-6 md:px-16 text-white"
    >
      <Heading
        level={1}
        variant="hero"
        tag="Team Member"
        firstText="Meet Our"
        secondText="Professionals Team"
        secondTextClassName="text-brand"
        className="text-white"
        tagClassname="text-textWhite"
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {teamMembers.map((member, idx) => {
          const MotionDiv = motion.div;

          return (
            <MotionDiv
              key={idx}
              variants={cardVariants}
              className="w-full max-w-[350px] group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={member.img || "/images/default.jpg"}
                  alt={member.name}
                  className="w-full h-[420px] sm:h-[440px] object-cover transition duration-500 group-hover:scale-105"
                />

                {member.social.length > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex gap-4"
                    >
                      {member.social.map(({ icon: Icon, link }, i) => (
                        <a
                          key={i}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-pink-400 text-black p-2 rounded-full cursor-pointer hover:scale-110 transition"
                        >
                          <Icon size={16} />
                        </a>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-center"
              >
                <p className="font-semibold text-lg">{member.name}</p>
                <p className="text-sm text-gray-400">[ {member.role} ]</p>
              </motion.div>
            </MotionDiv>
          );
        })}
      </div>
    </motion.section>
  );
}
