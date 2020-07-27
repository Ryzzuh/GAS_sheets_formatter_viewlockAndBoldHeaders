// issue with spreasheet formating scripts crashing  
// because they can not edit bigquery sheets
// below is the framework to test if a sheet is a bigquery source
const getSheetSourceType = () => {
  SpreadsheetApp
  .getActive()
  .getSheets()
  .forEach((sheet)=>{console.log(sheet.getDataSourceTables()[0]=="DataSourceTable")}) // will return true for Bigquery sheets
}
