import React, { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import toast from "react-hot-toast";
const UploadForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    department: "",
    semester: "",
    subject: "",
    materialType: "",
    file: null,
  });
  const handleChange = (e) => {
    if (e.target.name === "file") {
      const file = e.target.files[0];

      if (!file) return;

      if (file.type !== "application/pdf") {
        toast.error("only PDF Files allowed");
        return;
      }

      if (file.size > 15 * 1024 * 1024) {
        toast.error("Max file size is 15MB");
        return;
      }

      setForm({ ...form, file });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.department ||
      !form.semester ||
      !form.subject ||
      !form.materialType ||
      !form.file
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("department", form.department);
      formData.append("semester", form.semester);
      formData.append("subject", form.subject);
      formData.append("type", form.materialType);
      formData.append("file", form.file);
      console.log("Request is sending");

      const res = await API.post("/material/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response:", res.data);

      toast.success("PDF uploaded successfully");

      // Reset form
      setForm({
        title: "",
        department: "",
        semester: "",
        subject: "",
        materialType: "",
        file: null,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Upload failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 p-6">
      <Card className="w-full max-w-2xl shadow-xl relative">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="absolute top-4 left-4"
          onClick={() => navigate(-1)}
        >
          ← Back
        </Button>

        <CardHeader>
          <CardTitle className="text-3xl text-center">
            Upload Document
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label>Title of PDF</Label>
              <Input
                type="text"
                name="title"
                value={form.title}
                placeholder="Enter title"
                onChange={handleChange}
              />
            </div>

            {/* Dropdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Department */}
              <div className="space-y-2">
                <Label>Department</Label>
                <Select
                value={form.department}
                  onValueChange={(value) =>
                    handleChange({ target: { name: "department", value } })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BSCIT">Bsc. IT</SelectItem>
                    <SelectItem value="BTECHIT">Btech. IT</SelectItem>
                    <SelectItem value="BTECHCS">Btech. CS</SelectItem>
                    <SelectItem value="BTECHAIDS">Btech. AI&DS</SelectItem>
                    <SelectItem value="BCA">BCA</SelectItem>
                    <SelectItem value="MCA">MCA</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Semester */}
              <div className="space-y-2">
                <Label>Semester</Label>
                <Select
                value={form.semester}
                  onValueChange={(value) =>
                    handleChange({ target: { name: "semester", value } })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Sem 1</SelectItem>
                    <SelectItem value="2">Sem 2</SelectItem>
                    <SelectItem value="3">Sem 3</SelectItem>
                    <SelectItem value="4">Sem 4</SelectItem>
                    <SelectItem value="5">Sem 5</SelectItem>
                    <SelectItem value="6">Sem 6</SelectItem>
                    <SelectItem value="7">Sem 7</SelectItem>
                    <SelectItem value="8">Sem 8</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label>Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  value={form.subject}
                  placeholder="Enter Subject"
                  onChange={handleChange}
                />
              </div>

              {/* Material Type */}
              <div className="space-y-2">
                <Label>Material Type</Label>
                <Select
                value={form.materialType}
                  onValueChange={(value) =>
                    handleChange({ target: { name: "materialType", value } })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Material Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Notes">Notes</SelectItem>
                    <SelectItem value="Assignment">Assignment</SelectItem>
                    <SelectItem value="Question Paper">
                      Question Paper
                    </SelectItem>
                    <SelectItem value="Lab Manual">Lab Manual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label>Upload PDF (Max 15MB)</Label>
              <Input
                type="file"
                name="file"
                accept="application/pdf"
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full py-6 text-base">
              Upload Document
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadForm;
