import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    source: "",
    file: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      file: file,
    }));
  };

  const handleBudgetSelect = (budget) => {
    setFormData((prev) => ({
      ...prev,
      budget: prev.budget === budget ? "" : budget,
    }));
  };

  const handleSourceSelect = (source) => {
    setFormData((prev) => ({
      ...prev,
      source: prev.source === source ? "" : source,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      // Create FormData object to handle file upload
      const submissionData = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "file" && formData[key]) {
          submissionData.append(key, formData[key]);
        } else {
          submissionData.append(key, formData[key]);
        }
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Submission failed");

      setSubmitStatus({
        type: "success",
        message: "Thank you! We will get back to you soon.",
      });
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        project: "",
        budget: "",
        source: "",
        file: null,
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-zinc-900 p-8 text-white max-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className="flex-1">
            <p className="text-sm mb-4">Contact us</p>
            <h1 className="text-[#e2ff6f] text-5xl font-semibold mb-12">
              Ready to bring
              <br />
              your idea to life?
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="bg-transparent border-b border-zinc-700 pb-2 outline-none focus:border-zinc-500 transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  className="bg-transparent border-b border-zinc-700 pb-2 outline-none focus:border-zinc-500 transition-colors"
                  required
                />
              </div>

              <div className="mb-6">
                <div className="relative">
                  <textarea
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project"
                    className="w-full bg-transparent border-b border-zinc-700 pb-2 outline-none focus:border-zinc-500 transition-colors resize-none"
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
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <span>{formData.project.length}/1000</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-zinc-300">
                  What is your budget for this project?
                </h3>
                <div className="flex flex-wrap gap-4">
                  <input type="text" 
                    className="pl-5 bg-transparent border border-zinc-700 rounded-full  h-10"
                    placeholder="₹ Enter your budget"
                  />
                </div>
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
                  className={`mt-4 p-4 rounded ${
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
            {[
              {
                name: "Rakshit Tiwari",
                role: "",
                title: "Project Talk",
                email: "director@innogative.in",
                showIcons: true,
              },
              {
                name: "",
                role: "",
                title: "",
                email: "palion@phenomenon-studio.com",
                showIcons: false,
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-700 rounded-full">
                    <img
                      src="https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2024/10/ks.png.webp"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-medium">
                      {member.title} - {member.name}
                    </h3>
                    <p className="text-zinc-400">{member.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-row gap-2">
                  <button className="flex gap-2 items-center justify-center px-4 py-2 border border-zinc-700 rounded-md text-zinc-300 hover:bg-zinc-800 transition-colors text-sm">
                  <FaCopy className="w-4 h-4 text-white" />
                    {member.email}
                  </button>
                  {member.showIcons && (
                    <>
                      <button className="p-2 border border-zinc-700 rounded-md text-zinc-300 hover:bg-zinc-800 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                      </button>
                      <button className="p-2 border border-zinc-700 rounded-md text-zinc-300 hover:bg-zinc-800 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                        </svg>
                      </button>
                    </>
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
