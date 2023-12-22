import { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";

type UiContext = {
  showModal: boolean;
  targetUser: User | null;
  showBanner: boolean;
  alert: string | "";
  isSuccess: boolean | null;
  openModal: (user: User | null) => void;
  closeModal: () => void;
  openBanner: (alert: string, isSuccess: boolean) => void;
  closeBanner: () => void;

  runTutorial: boolean;
  setRunTutorial: (runTutorial: boolean) => void;
};

const uiStoreContext = createContext<UiContext | null>(null);

export const UiStoreProvider = (props: { children: any }) => {
  const uiStore = useLocalObservable(() => ({
    // Handle API responses
    showModal: false,
    targetUser: null,
    showBanner: false,
    alert: "",
    isSuccess: null,
    openModal(user: User | null) {
      if (user) this.targetUser = user;
      this.showModal = true;
    },
    closeModal() {
      this.targetUser = null;
      this.showModal = false;
    },
    openBanner(alert: string, isSuccess: boolean) {
      this.isSuccess = isSuccess;
      this.alert = alert;
      this.showBanner = true;
    },
    closeBanner() {
      this.isSuccess = null;
      this.alert = "";
      this.showBanner = false;
    },

    // Handle tutorial
    runTutorial: false,
    setRunTutorial(runTutorial: boolean) {
      this.runTutorial = runTutorial;
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
