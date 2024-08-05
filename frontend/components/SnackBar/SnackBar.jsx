// import { Alert, IconButton, Snackbar } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

import { Alert, Snackbar } from '@mui/material';

import ALERT_COLORS from '@/constants/notification';

/**
 * Renders a Snackbar component with alert messages.
 *
 * @return {ReactElement} The rendered Snackbar component.
 */
const SnackBar = (props) => {
  const { open, handleClose, message, severity } = props;

  return (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        color={ALERT_COLORS[severity]}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={severity} onClose={handleClose} variant="filled"  sx={{ width: '50%' }}>
          {message}
        </Alert>
      </Snackbar>
  );
};

export default SnackBar;
