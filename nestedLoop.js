/*6. Write nested loops where the inner loop reuses the loop variable of the outer loop. Use let
for the inner loop variable to avoid unexpected behavior.*/

for (let i = 1; i <= 3; i++) {
    console.log(i);
  
    for (let i = 1; i <= 3; i++) {
      console.log(i);
    }
  }
  