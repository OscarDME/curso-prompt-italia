// src/app/page.jsx
import { redirect } from "next/navigation";

export default function Home() {
  // Cuando alguien entra a "/", lo mandamos al login
  redirect("/login");
}
