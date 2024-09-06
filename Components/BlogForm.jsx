import { Fragment, useState } from "react";

export default function BlogForm({ setContents }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function submitForm() {
    setText("");
    //prv : 데이터를 넣기전 기존에 있던 값
    setContents((prev) => [...prev, text]);
  }

  return (
    <Fragment>
      <textarea onChange={handleChange} placeholder="게시글등록" value={text}></textarea>
      <button onClick={submitForm}>등록</button>
    </Fragment>
  );
}
