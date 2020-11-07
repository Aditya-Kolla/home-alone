import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
  <Box>
    <Navbar />
    {props.children}
    <Footer />
  </Box>
);

Layout.propTypes = {
  children: PropTypes.elementType.isRequired
};

export default Layout;
