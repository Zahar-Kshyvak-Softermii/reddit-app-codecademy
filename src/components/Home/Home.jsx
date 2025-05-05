import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPosts } from "../../api/posts/operations";
import {
  selectPosts,
  selectIsError,
  selectIsLoading,
} from "../../api/posts/selectors";
import { MagnifyingGlass } from "react-loader-spinner";
import Post from "../Post/Post";
import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchPopularPosts());
  }, [dispatch]);

  const isImageUrl = (url) => /\.(jpg|jpeg|png|gif|webp)$/i.test(url);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular posts</h1>
      {isLoading && (
        <div className={styles.wrapper}>
          <MagnifyingGlass
            visible={true}
            height="120"
            width="120"
            glassColor="#c0efff"
            color="#ff4500"
          />
        </div>
      )}
      {isError && (
        <p className={styles.error}>
          Sorry! The error has occurred, try reloading the page!
        </p>
      )}
      {posts.length > 0 ? (
        <ul className={styles.list}>
          {posts
            .filter((post) => isImageUrl(post.data.url))
            .map((post) => (
              <Post
                key={post.data.id}
                title={post.data.title}
                src={post.data.url}
              />
            ))}
        </ul>
      ) : (
        <p className={styles.error}>No posts found!</p>
      )}
    </div>
  );
}
