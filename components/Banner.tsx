import { Fragment } from "react";
import { observer } from "mobx-react-lite";
import { Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useUiStore } from "@/stores/uiStore";

const Banner = () => {
  const { showBanner, alert, isSuccess, closeBanner } = useUiStore();

  return (
    <Transition.Root show={showBanner && isSuccess} as={Fragment}>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
        <div
          className={`${
            isSuccess && "bg-green-500"
          } pointer-events-auto flex items-center justify-between gap-x-6 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5`}
        >
          <p className="text-sm leading-6 text-white">{alert}</p>
          <button
            type="button"
            onClick={closeBanner}
            className="-m-1.5 flex-none p-1.5"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </Transition.Root>
  );
};

export default observer(Banner);