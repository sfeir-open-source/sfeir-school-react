import { Header } from "./Header";
import { Card } from "./Card";

const message = "React @ SFEIR";

export function App() {
  return (
    <>
      <Header />
      <Card title={message} />
    </>
  );
}
