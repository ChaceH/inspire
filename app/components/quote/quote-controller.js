import QuoteService from "./quote-service.js";

let quoteServ = new QuoteService

function drawQuote(quote){
	let template = ""
		template +=`
		<div>
			<h5>"${quote.quote}"</h5>
			<h4>-${quote.author}</h4>
		</div>
		`
	document.getElementById('quote').innerHTML = template
}

export default class QuoteController {
	constructor() {
		quoteServ.getQuote(drawQuote)
	}

	getQuote() {
	 quoteServ.getQuote(function (quote) {
			console.log('What is the quote', quote)
		})
	}
}
