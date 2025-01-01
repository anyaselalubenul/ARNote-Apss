import React from "react";

const NoteBody = (props) => {
  const { body } = props;
  return (
    <div className="text-gray-700">
      <p>{body}</p>
    </div>
  );
};

export default NoteBody;
