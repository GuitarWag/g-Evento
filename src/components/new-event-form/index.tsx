import React, { useCallback, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Button,
  Step,
  Stepper,
  StepLabel,
  makeStyles,
  createStyles,
  Container,
} from '@material-ui/core';
import { Formik } from 'formik';
import { InputField } from 'ui-blocks';
import FIELDPATHS from 'validation/fieldPaths';
import { useI18N } from 'store/ducks/language/hooks';
import { UseIsVisibleProps } from 'hooks/useIsVisible';
import { Musician } from '../../services/types';
import moment, { now } from 'moment';
import SubmitButton from '../submit-button';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 600,
      height: 400,
    },
  }),
);
const initialValues = {
  title: '',
  type: '',
  formation: '',
  date: moment().format('DD-MM-YYYY'),
  musicians: [],
  musiciansStatus: false,
  status: 'sale',
  dateOfCreation: now(),
};

const NameAndDate = () => {
  const I18N = useI18N();
  return (
    <>
      <InputField
        fieldPath={FIELDPATHS.TITLE}
        label={I18N.TITLE.message}
        autoFocus
      />
      <InputField
        fieldPath={FIELDPATHS.DATE}
        label={I18N.DATE.message}
        type="date"
      />
    </>
  );
};

const TypeAndFormation = () => {
  const I18N = useI18N();
  return (
    <>
      <InputField
        fieldPath={FIELDPATHS.STATUS}
        label={I18N.STATUS.message}
        autoFocus
      />
      <InputField fieldPath={FIELDPATHS.TYPE} label={I18N.TITLE.message} />
      <InputField fieldPath={FIELDPATHS.FORMATION} label={I18N.TITLE.message} />
    </>
  );
};

const MusiciansAndStatus = () => {
  const I18N = useI18N();
  return (
    <>
      <InputField
        fieldPath={FIELDPATHS.MUSICIANS}
        label={I18N.MUSICIANS.message}
        autoFocus
      />
      <InputField
        fieldPath={FIELDPATHS.MUSICIANSSTATUS}
        label={I18N.MUSICIANS_STATUS.message}
      />
    </>
  );
};

const useSteps = () => {
  const I18N = useI18N();
  return [
    { component: <NameAndDate />, title: I18N.NAME_AND_DATE.message },
    { component: <TypeAndFormation />, title: I18N.TYPE_AND_FORMATION.message },
    {
      component: <MusiciansAndStatus />,
      title: I18N.MUSICIANS_AND_STATUS.message,
    },
  ];
};

interface Props {}

const NewEventForm = ({ isVisible, toggle }: Props & UseIsVisibleProps) => {
  const [step, setStep] = useState(0);
  const onSubmit = (vl: {}) => console.log(vl);
  const I18N = useI18N();
  const STEPS = useSteps();
  const classes = useStyles();

  return (
    <Dialog open={isVisible} onClose={toggle}>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Container classes={classes}>
          <DialogTitle>{STEPS[step].title}</DialogTitle>
          <DialogContent>{STEPS[step].component}</DialogContent>
          <DialogActions>
            {step < 1 ? (
              <Button variant="contained" onClick={toggle} color="primary">
                {I18N.CANCEL.message}
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => setStep(step => step - 1)}
                color="primary"
              >
                {I18N.BACK.message}
              </Button>
            )}
            {step < STEPS.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setStep(step => step + 1)}
              >
                {I18N.NEXT.message}
              </Button>
            ) : (
              <SubmitButton variant="contained" color="primary">
                {I18N.CREATE.message}
              </SubmitButton>
            )}
          </DialogActions>
        </Container>
      </Formik>
    </Dialog>
  );
};

export default NewEventForm;
