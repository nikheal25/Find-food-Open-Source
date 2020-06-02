import axios from "axios";

const url = "";

class PostService {
  // * GET
  static getPosts() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data;
          resolve(
            data.map((post) => ({
              ...post,
              createdAt: new Date(post.createdAt),
            }))
          );
        })
        .catch((error) => {
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
