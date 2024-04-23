import MuiAlert from '@mui/material/Alert';

export function Messages() {
  return (
    <MuiAlert severity="error" variant="outlined">
      This is a message from Bender.
    </MuiAlert>
  );
}
