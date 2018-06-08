export class Event {
  constructor(time, place) {
    this.time = time;
    this.place = place;
    this.notes = [];
  }
}

export class Day {
  constructor(events) {
    this.events = events;
  }
}

export class Trip {
  constructor(name, startDate, dates) {
    this.name = name;
    this.startDate = startDate
    this.dates = dates;
  }
}