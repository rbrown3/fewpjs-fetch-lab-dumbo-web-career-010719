const testVar = {}

function testFunc() {
  return "hi"
}



fetchBooks('https://anapioficeandfire.com/api/books')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
