import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.title};

  *, *::before, *::after {
    max-height: 632px;
  }
`
