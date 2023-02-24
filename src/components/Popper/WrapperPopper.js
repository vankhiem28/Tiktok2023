import React from 'react';
import styled from 'styled-components';

const StyledWrapperPopper = styled.div`
  width: 100%;
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
  border-radius: 8px;
  max-height: min((100vh - 96px) - 60px, 734px);
  padding-top: 8px;
`;

function WrapperPopper({ children }) {
  return <StyledWrapperPopper className="popper__wrapper">{children}</StyledWrapperPopper>;
}

export default WrapperPopper;
