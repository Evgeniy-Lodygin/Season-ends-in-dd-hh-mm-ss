class Clock{
	constructor(id){
		this.clock = $(id);
		this.heading = $("h1");
		this.exactDays = 0;
		this.exactHours = 0;
		this.exactMinutes = 0;
		this.exactSeconds = 0;
		this.finalDate = null;
		this.initHeadingAndFinalDate();
		this.init();
		this.update();
	}
	initHeadingAndFinalDate(){
		const currentDay = new Date()
		,month = currentDay.getMonth()
		;
		if (month == 11 ||month == 0||month == 1){
			this.heading.text(`Winter ends in:`);
			this.finalDate = new Date(2026,2,1);
		}
		else if (month == 2 ||month == 3||month == 4){
			this.heading.text(`Spring ends in:`);
			this.finalDate = new Date(2026,5,1);
		}
		else if (month == 5 ||month == 6||month == 7){
			this.heading.text(`Summer ends in:`);
			this.finalDate = new Date(2025,8,1);
		}
		else{
			this.heading.text(`Autumn ends in:`);
			this.finalDate = new Date(2025,11,1);
		}
	}

	init(){
		this.getTime(".days", this.exactDays);
		this.getTime(".hours", this.exactHours);
		this.getTime(".min", this.exactMinutes);
		this.getTime(".sec", this.exactSeconds);
	}
	update(){
		setInterval(this.init.bind(this),1000);
	}
	getTime(cssSelector, dateComponent){
		const now = new Date();

		const days = (this.finalDate - now)/(1000*60*60*24);
			this.exactDays = Math.floor(days);
		const hours = (days - this.exactDays)*24
			this.exactHours = Math.floor(hours);
		const minutes = (hours - this.exactHours)*60
			this.exactMinutes = Math.floor(minutes);
		const seconds = (minutes - this.exactMinutes)*60
			this.exactSeconds = Math.floor(seconds);
		const timePlace = this.clock.find(cssSelector)
			, timeData	= dateComponent;
			;
		timePlace.text(timeData < 10 ? `0${timeData}` : timeData);
	}
}
let clock1 = new Clock("#clock1");
