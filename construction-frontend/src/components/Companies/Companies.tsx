import { ChangeEvent } from 'react';

import { CompanyCard } from '../CompanyCard';
import { Company, Checkboxes } from '../../types';

import './companies.css';

interface CompaniesProps {
  companies: Company[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  checkboxes: Checkboxes;
}

export const Companies: React.FC<CompaniesProps> = ({
  companies,
  handleChange,
  value,
  checkboxes
}) => {
  const {
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
  } = checkboxes;

  return (
    <div className="companies_container">
      <input
        onChange={handleChange}
        placeholder="Search Company"
        value={value}
      />
      <div className="checkboxes_container">
        <label className="container_checkbox">
          <input type="checkbox" onChange={plumbingHandleChange} />
          <span className="checkmark"></span>
          Plumbing
        </label>
        <label className="container_checkbox">
          <input type="checkbox" onChange={excavationHandleChange} />
          <span className="checkmark"></span>
          Excavation
        </label>
        <label className="container_checkbox">
          <input type="checkbox" onChange={pipingHandleChange} />
          <span className="checkmark"></span>
          Piping
        </label>
        <label className="container_checkbox">
          <input type="checkbox" onChange={electricalHandleChange} />
          <span className="checkmark"></span>
          Electrical
        </label>
        <label className="container_checkbox">
          <input type="checkbox" onChange={constructionHandleChange} />
          <span className="checkmark"></span>
          Construction
        </label>
        <label className="container_checkbox">
          <input type="checkbox" onChange={architectureHandleChange} />
          <span className="checkmark"></span>
          Architecture
        </label>
      </div>
      <div className="companies_list">
        {companies
          .filter(el => {
            return plumbingCheckbox
              ? el.speciality === 'Plumbing'
              : excavationCheckbox
              ? el.speciality === 'Excavation'
              : pipingCheckbox
              ? el.speciality === 'Piping'
              : electricalCheckbox
              ? el.speciality === 'Electrical'
              : constructionCheckbox
              ? el.speciality === 'Constructions'
              : architectureCheckbox
              ? el.speciality === 'Architecture'
              : el;
          })
          ?.filter(comp =>
            comp.name.toLowerCase().includes(value.toLowerCase())
          )
          .map(company => (
            <CompanyCard company={company} key={company.name} />
          ))}
      </div>
    </div>
  );
};
