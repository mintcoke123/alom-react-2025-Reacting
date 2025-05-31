import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import * as S from "../styles/searchPage.style";
import { useNavigate } from "react-router-dom";
import SearchRecentContainer from "./SearchRecentContainer";
import { addRecentKeywordAndResult } from './SearchRecentContainer';
import { getKeywordToObject } from "../utils/getKeywordToObject";
import { saveSearchResult } from "../utils/storage/searchResults";

const SearchContainer = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    
    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchValue.trim()) {
            const result = await getKeywordToObject(searchValue.trim());
            if (result) {
                addRecentKeywordAndResult(searchValue.trim(), result);
                navigate('/mapPage', { state: { searchValue: searchValue.trim() } });
            } else {
                alert('검색 결과가 없습니다.');
            }
        }
    };

    return (
        <S.SearchContainer>
            <S.InputWrapper>
                <S.SearchIcon>  
                    <FiSearch size={36} color="#688CEC" strokeWidth={3} />
                </S.SearchIcon>
                <S.InputSearch
                    placeholder="원하는 키워드를 검색해주세요!"
                    value={searchValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </S.InputWrapper> 
            <SearchRecentContainer />
        </S.SearchContainer>
    );
};

export default SearchContainer;
