import styled from 'styled-components';

export const WholeDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CircleButton = styled.button`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  &:hover {
    box-shadow: 0 0 20px lightgray;
    transition: 0.35s;
  }
`;
export const ArrowDiv = styled.div`
  position: absolute;
  top: 50%;
  .MuiSvgIcon-root {
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
    :hover {
      color: #999;
    }
  }
`;
