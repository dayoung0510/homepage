import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import First from 'assets/images/first.jpg';
import Second from 'assets/images/second.jpg';
import Hongkong from 'assets/images/hongkong.jpg';
import TreeVideo from 'assets/images/tree_video2.mp4';
import { WholeDiv, CircleButton, ArrowDiv, Video } from './styles';

const BackgroundImgs = [
  { type: 'video', src: TreeVideo },
  { type: 'pic', src: First },
  { type: 'pic', src: Second },
  { type: 'pic', src: Hongkong },
];

type Props = {
  stage: number;
};

const CenterDiv = styled.div<Props>`
  background-color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  ${({ stage }) => css`
    background-image: url(${BackgroundImgs[stage].src});
  `}
`;

const Cover: React.FC = () => {
  const history = useHistory();
  const [state, setState] = useState(0);

  const maxStage = BackgroundImgs.length - 1;

  const handlePage = (addValue: number) => {
    setState((prev) => {
      const newState =
        (prev + addValue) % BackgroundImgs.length < 0
          ? maxStage
          : (prev + addValue) % BackgroundImgs.length;
      return newState;
    });
  };

  return (
    <WholeDiv>
      {BackgroundImgs[state].type === 'video' && (
        <Video loop autoPlay muted>
          <source src={TreeVideo} type="video/mp4" />
          <track src="" kind="captions" label="captions" />
        </Video>
      )}

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
