import { useNavigate } from 'react-router-dom';
import Icon from '../Icon';

export interface SideBarItemProps {
  icon: string;
  name: string;
  to: string;
  visibelText: boolean;
  id: number;
  onClick: (() => void) | ((event: React.MouseEvent<HTMLElement>) => void);
  selected?: boolean;
  className?: string;
}

const MenuItem = ({ icon, name, to, visibelText, onClick, selected, className }: SideBarItemProps) => {
  const navigate = useNavigate();

  const handleNavigateClick = (to: string) => {
    navigate(to);
  };

  return (
    <div
      onClick={e => {
        handleNavigateClick(to);
        onClick(e);
      }}
      className={`flex ${visibelText ? 'gap-x-8 p-8' : 'w-10 justify-center'} items-center hover:bg-slate-50 hover:bg-opacity-50 rounded mx-8 my-[4px] py-[4px] ${selected && 'bg-slate-50 bg-opacity-50'} ${className}`}
    >
      <Icon icon={icon} />
      <span className={`cursor-pointer ${!visibelText && 'hidden'}`}>{name}</span>
    </div>
  );
};

export default MenuItem;
