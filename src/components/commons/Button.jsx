import React from "react";
import { node, func, bool, string, oneOf } from "prop-types";
import styled, { css } from "styled-components";

/*
  Button component for rendering the two different types of button
  based on the figma design, this component receive different props
  like primary/secondary type, block(full width), onClick, type,
  disabled, loading, and additional styles.
*/

const buttonCss = css`
  background: #000000;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  font-size: 13px;
  color: #FFF;
  will-change: transform;
  transition: all .2s;
  transform: perspective(1px) translateZ(0);
  padding: 1rem 3rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  @media screen and (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
  &:focus,
  &:hover {
    outline: none;
    text-decoration: none;
    transform: scale(1.02);
    opacity: .9;
  }
  &:active {
    transform: scale(1);
  }
`;

const secondaryButtonCss = css`
  color: #000000;
  background: #FFFFFF;
  border: 2px solid #000000;
`;

const isDisabled = css`
  background-color: var(--gray-2);
  cursor: not-allowed;
  pointer-events: none;
  &:hover {
    box-shadow: 0 4px 8px 0 var(--gray-2);
  }
`;

const ButtonContainer = styled.button`
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  width: ${props => (props.block ? "100%" : "auto")};
  ${buttonCss}
  ${props => props.secondary && secondaryButtonCss}
  ${props => props.styles};
`;

function Button(props) {
  const {
    block, onClick,
    type, loading, disabled, secondary,
    value, className, children
  } = props;

  let {
    styles
  } = props;

  if (disabled) {
    styles = styles.concat(isDisabled);
  }

  return (
    <ButtonContainer
      block={block}
      onClick={onClick}
      type={type}
      disabled={loading || disabled}
      value={value}
      className={className}
      styles={styles}
      secondary={secondary}
    >
      {!loading && children}
      {loading && (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
      )}
    </ButtonContainer>
  )
}

Button.defaultProps = {
  onClick() {},
  block: false,
  type: "button",
  loading: false,
  disabled: false,
  secondary: false,
  value: "",
  className: "",
  styles: "",
  children: <></>,
};

Button.propTypes = {
  children: node,
  onClick: func,
  block: bool,
  loading: bool,
  className: string,
  value: string,
  type: oneOf(["button", "submit"]),
  disabled: bool,
  secondary: bool,
  styles: string,
};

export default Button;
