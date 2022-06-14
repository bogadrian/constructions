import Typography from '@mui/material/Typography';
import ProblemWrapper from '../ProblemWrapper';
import Problem4Description from './components/Problem4Description';

const styles = {
  text: {
    border: '1px solid green',
    borderRadius: 10,
    padding: 2.5
  }
};

const Problem4 = () => {
  return (
    <ProblemWrapper
      title="4. Implement a blog page"
      description={<Problem4Description />}
    >
      <Typography sx={styles.text}>Start Here...</Typography>
    </ProblemWrapper>
  );
};

export default Problem4;
