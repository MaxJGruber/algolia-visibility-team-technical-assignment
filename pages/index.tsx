import useSwr from "swr";
import Table from "@/components/Table";
import { BASE_URL, ALL_USERS_ENDPOINT } from "@/config";

type FetchArgs = {
  path: string;
};

const fetcher = ({ path }: FetchArgs) =>
  fetch(BASE_URL + path).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSwr(
    { path: ALL_USERS_ENDPOINT },
    fetcher
  );

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  return <Table users={data} />;
}
