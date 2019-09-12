import React from 'react';
import Button from '@material-ui/core/Button';
import { FaGoogle } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import useGoogleLogin from './useGoogleLogin';
import { useI18N } from 'store/ducks/language/hooks';

const GoogleButton = () => {
  const onClick = useGoogleLogin();
  const I18N = useI18N();
  return (
    <Button
      size="small"
      fullWidth
      variant="outlined"
      color="primary"
      onClick={onClick}
    >
      <FaGoogle />
      <Typography variant="body2" component="p">
        {I18N.LOGIN_WITH_GOOGLE.message}
      </Typography>
    </Button>
  );
};
export default GoogleButton;
