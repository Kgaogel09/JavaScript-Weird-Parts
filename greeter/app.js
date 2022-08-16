var g = G$('Kelly', 'Rowland').setLang('es').greet(true).log();
console.log(g);

//* lets use our object on the click of the login button
$('#loginBtn').click(function () {
  //* creates new 'Greeter' object
  var loginGrt = G$('Ben', 'Boo');

  //* hides the login
  $('#login').hide();

  //* fires off an HTML greeting, passing the greeting as the selector and the selected language, and log the welcome as well
  loginGrt.setLang($('#lang').val()).HTMLGreet('#greeting', true).log();
});
