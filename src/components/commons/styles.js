import styled from "styled-components";

export const Banner = styled.div`
  height: 100vh;
  background: linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%);
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
  padding-top: 0.5rem;
  padding-bottom: 1rem;
`;

export default Banner;
