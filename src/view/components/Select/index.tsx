import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { ISelectItem } from "../../../app/interfaces/selectItensInterface";
import Chip from "../Chip";

interface SelectProps {
  label: string;
  name: string;
  value: string | string[] | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement | ISelectItem>) => void;
  options: ISelectItem[];
  multiple?: boolean;
  className?: string;
  fullwidth?: boolean;
  error?: boolean;
}

const Select: React.FC<SelectProps> = (props) => {
  const {
    label,
    onChange,
    options,
    multiple,
    value,
    className,
    fullwidth,
    error,
    name,
  } = props;

  const hangleOnChange = (e: SelectChangeEvent<string | string[]>) => {
    const { target } = e;
    onChange({
      target: { name: name, value: target.value },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const paddingMultiplo =
    (multiple && Array.isArray(value) && value.length > 0 && "12px") ||
    undefined;

  return (
    <FormControl className={className} fullWidth={fullwidth} error={error}>
      <InputLabel id="label-select">{label}</InputLabel>
      <MuiSelect
        {...props}
        labelId="label-select"
        label={label}
        onChange={hangleOnChange}
        sx={{ "& .MuiSelect-select": { padding: paddingMultiplo } }}
        renderValue={(selected) => {
          if (Array.isArray(selected)) {
            return (
              <div className="flex flex-wrap gap-1">
                {(Array.isArray(selected) ? selected : [selected]).map(
                  (value: string) => {
                    const option = options.find(
                      (option) => option.value === value
                    );
                    if (!option) {
                      console.log("Option not found for value: ", value);
                      console.log("options  ", options);
                      return null;
                    }
                    const label = option.label;
                    return <Chip key={value} label={label} />;
                  }
                )}
              </div>
            );
          } else {
            return options.find((option) => option.value === selected)?.label;
          }
        }}
      >
        {options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
