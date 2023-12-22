import { observer } from "mobx-react-lite";
import HeaderButton from "@/components/HeaderButton";
import TableButton from "@/components/TableButton";
import { deleteFetcher } from "@/helpers/fetcherHandlers";
import { useUiStore } from "@/stores/uiStore";

const Table = (props: { users: User[] }) => {
  const uiStore = useUiStore();

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await deleteFetcher(e.currentTarget.value);

    uiStore.openBanner(
      "This user has been successfully deleted from your list of users.",
      true
    );
  };

  return (
    <div id="table" className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold font-sora leading-6 text-white">
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-200">
            A list of all the users in your account including their name and
            email.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 flex">
          <HeaderButton
            onClick={() => uiStore.setRunTutorial(true)}
            label="How to use"
          />
          <HeaderButton
            onClick={() => uiStore.openModal(null)}
            label="Add user"
            isPrimary
          />
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold font-sora text-white sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="md:hidden lg:block py-3.5 pl-4 pr-3 text-left text-sm font-semibold font-sora text-white sm:pl-0"
                  >
                    Email
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {props.users.map((person) => (
                  <tr key={person.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0 hidden md:block">
                      {person.email}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <TableButton
                        onClick={() => uiStore.openModal(person)}
                        isEditButton
                        user={person}
                      />
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <TableButton onClick={handleDelete} user={person} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Table);
