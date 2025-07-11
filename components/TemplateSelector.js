export default function TemplateSelector({ selected, setSelectedTemplate }) {
  return (
    <div className="flex gap-4 mb-4">
      <button
        className={`px-4 py-2 rounded ${selected === "modern" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setSelectedTemplate("modern")}
        type="button"
      >
        Modern CV
      </button>
      <button
        className={`px-4 py-2 rounded ${selected === "biodata" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setSelectedTemplate("biodata")}
        type="button"
      >
        Bio-data
      </button>
    </div>
  );
}
