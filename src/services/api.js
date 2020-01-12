import api from "./axios";

export const index = path => api.get(path);

export const show = (path, id) => api.get(`${path}/${id}`);

export const create = (path, data) => api.post(path, data);

export const update = (path, id, data) => api.put(`${path}/${id}`, data);

export const destroy = (path, id) => api.delete(`${path}/${id}`);
