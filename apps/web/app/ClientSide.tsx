"use client";

import { useEffect, useState } from "react";
import { trpc } from "./trpc";

export default function ClientSide() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    trpc.hello.query({ name: "Client side" }).then((res) => {
      setGreeting(res);
    });
  });

  return <div>I am client side : {greeting}</div>;
}
