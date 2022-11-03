"use client";

import styles from "styles/notes.module.css";
import Link from "next/link";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

function Note({ id, title, content, created }) {
  const router = useRouter();

  async function deleteThisNode() {
    const db = new PocketBase("http://127.0.0.1:8090");
    await db.records.delete("notes", id);
    router.refresh();
  }

  return (
    <div className={styles.note}>
      <Link href={`/notes/${id}`}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </Link>

      <button onClick={deleteThisNode}>delete</button>
    </div>
  );
}

export default Note;
