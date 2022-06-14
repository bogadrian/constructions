import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { FC, ReactNode } from 'react';

const styles = {
  root: {
    width: '100%',
    minHeight: 300,
    mb: 5
  },
  header: {
    py: 2,
    px: 4,
    border: '1px solid #dee2e6',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  title: {},
  divider: {
    my: 2
  },
  children: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    py: 2,
    px: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  }
};

export type ProblemWrapperProps = {
  title: string;
  description?: ReactNode;
  children: React.ReactNode;
};

const ProblemWrapper: FC<ProblemWrapperProps> = ({
  children,
  title,
  description
}) => {
  return (
    <Grid sx={styles.root} container direction="column">
      <Grid sx={styles.header} container direction="column">
        <Typography sx={styles.title} variant="h6" component="h1">
          {title}
        </Typography>
        <Divider sx={styles.divider} />
        {typeof description === 'string' ? (
          <Typography variant="body1" color="textSecondary">
            {description}
          </Typography>
        ) : (
          description
        )}
      </Grid>
      <Grid
        sx={styles.children}
        container
        direction="column"
        alignItems="center"
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default ProblemWrapper;
