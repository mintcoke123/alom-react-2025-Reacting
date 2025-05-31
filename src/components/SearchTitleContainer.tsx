import React from "react";
import * as S from "../styles/searchPage.style";
import { SearchPageConstant } from "../constants/search.constant";

const SearchTitleContainer = () => {
    const { title, subTitle1, subTitle2 } = SearchPageConstant.SearchTitleContainer;
    return (
        <S.TitleContainer>
            <S.MainTitle>{title}</S.MainTitle>
            <S.SubTitle1>{subTitle1}</S.SubTitle1>
            <S.SubTitle2>{subTitle2}</S.SubTitle2>
        </S.TitleContainer>
    )
}

export default SearchTitleContainer;