import React from "react";
import NoteCardList from "../components/NoteCardList";
import ArchivedNoteList from "../components/ArchivedNoteList";
import FormAddNote from "../components/FormAddNote";
import data from "../utils/data";
import Navbar from "../components/Navbar";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: data,
      search: "", // Pastikan ada state untuk search
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddDataHandler = this.onAddDataHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const datas = this.state.datas.filter((data) => data.id !== id);
    this.setState({ datas });
  }

  onSearchHandler(event) {
    const captureValue = event.target.value.toLowerCase();
    this.setState({ search: captureValue });
    event.preventDefault();
  }

  onArchivedHandler(id) {
    const notesArchive = this.state.datas.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    );
    this.setState({ datas: notesArchive });
  }

  onUnarchiveHandler(id) {
    const notesArchive = this.state.datas.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    );
    this.setState({ datas: notesArchive });
  }

  onAddDataHandler({ title, body }) {
    this.setState((prevState) => ({
      datas: [
        ...prevState.datas,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toDateString(),
          archived: false,
        },
      ],
    }));
  }

  render() {
    const searchDatas = !this.state.search
      ? this.state.datas
      : this.state.datas.filter((data) =>
          data.title.toLowerCase().includes(this.state.search)
        );
    const activeDatas = searchDatas.filter((data) => !data.archived);
    const archiveDatas = searchDatas.filter((data) => data.archived);

    return (
      <div className="flex flex-col items-center w-full">
        <Navbar onSearch={this.onSearchHandler} />
        <FormAddNote addData={this.onAddDataHandler} />

        <div className=" text-left mt-10 px-4">
          <h2 className="text-white text-2xl font-bold">All Notes</h2>
          <hr className="border border-[#f5f5dc]" />
        </div>
        <NoteCardList
          datas={activeDatas}
          onArchive={this.onArchivedHandler}
          onDelete={this.onDeleteHandler}
        />

        <div className=" ext-left mt-10 px-4">
          <h2 className="text-white text-2xl font-bold">Archived Notes</h2>
          <hr className="border border-[#f5f5dc]" />
        </div>
        <ArchivedNoteList
          datas={archiveDatas}
          onUnarchive={this.onUnarchiveHandler}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
