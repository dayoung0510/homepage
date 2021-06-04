import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import IconButton from '@material-ui/core/IconButton';

const WholeDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const CenterDiv = styled.div`
  background-color: pink;
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleButton = styled.button`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  &:hover {
    box-shadow: 5px 5px 3px lightgray;
  }
`;
const Arrow = styled(IconButton)`
  .MuiSvgIcon-root {
    font-size: 5rem;
  }
`;

const Cover: React.FC = () => {
  const history = useHistory();
  return (
    <WholeDiv>
      <Arrow>
        <ArrowLeftIcon />
      </Arrow>
      <CenterDiv>
        <CircleButton onClick={() => history.push('/home')}>
          ENTRANCE
        </CircleButton>
      </CenterDiv>
      <Arrow>
        <ArrowRightIcon />
      </Arrow>
    </WholeDiv>
  );
};

export default Cover;
