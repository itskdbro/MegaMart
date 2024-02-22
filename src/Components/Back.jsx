import React from "react";
import { useNavigate } from "react-router-dom";

function Back() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-black rounded-md text-white px-4 py-1 text-lg"
      >
        Back
      </button>
    </div>
  );
}

export default Back;
