import { useState } from "react";
export default function CVForm({ onGenerate }) {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onGenerate({ name, education });
      }}
      className="mb-4"
    >
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Education"
        value={education}
        onChange={e => setEducation(e.target.value)}
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Generate CV
      </button>
    </form>
  );
}
