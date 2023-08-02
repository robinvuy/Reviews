const report = (results) => {
  const colours = results.split(', ');
  const colourCounter = {
    Green: 0,
    Amber: 0,
    Red: 0
  };

  colours.forEach(colour => {
    if (colour === "Green" || colour === "Amber" || colour === "Red") {
    colourCounter[colour] += 1;
  }
  });

  let result = []

  for (let colour in colourCounter) {
    if (colourCounter[colour] > 0) {
    result.push(`${colour}: ${colourCounter[colour]}`);
    };
  };

  return result.join('\n');

} 


    


module.exports = report;