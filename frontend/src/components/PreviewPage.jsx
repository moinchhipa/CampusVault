import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axios";

const PreviewPage = () => {
  const { id } = useParams();
  const [material, setMaterial] = useState("");

  useEffect(() => {
    const fetchMaterial = async () => {
      const res = await API.get(`/material/fetchbyid/${id}`);
      setMaterial(res.data.fileUrl);
    };
    fetchMaterial();
  }, [id]);

  return (
    <div className="w-full min-w-0 min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] overflow-x-hidden">
      <iframe
        src={material}
        className="w-full h-full min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] border-0"
        title="PDF Preview"
      />
    </div>
  );
};

export default PreviewPage;
