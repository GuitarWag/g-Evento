import React from 'react';
import styled from 'styled-components';
import MainPanel from 'components/main-panel';
import Footer from 'components/footer';

const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 65px);
  justify-content: space-between;
  flex-direction: column;
  padding: 65px 0 45px 0;
`;

const Content: React.FC = () => {
  return (
    <Container>
      <MainPanel />
      <Footer />
    </Container>
  );
};

export default Content;
