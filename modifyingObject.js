/*
7.Use const to declare variables that hold references to objects. Even though the object itself
may be modified, the reference remains constant.*/
const object={
    name:"Rohan",
    age:20,
  school:"KendriyaVidyalaya"
  }
  
  object.name="Ram"
  console.log(object.name)