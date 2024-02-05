import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-bottom: 8px;
  }

  > input {
    background: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1rem;

    padding: 12px 14px;
    border: 0;
    border-radius: 8px;
    

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-family: "Roboto";
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
    }
  }
`;
