var a = $('ul.content').addClass('new-class');
console.log(a);

//* Promises, Async and Await
fetch('video.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
