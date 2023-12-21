import useSwr from "swr";
import { BASE_URL, ALL_USERS_ENDPOINT } from "@/config";

type FetchArgs = {
  path: string;
};

const fetcher = ({ path }: FetchArgs) =>
  fetch(BASE_URL + path).then((res) => res.json());

export const deleteFetcher = (id: string) =>
  fetch(BASE_URL + ALL_USERS_ENDPOINT + "/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

export const createFetcher = (user: User) =>
  fetch(BASE_URL + ALL_USERS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());

export const getAllUsers = () => useSwr({ path: ALL_USERS_ENDPOINT }, fetcher);
