import styled from 'styled-components';

export const Container = styled.div`
    width: 100%; 
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 100%;
    max-width: 420px;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 36px; 
    font-weight: 700;
    color: #81259D;
    margin-bottom: 20px; 
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center; 
    justify-content: center;
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
`

export const Spacing = styled.div`
    margin: 10px 0;
`
