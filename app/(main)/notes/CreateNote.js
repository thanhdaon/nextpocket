"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  async function create() {
    const db = new PocketBase("http://127.0.0.1:8090");
    await db.records.create("notes", {
      title,
      content,
    });
    setContent("");
    setTitle("");
    router.refresh();
  }

  return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create note</button>
    </form>
  );
}

export default CreateNote;
