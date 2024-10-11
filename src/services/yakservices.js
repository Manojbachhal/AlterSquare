const fs = require("fs");
const path = require("path");

const herdFilePath = path.join(__dirname, "../config/herd.json");

// function to read the herd data from static file herd.json
const readHerdData = () => {
  const data = fs.readFileSync(herdFilePath);
  return JSON.parse(data).herd;
};

// herd data
const herd = readHerdData();

// calculate stock
const calculateStock = (days) => {
  // Yak dies at the age of 10 so we dont need calculated for days >999
  if (days > 999) {
    days = 999;
  }

  let milk = 0;
  let skins = 0;

  herd.forEach((yak) => {
    // conversion of yak age from years to days
    let yakAgeInDays = yak.age * 100;
    let lastShavedDay = yakAgeInDays;

    for (let day = 0; day < days; day++) {
      const currentAgeInDays = yakAgeInDays + day;

      // Yak dies at age of 10 years (1000 days)
      if (currentAgeInDays >= 1000) continue;

      // Milk calculation (for female yaks)
      if (yak.sex === "f") {
        const dailyMilk = 50 - currentAgeInDays * 0.03;
        milk += dailyMilk > 0 ? dailyMilk : 0;
      }

      // Calculate skins if the yak is older than 1 year
      if (currentAgeInDays >= 100) {
        const shaveInterval = Math.floor(8 + currentAgeInDays * 0.01);

        // Check interval since the last shave
        if (day + currentAgeInDays > lastShavedDay + shaveInterval) {
          skins++;
          lastShavedDay = day + currentAgeInDays;
        }
      }
    }
  });

  return { milk: parseFloat(milk.toFixed(2)), skins };
};

const calculateHerd = (days) => {
  if (days > 999) {
    // Yak dies at the age of 10 so we dont need calculated for days >999
    return [];
  }

  return herd
    .map((yak) => {
      // Convert the yaks age in years to days
      const initialAgeInDays = yak.age * 100;

      // Current age in days
      const currentAgeInDays = initialAgeInDays + days;

      // Check if the yak is alive
      if (currentAgeInDays >= 1000) {
        return null;
      }

      // Convert current age in days back to years
      const currentAgeInYears = currentAgeInDays / 100;

      // Calculating the shaving interval based on current age in days
      const shavingIntervalDays = Math.floor(8 + currentAgeInDays * 1.0);

      // Determine the last shaved age
      let lastShavedAgeInDays = initialAgeInDays;

      // update lastShavedAgeInDays based on the shavaing interval
      while (lastShavedAgeInDays + shavingIntervalDays <= currentAgeInDays) {
        lastShavedAgeInDays += shavingIntervalDays;
      }

      // Calculate last shaved age in years
      let ageLastShavedInYears = lastShavedAgeInDays / 100;

      return {
        name: yak.name,
        age: parseFloat(currentAgeInYears.toFixed(2)), // Round age to 2 decimal places
        "age-last-shaved": parseFloat(ageLastShavedInYears.toFixed(1)), // Round to 1 decimal place
      };
    })
    .filter((yak) => yak !== null); // Remove any null entries means the yak is dead
};

module.exports = {
  calculateStock,
  calculateHerd,
};
