export const getFormateDate = (date = new Date()) => {
  let mm = date.getMonth() + 1; // getMonth() is zero-based
  let dd = date.getDate();

  return [date.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('-');
};

export const getNextDate = (formateDate) => {
  let nextDate = new Date(formateDate);
  nextDate.setDate(nextDate.getDate() + 1);
  return getFormateDate(nextDate);
}

export const getDateArray = (startDate, length) => {
  let array = [];
  let date = new Date(startDate);
  array.push(date);
  for(let i=1; i<length; i++) {
    let nextDate = new Date();
    nextDate.setDate(array[i-1].getDate()+1);
    array.push(nextDate);
  }
  return array.map((date) => {
    return date.getMonth() + 1 + '/' + date.getDate(); 
  })
}

