import { Chip as MuiChip } from '@mui/material';
import React from 'react';

interface ChipProps {
  label: string;
  onDelete?: () => void;
  className?: string;
}

const Chip: React.FC<ChipProps> = props => {
  return <MuiChip {...props} color="primary" variant="outlined" />;
};

export default Chip;
