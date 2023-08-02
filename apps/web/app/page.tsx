import ClientSide from "./ClientSide";
import { trpc } from "./trpc";

export default async function Home() {
  const response = trpc.hello.query({ name: "Mustapha" });
  return (
    <main className="">
      <p>Server side : {response}</p>
      <ClientSide />
    </main>
  );
}
