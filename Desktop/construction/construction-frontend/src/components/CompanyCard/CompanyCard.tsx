import { Company } from '../../types';

import './companyCard.css';

export const CompanyCard: React.FC<{ company: Company }> = ({ company }) => {
  return (
    <div className="card_container">
      <h3 className="company_name">{company.name}</h3>
      <img src={company.logo} alt="logo" className="logo" />
      <h4>{company.speciality}</h4>
      <h4>{company.city}</h4>
    </div>
  );
};
