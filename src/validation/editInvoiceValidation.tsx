import * as Yup from 'yup';
import store from 'store';

const {
  language: {
    messages: { VALIDATION_MUST_BE_POSITIVE },
  },
} = store.getState();

export default Yup.object().shape({
  value: Yup.number().min(0, VALIDATION_MUST_BE_POSITIVE.message),
});
