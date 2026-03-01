import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import DepartmentCard from "./ui/DepartmentCard";


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
    description: "Bachelor of Technology in Artificial Intelligence and Data Science",
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
]
 
  return (
  <div className="relative bg-[#f8fafc] w-full min-w-0 overflow-x-hidden">

    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100 -z-10" />

    {/* HERO SECTION (Sticky) */}
    <section className="sticky top-0 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 sm:pt-20 pb-8 overflow-hidden">

      {/* Soft ambient blobs */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-indigo-400/20 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/3 -right-40 w-125 h-125 bg-pink-400/20 rounded-full blur-[120px]"></div>

      {/* Badge */}
      <div className="mb-6 px-4 py-2 rounded-full 
                      bg-indigo-50 text-indigo-600 text-sm font-medium relative z-10">
        📂  Smart Academic Platform
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight
                     bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900
                     bg-clip-text text-transparent mb-4 sm:mb-6 relative z-10">
        CampusVault
      </h1>

      {/* Subtext */}
      <p className="text-base sm:text-lg text-slate-600 max-w-2xl mb-6 sm:mb-8 leading-relaxed relative z-10 px-2">
        A centralized ecosystem for managing semester-wise academic 
        resources with clarity and efficiency.
      </p>

      {/* CTA */}
      <Button
        size="lg"
        onClick={() => navigate("/upload")}
        className="px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg rounded-2xl cursor-pointer
                   bg-gradient-to-r from-indigo-600 to-purple-600 
                   hover:from-indigo-700 hover:to-purple-700
                   text-white shadow-lg shadow-indigo-500/20
                   transition-all duration-300 hover:scale-105 relative z-10"
      >
        Upload Document
      </Button>
    </section>


    {/* DEPARTMENT SECTION (Covers Hero on Scroll) */}
    <section
      className="relative z-20 -mt-24 sm:-mt-32
                 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 py-12 sm:py-16 lg:pb-20 lg:pt-20
                 rounded-2xl sm:rounded-3xl lg:rounded-4xl
                 bg-white
                 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.08)]
                 box-border"
    >

      <div className="mb-8 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-4">
          Explore Departments
        </h2>
        <p className="text-slate-500 text-base sm:text-lg font-light max-w-xl">
          Discover resources organized by academic streams.
        </p>
        <div className="mt-6 h-1 w-12 bg-blue-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
