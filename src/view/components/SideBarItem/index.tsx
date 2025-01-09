import { useNavigate } from 'react-router-dom';
import Icon from '../Icon';

export interface SideBarItemProps {
  icon: string;
  name: string;
  to: string;
  visibelText: boolean;
}

const MenuItem = ({ icon, name, to, visibelText }: SideBarItemProps) => {
  const navigate = useNavigate();

  const handleNavigateClick = (to: string) => {
    navigate(to);
  };

  return (
    <div
      onClick={() => handleNavigateClick(to)}
      className={`flex ${visibelText ? 'gap-x-8' : 'w-10 justify-center'} items-center hover:bg-slate-50 hover:bg-opacity-50 rounded p-8 m-8 `}
    >
      <Icon icon={icon} />
      <span className={`text-white cursor-pointer text-responsive  font-medium truncate ${!visibelText && 'hidden'}`}>{name}</span>
    </div>
  );
};

export default MenuItem;
