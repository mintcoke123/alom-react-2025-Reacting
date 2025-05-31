import React from "react";
import * as S from "../styles/searchPage.style";

const SearchRecentContainer = () => {
    return (
        <S.RecentContainer>
          <S.RecentRow>
            <S.RecentLabel>최근 검색어</S.RecentLabel>
            <S.RecentKeywords>
              <S.Keyword>어린이대공원</S.Keyword>
              <S.Keyword>세종대 맛집</S.Keyword>
              <S.Keyword>광진구 군자동</S.Keyword>
            </S.RecentKeywords>
          </S.RecentRow>
        </S.RecentContainer>
    )
}

export default SearchRecentContainer;