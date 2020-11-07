import { Box } from '@material-ui/core';

const Navbar = () => (
  <nav>
    <Box display="flex" justifyContent="space-between" color="red" p={4}>
      <Box display="flex">
        <Box m={1}>Logo</Box>
        <Box m={1}>Looks</Box>
        <Box m={1}>How it works</Box>
        <Box m={1}>Offerings</Box>
        <Box m={1}>Magazine</Box>
        <Box m={1}>Contact</Box>
      </Box>
      <Box display="flex">
        <Box m={1}>Login</Box>
        <Box m={1}>Careers</Box>
      </Box>
    </Box>
  </nav>
);

export default Navbar;
