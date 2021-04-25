import React from 'react';
import { useHistory } from 'react-router-dom';

const NavBar: React.FC = () => {
  const history = useHistory();
  return (
    <div style={{ display: 'flex' }}>
      <button type="button" onClick={() => history.push('/')}>
        커버
      </button>
      <button type="button" onClick={() => history.push('/home')}>
        홈
      </button>
      <button type="button" onClick={() => history.push('/profile')}>
        프로필
      </button>
    </div>
  );
};

export default NavBar;
