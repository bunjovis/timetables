export function createFromString(from) {
  // If stop is null, the location must be Eficode headquarters since all other legs start from a stop
  if (from.stop == null) {
    return `Eficode headquarters`;
  }
  return from.stop.name;
}
export function createToString(to) {
  // If stop is null, the location must be Helsinki train station
  if (to.stop == null) {
    return `Helsinki railway station`;
  }
  return to.stop.name;
}
export function createTimeString(time) {
  return `${time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()}:${
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
  }`;
}
export function createLegMapString(leg) {
  return `https://www.mapquestapi.com/staticmap/v5/map?key=HVMFDycJdaaG0wJGrEKizGFJO5wyWrfp&size=200,200&locations=${leg.from.lat},${leg.from.lon}|marker-start||${leg.to.lat},${leg.to.lon}|marker-end`;
}
