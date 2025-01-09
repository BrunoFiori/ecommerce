import { FormControlLabel, Checkbox as MuiCheck } from '@mui/material';
import React from 'react';

interface CheckboxProps {
  name?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, checked, onChange, label, className }) => {
  return <FormControlLabel name={name} className={className} control={<MuiCheck checked={checked} onChange={onChange} />} label={label} />;
};

export default Checkbox;
