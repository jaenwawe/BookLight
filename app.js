var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require("fs");

const Http = new XMLHttpRequest();

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
  let booksObj = Http.responseText;

  fs.writeFile("./list.json", booksObj, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("finished creating list");
    }
  });
};

fs.readFile("./list.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log(err);
  } else {
    let words = JSON.parse(jsonString);
    // console.log("title: " + words.items[0].volumeInfo.title);

    for (let i = 0; i < words.items.length; i++) {
      console.log(`Press ${i} to save this book to your book list`);
      console.log("title: " + words.items[i].volumeInfo.title);
      console.log("authors: " + words.items[i].volumeInfo.authors);
      console.log("publisher: " + words.items[i].volumeInfo.publisher);
    }
  }
});
