import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.mediumBackground};

  .nav {
    transition: all 0.1s linear;
    position: fixed;
    z-index: 2000;
    padding: 20px;
  }

  .scrollNav {
    transition: all 0.5s ease-in;
    z-index: 2000;
    background: #ffffff;
    width: 100%;
    border-bottom: 1px solid #dddddd;
  }
`
