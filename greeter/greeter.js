(function (global, $) {
  //* 'new' an object
  var Greeter = function (firstName, lastName, language) {
    return new Greeter.init(firstName, lastName, language);
  };

  //* hidden within the scope on the IIFE and not directly accessible
  var supportedLang = ['en', 'es'];

  //* informal greeting
  var greetings = {
    en: 'Hello',
    es: 'Hola',
  };

  //* formal greetings
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos',
  };

  //* logger messages
  var logMessages = {
    en: 'Logged in',
    es: 'Conectado',
  };

  //* prototype holds methods (to save memory space)
  Greeter.prototype = {
    //* 'this' refers to the calling object at execution time
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    },

    //* check weather  the language is valid
    //* reference the externally inaccessible 'supportedLangs' withing the closure
    validate: function () {
      if (supportedLang.indexOf(this.language) === -1) {
        throw 'invalid message';
      }
    },

    //* retrieve messages from object by referring to properties using[] syntax
    greeting: function () {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreetings: function () {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    greet: function (formal) {
      var msg;
      if (formal) {
        msg = this.formalGreetings();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }

      //* 'this' refers to the calling object at execution time
      //* makes the method chainable
      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }
      return this;
    },

    setLang: function (lang) {
      this.language = lang;
      this.validate();
      return this;
    },

    HTMLGreet: function (selector, formal) {
      if (!$) {
        throw 'jQuery not loaded!';
      }
      if (!selector) {
        throw 'missing jQuery selector!';
      }
      var msg;
      if (formal) {
        msg = this.formalGreetings();
      } else {
        msg = this.greeting();
      }

      //* inject the message in the chosen place in the DOM
      $(selector).html(msg);
      return this;
    },
  };

  //* the actual object is created here, allowing us to 'new' an object without calling 'new'
  Greeter.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  };

  //* trick borrowed from jQuery so we don't have to use the 'new' keyword
  Greeter.init.prototype = Greeter.prototype;

  //* attach our Greeter to the global object, and provide a shorthand '$G' for ease our poor fingers
  global.Greeter = global.G$ = Greeter;
})(window, jQuery);
