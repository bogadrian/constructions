exports.dropDownQueries = () => {
  const sqlSectors = `select OSUSR_5QH_SECTORTYPE.id TypeId, OSUSR_5QH_SECTORTYPE.LABEL Type, OSUSR_5QH_SECTOR.id SubTypeId, OSUSR_5QH_SECTOR.LABEL Subtype from [${process.env.sqlDb}].DBO.OSUSR_5QH_SECTOR inner join OSUSR_5QH_SECTORTYPE on SECTORTYPEID = OSUSR_5QH_SECTORTYPE.id`;

  const sqlLegalAreas = `SELECT OSUSR_5QH_LEGALAREATYPE.id TypeId, OSUSR_5QH_LEGALAREATYPE.NAME Type, OSUSR_5QH_LEGALAREA.id SubTypeId, OSUSR_5QH_LEGALAREA.NAME Subtype from [${process.env.sqlDb}].DBO.OSUSR_5QH_LEGALAREATYPE inner join OSUSR_5QH_LEGALAREA on LEGALAREATYPEID = OSUSR_5QH_LEGALAREATYPE.id`;

  const sqlCountries = `select OSUSR_5QH_JURISDICTION.ID Id, OSUSR_5QH_JURISDICTION.COUNTRYLABEL Country from [${process.env.sqlDb}].DBO.OSUSR_5QH_JURISDICTION`;

  return {
    querySectors: sqlSectors,
    queryLegalAreas: sqlLegalAreas,
    queryCountries: sqlCountries
  };
};
