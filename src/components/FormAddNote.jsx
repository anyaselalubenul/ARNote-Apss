import React from "react";

const FormAddNote = ({ addData }) => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [limit, setLimit] = React.useState(50);

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChangeHandler = (event) => {
    const newBody = event.target.value;
    if (newBody.length <= limit) {
      setBody(newBody);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addData({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <div className="flex justify-center mt-8 w-full">
      <form onSubmit={onSubmitHandler} className="w-full max-w-md">
        <div className="mb-6 relative">
          <span className="absolute right-0 top-0 text-gray-700 mt-2 mr-3 opacity-30">
            Character left: {limit - title.length}
          </span>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="Input title..."
            value={title}
            onChange={onTitleChangeHandler}
          />
        </div>

        <div className="mb-6">
          <textarea
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-body"
            placeholder="Write your note here..."
            value={body}
            onChange={onBodyChangeHandler}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-[#4a261] border-2 border-[#f5f5dc] hover:bg-[#e68a8d] focus:ring-4 focus:outline-none focus:ring-[#00aaff] font-medium rounded-lg text-base w-full px-5 py-2.5 text-center"
        >
          Tambahkan
        </button>
      </form>
    </div>
  );
};

export default FormAddNote;
