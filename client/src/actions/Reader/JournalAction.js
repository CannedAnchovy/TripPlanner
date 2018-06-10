export const initJournals = (journals) => ({
  type: 'INIT_JOURNALS',
  journals: journals ,
});

export const changeJournalsDisplay = (id, dir, num) => ({
  type: 'CHANGE_JOURNALS_DISPLAY',
  id: id,
  dir: dir,
  displayNum: num,
});

export const journalFavoriteAdd = (id) => ({
  type: 'JOURNAL_FAVORITE_ADD',
  id: id,
});

export const journalFavoriteMinus = (id) => ({
  type: 'JOURNAL_FAVORITE_MINUS',
  id: id,
});

export const changeReadingJournal = (id) => ({
  type: 'CHANGE_READING_JOURNAL',
  id: id,
});