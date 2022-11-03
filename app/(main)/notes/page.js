import styles from "styles/notes.module.css";
import PocketBase from "pocketbase";
import CreateNote from "app/(main)/notes/CreateNote";
import Note from "app/(main)/notes/Note";

async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </div>
      <CreateNote />
    </div>
  );
}

async function getNotes() {
  const db = new PocketBase("http://127.0.0.1:8090");
  const data = await db.records.getList("notes");
  return data.items;
}

export default NotesPage;
