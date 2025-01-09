import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)`
  margin: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledCardMedia = styled('img')`
  width: 100%;
  height: 300px;
  max-height: 300px;
  &:hover {
    transition: 0.3s ease-in-out;
    height: 100%;
    max-height: 300px;
  }
  border-radius: 10px;
  object-fit: cover;
  transition: height 0.3s;
  overflow: hidden;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 10px 10px 10px;
  width: 100%;
  height: 100%;
`;

const StyledTitle = styled(Typography)`
  font-weight: bold;
  // margin: 10px 0;
  text-align: center;
`;

const StyledDescription = styled(Typography)`
  margin: 10px 0;
  text-align: center;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const StyledPriceGroup = styled('div')`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const StyledPrice = styled(Typography)<{ color?: string; old?: boolean }>`
  color: ${({ color = 'black' }) => color};
  ${({ old }) => old && 'text-decoration: line-through'};
`;

export { StyledCard, StyledCardContent, StyledCardMedia, StyledDescription, StyledPrice, StyledPriceGroup, StyledTitle };
