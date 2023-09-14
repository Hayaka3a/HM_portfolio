export default function sendHandler({
  name,
  email,
  comment,
}: {
  name: string;
  email: string;
  comment: string;
}) {
  console.log(name, email, comment);
}
