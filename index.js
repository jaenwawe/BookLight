const Http = new XMLHttpRequest();
//https://jsonplaceholder.typicode.com/posts
// volumeInfo title
// "https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&fields=items(volumeInfo/description,volumeInfo/title)&key=AIzaSyAXwdxRzOHwF6uviyne4Vg20sXh_5Ek_Wc";

let query = "the+last+dragon";
let url =
  "https://www.googleapis.com/books/v1/volumes?q=" +
  query +
  "&fields=items(volumeInfo/authors,volumeInfo/title, volumeInfo/publisher)&maxResults=5&key=AIzaSyAXwdxRzOHwF6uviyne4Vg20sXh_5Ek_Wc";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  let books = Http.responseText;
  let booksObj = JSON.parse(Http.responseText);
  //let numbers = JSON.parse(booksObj);
  //console.log(numbers);
  console.log(booksObj.items[0]);
  let one = booksObj.items[1];
  console.log(one.volumeInfo.title);
  console.log(one.volumeInfo.publisher);

  for (let i = 0; i < booksObj.items.length; i++) {
    console.log("title: " + booksObj.items[i].volumeInfo.title);
    console.log("authors: " + booksObj.items[i].volumeInfo.authors);
    console.log("publisher: " + booksObj.items[i].volumeInfo.publisher);
  }

  // function greet(name) {
  //   console.log("Hello " + name);
  // }

  // function square(number) {
  //   return number * number;
  // }

  // console.log(valueOf one);

  //console.log(books.items.volumeInfo);
  // for (var key in books) {
  //   for (i = 0; i < books.length; i++)
  //   if (books.hasOwnProperty(key)) {
  //     console.log(key + " -> " + books[key]);
  //   }
  // }
  //let obj = JSON.stringify(books);

  //let booksObj = JSON.parse(Http.responseText);
  //let booksObj = JSON.parse(obj);
  // console.log(Http.responseText);

  // alert(booksObj);
};

// const interestRate = 0.3;
// let selectedCololors = ["red", "blue"];
// let person = {
//   name: "Jae",
//   age: 30,
// };

// console.log(square(2));
// greet(person.name);
// console.log(person);
// console.log(selectedCololors[0]);
