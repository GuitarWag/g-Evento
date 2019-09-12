import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { useIsVisible } from 'hooks';
import { useI18N } from 'store/ducks/language/hooks';
import NewEventForm from '../new-event-form';

const Container = styled.div`
  margin-right: auto;
`;

const NewEventButton = () => {
  const { ...config } = useIsVisible();
  const I18N = useI18N();
  return (
    <>
      <Container>
        <Button
          color="secondary"
          aria-label="add-month"
          variant="outlined"
          onClick={config.toggle}
        >
          {I18N.ADD_NEW_EVENT.message}
        </Button>
      </Container>
      <NewEventForm {...config} />
    </>
  );
};

export default NewEventButton;
