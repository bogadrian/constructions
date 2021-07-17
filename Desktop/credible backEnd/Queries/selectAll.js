exports.selectByMatterId = () => {
  //matter and client
  const selectMatterClient = `select * from OSUSR_5QH_MATTER 
    inner join OSUSR_5QH_CLIENT on OSUSR_5QH_MATTER.CLIENTID = OSUSR_5QH_CLIENT.ID
    where OSUSR_5QH_MATTER.ID =@selectedMatterId`;

  const selectContinents = `select STRING_AGG( ISNULL(cast(OSUSR_5QH_CONTINENT.LABEL as NVARCHAR(MAX)), ' '), ',') As Continents  
    from OSUSR_5QH_MATTERCONTINENT
    inner join OSUSR_5QH_CONTINENT on OSUSR_5QH_MATTERCONTINENT.CONTINENTID = OSUSR_5QH_CONTINENT.ID
    where OSUSR_5QH_MATTERCONTINENT.MATTERID = @matterIdContinent`;

  const selectLegalAreas = `select STRING_AGG( ISNULL(cast(OSUSR_5QH_LEGALAREA.NAME as NVARCHAR(MAX)), ' '), ',') As LegalAreas  
    from OSUSR_5QH_MATTERLEGALAREA
    inner join OSUSR_5QH_LEGALAREA on OSUSR_5QH_MATTERLEGALAREA.LEGALAREAID = OSUSR_5QH_LEGALAREA.ID
    inner join OSUSR_5QH_MATTER on MATTERID = OSUSR_5QH_MATTER.ID
    where OSUSR_5QH_MATTER.id = @matterIdLegalAreas`;

  const selectMatterSectors = `select STRING_AGG( ISNULL(cast(OSUSR_5QH_SECTOR.LABEL as NVARCHAR(MAX)), ' '), ',') As MatterSectors  
    from OSUSR_5QH_MATTERSECTOR 
    inner join OSUSR_5QH_SECTOR on OSUSR_5QH_MATTERSECTOR.SECTORID = OSUSR_5QH_SECTOR.ID
    inner join OSUSR_5QH_MATTER on MATTERID = OSUSR_5QH_MATTER.ID
    where OSUSR_5QH_MATTER.id = @matterIdSectors`;

  const selectClientSectors = `select STRING_AGG( ISNULL(cast(OSUSR_5QH_SECTOR.LABEL as NVARCHAR(MAX)), ' '), ',') As ClientSectors  
    from OSUSR_5QH_CLIENTSECTOR 
    inner join OSUSR_5QH_SECTOR on OSUSR_5QH_CLIENTSECTOR.SECTORID = OSUSR_5QH_SECTOR.ID
    inner join OSUSR_5QH_CLIENT on CLIENTID = OSUSR_5QH_CLIENT.ID
    inner join OSUSR_5QH_MATTER on OSUSR_5QH_MATTER.CLIENTID = OSUSR_5QH_CLIENT.ID
    where OSUSR_5QH_MATTER.id = @matterIdClientSectors`;

  const selectJurisdictions = `select STRING_AGG( ISNULL(cast(OSUSR_5QH_JURISDICTION.COUNTRYLABEL as NVARCHAR(MAX)), ' '), ',') As Countries
    from OSUSR_5QH_MATTERJURISDICTION
    inner join OSUSR_5QH_MATTER on MATTERID = OSUSR_5QH_MATTER.ID
    inner join OSUSR_5QH_JURISDICTION on JURISDICTIONID = OSUSR_5QH_JURISDICTION.ID
    where OSUSR_5QH_MATTER.id = @matterIdJurisdiction`;

  const selectPersons = `select OSUSR_5QH_PERSON.ID, FIRSTNAME+' '+ LASTNAME Name, role, OSUSR_5QH_RELATIONSHIPTYPE.LABEL, MATTERID
    from OSUSR_5QH_MATTERPERSON
    inner join OSUSR_5QH_PERSON on OSUSR_5QH_PERSON.id = PERSONID
    inner join OSUSR_5QH_RELATIONSHIPTYPE on OSUSR_5QH_MATTERPERSON.RELATIONSHIPTYPEID = OSUSR_5QH_RELATIONSHIPTYPE.id
    inner join OSUSR_5QH_MATTER on OSUSR_5QH_MATTER.id = MATTERID
    where OSUSR_5QH_MATTER.id=@matterIdPerson`;

  const selectOffices = `select OSUSR_5QH_OFFICE.ID, OSUSR_5QH_OFFICE.LABEL, OSUSR_5QH_RELATIONSHIPTYPE.LABEL Relationship
    from OSUSR_5QH_MATTEROFFICE
    inner join OSUSR_5QH_MATTER on MATTERID = OSUSR_5QH_MATTER.ID
    inner join OSUSR_5QH_OFFICE on OFFICEID = OSUSR_5QH_OFFICE.id
    inner join OSUSR_5QH_RELATIONSHIPTYPE on RELATIONSHIPTYPEID = OSUSR_5QH_RELATIONSHIPTYPE.ID
    where OSUSR_5QH_MATTER.id = @matterIdOffice`;

  const selectPracticeGroups = `select OSUSR_5QH_PRACTICEGROUP.ID, OSUSR_5QH_PRACTICEGROUP.LABEL, OSUSR_5QH_RELATIONSHIPTYPE.LABEL Relation
    from OSUSR_5QH_MATTERPRACTICEGROUP
    inner join OSUSR_5QH_MATTER on MATTERID = OSUSR_5QH_MATTER.ID
    inner join OSUSR_5QH_PRACTICEGROUP on PRACTICEGROUPID = OSUSR_5QH_PRACTICEGROUP.id
    inner join OSUSR_5QH_RELATIONSHIPTYPE on RELATIONSHIPTYPEID = OSUSR_5QH_RELATIONSHIPTYPE.ID
    where OSUSR_5QH_MATTER.id = @matterIdPG`;

  const selectBD = `select OSUSR_5QH_PERSON.id, FIRSTNAME+' '+ LASTNAME Name, MATTERID 
    from OSUSR_5QH_MATTERPERSON
    inner join OSUSR_5QH_PERSON on OSUSR_5QH_PERSON.id = PERSONID
    inner join OSUSR_5QH_RELATIONSHIPTYPE on OSUSR_5QH_MATTERPERSON.RELATIONSHIPTYPEID = OSUSR_5QH_RELATIONSHIPTYPE.id
    inner join OSUSR_5QH_MATTER on OSUSR_5QH_MATTER.id = MATTERID
    where OSUSR_5QH_MATTER.ID = @matterIdbdPerson and RELATIONSHIPTYPEID = 2`;

  return {
    selectMatterClientAction: selectMatterClient,
    selectContinentsAction: selectContinents,
    selectClientSectorsAction: selectClientSectors,
    selectLegalAreasAction: selectLegalAreas,
    selectMatterSectorsAction: selectMatterSectors,
    selectJurisdictionsAction: selectJurisdictions,
    selectMatterPersonsAction: selectPersons,
    selectMatterOfficesAction: selectOffices,
    selectMatterPracticegroupAction: selectPracticeGroups,
    selectMatterBDAction: selectBD
  };
};
