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
      className="
    group relative overflow-hidden
    rounded-2xl border border-slate-200/70
    bg-white/80 backdrop-blur-xl
    transition-all duration-500
    hover:-translate-y-1 hover:shadow-xl
  "
    >
      {/* BRAND RAIL — identity element */}
      <div
        className="
      absolute left-0 top-0 h-full w-1.5
      bg-linear-to-b from-indigo-500 to-purple-600
      opacity-70 group-hover:opacity-100
      transition duration-300
    "
      />

      <CardContent className="pl-6 pr-5 py-5 flex flex-col gap-4">
        {/* TOP ROW */}
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1">
            <h3
              className="
          text-lg font-semibold text-slate-900
          group-hover:text-indigo-600
          transition duration-300
          line-clamp-2"
            >
              {material.title}
            </h3>

            <p className="text-sm text-slate-500">{material.subject}</p>
          </div>

          {/* TYPE BADGE */}
          <span
            className="
        text-xs font-medium
        px-3 py-1 rounded-full
        bg-indigo-50 text-indigo-600
        border border-indigo-100
        shrink-0
      "
          >
            {material.type}
          </span>
        </div>

        {/* META ROW */}
        <div className="flex justify-between items-center text-sm text-slate-600">
          <span>
            {material.department} • Sem {material.semester}
          </span>

          <Button
            onClick={handlePreview}
            variant="outline"
            className="
          rounded-lg border-slate-200 cursor-pointer
          hover:bg-indigo-50 hover:border-indigo-300
          hover:text-indigo-700
          transition-all duration-300
          active:scale-[0.97]
        "
          >
            <lord-icon
              src="https://cdn.lordicon.com/dicvhxpz.json"
              trigger="hover"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>{" "}
            Preview
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaterialCard;
