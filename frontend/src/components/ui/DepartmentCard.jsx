import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from 'react-router-dom';

const DepartmentCard = ({ name, description, route }) => {
    const navigate = useNavigate();
    return (
       <Card
  onClick={() => navigate(route)}
  className="group relative cursor-pointer 
             bg-white/80 backdrop-blur-md
             border border-slate-200
             rounded-2xl
             transition-all duration-500
             hover:-translate-y-2
             hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]"
>

  {/* Gradient Hover Border Effect */}
  <div className="absolute inset-0 rounded-2xl 
                  bg-linear-to-r from-indigo-400/0 via-indigo-400/20 to-purple-400/10 
                  opacity-0 group-hover:opacity-100 
                  transition duration-500 blur-xl -z-10">
  </div>
<div className="absolute inset-0 rounded-2xl 
                bg-linear-to-br from-indigo-200/35 to-transparent 
                opacity-60 pointer-events-none">
</div>
  <CardContent className="p-5 text-center relative z-10">

    <h3 className="text-2xl font-semibold text-slate-900 mb-4 
                   group-hover:text-indigo-600 
                   transition-colors duration-300">
      {name}
    </h3>

    <p className="text-slate-500 text-sm leading-relaxed">
      {description}
    </p>

  </CardContent>
</Card>
    );
};

export default DepartmentCard;