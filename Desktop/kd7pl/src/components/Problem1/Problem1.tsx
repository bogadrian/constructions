import Input from '@mui/material/Input';
import { useState } from 'react';
import ProblemWrapper from '../ProblemWrapper/ProblemWrapper';

const Problem1 = () => {
  const [pin, setPin] = useState('');

  const onPinEntered = () => {
    console.log('pin', pin);
    if (pin === '1234') {
      alert('successful');
      setPin('');
    } else {
      alert('Wrong password!');
      setPin('');
    }
  };

  const handlePin = ({ target: { value } }: { target: { value: string } }) => {
    console.log('value', value);

    setPin(value);
    if (value.length === 4) {
      onPinEntered();
    }
  };

  return (
    <ProblemWrapper
      title="1. Wrong Pin Bug"
      description="The correct pin is '1234' but it seems users are not be able to login the app even if they enter the correct pin."
    >
      <Input
        placeholder="Password"
        type="password"
        value={pin}
        onChange={handlePin}
      />
    </ProblemWrapper>
  );
};

export default Problem1;
