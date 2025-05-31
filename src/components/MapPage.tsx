import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from '../styles/mapPage.style';

const MapPage: React.FC = () => {
    const location = useLocation();
    const searchValue = location.state?.searchValue;

    return (
        <S.MapPageContainer>
            <S.Header>
                <S.Title>검색 결과: {searchValue}</S.Title>
            </S.Header>
            <S.MapContainer>
                {/* 여기에 지도 컴포넌트가 들어갈 예정입니다 */}
                <S.Placeholder>지도가 표시될 영역입니다</S.Placeholder>
            </S.MapContainer>
        </S.MapPageContainer>
    );
};

export default MapPage; 