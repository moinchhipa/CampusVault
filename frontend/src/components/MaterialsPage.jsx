import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../api/axios";
import MaterialCard from "./ui/MaterialCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const DEPARTMENT_NAMES = {
  BSCIT: "BSC.IT",
  BTECHIT: "BTECH.IT",
  BTECHCS: "BTECH.CS",
  BTECHAIDS: "BTECH.AI&DS",
  BCA: "BCA",
  MCA: "MCA",
};

const SEMESTERS = ["1", "2", "3", "4", "5", "6", "7", "8"];
const MATERIAL_TYPES = ["Notes", "Assignment", "Question Paper", "Lab Manual"];

const MaterialsPage = () => {
  const [searchParams] = useSearchParams();
  const departmentParam = searchParams.get("department");
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterSemester, setFilterSemester] = useState("all");
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    const fetchMaterials = async () => {
      setLoading(true);
      try {
        const params = {};
        if (departmentParam) params.department = departmentParam;
        const res = await API.get("/material/fetchapproved", { params });
        setMaterials(res.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, [departmentParam]);

  const filteredMaterials = useMemo(() => {
    return materials.filter((item) => {
      if (filterSemester !== "all" && String(item.semester) !== filterSemester)
        return false;
      if (filterType !== "all" && item.type !== filterType) return false;
      return true;
    });
  }, [materials, filterSemester, filterType]);

  const departmentLabel = departmentParam
    ? DEPARTMENT_NAMES[departmentParam] || departmentParam
    : null;

  return (
    <div className="relative min-h-screen bg-[#f8fafc] w-full min-w-0 overflow-x-hidden">
      {/* Background — match Home */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100 -z-10" />

      {/* Soft ambient blobs */}
      <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-indigo-400/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-[32rem] h-[32rem] bg-pink-400/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Content section — full width container, no extra right margin */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 box-border">
        <section
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20
                     rounded-2xl sm:rounded-3xl lg:rounded-4xl
                     bg-white
                     shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.08)]
                     box-border"
        >
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            {departmentLabel ? `${departmentLabel} Materials` : "All Materials"}
          </h1>
          <p className="text-slate-500 text-lg font-light max-w-xl">
            {departmentLabel
              ? "Filter by semester and material type below."
              : "Browse all approved materials. Use filters to narrow down."}
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-600 rounded-full" />
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 items-end">
          <div className="space-y-2 min-w-[140px]">
            <Label className="text-slate-600 font-medium">Semester</Label>
            <Select value={filterSemester} onValueChange={setFilterSemester}>
              <SelectTrigger
                className="w-full h-11 rounded-xl border-slate-200
                         focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:border-indigo-500"
              >
                <SelectValue placeholder="All semesters" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All semesters</SelectItem>
                {SEMESTERS.map((s) => (
                  <SelectItem key={s} value={s}>
                    Semester {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 min-w-[160px]">
            <Label className="text-slate-600 font-medium">Type</Label>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger
                className="w-full h-11 rounded-xl border-slate-200
                         focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:border-indigo-500"
              >
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                {MATERIAL_TYPES.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {loading ? (
          <div className="py-16 text-center">
            <p className="text-slate-500 text-lg">Loading materials...</p>
          </div>
        ) : filteredMaterials.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-slate-500 text-lg">No materials match your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((item) => (
              <MaterialCard key={item._id} material={item} />
            ))}
          </div>
        )}
        </section>
      </div>
    </div>
  );
};

export default MaterialsPage;