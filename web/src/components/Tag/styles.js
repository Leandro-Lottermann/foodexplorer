import styled from "styled-components";

export const Container = styled.div`
    width: fit-content;
    padding: 4px 8px;
    background: ${({ theme }) => theme.COLORS.DARK_1000};
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins";
    font-weight: 500;
    font-size: 0.875rem;
    text-align: center;

    border-radius: 5px;

    

`