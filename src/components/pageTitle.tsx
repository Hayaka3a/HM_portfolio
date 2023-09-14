export default function PageTitle({ title }: { title: string }) {
  return (
    <div className="pageTitleBox">
      <h1 className="pageTitle">{title}</h1>
      <span className="pageTitleLine"></span>
    </div>
  );
}
