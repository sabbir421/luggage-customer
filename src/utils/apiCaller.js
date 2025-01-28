/** @format */

import axios from "axios";
 export const api = process.env.NEXT_PUBLIC_API;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const publicGet = async (endpoint) => {
  const response = await axios.get(`${api}${endpoint}`, config);
  return response.data;
};

export const publicPost = async (endpoint, body) => {
  const response = await axios.post(`${api}${endpoint}`, body, config);
  return response.data;
};

export const privateGet = async (endpoint, token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${api}${endpoint}`, config);
  return response.data;
};

export const privatePost = async (endpoint, token, body) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${api}${endpoint}`, body, config);
  return response.data;
};

export const privatePut = async (endpoint, token, body) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${api}${endpoint}`, body, config);
  return response.data;
};
export const privateDelete = async (endpoint, token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${api}${endpoint}`, config);
  return response.data;
};
export const privatePatch = async (endpoint, token, body) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.patch(`${api}${endpoint}`, body, config);
  return response.data;
};

export const publicPatch = async (endpoint, body) => {
  const response = await axios.patch(`${api}${endpoint}`, body, config);
  return response.data;
};
