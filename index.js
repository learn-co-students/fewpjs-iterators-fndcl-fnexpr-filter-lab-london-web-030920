// Code your solution here

function findMatching(drivers, soughtName) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === soughtName.toLowerCase()
  );
}

function fuzzyMatch(source, testString) {
  return source.filter( possibleMatch =>
    possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  )
}

function matchName(drivers, string){ 
  return drivers.filter( driver => driver.name === string)
}