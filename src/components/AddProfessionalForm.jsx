import { useState } from "react";

export default function AddProfessionalForm() {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [experience, setExperience] = useState("");
  const [image, setImage] = useState(null);
  const [resume, setResume] = useState(null);

  const [professionals, setProfessionals] = useState([]);

  const addProfessional = () => {
    if (
      !name ||
      !profession ||
      !experience ||
      !image ||
      !resume
    ) {
      alert("Please fill all fields");
      return;
    }

    const newProfessional = {
      name,
      profession,
      experience,
      image: URL.createObjectURL(image),
      resume: URL.createObjectURL(resume),
      resumeName: resume.name,
    };

    setProfessionals([...professionals, newProfessional]);

    // Clear Fields
    setName("");
    setProfession("");
    setExperience("");
    setImage(null);
    setResume(null);

    alert("Professional Added Successfully ✅");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Add Professional Form
        </h1>

        <div className="space-y-4">

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Profession */}
          <div>
            <label className="block mb-1 font-medium">
              Profession
            </label>

            <input
              type="text"
              placeholder="Enter Profession"
              value={profession}
              onChange={(e) =>
                setProfession(e.target.value)
              }
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-1 font-medium">
              Experience
            </label>

            <input
              type="number"
              placeholder="Years of Experience"
              value={experience}
              onChange={(e) =>
                setExperience(e.target.value)
              }
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-1 font-medium">
              Upload Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(e.target.files[0])
              }
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block mb-1 font-medium">
              Upload Resume
            </label>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                setResume(e.target.files[0])
              }
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Button */}
          <button
            onClick={addProfessional}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl"
          >
            Add Professional
          </button>
        </div>

        {/* Show Added Professionals */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">
            Added Professionals
          </h2>

          {professionals.map((pro, index) => (
            <div
              key={index}
              className="border rounded-lg p-3 mb-3 bg-gray-50"
            >
              <img
                src={pro.image}
                alt={pro.name}
                className="w-24 h-24 rounded-full object-cover mb-3"
              />

              <p>
                <strong>Name:</strong> {pro.name}
              </p>

              <p>
                <strong>Profession:</strong>{" "}
                {pro.profession}
              </p>

              <p>
                <strong>Experience:</strong>{" "}
                {pro.experience} Years
              </p>

              {/* Resume Link */}
              <a
                href={pro.resume}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View Resume ({pro.resumeName})
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}