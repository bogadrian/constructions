exports.querySectorTypes = () => {
  const sqlSectorTypes = `select ID, LABEL from [${process.env.sqlDb}].DBO.[OSUSR_5QH_SECTORTYPE]`;
  return sqlSectorTypes;
};
