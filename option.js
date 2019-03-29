
class Option {
    constructor(stock_price, strike_price, vol, time, risk_free, option_type){
	this.stock_price = stock_price
	this.strike_price = strike_price
	this.vol = vol
	this.time = time
	this.risk_free = risk_free
	this.option_type = option_type
}
    get intrinsic() {
	if (this.option_type == "Call") {
	    return Math.max(this.stock_price - this.strike_price, 0);
	} else {
	    return Math.max(this.strike_price - this.stock_price, 0);
	}
    }
}

const opt = new Option(50, 40, .4, 1, .02, "Call")
const opt2 = new Option(50, 40, .4, 1, .02, "Put")

