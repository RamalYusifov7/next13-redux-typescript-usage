"use client"
import styles from "./page.module.css";
import Form from "./Login";
import { useAppSelector } from "@/redux/store";

export default function Home() {
  const { user } = useAppSelector((store) => store.user);
  return (
    <main className={styles.main}>
      <Form />
      User :{user.name}
    </main>
  );
}
