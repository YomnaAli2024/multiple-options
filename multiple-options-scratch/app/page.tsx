import styles from "./page.module.css";
import Selection from "../components/selection/selection"

export default function Home() {
  return (
    <main className={styles.main}>
      <Selection/>
    </main>
  );
}
