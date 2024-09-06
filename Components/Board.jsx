import { useState } from "react";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";

export default function Board() {
  const [contents, setContents] = useState([]);
  return (
    <>
      <section className="content">
        <h2>Diary</h2>
        <p></p>

        <BlogForm setContents={setContents} />
        <BlogList contents={contents} />
      </section>
    </>
  );
}
