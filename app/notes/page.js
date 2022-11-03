import styles from "app/notes/styles.module.css";
import Link from "next/link";
import CreateNote from "app/notes/CreateNote";

async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
      <CreateNote />
    </div>
  );
}

async function getNotes() {
  try {
    const res = await fetch(
      "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
      { cache: "no-store" }
    );
    const data = await res.json();
    console.log(data.items);
    return data?.items;
  } catch (error) {
    console.log(error);
  }
}

function Note({ note }) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}

export default NotesPage;
