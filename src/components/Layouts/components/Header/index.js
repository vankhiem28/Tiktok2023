import React, { useState } from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import WrapperPopper from '~/components/Popper';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const StyledHeader = styled.header`
  /* variable css */
  --search-border-radius: 92px;
  --search-height: 46px;
  --search-top-spacer: 9px;
  --search-button-width: 52px;
  /* ------------- */
  height: var(--default-layout-header-height);
  width: 100%;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
  display: flex;
  justify-content: center;
  .inner {
    height: 100%;
    width: var(--default-layout-width);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .search,
    .search-result {
      width: 361px;
    }
    .search {
      height: var(--search-height);
      background-color: rgba(241, 241, 242, 1);
      border-radius: var(--search-border-radius);
      padding-left: 16px;
      display: flex;
      position: relative;
      border: 1.5px solid transparent;
      &::after {
        content: '';
        position: absolute;
        height: calc(var(--search-height) - var(--search-top-spacer) * 2);
        background-color: rgba(22, 24, 35, 0.12);
        width: 1px;
        right: var(--search-button-width);
        top: var(--search-top-spacer);
      }
      &:focus-within {
        border: 1.5px solid rgba(22, 24, 35, 0.2);
      }
      input {
        flex: 1;
        background-color: rgba(241, 241, 242, 1);
        height: 100%;
        color: var(--black);
        font-size: 1.6rem;
        caret-color: ${(props) => props.theme.colors.primary};

        &:not(:placeholder-shown) ~ .search-btn {
          color: rgba(22, 24, 35, 0.75);
        }
      }
      .clear,
      .loading {
        font-size: 1.6rem;
        position: absolute;
        right: calc(var(--search-button-width) + 16px);
        top: 50%;
        transform: translateY(-50%);
        color: rgba(22, 24, 35, 0.34);
      }
      .search-btn {
        width: var(--search-button-width);
        height: 100%;
        border-top-right-radius: var(--search-border-radius);
        border-bottom-right-radius: var(--search-border-radius);
        font-size: 1.8rem;
        color: rgba(22, 24, 35, 0.34);
        &:hover {
          background-color: rgba(22, 24, 35, 0.03);
          cursor: pointer;
        }
        &:active {
          background-color: rgba(22, 24, 35, 0.06);
        }
      }
    }
    .search-title {
      padding: 5px 12px;
      font-size: 1.4rem;
      line-height: 20px;
      font-weight: 600;
      color: rgba(22, 24, 35, 0.5);
    }
    /* .actions {
      display: flex;
    } */
  }
`;

function Header() {
  // const [searchResult, setSearchResult] = useState([]);
  return (
    <StyledHeader className="Header__wrapper">
      <div className="inner">
        <div className="logo">
          <img src={images.logo} alt="tiktok" />
        </div>
        <Tippy
          visible={true}
          interactive={true}
          render={(attrs) => (
            <div className="search-result" tabIndex="-1" {...attrs}>
              <WrapperPopper>
                <h4 className="search-title">Accounts</h4>
                <AccountItem />
              </WrapperPopper>
            </div>
          )}
        >
          <div className="search">
            <input type="text" placeholder="Search accounts and videos" spellCheck="false" />
            <button className="clear">
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className="loading" icon={faSpinner} />
            <button className="search-btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className="actions">
          <Button outline>Upload</Button>
          <Button primary>Log in</Button>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
