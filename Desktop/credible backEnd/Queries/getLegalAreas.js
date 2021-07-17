exports.queryLegalAreaTypes = () => {
  const sqlLegalAreas = `select ID, NAME from [${process.env.sqlDb}].DBO.[OSUSR_5QH_LEGALAREATYPE]`;
  return sqlLegalAreas;
};
