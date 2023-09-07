export default function Heading({ title }: { title: string }) {
  return (
    <div className="headingBox">
      <h2 className="heading">{title}</h2>
      <div className="decorationBox" />
    </div>
  );
}
