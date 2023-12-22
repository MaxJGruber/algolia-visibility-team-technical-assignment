import { observer } from "mobx-react-lite";
import Joyride, { STATUS } from "react-joyride";
import { STEPS } from "@/helpers/steps";
import { useUiStore } from "@/stores/uiStore";

const Tutorial = () => {
  const uiStore = useUiStore();

  const handleJoyrideCallback = (data: any) => {
    const { status } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      uiStore.setRunTutorial(false);
    }
  };

  return (
    <Joyride
      callback={handleJoyrideCallback}
      run={uiStore.runTutorial}
      steps={STEPS}
      continuous
      scrollToFirstStep
      disableOverlayClose
      showSkipButton
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: "#28aade",
        },
        buttonClose: {
          display: "none",
        },
      }}
    />
  );
};

export default observer(Tutorial);
