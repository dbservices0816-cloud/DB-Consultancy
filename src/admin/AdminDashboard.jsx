import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiUploadCloud,
  FiTrash2,
  FiLogOut,
  FiFileText,
} from "react-icons/fi";
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // FORM STATES
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  // STORED FORMS
  const [forms, setForms] = useState([]);

  // LOAD FORMS
  useEffect(() => {
    const savedForms =
      JSON.parse(localStorage.getItem("gstForms")) || [];

    setForms(savedForms);
  }, []);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");

    toast.success("Logged Out Successfully");

    navigate("/admin-login");
  };

  // FILE CHANGE
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFile({
          name: selectedFile.name,
          url: reader.result,
        });
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  // UPLOAD FORM
  const handleUpload = (e) => {
    e.preventDefault();

    if (!title || !description || !file) {
      toast.error("All fields are required");
      return;
    }

    const newForm = {
      id: Date.now(),
      title,
      description,
      file,
    };

    const updatedForms = [...forms, newForm];

    setForms(updatedForms);

    localStorage.setItem(
      "gstForms",
      JSON.stringify(updatedForms)
    );

    toast.success("Form Uploaded Successfully");

    // RESET
    setTitle("");
    setDescription("");
    setFile(null);
  };

  // DELETE FORM
  const handleDelete = (id) => {
    const filtered = forms.filter(
      (item) => item.id !== id
    );

    setForms(filtered);

    localStorage.setItem(
      "gstForms",
      JSON.stringify(filtered)
    );

    toast.success("Form Deleted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 p-6 md:p-10">

      {/* HEADER */}
      <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center mb-10">

        <div>
          <h1 className="text-4xl font-extrabold text-gray-800">
            Admin Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage GST Forms professionally
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-5 md:mt-0 flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-6 py-3 rounded-xl shadow-md"
        >
          <FiLogOut size={18} />
          Logout
        </button>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE - FORM */}
        <div className="lg:col-span-1">

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 sticky top-6">

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-black text-white p-3 rounded-2xl">
                <FiUploadCloud size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Upload GST Form
                </h2>

                <p className="text-gray-500 text-sm">
                  Upload and manage documents easily
                </p>
              </div>
            </div>

            <form onSubmit={handleUpload}>

              {/* TITLE */}
              <div className="mb-5">
                <label className="block mb-2 font-medium text-gray-700">
                  Form Title
                </label>

                <input
                  type="text"
                  placeholder="Enter form title"
                  className="w-full border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none p-4 rounded-2xl transition-all"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                />
              </div>

              {/* DESCRIPTION */}
              <div className="mb-5">
                <label className="block mb-2 font-medium text-gray-700">
                  Description
                </label>

                <textarea
                  placeholder="Write form description..."
                  className="w-full border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none p-4 rounded-2xl transition-all"
                  rows="5"
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                />
              </div>

              {/* FILE */}
              <div className="mb-6">

                <label className="block mb-2 font-medium text-gray-700">
                  Upload File
                </label>

                <div className="border-2 border-dashed border-gray-300 hover:border-black transition-all rounded-2xl p-6 text-center bg-gray-50">

                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full"
                  />

                  {file && (
                    <p className="mt-3 text-sm text-green-600 font-medium">
                      Selected: {file.name}
                    </p>
                  )}
                </div>
              </div>

              {/* BUTTON */}
              <button
                className="w-full bg-black hover:bg-gray-900 transition-all duration-300 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg"
              >
                Upload Form
              </button>

            </form>
          </div>
        </div>

        {/* RIGHT SIDE - FORMS */}
        <div className="lg:col-span-2">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Uploaded Forms
              </h2>

              <p className="text-gray-500 mt-1">
                Total Forms: {forms.length}
              </p>
            </div>
          </div>

          {forms.length === 0 ? (

            <div className="bg-white rounded-3xl shadow-lg p-16 text-center border border-gray-100">

              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-5 rounded-full">
                  <FiFileText size={40} className="text-gray-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No Forms Uploaded
              </h3>

              <p className="text-gray-500">
                Upload your first GST form to see it here.
              </p>
            </div>

          ) : (

            <div className="grid md:grid-cols-2 gap-6">

              {forms.map((item) => (

                <div
                  key={item.id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1"
                >

                  <div className="flex justify-between items-start mb-4">

                    <div className="bg-black text-white p-3 rounded-2xl">
                      <FiFileText size={22} />
                    </div>

                    <button
                      onClick={() =>
                        handleDelete(item.id)
                      }
                      className="bg-red-50 hover:bg-red-100 text-red-500 p-3 rounded-xl transition-all"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mb-5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* FILE LINK */}
                  <a
                    href={item.file.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-black hover:bg-gray-900 text-white px-5 py-3 rounded-xl transition-all duration-300"
                  >
                    View File
                  </a>

                </div>
              ))}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default AdminDashboard;