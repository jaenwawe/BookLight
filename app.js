var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require("fs");

const Http = new XMLHttpRequest();
//https://jsonplaceholder.typicode.com/posts
// volumeInfo title
// "https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&fields=items(volumeInfo/description,volumeInfo/title)&key=AIzaSyAXwdxRzOHwF6uviyne4Vg20sXh_5Ek_Wc";

let query = "the";
for (let i = 2; i < process.argv.length; i++) {
  query = query + `+${process.argv[i]}`;
}
console.log(query);

let url =
  "https://www.googleapis.com/books/v1/volumes?q=" +
  query +
  "&fields=items(volumeInfo/authors,volumeInfo/title, volumeInfo/publisher)&maxResults=5&key=AIzaSyAXwdxRzOHwF6uviyne4Vg20sXh_5Ek_Wc";

console.log(url);
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  //let books = Http.responseText;
  let booksObj = Http.responseText;

  //let numbers = JSON.parse(booksObj);
  //console.log(numbers);
  //console.log(booksObj);
  //   console.log(booksObj.items[0]);
  // let one = booksObj.items[1];
  // //  console.log(one.volumeInfo.title);
  //   console.log(one.volumeInfo.publisher);

  //notice async  does after first. writes over text content
  fs.writeFile("./list.json", booksObj, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("finished creating list");
    }
  });
  //var obj = require("./list.json");
  console.log("after asynchronous read");
  //var one = obj.
  // for (let i = 0; i < ob.items.length; i++) {
  //   console.log("title: " + obj.items[i].volumeInfo.title);
  //   console.log("authors: " + obj.items[i].volumeInfo.authors);
  //   console.log("publisher: " + obj.items[i].volumeInfo.publisher);
  // }
};

fs.readFile("./list.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log(err);
  } else {
   
  //  console.log("title: " + jsonString."items"[0].volumeInfo.title);

    // for (let i = 0; i < obj.items.length; i++) {
    //   console.log("title: " + obj[i].volumeInfo.title);
    //   console.log("authors: " + obj[i].volumeInfo.authors);
    //   console.log("publisher: " + obj[i].volumeInfo.publisher);
    // }
  }
});
console.log("after asynchronous read");
