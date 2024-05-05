const { default: axios } = require("axios");

//created axios client to create endpoint
const axiosClient = axios.create({
  baseURL: "http://localhost:8000",
});

const createUser = (data) => axiosClient.post("/user", data);

const getUserByEmail = (email) => axiosClient.get("/user/" + email);

const createPost = (data) => axiosClient.post("/post", data);

const getAllPost = () => axiosClient.get("/post");

const onPostLike = (postId, data) =>
  axiosClient.put("/post/like/" + postId, data);

const addComment = (data) => axiosClient.post("/comment", data);

const deleteComment = (commentId) =>
  axiosClient.delete("/comment/" + commentId);
export default {
  createUser,
  getUserByEmail,
  createPost,
  getAllPost,
  onPostLike,
  addComment,
  deleteComment,
};
