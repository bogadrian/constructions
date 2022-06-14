import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import getUniqueId from "../../utils/getUniqueId";
import buyItem from "../../api/buyItem";
import ProblemWrapper from "../ProblemWrapper";

const styles = {
  button: { my: 1 }
};

const Problem3 = () => {
  const [counter, setCounter] = useState(0);
  const uniqueId = getUniqueId();

  const onClickCounter = () => {
    console.log(counter);
    setCounter((c) => c + 1);
  };

  const onClickCounterRequest = () => {
    buyItem({ count: counter, uniqueId });
  };

  return (
    <ProblemWrapper
      title="3. Unneccessary Re-render"
      description="In this section, we need to generate a unique id that we are going to send
                    with payment payload. However, we encounter that problem.
                    Unique id is changing in each click. We need to fix it!"
    >
      <Typography>Your unique value: {uniqueId}</Typography>
      <Button sx={styles.button} variant="contained" onClick={onClickCounter}>
        Counter
      </Button>
      <Button
        sx={styles.button}
        variant="contained"
        onClick={onClickCounterRequest}
      >
        Counter Request
      </Button>
    </ProblemWrapper>
  );
};

export default Problem3;
