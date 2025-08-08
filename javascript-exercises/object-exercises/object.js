{
  // Map to Names
  console.log("******** MAP TO NAMES ********");

  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  let users = [ john, pete, mary ];
  let names = users.map(user => user.name);
  console.log( names ); // [ 'John', 'Pete', 'Mary' ]
}

{
  // Map to Objects
  console.log("******** MAP TO OBJECTS ********");

  let john = { name: "John", surname: "Smith", id: 1 };
  let pete = { name: "Pete", surname: "Hunt", id: 2 };
  let mary = { name: "Mary", surname: "Key", id: 3 };

  let users = [ john, pete, mary ];

  let usersMapped = users.map(user => ({ fullName: user.name + " " + user.surname, id: user.id }));

  console.log( usersMapped[0].id ) // 1
  console.log( usersMapped[0].fullName ) // John Smith
}

{
  // Sort Users by Age
  console.log("******** SORT USERS BY AGE ********");
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let arr = [ pete, john, mary ];

  function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
  }
  sortByAge(arr);

  console.log(arr[0].name); // John
  console.log(arr[1].name); // Mary
  console.log(arr[2].name); // Pete
}

{
  // Get Average Age
  console.log("******** GET AVERAGE AGE ********");
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };

  let arr = [ pete, john, mary ];

  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }

  console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
}

{
  // Create Keyed Object from Array
  console.log("******** CREATE KEYED OBJECT FROM ARRAY********");

  function groupById(arr) {
      return arr.reduce((acc, user) => {
          acc[user.id] = user;
          return acc;
      }, {});
  }

  let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

  let usersById = groupById(users);

  console.log(usersById);
}
