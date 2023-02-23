import React from 'react';
import styled from 'styled-components';
import Header from '~/components/Layouts/components/Header';
import Sidebar from '~/components/Layouts/components/Sidebar';

const StyledDefaultLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .container {
    width: var(--default-layout-width);
    display: flex;
    .content {
      flex: 1;
    }
  }
`;

function DefaultLayout({ children }) {
  return (
    <StyledDefaultLayout>
      <Header></Header>
      <div className="container">
        <Sidebar></Sidebar>
        <div className="content">{children}</div>
      </div>
    </StyledDefaultLayout>
  );
}

export default DefaultLayout;
