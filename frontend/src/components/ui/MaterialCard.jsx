import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MaterialCard = ({ material }) => {
  const navigate = useNavigate();

  const handlePreview = (e) => {
    e.stopPropagation();
    navigate(`/preview/${material._id}`);
  };

  return (
    <Card
      className="group relative
                 bg-white/80 backdrop-blur-md
                 border border-slate-200
                 rounded-2xl
                 transition-all duration-500
                 hover:-translate-y-2
                 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]"
    >
      {/* Gradient hover effect — match DepartmentCard */}
      <div
        className="absolute inset-0 rounded-2xl
                   bg-gradient-to-r from-indigo-400/0 via-indigo-400/20 to-purple-400/10
                   opacity-0 group-hover:opacity-100 transition duration-500 blur-xl -z-10"
        aria-hidden
      />
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-200/35 to-transparent opacity-60 pointer-events-none"
        aria-hidden
      />

      <CardHeader className="relative z-10 pb-2">
        <CardTitle className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
          {material.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 space-y-2 text-sm">
        <p className="text-slate-600">
          <span className="font-medium text-slate-700">Department:</span> {material.department}
        </p>
        <p className="text-slate-600">
          <span className="font-medium text-slate-700">Semester:</span> {material.semester}
        </p>
        <p className="text-slate-600">
          <span className="font-medium text-slate-700">Subject:</span> {material.subject}
        </p>
        <p className="text-slate-600">
          <span className="font-medium text-slate-700">Type:</span> {material.type}
        </p>

        <div className="pt-4">
          <Button
            onClick={handlePreview}
            variant="outline"
            className="w-full rounded-xl border-slate-200
                       hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700
                       focus-visible:ring-2 focus-visible:ring-indigo-500/50"
          >
            Preview / Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaterialCard;
