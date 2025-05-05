import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPost } from "../../api/posts/operations";
import { FaReddit } from "react-icons/fa";
import styles from "./Header.module.css";

export default function Header() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.trim() !== "") {
      let value = input.trim();
      value = value.split(" ").join("%20");
      console.log(value);

      dispatch(fetchPost(value));
      setInput("");
    }
  };

  return (
    <header>
      <div className={styles.wrapper}>
        <FaReddit className={styles.redditIcon} />
        <h3 className={styles.title}>
          Reddit <span>app</span>
        </h3>
      </div>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Find thread..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
}
