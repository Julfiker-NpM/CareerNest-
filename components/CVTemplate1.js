export default function CVTemplate1({ data }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p>Education: {data.education}</p>
    </div>
  );
}
