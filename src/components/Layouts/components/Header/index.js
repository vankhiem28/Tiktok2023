import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: var(--default-layout-header-height);
  width: 100%;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
  display: flex;
  justify-content: center;
  .inner {
    height: 100%;
    width: var(--default-layout-width);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className="inner"></div>
    </StyledHeader>
  );
}

export default Header;
