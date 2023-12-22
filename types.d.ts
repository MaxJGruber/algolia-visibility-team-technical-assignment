type User = {
  id?: number;
  name: string;
  email: string;
};

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label?: string;
  isPrimary?: boolean;
  isEditButton?: boolean;
  user: User;
};

type FormInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  label: string;
};
