import React from 'react';
import styled from 'styled-components';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledAccountItem = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 16px;
  cursor: pointer;
  &:hover {
    background: rgba(22, 24, 35, 0.03);
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  .info {
    flex: 1;
    margin-left: 12px;
  }
  .name {
    font-size: 1.6rem;
    font-weight: 600;
  }
  .check {
    margin-left: 8px;
    color: rgb(32, 213, 236);
  }
  .username {
    font-size: 1.4rem;
  }
`;

function AccountItem() {
  return (
    <StyledAccountItem className="account-item__wrapper">
      <img
        className="avatar"
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/393927f020ccfb45fd192d3631b3c567~c5_300x300.webp?x-expires=1677373200&x-signature=Stv0Ljx79sCqESexI9kObuNBJto%3D"
        alt=""
        srcset=""
      />
      <div className="info">
        <p className="name">
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className="check" icon={faCircleCheck} />
        </p>
        <span className="username">Nguyen Van A</span>
      </div>
    </StyledAccountItem>
  );
}

export default AccountItem;
