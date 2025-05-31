import styled, { keyframes } from "styled-components";

// const waveAnimation = keyframes`
//   0% {
//     background-position: 0% 50%;
//   }
//   100% {
//     background-position: 100% 50%;
//   }
// `;

export const SearchPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Pretendard', sans-serif;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 6rem;
`;

export const MainTitle = styled.div`
  font-size: 3rem;
  font-weight: 900;
  color: #0057ff;
  margin-bottom: 4rem;
`;

export const SubTitle1 = styled.div`
  font-size: 1.2rem;
`;

export const SubTitle2 = styled.div`
  font-size: 1.2rem;
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 55%;
  height: 5rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  border: 3.2px solid #049aff;
  border-radius: 1.7rem;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
`;

export const SearchIcon = styled.span`
  font-size: 1.8rem;
  color: #007bff;
  margin-right: 1rem;
`;

export const InputSearch = styled.input`
  flex: 1;
  border: none;
  font-size: 1rem;
  outline: none;
  background: transparent;
  color: #222;
  z-index: 1;
  position: relative;

  &::placeholder {
    color: #999;
    font-size: 1.1rem;
  }
`;

export const RecentContainer = styled.div`
  margin-top: 2rem;
  width: 50%;
`;

export const RecentRow = styled.div`
  display: flex;
  width: 100%;
`;

export const RecentLabel = styled.div`
  width: 25%;
  font-size: 1rem;
  color: #888;
`;

export const RecentKeywords = styled.div`
  width: 75%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

export const Keyword = styled.span`
  font-size: 1rem;
  color: #ae7fe2;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #8f5ac0;
  }
`;