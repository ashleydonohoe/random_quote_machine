// Set of quotes
var availableQuotes = [
    { quote: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown, Jr."},
    { quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.", author: "Francis of Assisi"},
    { quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.". author: "Helen Keller"},
    { quote: "Nothing is impossible, the word itself says 'I'm possible'!", author: "Audrey Hepburn"},

];

// Class representing a single quote
var Quote = function(data) {
  this.quote = ko.observable(data.quote);
  this.author = ko.observable(data.author);
}

// Viewmodel
function QuotesViewModel() {
  var self = this;

  this.quoteList = ko.observableArray([]);
  availableQuotes.forEach(function(quoteItem) {
    self.quoteList.push(new Quote(quoteItem));
  });

  this.currentQuote = ko.observable(this.quoteList()[0]);

    this.generateQuote = function() {
      var i = Math.floor(Math.random() * self.quoteList().length);
      console.log(i);
      self.currentQuote(self.quoteList()[i]);
  }
};

ko.applyBindings(QuotesViewModel());

