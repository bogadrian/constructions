import { ChangeEvent } from 'react';
import Input, { InputProps } from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useCallback, useState } from 'react';
import ProblemWrapper from '../ProblemWrapper';

const styles = {
  input: {
    width: '100%',
    my: 1
  }
};

interface InterestsProps {
  sports: false;
  cinema: false;
  art: false;
  gaming: false;
}
const Problem2 = () => {
  const [profile, setProfile] = useState('');
  const [interests, setInterests] = useState<InterestsProps>({
    sports: false,
    cinema: false,
    art: false,
    gaming: false
  });

  const handleName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setProfile(e.target.value);
    },
    [setProfile]
  );

  const toggleInterest = useCallback(
    (key: string) => {
      setInterests((prev: any) => {
        // toggle prev value
        prev[key] = !prev[key];
        console.log('new interests', prev);
        return prev;
      });
    },
    [setInterests]
  );

  //Solution
  // const toggleInterest = (key: string) => {
  //   console.log('key', key);
  //   setInterests((prev: any) => ({ ...prev, [key]: !prev[key] }));
  // };

  const handleClick = useCallback(() => {
    console.log('profile', profile);
    console.log('interests', interests);
  }, [profile, interests]);

  return (
    <ProblemWrapper
      title="2. Unupdatable Inputs"
      description="App users reported they cannot select interests. It seems there is a problem with form."
    >
      <Grid container direction="column">
        <Grid item xs>
          <FormControlLabel
            sx={styles.input}
            control={
              <Input
                value={profile}
                onChange={handleName}
                placeholder="FullName"
                fullWidth
              />
            }
            label={'Full Name'}
            labelPlacement="start"
          />
        </Grid>
        <Grid sx={styles.input} item xs>
          {Object.entries(interests).map(([key, value]) => (
            <FormControlLabel
              key={`${key}-controlLabel`}
              control={
                <Checkbox
                  key={`${key}-checkbox`}
                  checked={value}
                  onChange={() => toggleInterest(key)}
                />
              }
              label={key}
            />
          ))}
        </Grid>
        <Button onClick={handleClick} variant="contained" color="primary">
          Save
        </Button>
      </Grid>
    </ProblemWrapper>
  );
};

export default Problem2;
