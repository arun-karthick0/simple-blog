import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";

function Home({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  // getting data from collection
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  // delete a post
  const deletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    setPostList((prevPostList) =>
      prevPostList.filter((post) => post.id !== id)
    );
  };

  return (
    <div className="homePage">
      {postList.map((post) => (
        <div className="post" key={post.id}>
          <div className="postHeader">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="deletePost">
              {/* checking current user with their id */}
              {isAuth && post.author.id === auth.currentUser?.uid && (
                <button onClick={() => deletePost(post.id)}>X</button>
              )}
            </div>
          </div>
          <div className="postTextContainer">{post.postText}</div>
          <h6>
            <strong>@{post.author.name}</strong>
          </h6>
        </div>
      ))}
    </div>
  );
}

export default Home;
