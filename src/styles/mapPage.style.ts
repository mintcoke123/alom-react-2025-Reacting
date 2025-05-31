import styled from 'styled-components';

export const MapPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Pretendard', sans-serif;
`;

export const Header = styled.header`
    width: 100%;
    padding: 1rem 2rem;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    color: #333;
    margin: 0;
`;

export const MapContainer = styled.div`
    flex: 1;
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Placeholder = styled.div`
    font-size: 1.2rem;
    color: #666;
    text-align: center;
`; 