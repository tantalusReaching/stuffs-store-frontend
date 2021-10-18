import styled from "styled-components";

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$imageUrl});
  background-position: center;
  background-size: cover;
`;

export const ContentContainer = styled.div`
  position: absolute;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.8;
  margin-bottom: 20px;

  h2 {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    // color: #4a4a4a;
  }

  span {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${(props) => (props.$size === "large" ? "380px" : "240px")};
  flex: 1 1 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 60em) {
    min-width: 200px;
    height: 200px;
  }

  &:hover {
    cursor: pointer;

    & ${BackgroundImageContainer} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${ContentContainer} {
      opacity: 0.9;
    }
  }
`;
