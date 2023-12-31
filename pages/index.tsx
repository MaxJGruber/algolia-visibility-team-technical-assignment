import Table from "@/components/Table";
import Modal from "@/components/Modal";
import Banner from "@/components/Banner";
import { getAllUsers } from "@/helpers/fetcherHandlers";
import Tutorial from "@/components/Tutorial";

export default function Home() {
  const { data, error, isLoading } = getAllUsers();

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  return (
    <>
      <Table users={data} />
      <Modal />
      <Banner />
      <Tutorial />
    </>
  );
}
