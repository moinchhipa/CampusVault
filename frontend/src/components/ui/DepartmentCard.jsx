import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from 'react-router-dom';

const DepartmentCard = ({ name, description, route }) => {
    const navigate = useNavigate();
    return (
       <Card
  onClick={() => navigate(route)}
  className="group relative cursor-pointer overflow-hidden
             bg-white/80 backdrop-blur-md
             border 
             rounded-2xl hover:rounded-[35px]
             transition-all duration-500
             hover:-translate-y-2 
             hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.18)]
             active:scale-95"
>

  {/* Soft Top Shine */}
  <div className="absolute top-0 inset-x-0 h-16
                  bg-linear-to-b from-white/80 to-transparent
                  pointer-events-none"/>

  {/* Animated Gradient Glow Border */}
  <div className="absolute inset-0 rounded-2xl
                  bg-linear-to-r 
                  from-indigo-300/50 via-purple-300/30 to-indigo-300/30
                  opacity-0 group-hover:opacity-100
                  blur-2xl transition-all duration-700 -z-10">
  </div>

  {/* Subtle Background Gradient */}
  <div className="absolute inset-0 rounded-2xl
                  bg-linear-to-br from-indigo-50/60 to-transparent
                  pointer-events-none">
  </div>

  <CardContent className="py-1 px-4 text-center relative z-10
                         transition-transform duration-500
                         group-hover:-translate-y-3">

    {/* Icon Area */}
   
     <div className='flex items-center gap-5 ml-3 mb-3'>
 <lord-icon
  src="https://cdn.lordicon.com/rrbmabsx.json"
  trigger="hover"
  colors="primary:#4f46e5"
  style={{ width: "35px", height: "35px", opacity:"0.7" }}
  
></lord-icon>
    

    {/* Title */}
    <h3 className="text-xl font-semibold text-slate-800 mb-3
                   tracking-tight
                   group-hover:text-indigo-600
                   transition-colors duration-500">
      {name}
    </h3>

     </div>
     
    {/* Description */}
    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
      {description}
    </p>

    
  </CardContent>

</Card>
    );
};

export default DepartmentCard;