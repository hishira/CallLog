import styled from "styled-components";
export const Calls = styled.section`
  width: 100%;
  @media (min-width: 1200px) {
    width: 50%;
    &:nth-child(2n) {
      border-left: 0.1rem solid slategray;
    }
  }
`;
export const Text = styled.h2`
  display: block;
  letter-spacing: 0.1rem;
  @media (min-width: 600px) {
    text-align: center;
  }
`;
export const CallsWrapper = styled.div`
  display: flex;
  flex-direction: column;

`;
export const CallComponent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0.3rem;
  & > * {
    margin: auto;
    width: 33%;
    text-align: start;
  }
  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    & > * {
      margin: auto;
      width: 30%;
      text-align: center;
    }
  }
`;
export const InfoCompo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0.4rem;

  & > * {
    margin: auto;
    width: 33%;
    text-align: start;
  }
  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    & > * {
      margin: auto;
      width: 30%;
      text-align: center;
    }
  }
`;
export const SortWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  & > * {
    margin: auto;
  }
  @media (min-width: 600px) {
    justify-content: space-evenly;
    & > * {
      margin: 0;
    }
  }
`;
export const SortLabel = styled.p``;
export const SortSelect = styled.select`
  padding: 0.3rem;
  border: none;
  border: 0.1rem solid slategray;
  border-radius: 10px;
  @media (min-width: 600px) {
    width: 10rem;
  }
  &:focus {
    outline: none;
  }
`;
export const SortOption = styled.option`
  padding: 0;
  border: none;
`;
