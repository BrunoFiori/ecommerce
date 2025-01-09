import { InputAdornment, TextField as MuiTextField } from "@mui/material";
import React, { useState } from "react";
import { TextFieldType } from "../../../app/enum/TextField";
import Icon from "../Icon";

interface TextFieldProps {
  id?: string;
  name?: string;
  label: string;
  type?: TextFieldType;
  value: string | number | null | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  adornment?: string;
  multiline?: boolean;
  rows?: number;
  className?: string;
  fullwidth?: boolean;
  error?: boolean;
  disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const { type = TextFieldType.Text, adornment, fullwidth = true } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <MuiTextField
      {...props}
      fullWidth={fullwidth}
      type={type === TextFieldType.Password && showPassword ? "text" : type}
      slotProps={{
        input: {
          startAdornment: adornment ? (
            <InputAdornment position="start">{adornment}</InputAdornment>
          ) : null,
          endAdornment:
            type === TextFieldType.Password ? (
              <InputAdornment position="end">
                {showPassword ? (
                  <Icon icon="visibility" onClick={handleClickShowPassword} />
                ) : (
                  <Icon
                    icon="visibility_off"
                    onClick={handleClickShowPassword}
                  />
                )}
              </InputAdornment>
            ) : null,
        },
      }}
      variant="outlined"
    />
  );
};

export default TextField;
