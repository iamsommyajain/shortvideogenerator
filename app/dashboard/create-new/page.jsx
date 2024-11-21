import React from "react";

function CreateNew() {
  return (
    <div className="p-5 py-24 flex items-center justify-center flex-col mt-10">
      <h2 className="text-2xl font-bold">Create a New Video</h2>
      <p className="mt-4 text-lg">Fill out the details below to create your first video.</p>
      {/* Add your form elements here */}
      <div className="mt-6">
        {/* Example Form */}
        <input 
          type="text" 
          placeholder="Video Title" 
          className="p-2 border border-gray-300 rounded-md"
        />
        <textarea 
          placeholder="Video Description" 
          className="mt-4 p-2 border border-gray-300 rounded-md"
          rows="4"
        />
        <div className="mt-4">
          <button className="btn btn-primary">Create Video</button>
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
