import * as S from '../styles/mapPage.style';
import AddressInfo from './AddressInfo';
import { NULL_DATA, EMPTY_STRING } from '../constants/map.constant';

type AddressInfoBoxProps = {
  label: string;
  info: string | { [key: string]: string } | null | undefined;
};

const AddressInfoBox: React.FC<AddressInfoBoxProps> = ({ label, info }) => {
  return (
    <S.AddressInfoBoxWrapper>
      <S.AddressInfoLabel>{label}</S.AddressInfoLabel>
      <S.AddressInfoItem>
        {(info === null || info === undefined || info === EMPTY_STRING) && <AddressInfo info={NULL_DATA} />}
        {typeof info === 'string' && info !== EMPTY_STRING && <AddressInfo info={info} />}
        {info && typeof info === 'object' && (
          <>
            {Object.entries(info).map(([key, value]) => {
              const displayValue = value === undefined || value === EMPTY_STRING ? NULL_DATA : value;
              return <AddressInfo key={key} info={displayValue} />;
            })}
          </>
        )}
      </S.AddressInfoItem>
    </S.AddressInfoBoxWrapper>
  );
};
export default AddressInfoBox;
