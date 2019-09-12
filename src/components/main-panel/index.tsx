import React from 'react';
import EmptyPanel from 'components/empty-panel';
import { FlexRow } from 'ui-blocks';
import styled from 'styled-components';

const Container = styled(FlexRow)`
  flex: 1;
`;
const MainPanel = () => {
  return (
    <Container>
      <EmptyPanel />
    </Container>
  );
};

export default MainPanel;
