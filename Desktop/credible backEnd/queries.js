
// users and roles in credible - admin and editor
/* 
select  OSSYS_ROLE.NAME, ossys_User.NAME, ossys_Espace.NAME
from ossys_User
inner join OSSYS_USER_ROLE_T20 on ossys_User.ID = OSSYS_USER_ROLE_T20.USER_ID
inner join OSSYS_ROLE on OSSYS_USER_ROLE_T20.[ROLE_ID] = OSSYS_ROLE.[ID]
inner join ossys_Espace on OSSYS_ROLE.ESPACE_ID = ossys_Espace.ID
where (OSSYS_ROLE.NAME like '%Admin%' or OSSYS_ROLE.NAME like '%Editor%') 
and ESPACE_ID=83
*/



// temporary query with all matters and joining tables
/*
SELECT [MATTER].[PUBLICCLIENTNAME], [MATTER].PUBLICDESCRIPTION, [ENSECTOR].LABEL, [ENLEGALAREA].NAME, [ENJURISDICTION].COUNTRYLABEL, [MATTER].COMPLETIONDATE,[ENOFFICE].LABEL
FROM ((((((((((((((((([OUTSYSTEMS].DBO.[OSUSR_5QH_MATTER] [MATTER]
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_MATTERSECTOR] [MATTERSECTOR] ON ([MATTER].[ID] = [MATTERSECTOR].[MATTERID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_SECTOR] [ENSECTOR] ON ([MATTERSECTOR].[SECTORID] = [ENSECTOR].[ID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_SECTORTYPE] [ENSECTORTYPE] ON ([ENSECTOR].[SECTORTYPEID] = [ENSECTORTYPE].[ID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_MATTERLEGALAREA] [MATTERLEGALAREA] ON ([MATTER].[ID] = [MATTERLEGALAREA].[MATTERID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_LEGALAREA] [ENLEGALAREA] ON ([MATTERLEGALAREA].[LEGALAREAID] = [ENLEGALAREA].[ID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_LEGALAREATYPE] [ENLEGALAREATYPE] ON ([ENLEGALAREA].[LEGALAREATYPEID] = [ENLEGALAREATYPE].[ID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_MATTERCONTINENT] [MATTERCONTINENT] ON ([MATTER].[ID] = [MATTERCONTINENT].[MATTERID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_CONTINENT] [ENCONTINENT] ON ([MATTERCONTINENT].[CONTINENTID] = [ENCONTINENT].[ID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_MATTERJURISDICTION] [MATTERJURISDICTION] ON ([MATTER].[ID] = [MATTERJURISDICTION].[MATTERID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_JURISDICTION] [ENJURISDICTION] ON ([MATTERJURISDICTION].[JURISDICTIONID] = [ENJURISDICTION].[ID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_LANGUAGE] [ENLANGUAGE] ON ([MATTER].[LANGUAGEID] = [ENLANGUAGE].[ID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_CLIENT] [ENCLIENT] ON ([MATTER].[CLIENTID] = [ENCLIENT].[ID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_CLIENTSECTOR] [ENCLIENTSECTOR] ON ([ENCLIENT].[ID] = [ENCLIENTSECTOR].[CLIENTID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_MATTEROFFICE] [MATTEROFFICE] ON ([MATTER].[ID] = [MATTEROFFICE].[MATTERID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_OFFICE] [ENOFFICE] ON ([MATTEROFFICE].[OFFICEID] = [ENOFFICE].[ID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_MATTERPERSON] [MATTERPERSON] ON ([MATTER].[ID] = [MATTERPERSON].[MATTERID])) 
	Inner JOIN [OUTSYSTEMS].DBO.[OSUSR_5QH_RELATIONSHIPTYPE] [ENRELATIONSHIPTYPE] ON ([MATTEROFFICE].[RELATIONSHIPTYPEID] = [ENRELATIONSHIPTYPE].[ID]))

*/