import * as S from '../styles/mapPage.style';

type PlaceButtonProps = {
  name: string;
  address: string;
  isSelected?: boolean;
  onClick: () => void;
};

const PlaceButton: React.FC<PlaceButtonProps> = ({ name, address, isSelected, onClick }) => {
  return (
    <S.PlaceButton onClick={onClick} $selected={isSelected}>
      <S.PlaceName>{name}</S.PlaceName>
      <S.PlaceAddress>{address}</S.PlaceAddress>
    </S.PlaceButton>
  );
};

export default PlaceButton;
