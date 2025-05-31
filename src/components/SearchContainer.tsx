import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import * as S from "../styles/searchPage.style";
import { useNavigate } from "react-router-dom";
import SearchRecentContainer from "./SearchRecentContainer";
// import SearchPageConstant from "../constants/SearchPage.constant";

const SearchContainer = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    // const { placeholder } = SearchPageConstant.SearchContainer;
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            console.log("검색어:", searchValue);
            navigate('/mapPage', { state: { searchValue } });
        }
    };

    return (
        <S.SearchContainer>
            <S.InputWrapper>
                <S.SearchIcon>  
                    <FiSearch size={36} color="#688CEC" strokeWidth={3} />
                </S.SearchIcon>
                <S.InputSearch
                    placeholder="원하는 키워드를 검색해주세요! (세종대학교, 세종대 맛집, 광진구 군자동)"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </S.InputWrapper> 
            <SearchRecentContainer />
        </S.SearchContainer>
    );
};

export default SearchContainer;
