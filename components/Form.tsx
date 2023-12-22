import { useState, useEffect } from "react";
import FormInput from "@/components/FormInput";
import HeaderButton from "@/components/HeaderButton";
import Alert from "@/components/Alert";
import { createFetcher } from "@/helpers/fetcherHandlers";
import { useUiStore } from "@/stores/uiStore";

export default function Form({ targetUser }: { targetUser: User | null }) {
  const uiStore = useUiStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (targetUser) {
      setName(targetUser.name);
      setEmail(targetUser.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [targetUser]);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setAlert(false);
    if (!name || !email) {
      setAlert(true);
      return;
    }
    const user: User = {
      name,
      email,
    };

    const res = await createFetcher(user);
    uiStore.openBanner(
      `${res.name} has been ${
        targetUser ? "updated in" : "added to"
      } your list of users.`,
      true
    );
    setName("");
    setEmail("");
    uiStore.closeModal();
  };

  return (
    <div className="relative isolate bg-gray-800 rounded-lg">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-xenon-900 to-xenon-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <form className="pb-24 pt-20 sm:pb-32 lg:py-48 px-6">
        <div className="mx-auto max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <FormInput
              label="Full Name"
              name="name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <FormInput
              label="Email"
              name="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="mt-8 flex justify-end">
            <HeaderButton
              label={targetUser ? "Update existing user" : "Add new user"}
              onClick={handleSubmit}
              isPrimary
            />
          </div>
          <div className="mt-8">{alert && <Alert />}</div>
        </div>
      </form>
    </div>
  );
}
