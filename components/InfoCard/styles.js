import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-height 100px;
  width: 100%;
  gap: 1px;
  color: white;
  font-size:1rem;
   
  strong {
    text-align: start;
  }
`;

export const MoveList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Moves = styled.strong`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
`;

export const OthersInfos = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoData = styled.strong``;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;
