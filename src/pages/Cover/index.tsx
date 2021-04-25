import React from 'react';
import { useHistory } from 'react-router-dom';

const Cover: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <button type="button" onClick={() => history.push('/home')}>
        입장
      </button>
    </div>
  );
};

export default Cover;
