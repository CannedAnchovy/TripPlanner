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

