//prettier-ignore
exports.queryAdvSelect1 = (
  keyword,
  clientName,
  country,
  legalArea,
  continent,
  clientSector,
  matterSector,
  dateFrom,
  dateTo,
  isOngoing, 
  sectorTypeMenu, 
  legalAreaMenu
) => {
  const sqlBase = `SELECT [MATTER].[ID], [MATTER].[PUBLICCLIENTNAME],[MATTER].PUBLICDESCRIPTION, [ENCLIENT].CONFIDENTIALCLIENTNAME , STRING_AGG( ISNULL(cast(ENSECTORTYPE.LABEL+ '/'+ ENSECTOR.LABEL as NVARCHAR(MAX)), ' '), ',') As ClientSectors , STRING_AGG( ISNULL(cast(ENLEGALAREATYPE.NAME+ '/'+ enlegalarea.NAME as NVARCHAR(MAX)), ' '), ',') As LegalArea, STRING_AGG( ISNULL(cast([ENJURISDICTION].COUNTRYLABEL as NVARCHAR(MAX)), ' '), ',') As Countries, [MATTER].COMPLETIONDATE, STRING_AGG( ISNULL(cast(ENOFFICE.LABEL as NVARCHAR(MAX)), ''), ',') As Offices,  STRING_AGG( ISNULL(cast(ENPERSON.FIRSTNAME + ' '+ ENPERSON.LASTNAME as NVARCHAR(MAX)), ' '), ',') As People FROM (((((((((((((((((((((((([${process.env.sqlDb}].DBO.[OSUSR_5QH_MATTER] [MATTER] left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_CLIENT] [ENCLIENT] ON ([MATTER].[CLIENTID] = [ENCLIENT].[ID])) left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_CLIENTSECTOR] [ENCLIENTSECTOR] ON ([ENCLIENT].[ID] = [ENCLIENTSECTOR].[CLIENTID])) left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_SECTOR] [ENSECTOR] ON ([ENCLIENTSECTOR].[SECTORID] = [ENSECTOR].[ID])) left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_SECTORTYPE] [ENSECTORTYPE] ON ([ENSECTOR].[SECTORTYPEID] = [ENSECTORTYPE].[ID])) left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_MATTERCONTINENT] [MATTERCONTINENT] ON ([MATTER].[ID] = [MATTERCONTINENT].[MATTERID])) left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_CONTINENT] [ENCONTINENT] ON ([MATTERCONTINENT].[CONTINENTID] = [ENCONTINENT].[ID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_MATTERJURISDICTION] [MATTERJURISDICTION] ON ([MATTER].[ID] = [MATTERJURISDICTION].[MATTERID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_JURISDICTION] [ENJURISDICTION] ON ([MATTERJURISDICTION].[JURISDICTIONID] = [ENJURISDICTION].[ID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_LANGUAGE] [ENLANGUAGE] ON ([MATTER].[LANGUAGEID] = [ENLANGUAGE].[ID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_MATTERLEGALAREA] [MATTERLEGALAREA] ON ([MATTER].[ID] = [MATTERLEGALAREA].[MATTERID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_LEGALAREA] [ENLEGALAREA] ON ([MATTERLEGALAREA].[LEGALAREAID] = [ENLEGALAREA].[ID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_LEGALAREATYPE] [ENLEGALAREATYPE] ON ([ENLEGALAREA].[LEGALAREATYPEID] = [ENLEGALAREATYPE].[ID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_MATTERPERSON] [MATTERPERSON] ON ([MATTER].[ID] = [MATTERPERSON].[MATTERID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_PERSON] [ENPERSON] ON ([MATTERPERSON].[PERSONID] = [ENPERSON].[ID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_MATTEROFFICE] [MATTEROFFICE] ON ([MATTER].[ID] = [MATTEROFFICE].[MATTERID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_MATTERSECTOR] [MATTERSECTOR] ON ([MATTER].[ID] = [MATTERSECTOR].[MATTERID])) left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_SECTOR] [MSECTOR] ON ([MATTERSECTOR].[SECTORID] = [MSECTOR].[ID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_SECTORTYPE] [MSECTORTYPE] ON ([MSECTOR].[SECTORTYPEID] = [MSECTORTYPE].[ID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_OFFICE] [ENOFFICE] ON ([MATTEROFFICE].[OFFICEID] = [ENOFFICE].[ID]))     Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_RELATIONSHIPTYPE] [ENRELATIONSHIPTYPE] ON ([MATTEROFFICE].RelationshipTypeId = [ENRELATIONSHIPTYPE].[ID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_MATTERPRACTICEGROUP] [MATTERPRACTICEGROUP] ON ([MATTER].[ID] = [MATTERPRACTICEGROUP].[MATTERID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_PRACTICEGROUP] [ENPRACTICEGROUP] ON ([MATTERPRACTICEGROUP].[PRACTICEGROUPID] = [ENPRACTICEGROUP].[ID])) Left JOIN [${process.env.sqlDb}].DBO.[OSUSR_5QH_JOBDESCRIPTION] [ENJOBDESCRIPTION] ON ([ENPERSON].[JOBDESCRIPTIONID] = [ENJOBDESCRIPTION].[ID])) Left JOIN [${process.env.sqlDb}].DBO.[OSSYS_USER] [ENUSER] ON ([MATTER].[UPDATEDBY] = [ENUSER].[ID]))`;

  const groupSql = `Group by [MATTER].[ID], [MATTER].[PUBLICCLIENTNAME], [MATTER].PUBLICDESCRIPTION,[MATTER].COMPLETIONDATE, ENCLIENT.CONFIDENTIALCLIENTNAME`;

  const resCountry = country.map(r => r.id);
  const resLegal = legalArea.map(r => r.id);
  const resContinent = continent.map(r => r.id);
  const resSectorClient = clientSector.map(r => r.id);
  const resSectorMatter = matterSector.map(r => r.id);

  const today = new Date();
  const dateToday = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
  const date1970 = Date.parse('1970-01-01');
  //date different than null so it doesn't bring all ongoing matters
  const dateBeginning = '1900-01-02';
  //nulldate in outsystems is 1900-01-01 and not 1970
  const nullDate = '1900-01-01';
  
  let conditions = [];

  if (keyword !== '' && typeof keyword === 'string') {
    conditions.push(
      `and (MATTER.PUBLICCLIENTNAME like '@keyword' or [MATTER].PUBLICDESCRIPTION like '@keyword' or [ENCLIENT].CONFIDENTIALCLIENTNAME like '@keyword' or [MATTER].CONFIDENTIALDESCRIPTION like '@keyword' or [MATTER].KEYWORDS like '@keyword' or [MATTER].ADDITIONALINFORMATION like '@keyword' or ENOFFICE.LABEL like '@keyword' or ENPERSON.FIRSTNAME + ' '+ ENPERSON.LASTNAME like '@keyword' or ENPRACTICEGROUP.LABEL like '@keyword' or ENSECTORTYPE.LABEL like '@keyword' or ENLEGALAREATYPE.ID like '@keyword' or ENJURISDICTION.COUNTRYLABEL like '@keyword')`
    );
  }

  if (clientName !== '' && typeof clientName === 'string') {
    conditions.push(`and MATTER.PUBLICCLIENTNAME like '@clientName' `);
  }

  if (country.length > 0) {

    conditions.push(`and ENJURISDICTION.ID in (${resCountry})`);
        
  }

  if (legalArea.length > 0) {
    conditions.push(
      `and ENLEGALAREA.ID in (${resLegal})`
    );
  }

  if (continent.length > 0) {
    conditions.push(`and ENCONTINENT.ID in (${resContinent})`);
  }

  if (clientSector.length > 0) {
    conditions.push(
      `and ENSECTOR.ID in (${resSectorClient})`
    );
  }

  if (matterSector.length > 0) {
    conditions.push(
      `and MSECTOR.ID in  (${resSectorMatter})`
    );
  }

  if (Date.parse(dateFrom) && Date.parse(dateTo)) {
    conditions.push(
      `and Matter.COMPLETIONDATE BETWEEN @dateFrom and @dateTo`
    );
  }

  if ( Date.parse(dateTo) && !Date.parse(dateFrom) ) {
    conditions.push(
      `and Matter.COMPLETIONDATE BETWEEN '${dateBeginning}' and @dateTo`
    );
  }

  if (Date.parse(dateFrom) && !Date.parse(dateTo)) {
    conditions.push(
      `and Matter.COMPLETIONDATE BETWEEN @dateFrom and '${dateToday}'`
    );
  }
  if (isOngoing === true) {
    conditions.push(`and Matter.COMPLETIONDATE = '${nullDate}'`);
  }  
  if (sectorTypeMenu.id) {
    conditions.push(`and [ENSECTORTYPE].ID = @sectorTypeMenu`);
  }
    
  if (legalAreaMenu.id ) {
    conditions.push(`and [ENLEGALAREATYPE].ID = @legalAreaMenu`);
  }

  const sqlComposed1 = `${sqlBase} where 1 = 1 ${conditions.join(
    ' '
  )} ${groupSql}`;

  //console.log(sqlComposed1);
  return sqlComposed1;
};
