//room for queries which are static and don't receive any parameters
exports.staticInsertQueries = () => {
  //sql to insert into client table
  const insertClient = `  insert into [${process.env.sqlDb}].DBO.OSUSR_5QH_CLIENT (CONFIDENTIALCLIENTNAME, CLIENTNUMBER, PUBLICCLIENTNAME) OUTPUT Inserted.ID  VALUES(@confidentialClientName, @clientNumber, @publicClientName)`;
  //sql to insert into matter
  const insertMatter = `  insert into [${process.env.sqlDb}].DBO.OSUSR_5QH_MATTER (MATTERNAME, NUMBER, PUBLICCLIENTNAME, ISCONFIDENTIAL, CLIENTID, STARTDATE, COMPLETIONDATE, DEALVALUE, LANGUAGEID, PUBLICDESCRIPTION, CONFIDENTIALDESCRIPTION, ADDITIONALINFORMATION, UPDATEDON, UPDATEDBY, KEYWORDS)  OUTPUT Inserted.ID VALUES  (@mName, @mNumber, @mPublicClientname, @mIsConfidential, @mClientId, @mStartDate, @mCompletionDate, @mDealValue, @mLanguageId, @mPublicDescription,@mConfidentialDescription, @mAdditionalInformation, @mUpdatedOn, @mUpdatedBy, @mKeywords)`;

  const insertBD = `insert into [${process.env.sqlDb}].DBO.OSUSR_5QH_MATTERPERSON (MATTERID, PERSONID, RELATIONSHIPTYPEID, ROLE) values 
  (@matterIdBD, @personIdBD, @relationshipTypeIdBD, @roleBD)`;

  return {
    insertClientAction: insertClient,
    insertMatterAction: insertMatter,
    insertBDAction: insertBD
  };
};

exports.insertIntoClientSectors = clientSectors => {
  let clientSectorQuery = `insert into [${process.env.sqlDb}].DBO.OSUSR_5QH_CLIENTSECTOR (CLIENTID, SECTORID) VALUES `;
  clientSectors.forEach((element, i) => {
    clientSectorQuery += ` (@clientId, ${element})`;
    if (i !== clientSectors.length - 1) {
      clientSectorQuery += ',';
    }
  });
  return clientSectorQuery;
};
exports.insertIntoMatterContinents = continents => {
  let continentQuery = `insert into [${process.env.sqlDb}].DBO.OSUSR_5QH_MATTERCONTINENT (MATTERID, CONTINENTID) values `;
  continents.forEach((element, i) => {
    if (i !== continents.length - 1) {
      continentQuery += `(@matterId_c, ${element}),`;
      return;
    }
    continentQuery += `(@matterId_c, ${element})`;
  });
  return continentQuery;
};

exports.insertIntoMatterLegalAreas = legalAreas => {
  let legalAreasQuery = `insert into [${process.env.sqlDb}].DBO.OSUSR_5QH_MATTERLEGALAREA (MATTERID, LEGALAREAID) values `;
  legalAreas.forEach((element, i) => {
    if (i !== legalAreas.length - 1) {
      legalAreasQuery += `(@matterId_la, ${element}),`;
      return;
    }
    legalAreasQuery += `(@matterId_la, ${element})`;
  });
  return legalAreasQuery;
};

exports.insertIntoMatterSectors = matterSectors => {
  let matterSectorsQuery = `insert into [${process.env.sqlDb}].DBO.OSUSR_5QH_MATTERSECTOR (SECTORID, MATTERID) values `;
  matterSectors.forEach((element, i) => {
    if (i !== matterSectors.length - 1) {
      matterSectorsQuery += `(${element}, @matterId_s),`;
      return;
    }
    matterSectorsQuery += `(${element}, @matterId_s)`;
  });
  return matterSectorsQuery;
};

exports.insertIntoMatterJurisdictions = jurisdictions => {
  let matterJuriQuery = `insert into [${process.env.sqlDb}].DBO.OSUSR_5QH_MATTERJURISDICTION (MATTERID, JURISDICTIONID) values`;

  jurisdictions.forEach((element, i) => {
    if (i !== jurisdictions.length - 1) {
      matterJuriQuery += `(@matterId_j, ${element}),`;
      return;
    }
    matterJuriQuery += `(@matterId_j, ${element})`;
  });
  return matterJuriQuery;
};

exports.insertIntoMatterPerson = persons => {
  let matterPersonQuery = `insert into [${process.env.sqlDb}].DBO.OSUSR_5QH_MATTERPERSON (MATTERID, PERSONID, RELATIONSHIPTYPEID, ROLE) values `;

  persons.forEach((element, i) => {
    if (i !== persons.length - 1) {
      matterPersonQuery += `(@matterId_p, ${element.id}, ${element.relationshipTypeId}, '${element.role}'),`;
      return;
    }
    matterPersonQuery += `(@matterId_p, ${element.id}, ${element.relationshipTypeId}, '${element.role}')`;
  });
  return matterPersonQuery;
};

exports.insertIntoMatterOffice = offices => {
  let matterOfficeQuery = `insert into [${process.env.sqlDb}].DBO.OSUSR_5QH_MATTEROFFICE (OFFICEID, MATTERID, RELATIONSHIPTYPEID) values `;

  offices.forEach((element, i) => {
    if (i !== offices.length - 1) {
      matterOfficeQuery += `(${element.id},@matterId_O, ${element.relationshipTypeId}),`;
      return;
    }
    matterOfficeQuery += `(${element.id},@matterId_O, ${element.relationshipTypeId})`;
  });
  return matterOfficeQuery;
};

exports.insertIntoMatterPracticeGroup = practices => {
  let matterPracticeQuery = `insert into [${process.env.sqlDb}].DBO.OSUSR_5QH_MATTERPRACTICEGROUP (MATTERID, PRACTICEGROUPID, RELATIONSHIPTYPEID) values `;

  practices.forEach((element, i) => {
    if (i !== practices.length - 1) {
      matterPracticeQuery += `(@matterId_PG, ${element.id},  ${element.relationshipTypeId}),`;
      return;
    }
    matterPracticeQuery += `(@matterId_PG, ${element.id},  ${element.relationshipTypeId})`;
  });
  return matterPracticeQuery;
};
