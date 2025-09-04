import React, { useState, useRef } from "react";
import {
  FaCopy,
  FaFile,
  FaFilePdf,
  FaFileWord,
  FaFileImage,
  FaTimes,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";

import Founder from '../assets/founder.jpeg';


export default function Form() {
  const initialFormState = {
    name: "",
    email: "",
    project: "",
    source: "",
    file: null,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [filePreview, setFilePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getFileIcon = (fileType) => {
    if (fileType.startsWith("image/")) return FaFileImage;
    if (fileType === "application/pdf") return FaFilePdf;
    if (fileType.includes("word")) return FaFileWord;
    return FaFile;
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        file: file,
      }));

      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview({
            type: "image",
            url: reader.result,
            name: file.name,
            size: (file.size / 1024 / 1024).toFixed(2), // Convert to MB
          });
        };
        reader.readAsDataURL(file);
      } else {
        // For non-image files, just show the file info
        const FileIcon = getFileIcon(file.type);
        setFilePreview({
          type: "document",
          icon: FileIcon,
          name: file.name,
          size: (file.size / 1024 / 1024).toFixed(2), // Convert to MB
        });
      }
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({
      ...prev,
      file: null,
    }));
    setFilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        console.log("Email copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy email:", err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const submissionData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          submissionData.append(key, value);
        }
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you! We will get back to you soon.",
      });
      setFormData(initialFormState);
      setFilePreview(null);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const teamMembers = [
    {
      name: "Rakshit Tiwari",
      role: "Founder",
      title: "Project Talk",
      email: "director@innogative.in",
      showIcons: true,
      image: Founder,
    }
  ];

  return (
    <div className="bg-zinc-900 p-8 text-white min-h-screen pt-24">
      <div className="max-w-7xl mx-auto md:mt-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className="flex-1">
            <p className="text-sm mb-4">Contact us</p>
            <h1 className="text-[#e2ff6f] text-5xl font-semibold mb-12">
              Ready to bring
              <br />
              your idea to life?
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="bg-transparent text-white border-b border-zinc-700 pb-2 outline-none focus:border-zinc-500 transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  className="bg-transparent text-white border-b border-zinc-700 pb-2 outline-none focus:border-zinc-500 transition-colors"
                  required
                />
              </div>

              <div className="relative">
                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project"
                  className="w-full leading-tight bg-transparent border-b border-zinc-700 outline-none focus:border-zinc-500 transition-colors resize-none"
                  maxLength={1000}
                  required
                />
                <div className="flex justify-between text-sm text-zinc-500 mt-1">
                  <label className="flex items-center cursor-pointer text-zinc-500 hover:text-zinc-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                    </svg>
                    <span>Attach file</span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*,.pdf,.doc,.docx,.txt"
                    />
                  </label>
                  <span>{formData.project.length}/1000</span>
                </div>

                {/* File Preview Section */}
                {filePreview && (
                  <div className="mt-4 p-4 border border-zinc-700 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {filePreview.type === "image" ? (
                          <div className="w-16 h-16 rounded overflow-hidden">
                            <img
                              src={filePreview.url}
                              alt="Preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <filePreview.icon className="w-8 h-8 text-zinc-400" />
                        )}
                        <div>
                          <p className="text-sm font-medium text-zinc-300">
                            {filePreview.name}
                          </p>
                          <p className="text-xs text-zinc-500">
                            {filePreview.size} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-1 hover:bg-zinc-700 rounded-full transition-colors"
                      >
                        <FaTimes className="w-4 h-4 text-zinc-400" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-white text-black hover:bg-zinc-200 transition-colors flex items-center disabled:bg-zinc-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
                <p className="text-zinc-500 text-sm">
                  By clicking this button you accept Terms of Service and
                  Privacy Policy
                </p>
              </div>

              {submitStatus.message && (
                <div
                  className={`p-4 rounded ${
                    submitStatus.type === "success"
                      ? "bg-green-800/50 text-green-200"
                      : "bg-red-800/50 text-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Team Members Cards Section */}
          <div className="w-full lg:w-96 flex flex-col gap-6 lg:mt-36">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-700 rounded-full overflow-hidden">
                    {member.image && (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-medium">
                      {member.title} {member.name && `- ${member.name}`}
                    </h3>
                    {member.role && (
                      <p className="text-zinc-400">{member.role}</p>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <button
                    type="button"
                    className="flex-1 sm:flex-none flex gap-2 items-center justify-center px-4 py-2 border border-zinc-700 rounded-md text-zinc-300 hover:bg-zinc-800 transition-colors text-sm"
                    onClick={() => handleCopyEmail(member.email)}
                  >
                    <FaCopy className="w-4 h-4" />
                    <span className="truncate">{member.email}</span>
                  </button>
                  {member.showIcons && (
                    <div className="flex gap-2 justify-center sm:justify-start">
                      <button
                        type="button"
                        className="sm:flex-none p-2 border border-zinc-700 rounded-md text-zinc-300 hover:bg-zinc-800 transition-colors"
                        onClick={() =>
                          window.open("https://wa.me/+917024298174/", "_blank")
                        }
                      >
                        <FaWhatsapp className="w-6 h-6" />
                      </button>
                      <button
                        type="button"
                        className="sm:flex-none p-2 border border-zinc-700 rounded-md text-zinc-300 hover:bg-zinc-800 transition-colors"
                        onClick={() => window.open("mailto:director@innogative.in", "_blank")}
                      >
                        <FaEnvelope className="w-6 h-6" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}