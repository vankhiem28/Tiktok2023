import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.div`
  display: inline-block;
  + .button__wrapper {
    margin-left: 8px;
  }
  .button {
    border-radius: 4px;
    font-size: 1.6rem;
    min-width: 100px;
    font-weight: 700;
    padding: 9px 8px;
    user-select: none;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: var(--white);

    .icon + .text,
    .text + .icon {
      margin-left: 6px;
    }
  }
  ${(props) =>
    props.disable &&
    css`
      .button {
        pointer-events: none;
        opacity: 0.5;
      }
    `};
  ${(props) =>
    props.rounded &&
    css`
      .button {
        border-radius: 999px;
        box-shadow: 0 2px 8px rgb(0 0 0 / 6%);
        border-color: rgba(22, 24, 35, 0.12);
        color: rgba(22, 24, 35, 0.75);
        &:hover {
          border-color: rgba(22, 24, 35, 0.2);
          background-color: rgba(255, 255, 255, 1);
        }
      }
    `};
  ${(props) =>
    props.primary &&
    css`
      .button {
        background-color: ${(props) => props.theme.colors.primary};
        color: var(--white);
        &:hover {
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), #fe2c55;
          border-color: ${(props) => props.theme.colors.primary};
        }
      }
    `};
  ${(props) =>
    props.outline &&
    css`
      .button {
        border-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.primary};
        &:hover {
          background-color: rgba(254, 44, 85, 0.06);
          border-color: ${(props) => props.theme.colors.primary};
        }
      }
    `};

  ${(props) =>
    props.small &&
    css`
      .button {
        min-width: 88px;
        padding: 4px 16px;
      }
    `};
  ${(props) =>
    props.large &&
    css`
      .button {
        min-width: 140px;
        padding: 14px 16px;
      }
    `};
`;

function Button({
  to,
  href,
  primary = false,
  outline = false,
  rounded = false,
  disable = false,
  small = false,
  large = false,
  leftIcon = false,
  rightIcon = false,
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };
  //   Remove events listeners when btn disabled
  if (disable) {
    Object.keys(props).forEach((prop) => {
      if (prop.startsWith('on') && typeof props[prop] === 'function') {
        delete props[prop];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  return (
    <StyledButton
      primary={primary}
      outline={outline}
      rounded={rounded}
      small={small}
      large={large}
      leftIcon={leftIcon}
      disable={disable}
      className="button__wrapper"
    >
      <Comp className="button" {...props}>
        {leftIcon && <span className="icon">{leftIcon}</span>}
        <span className="text">{children}</span>
        {rightIcon && <span className="icon">{rightIcon}</span>}
      </Comp>
    </StyledButton>
  );
}

export default Button;
