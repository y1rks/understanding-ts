const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "yota",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, 'author'],
};

person.role = [0, 'hoge']

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
