import { purple } from '@mui/material/colors';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Problem1 from './components/Problem1';
import Problem2 from './components/Problem2';
import Problem3 from './components/Problem3';
import Problem4 from './components/Problem4';

const theme = createTheme({
  palette: {
    primary: purple
  }
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Typography variant="h4" component="div" color="textPrimary" gutterBottom>
        React Test
      </Typography>
      <Problem1 />
      <Problem2 />
      <Problem3 />
      <Problem4 />
    </Container>
  </ThemeProvider>
);

export default App;
