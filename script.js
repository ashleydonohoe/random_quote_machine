// Set of quotes
var availableQuotes = [
    { quote: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown, Jr."},
    { quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.", author: "Francis of Assisi"},
    { quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller"},
    { quote: "Nothing is impossible, the word itself says 'I'm possible'!", author: "Audrey Hepburn"},
    { quote: "We know what we are, but know not what we may be.", author: "Shakespeare"},
    { quote: "No act of kindness, no matter how small, is ever wasted.", author: "Aesop"},
    {quote: "A hero is someone who has given his or her life to something bigger than oneself.", author: "Joseph Campbell"},
    { quote: "You must do the things you think you cannot do.", author: "Eleanor Roosevelt"},
    { quote: "If you believe in yourself and have dedication and pride - and never quit, you'll be a winner. The price of victory is high but so are the rewards.", author: "Paul Bryant"}
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
      tweetQuote = (self.currentQuote().quote());
      //console.log(tweetQuote);
      var fullLink = "https://twitter.com/intent/tweet?text=" + tweetQuote + "&via=ashleyddesigns1";
      console.log(fullLink);
      $('.twitter-share-button').attr('href', fullLink);
  }
};

ko.applyBindings(QuotesViewModel());

