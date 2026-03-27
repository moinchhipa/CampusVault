import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DepartmentCard from "./ui/DepartmentCard";
import { motion } from "framer-motion";
function Home() {
  const navigate = useNavigate();

  const Departments = [
    {
      name: "BSC.IT",
      description: "Bachelor of Science in Information Technology",
      route: "/show?department=BSCIT",
    },
    {
      name: "BTECH.IT",
      description: "Bachelor of Technology in Information Technology",
      route: "/show?department=BTECHIT",
    },
    {
      name: "BTECH.CS",
      description: "Bachelor of Technology in Computer Science",
      route: "/show?department=BTECHCS",
    },
    {
      name: "BTECH.AIDS",
      description:
        "Bachelor of Technology in Artificial Intelligence and Data Science",
      route: "/show?department=BTECHAIDS",
    },
    {
      name: "BCA",
      description: "Bachelor of Computer Applications",
      route: "/show?department=BCA",
    },
    {
      name: "MCA",
      description: "Master of Computer Applications",
      route: "/show?department=MCA",
    },
  ];

  return (
  <div className="relative bg-[#f8fafc]">
    {/* Background */}
    <div className="absolute inset-0 bg-linear-to-br from-white via-slate-50 to-slate-100 -z-10 "></div>

    {/* HERO SECTION */}
    <section className="sticky top-0 min-h-screen flex flex-col pt-20 items-center text-center px-6 sm:px-8 overflow-hidden ">

      {/* ICONS */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none hidden sm:block">
        
        <lord-icon
          src="https://cdn.lordicon.com/wloilxuq.json"
          trigger="loop"
          delay="1500"
          colors="primary:#6366f1"
          style={{ width: "85px", height: "85px", position: "absolute", top: "18%", left: "6%", opacity: 0.24 }}
        ></lord-icon>

        <lord-icon
          src="https://cdn.lordicon.com/puvaffet.json"
          trigger="loop"
          delay="2200"
          colors="primary:#8b5cf6"
          style={{ width: "70px", height: "70px", position: "absolute", bottom: "30%", left: "12%", opacity: 0.22 }}
        ></lord-icon>

        <lord-icon
          src="https://cdn.lordicon.com/jeuxydnh.json"
          trigger="loop"
          delay="1800"
          colors="primary:#8b5cf6"
          style={{ width: "70px", height: "70px", position: "absolute", top: "20%", right: "8%", opacity: 0.26 }}
        ></lord-icon>

        <lord-icon
          src="https://cdn.lordicon.com/qhgmphtg.json"
          trigger="loop"
          delay="2500"
          colors="primary:#6366f1"
          style={{ width: "75px", height: "75px", position: "absolute", bottom: "32%", right: "14%", opacity: 0.22 }}
        ></lord-icon>
      </div>

      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-linear-to-b from-transparent to-white pointer-events-none" />

      {/* Ambient blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-pink-400/20 rounded-full blur-[120px]" />

      {/* Animated Content Wrapper */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="relative z-10 flex flex-col items-center"
      >

        {/* Badge */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-5 sm:mb-6 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-xs sm:text-sm font-medium"
        >
          📂 Smart Academic Platform
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 sm:mb-6"
        >
          <span className="text-slate-900">Campus</span>
          <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Vault
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg text-slate-600 max-w-md sm:max-w-xl md:max-w-2xl mb-6 sm:mb-8 leading-relaxed"
        >
          A centralized ecosystem for managing semester-wise academic resources
          with clarity and efficiency.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full sm:w-auto"
        >
           <Button
    size="lg"
    onClick={() => navigate("/upload")}
    className="relative w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 
               text-base sm:text-lg rounded-2xl
               bg-linear-to-r from-indigo-600 via-indigo-500 to-purple-600
               text-white font-medium
               shadow-[0_15px_40px_-12px_rgba(79,70,229,0.45)]
               hover:shadow-[0_20px_45px_-15px_rgba(79,70,229,0.6)]
               transition-all duration-500
               hover:-translate-y-1
               active:scale-95
               overflow-hidden group cursor-pointer"
  >

    {/* Shine Animation */}
    <span className="absolute inset-0 bg-white/20 rounded-[10px]
                     -translate-x-full group-hover:translate-x-full
                     transition-transform duration-500"/>

    <span className="relative flex items-center gap-3">
      <lord-icon
        src="https://cdn.lordicon.com/vjgknpfx.json"
        trigger="hover"
        colors="primary:#ffffff,secondary:#e5d1fa"
        style={{ width: "26px", height: "26px" }}
      />
      Upload Document
    </span>
  </Button>
  <Button
  size="lg"
  variant="outline"
  onClick={() => {
    document
      .getElementById("departments")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="relative w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6
             text-base sm:text-lg rounded-2xl
             border border-slate-200
             bg-white/70 backdrop-blur-md
             hover:bg-white
             transition-all duration-500
             hover:-translate-y-1
             hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.12)]
             active:scale-95
             group cursor-pointer"
>

  <span className="flex items-center gap-3 text-slate-700 font-medium
                   group-hover:text-indigo-600
                   transition-colors duration-300">

    <lord-icon
      src="https://cdn.lordicon.com/wjyqkiew.json"
      trigger="hover"
      colors="primary:#4f46e5"
      style={{ width: "22px", height: "22px" }}
    />

    Browse Resources
  </span>

  {/* Soft Inner Glow Hover */}
  <span className="absolute inset-0 rounded-2xl
                   bg-linear-to-r from-indigo-500/10 to-purple-500/10
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-500 pointer-events-none"/>
</Button>
        </motion.div>

      </motion.div>
    </section>

    {/* DEPARTMENT SECTION */}
    <section
      id="departments"
      className="relative z-20 -mt-32 max-w-7xl mx-auto px-4 sm:px-14 pb-20 pt-20 rounded-[60px] bg-white shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.08)] mb-10"
    >
      <div className="mb-14">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Explore Departments
        </h2>
        <p className="text-slate-500 text-lg font-light max-w-xl">
          Discover resources organized by academic streams.
        </p>
        <div className="mt-6 h-1 w-12 bg-blue-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Departments.map((dept, index) => (
          <DepartmentCard
            key={index}
            name={dept.name}
            description={dept.description}
            route={dept.route}
          />
        ))}
      </div>
    </section>
  </div>
);
}

export default Home;
