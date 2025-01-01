import React from "react";
import NoteBody from "./NoteBody";
import NoteTitle from "./NoteTitle";
import { MdDelete, MdArchive, MdUnarchive } from "react-icons/md";

const NoteCard = (props) => {
  const { title, body, createdAt, archived, onArchive, onDelete } = props;

  return (
    <div className="bg-[#f5f5dc] shadow-lg rounded-lg p-6 border border-gray-200 w-full max-w-sm h-auto flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
      <div className="mb-4">
        <NoteTitle title={title} createdAt={createdAt} />
      </div>
      <hr className="my-4 border-slate-800" />
      <div className="flex-grow">
        <NoteBody body={body} />
      </div>
      <div className="mt-4 flex justify-end gap-3">
        <button
          onClick={() => onArchive(props.id)}
          className={`px-4 py-2 text-white rounded ${
            archived
              ? "bg-[#e68a8d] hover:bg-[#f6a89e]"
              : "bg-[#e68a8d] hover:bg-[#f6a89e]"
          } flex items-center justify-center`}
        >
          {archived ? (
            <MdUnarchive className="text-white" />
          ) : (
            <MdArchive className="text-white" />
          )}
        </button>
        <button
          onClick={() => onDelete(props.id)}
          className="px-4 py-2 bg-[#e68a8d] text-white rounded hover:bg-[#f6a89e] flex items-center justify-center"
        >
          <MdDelete className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
