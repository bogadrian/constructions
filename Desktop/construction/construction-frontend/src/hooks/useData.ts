import { useEffect, useState, ChangeEvent } from 'react';
import { Company } from '../types';

export const useData = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [error, setError] = useState('');
  const [value, setValue] = useState('');

  const [plumbingCheckbox, setPlumbingCheckbox] = useState(false);
  const plumbingHandleChange = () => {
    setPlumbingCheckbox(prev => !prev);
  };
  const [excavationCheckbox, setExcavationCheckbox] = useState(false);
  const excavationHandleChange = () => {
    setExcavationCheckbox(prev => !prev);
  };
  const [pipingCheckbox, setPipingCheckbox] = useState(false);
  const pipingHandleChange = () => {
    setPipingCheckbox(prev => !prev);
  };
  const [electricalCheckbox, setElectricalCheckbox] = useState(false);
  const electricalHandleChange = () => {
    setElectricalCheckbox(prev => !prev);
  };
  const [constructionCheckbox, setConstructionCheckbox] = useState(false);
  const constructionHandleChange = () => {
    setConstructionCheckbox(prev => !prev);
  };
  const [architectureCheckbox, setArchitectureCheckbox] = useState(false);
  const architectureHandleChange = () => {
    setArchitectureCheckbox(prev => !prev);
  };

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      try {
        const res = await fetch('http://localhost:8080/api/v1/getData');
        const response = await res.json();

        if (res && res.status === 200 && mounted) {
          setCompanies(response.data);
        }
      } catch (err: unknown) {
        setError((err as Error).message);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const checkboxes = {
    plumbingCheckbox,
    plumbingHandleChange,
    excavationCheckbox,
    excavationHandleChange,
    pipingCheckbox,
    pipingHandleChange,
    electricalCheckbox,
    electricalHandleChange,
    constructionCheckbox,
    constructionHandleChange,
    architectureCheckbox,
    architectureHandleChange
  };

  return { companies, handleChange, value, error, checkboxes };
};
