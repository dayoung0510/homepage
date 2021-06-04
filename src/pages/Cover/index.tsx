import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import First from 'assets/images/first.jpg';
import Second from 'assets/images/second.jpg';
import Hongkong from 'assets/images/hongkong.jpg';
import { Gradient, Shake, Opacity } from 'styles/animations';
import { WholeDiv, CircleButton, ArrowDiv } from './styles';

const BackgroundImgs = [First, Second, Hongkong];

type Props = {
  stage: number;
};

const CenterDiv = styled.div<Props>`
  background-color: #000;
  animation: ${Shake} 0.4s ease-out both;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  ${({ stage }) => css`
    background-image: url(${BackgroundImgs[stage]});
  `}
`;

const Cover: React.FC = () => {
  const history = useHistory();
  const [state, setState] = useState(0);

  const minStage = 0;
  const maxStage = BackgroundImgs.length - 1;

  const handlePage = (addValue: number) => {
    setState(() => {
      const newStage = state + addValue;

      const stage =
        minStage <= newStage && newStage <= maxStage ? newStage : minStage;

      return stage;
    });
  };

  return (
    <WholeDiv>
      <ArrowDiv style={{ left: 0 }}>
        <ArrowLeftIcon onClick={() => handlePage(-1)} />
      </ArrowDiv>
      <CenterDiv stage={state}>
        <CircleButton onClick={() => history.push('/home')}>
          ENTRANCE
        </CircleButton>
      </CenterDiv>
      <ArrowDiv style={{ right: 0 }}>
        <ArrowRightIcon onClick={() => handlePage(1)} />
      </ArrowDiv>
    </WholeDiv>
  );
};

export default Cover;
