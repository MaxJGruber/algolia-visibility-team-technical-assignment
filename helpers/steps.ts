import { Step } from "react-joyride";

export const STEPS: Step[] = [
  {
    target: "#table",
    placement: "auto",
    disableBeacon: true,
    content: "Welcome to your list of users!",
  },
  {
    target: "#add-user-button",
    placement: "auto",
    content: "You can add new users by pressing this button!",
  },
  {
    target: "#edit",
    placement: "auto",
    content: "You can edit current users by pressing the EDIT button!",
  },
  {
    target: "#delete",
    placement: "auto",
    content: "If you want to delete a user, press the DELETE button!",
  },
];
