import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
