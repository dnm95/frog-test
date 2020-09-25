import styled from "styled-components";
import { Row } from "reactstrap";

export const Banner = styled.div`
  height: 100vh;
  background: linear-gradient(179.47deg, #000000 0.45%, rgba(196, 196, 196, 0) 99.55%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  flex-direction: column;
  h2 {
    color: #FFF;
  }
  .row {
    flex: 0;
  }
`;

export const FixedFooter = styled.div`
  position: fixed;
  background-color: #FFF;
  bottom: 0;
  width: 100%;
  padding: 0px 15px;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  ${props => (props.withBorder && `
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  `)}
`;

export const FullHeightCenterRow = styled(Row)`
  height: 100vh;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: auto;
    margin-top: 4rem;
  }
`;

export default Banner;
