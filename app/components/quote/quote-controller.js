import QuoteService from "./quote-service.js";

let quoteServ = new QuoteService


export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
	 quoteServ.getQuote(function (quote) {
			console.log('What is the quote', quote)
		})
	}
}
