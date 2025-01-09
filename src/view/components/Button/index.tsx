interface CustomButtonProps {
  label: string;
  onClick: () => void;
  secundary?: boolean;
}

const Button = ({ label, onClick, secundary = false }: CustomButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick();
  };

  return (
    <button
      className={`${secundary ? 'bg-red-500 hover:bg-red-700' : 'bg-azulPrimario-2 hover:bg-blue-500'} text-white font-bold py-2 px-4 rounded`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
