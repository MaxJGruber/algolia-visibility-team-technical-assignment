import { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";

type UiContext = {
  showModal: boolean;
  targetUser: User | null;
  openModal: (user: User | null) => void;
  closeModal: () => void;
};

const uiStoreContext = createContext<UiContext | null>(null);

export const UiStoreProvider = (props: { children: any }) => {
  const uiStore = useLocalObservable(() => ({
    showModal: false,
    targetUser: null,
    openModal(user: User | null) {
      if (user) this.targetUser = user;
      this.showModal = true;
    },
    closeModal() {
      this.targetUser = null;
      this.showModal = false;
    },
  }));
  return (
    <uiStoreContext.Provider value={uiStore}>
      {props.children}
    </uiStoreContext.Provider>
  );
};

export const useUiStore = () => {
  const uiStore = useContext(uiStoreContext);
  if (!uiStore) {
    // don't need to be checking for null all the time
    throw new Error("useUiStore must be used within a UiStoreProvider.");
  }
  return uiStore;
};
