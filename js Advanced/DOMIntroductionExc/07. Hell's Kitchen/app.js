function solve() {

   // capture elements
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector("#inputs>textarea");
   let bestRestaurantResult = document.querySelector("#bestRestaurant>p");
   let workersResut = document.querySelector("#workers>p");

   function onClick() {
      let arr = JSON.parse(input.value);
      let restaurants = {};

      // comparing workers
      arr.forEach(element => {
         let tokens = element.split(" - ");
         let name = tokens[0];
         let workersArr = tokens[1].split(", ");
         let workers = [];

         for (let worker of workersArr) {
            let workerToken = worker.split(" ");
            let salary = Number(workerToken[1]);
            workers.push({
               name: workerToken[0],
               salary
            });
         }

         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }
         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
         let bestSalary = workers[0].salary;
         let avgSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) /
            workers.length;

         restaurants[name] = {
            workers,
            avgSalary,
            bestSalary
         };
      });

      // comparing restaurnats
      let bestRestarantSalary = 0;
      let bestRestaurant = undefined;

      for (let name in restaurants) {
         if (restaurants[name].avgSalary > bestRestarantSalary) {
            bestRestaurant = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               avgSalary: restaurants[name].avgSalary
            };
            bestRestarantSalary = restaurants[name].avgSalary;
         }
      }

      // formating output
      bestRestaurantResult.textContent = `Name: ${bestRestaurant
         .name} Average Salary: ${bestRestaurant.avgSalary
            .toFixed(2)} Best Salary: ${bestRestaurant.bestSalary
               .toFixed(2)}`;

      let result = [];
      bestRestaurant.workers.forEach((worker) => 
      {result.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
   });
   workersResut.textContent = result.join(" ");
   }
}