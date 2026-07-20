export default function GreyDefinitionCard({ label, definisi }) {
  return (
    <div className="pixel-grey-card">
      <h2 className="pixel-grey-card-title">{label}</h2>
      <p className="pixel-grey-card-body">{definisi}</p>
    </div>
  );
}
