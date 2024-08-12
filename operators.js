/*Write a program that compares two numbers and displays whether they are equal, not equal,
greater than, or less than each other. Use various comparison operators such as ==, ===, !=, !==,
&gt;, &lt;, &gt;=, and &lt;=.*/

function operators(a, b){
    const num1=prompt("enter the first number:")
    const num2=prompt("enter the second number:")
    const equal=num1==num2
    const notequal=num1!=num2
    const greater=num1>num2
    const less=num1<num2
    const greaterorequal=num1>=num2
    const lessorequal=num1<=num2
    alert(`comparing two numbers${num1}and${num2}
    ==:${equal}
    !=:${notequal}
    >:${greater}
    <:${less}
    >=:${greaterorequal}
    <=:${lessorequal}`)
  }operators()