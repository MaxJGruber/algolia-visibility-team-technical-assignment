import { useState } from "react";
import { createFetcher } from "@/helpers/fetcherHandlers";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // TODO: Find type for any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user: User = {
      name,
      email,
    };

    // TODO: Handle feedback to user
    const res = createFetcher(user);
    alert(200);
    setName("");
    setEmail("");
    return res;
  };

  return (
    <div className="relative isolate bg-gray-800">
      <form className="pb-24 pt-20 sm:pb-32 lg:py-48 px-6">
        <div className="mx-auto max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="fullname"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Full Name
              </label>
              <div className="mt-2.5">
                <input
                  type="name"
                  name="name"
                  id="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              onClick={handleSubmit}
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Add new user
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}