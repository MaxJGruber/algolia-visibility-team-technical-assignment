import Table from "@/components/Table";
import { getAllUsers } from "@/helpers/fetcherHandlers";

export default function Home() {
  const { data, error, isLoading } = getAllUsers();

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  return <Table users={data} />;
}
