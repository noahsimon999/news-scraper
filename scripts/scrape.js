// imports axios and cheerio
const axios = require("axios");
const cheerio = require("cheerio");

// scrape function
var scrape = function() {
  // uses axios to scrape uncrate
  return axios.get("https://uncrate.com/").then(function(res) {
    var $ = cheerio.load(res.data);

    //array to store products
    var products = [];

  // cheerio to grab articles
    $(".article").each(function(i, element) {

      // scrape head ie headline
      var head = $(this)
        .find("h1")
        .text()
        .trim();
      // scrape URL 
      var url = $(this)
        .find("a")
        .attr("href");
      // scrape summary
      var summary = $(this)
        .find("p")
        .text()
        .trim();   

      // scraped data object
      var dataToAdd = {
        headline: head,
        summary: summary,
        url: url
      };

      // push dateToAdd object to products
      products.push(dataToAdd);
      
    });
    // return products array
    return products;
  });
};

//export scrape
module.exports = scrape;