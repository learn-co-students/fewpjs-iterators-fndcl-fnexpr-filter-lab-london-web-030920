function findMatching(drivers, name){
    let matchingDrivers = drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase()
    })
   return matchingDrivers
}

    function fuzzyMatch(source, testString) {
        return source.filter( possibleMatch =>
          possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
        )
      }
//learn the one above about looking into indexOf

function matchName(driver, name){
   let matchingDriver = driver.filter(driver => driver.name === name)
    return matchingDriver
}

