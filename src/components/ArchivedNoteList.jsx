import React from "react";
import NoteCard from "./NoteCard";

const ArchivedNoteList = ({ datas, onUnarchive, onDelete }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {datas.length === 0 ? (
        <p className="text-gray-500 text-xl my-8">Tidak ada catatan arsip</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-12 w-full">
          {datas.map((data) => (
            <NoteCard
              key={data.id}
              {...data}
              onArchive={onUnarchive}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchivedNoteList;
