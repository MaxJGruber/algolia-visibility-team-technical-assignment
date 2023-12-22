const HeaderButton = ({ onClick, label, isPrimary }: Partial<ButtonProps>) => {
  const primaryStyle =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-xenon-600 hover:bg-blue-gradient";
  const secondaryStyle =
    "ring-2 ring-inset ring-gray-300 hover:bg-secondary-gradient mr-2";

  return (
    <button
      type="button"
      id="add-user-button"
      onClick={onClick}
      className={`block rounded-md px-3 py-4 text-center text-sm font-semibold text-white shadow-sm ${
        isPrimary ? primaryStyle : secondaryStyle
      }`}
    >
      {label}
    </button>
  );
};

export default HeaderButton;
