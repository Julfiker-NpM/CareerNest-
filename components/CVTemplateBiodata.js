export default function CVTemplateBiodata({ data }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{data.name} (Biodata Template)</h1>
      <p>Education: {data.education}</p>
    </div>
  );
}
