import React from "react";

const NoteTitle = (props) => {
  const { title, createdAt } = props;
  return (
    <>
      <div className="mb-2 flex justify-between">
        <p className="text-lg font-bold text-gray-800">{title}</p>
        <span className="text-sm text-gray-500">
          {new Date(createdAt).toLocaleDateString()}
        </span>
      </div>
      <span className="h-1 w-full bg-gray-300"></span>
    </>
  );
};

export default NoteTitle;
