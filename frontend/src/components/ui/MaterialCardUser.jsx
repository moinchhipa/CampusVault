import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import API from "@/api/axios";

const MaterialCardUser = ({ material, setMaterials }) => {
  const navigate = useNavigate();

  const handlePreview = (e) => {
    e.stopPropagation();
    navigate(`/preview/${material._id}`);
  };

  const onDelete = async (id) => {
    try {
      await API.delete(`/user/delete/${id}`);
      toast.success("Material deleted!");
      setMaterials((prev) => prev.filter((m) => m._id !== id));
    } catch (e) {
      toast.error("Failed to delete material");
    }
  };

  const statusColor =
    material.status === "approved"
      ? "bg-emerald-50 text-emerald-600 border-emerald-100"
      : material.status === "rejected"
        ? "bg-red-50 text-red-500 border-red-100"
        : "bg-amber-50 text-amber-600 border-amber-100";

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
      {/* BRAND RAIL */}
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
                line-clamp-2
              "
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

        {/* DETAILS ROW */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
          <span>
            {material.department} • Sem {material.semester}
          </span>
          <span className="text-slate-300">|</span>
          <span>
            {new Date(material.createdAt).toLocaleDateString("en-GB")}
          </span>
        </div>

        {/* STATUS BADGE */}
        <div>
          <span
            className={`
              text-xs font-medium
              px-3 py-1 rounded-full border
              capitalize ${statusColor}
            `}
          >
            {material.status}
          </span>
        </div>

        {/* ACTION ROW */}
        <div className="flex gap-2 pt-1">
          <Button
            onClick={handlePreview}
            variant="outline"
            className="
              flex-1 rounded-lg border-slate-200 cursor-pointer
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

          <Button
            onClick={() => onDelete(material._id)}
            variant="outline"
            className="
              flex-1 rounded-lg border-red-100 cursor-pointer
              text-red-500
              hover:bg-red-50 hover:border-red-200 hover:text-red-600
              transition-all duration-300
              active:scale-[0.97]
            "
          >
            <i className="fa-solid fa-trash mr-2"></i> Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaterialCardUser;
