import { api } from "../http/apiClient";

/**
 * Backend:
 *  GET    /activities?parentId=...     (roots if parentId missing)
 *  POST   /activities/add              { title, parent_id? }
 *  PUT    /activities/update/:id       { title }
 *  DELETE /activities/delete/:id
 */

export async function listRootActivities() {
  const res = await api.get("/activities");
  return Array.isArray(res.data?.data) ? res.data.data : [];
}

export async function listChildren(parentId) {
  const res = await api.get("/activities", { params: { parentId } });
  return Array.isArray(res.data?.data) ? res.data.data : [];
}

export async function createActivity({ title, parent_id = null }) {
  const payload = { title };
  if (parent_id) payload.parent_id = parent_id;
  const res = await api.post("/activities/add", payload);
  return res.data?.data;
}

export async function updateActivityTitle(id, title) {
  const res = await api.put(`/activities/update/${id}`, { title });
  return res.data?.data;
}

export async function deleteActivity(id) {
  const res = await api.delete(`/activities/delete/${id}`);
  return res.data;
}
