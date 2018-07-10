export const convertDate = date => {
  let tempDate = new Date(date),
  month = '' + (tempDate.getMonth() + 1),
  day = '' + tempDate.getDate(),
  year = tempDate.getFullYear();

if (month.length < 2) month = '0' + month;
if (day.length < 2) day = '0' + day;

return [year, month, day].join('-');
}
