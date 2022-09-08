import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`;

//Upload Files
export const uploadFile = (uploadData) => {
  return axios.post(`${baseURL}/uploadFile/uploadImage`, uploadData);
};

//User
export const loginApi = (userCredentials) => {
  return axios.post(`${baseURL}/users/login`, userCredentials);
};

export const signupApi = (user) => {
  return axios.post(`${baseURL}/users/signup`, user);
};

export const forgotPasswordApi = (email) => {
  return axios.post(`${baseURL}/users/forgot-password`, email);
};

export const resetPasswordApi = (passAndToken) => {
  return axios.post(`${baseURL}/users/reset-password`, passAndToken);
};

export const getUser = (userId, token) => {
  return axios.get(`${baseURL}/users/${userId}/get-user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = (userData, token) => {
  return axios.put(`${baseURL}/users/update-profile`, userData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteProfile = (userData, token) => {
  return axios.post(`${baseURL}/users/delete-user`, userData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addToFollowing = (usersData, token) => {
  return axios.put(`${baseURL}/users/add-to-following`, usersData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const removeFromFollowing = (usersData, token) => {
  return axios.put(`${baseURL}/users/remove-from-following`, usersData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

//Travel Posts
export const getAllTravelPosts = (token) => {
  return axios.get(`${baseURL}/travel-posts/get-all-posts`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const newTravelPostApi = (post, token) => {
  return axios.post(`${baseURL}/travel-posts/new-post`, post, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getUserTravelPosts = (userId, token) => {
  return axios.get(`${baseURL}/travel-posts/${userId}/get-user-posts`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPost = (postId, token) => {
  return axios.get(`${baseURL}/travel-posts/${postId}/get-post`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const newComment = (params, token) => {
  return axios.post(`${baseURL}/travel-posts/new-comment`, params, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const newLike = (postId, token) => {
  return axios.put(`${baseURL}/travel-posts/new-like`, postId, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteLike = (postId, token) => {
  return axios.put(`${baseURL}/travel-posts/delete-like`, postId, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
