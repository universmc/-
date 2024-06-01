const performanceCheck = () => {
    const startTime = performance.now();
    const data = asyncJson('src/json/dev.json');
    data.then(() => {
      const endTime = performance.now();
      const timeDiff = endTime - startTime;
      console.log(`Temps d'exécution: ${timeDiff} ms`);
    });
  };
  
  performanceCheck();