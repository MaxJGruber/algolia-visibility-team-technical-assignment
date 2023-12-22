const TableButton = ({ onClick, isEditButton, user }: ButtonProps) => (
  <button
    onClick={onClick}
    id={isEditButton ? "edit" : "delete"}
    value={user.id}
    className={isEditButton ? "text-xenon-400" : "text-red-600"}
  >
    {isEditButton ? "Edit" : "Delete"}
    <span className="sr-only">, {user.name}</span>
  </button>
);

export default TableButton;
