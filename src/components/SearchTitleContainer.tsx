import React from "react";
import * as S from "../styles/searchPage.style";

const SearchTitleContainer = () => {
    return (
        <S.TitleContainer>
            <S.MainTitle>찾아주소</S.MainTitle>
            <S.SubTitle1>원하는 주소에 대한 정보를 입력하면</S.SubTitle1>
            <S.SubTitle2>우편번호, 영문 주소, 국문 주소를 알 수 있어요! 😁</S.SubTitle2>
        </S.TitleContainer>
    )
}

export default SearchTitleContainer;