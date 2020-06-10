import axios from "axios";

const url = "http://localhost:3000/api/posts";

class PostService {
  // * GET
  static getPosts() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data;
          console.log(`data received - ${data}`);
          resolve(
            data.map((post) => ({
              ...post,
              createdAt: new Date(post.createdAt),
            }))
          );
        })
        .catch((error) => {
          console.log("Error POST request");
          reject(error);
        });
    });
  }

  //* Create Post
  static insertPost(text) {
    return axios.post(url, {
      text,
    });
  }

  // * Delete Post
}

export default PostService;
