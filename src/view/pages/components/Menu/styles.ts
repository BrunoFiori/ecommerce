import { styled } from '@mui/system';
import { AppBar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
  width: 100%;
  background-color: RGB(25, 118, 210);
  text-align: center;
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
  z-index: 2000;
`;

const StyledGroupMenuButtons = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledMenuButton = styled(Link)`
  color: #fff;
`;

export { StyledHeader, StyledMenuButton, StyledGroupMenuButtons };
