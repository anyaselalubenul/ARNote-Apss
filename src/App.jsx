import React from "react";
import Footer from "./components/Footer";
import NoteApp from "./pages/NoteApp";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NoteApp />
      <Footer />
    </div>
  );
}

export default App;
