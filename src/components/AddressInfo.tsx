import * as S from '../styles/mapPage.style';

type AddressInfoProps = {
  info: string;
};

const AddressInfo: React.FC<AddressInfoProps> = ({ info }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(info);
  };

  return (
    <S.AddressInfoWrapper>
      <S.AddressInfoText>{info}</S.AddressInfoText>
      <S.CopyButton onClick={handleCopy}>
        <S.CopyIcon />
      </S.CopyButton>
    </S.AddressInfoWrapper>
  );
};

export default AddressInfo;
