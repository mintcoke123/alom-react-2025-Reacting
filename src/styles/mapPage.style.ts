import styled from 'styled-components';
import { FiCopy } from 'react-icons/fi';

export const MapPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard', sans-serif;
`;

export const PlaceBackground = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  width: 24vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const AddressDataBackground = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 74.3vw;
  height: 90vh;
  top: 0;
  right: 0;
  z-index: 10;
`;

export const CopyButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  z-index: 10;
`;

export const CopyIcon = styled(FiCopy)`
  font-size: 1.4rem;
  color: white;
  cursor: pointer;

  &:hover {
    color: #049aff;
  }
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  font-size: 30px;
`;

export const AddressInfoBoxWrapper = styled.div`
  flex-direction: column;
  align-items: start;
`;

export const AddressInfoLabel = styled.p`
  font-size: 1.3rem;
  color: white;
`;

export const AddressInfoItem = styled.div`
  position: absolute;
  width: 92%;
  min-height: 2rem;
  border: 3px solid white;
  border-radius: 10px;
`;

export const AddressInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ColumnWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 5rem;
`;

export const AddressPartColumnWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 4.5rem;
  margin-left: 2rem;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
`;

export const AddressInfoText = styled.p`
  font-size: 1.1rem;
  color: white;
  margin-left: 1rem;
`;

export const ScrollablePlaceListWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-height: 86vh;
  overflow-y: auto;
  padding: 9px;
  z-index: 10;
`;

export const PlaceButton = styled.button<{ $selected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin-bottom: 10px;
  border-radius: 16px;
  padding: 1rem;

  width: 100%;
  cursor: pointer;
  border: none;

  background-color: ${({ $selected }) => ($selected ? '#676767FF' : 'white')};
  font-weight: ${({ $selected }) => ($selected ? 'bold' : 'normal')};

  &:hover {
    background-color: #dbd9d9ff;
  }

  & > p {
    color: ${({ $selected }) => ($selected ? 'white' : 'black')};
  }
`;

export const PlaceName = styled.p`
  font-size: 1.2rem;
  color: black;
  margin-bottom: 1rem;
`;

export const PlaceAddress = styled.p`
  font-size: 1rem;
  color: black;
  margin-top: 0;
`;

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

export const Placeholder = styled.div`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
`;

export const SearchText = styled.p`
  font-size: 1.2rem;
  color: #049aff;
  text-align: center;
  width: 100%;
  font-weight: bold;
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 90%;
  height: 1rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  border: 3.2px solid #049aff;
  border-radius: 1.7rem;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
`;

export const SearchIcon = styled.span`
  font-size: 1.8rem;
  color: #007bff;
  margin-right: 1rem;
`;

export const InputSearch = styled.input`
  flex: 1;
  border: none;
  font-size: 1rem;
  outline: none;
  background: transparent;
  color: #222;
  z-index: 1;
  position: relative;

  &::placeholder {
    color: #999;
    font-size: 1.1rem;
  }
`;
