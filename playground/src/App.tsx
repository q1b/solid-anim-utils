import type { Component } from "solid-js";
import logo from "~/assets/logo.svg";
import styles from "~/assets/App.module.css";
import { Hello } from "@/index";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <main class={styles.header}>
        <Hello></Hello>
      </main>
    </div>
  );
};

export default App;
