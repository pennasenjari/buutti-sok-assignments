/* Note: Developed in collaboration with ChatGPT */

function raceLap() {
  return new Promise((resolve, reject) => {
      // Simulate a chance of crashing
      if (Math.random() < 0.1) { // 10% crashes
          reject("Crashed");
      } else {
          // Generate random lap time between 20 and 25 seconds
          const lapTime = 20 + Math.random() * 5;
          resolve(lapTime);
      }
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function race(drivers, numberOfLaps) {
  const stats = {};

  // Initialize stats for each driver
  for (const driver of drivers) {
      stats[driver] = {
          totalTime: 0,
          bestLap: Infinity,
          crashed: false,
      };
  }

  for (let lap = 1; lap <= numberOfLaps; lap++) {
      console.log(`--- Lap ${lap} ---`);
      for (const driver of drivers) {
          if (stats[driver].crashed) {
              console.log(`${driver} has crashed and will not continue.`);
              continue; // Skip if the driver has crashed
          }

          try {
              const lapTime = await raceLap();
              stats[driver].totalTime += lapTime;
              stats[driver].bestLap = Math.min(stats[driver].bestLap, lapTime);
              console.log(`${driver} completed the lap in ${lapTime.toFixed(2)} seconds.`);
          } catch (error) {
              stats[driver].crashed = true;
              console.log(`${driver} has crashed!`);
          }

          // Add a 1-second delay after each driver's lap
          await sleep(1000);
      }
  }

  // Filter out crashed drivers
  const finishedDrivers = drivers.filter((driver) => !stats[driver].crashed);

  if (finishedDrivers.length === 0) {
      return "No driver finished the race!";
  }

  // Find the winner (driver with the lowest total time)
  const winner = finishedDrivers.reduce((prev, curr) =>
      stats[curr].totalTime < stats[prev].totalTime ? curr : prev
  );

  return {
      winner,
      stats: stats[winner],
  };
}

(async () => {
  const drivers = ["Keke Rosberg", "Mika Häkkinen", "Heikki Kovalainen", "Valtteri Bottas"];
  const numberOfLaps = 2;
  const result = await race(drivers, numberOfLaps);
  console.log(`\nThe winner is ${result.winner} with total race time of \
${result.stats.totalTime.toFixed(2)} seconds.`);
})();
