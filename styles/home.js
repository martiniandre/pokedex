import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  text-align: center;
  margin-top: 30px;
`;
