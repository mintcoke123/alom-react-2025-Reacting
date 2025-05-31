import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import * as S from "../styles/searchPage.style";
import { useNavigate } from "react-router-dom";
import SearchRecentContainer from "./SearchRecentContainer";
import { SearchPageConstant } from "../constants/search.constant";

const SearchContainer = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const { placeholder } = SearchPageConstant.SearchContainer;
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
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
                    placeholder={placeholder}
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
