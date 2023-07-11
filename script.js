  "use strict";
	
	let hour = 50;
	let minute = 29;
	let second = 50;
	let millisecond = 0;
	
	let cron;
	
	document.form_main.start.onclick = () => 
	start();
	document.form_main.pause.onclick = () => 
	pause();
	document.form_main.reset.onclick = () => 
	reset();	
	
	function start() {
		pause();
		cron = setInterval(() => { timer(); }, 10);
	}
	
	function pause () {
		clearInterval(cron);
	}
	
	
	function timer() {
		
		if ((millisecond += 10) == 1000) {
			millisecond = 0;
			second++;
			percentSecond.style = `--num: ${second}`;
			titleSecond.innerHTML = `${second}<span> segs</span>`;
		} 

		
		if (second == 60) {
			second = 0;
			minute++;
			percentMinute.style = `--num: ${minute}`;
			titleMinute.innerHTML = `${minute}<span> mins</span>`;
		}
		
		if (minute == 60) {
			minute = 0;
			hour++;
			percentHour.style = `--num: ${hour}`;
			titleHour.innerHTML = `${hour}<span> hrs</span>`;
		}
		
		document.getElementById('hour').innerText = returnData(hour);
		document.getElementById('minute').innerText = returnData(minute);
		document.getElementById('second').innerText = returnData(second);
		//document.getElementById('millisecond').innerText = returnData(millisecond);		
	
		function returnData (input) {
			return input > 10 ? input : `0${input}`
		
		}
		
		percentHour.style = `--num: ${hour}`;
		titleHour.innerHTML = `${hour}<span> hrs</span>`;
		
		percentMinute.style = `--num: ${minute}`;
		titleMinute.innerHTML = `${minute}<span> mins</span>`;
		
		percentSecond.style = `--num: ${second}`;
		titleSecond.innerHTML = `${second}<span> segs</span>`;
		
	}

	function reset() {
		hour = 0;
		minute = 0;
		second = 0;
		millisecond = 0;
		
		document.getElementById('hour').innerHTML = '00';
		document.getElementById('minute').innerHTML = '00';
		document.getElementById('second').innerHTML = '00';		
		//document.getElementById('millisecond').innerHTML = '000';

		percentHour.style = `--num: 0`;
		titleHour.innerHTML = `0<span> hrs</span>`;
		
		percentMinute.style = `--num: 0`;
		titleMinute.innerHTML = `0<span> mins</span>`;

		percentSecond.style = `--num: 0`;
		titleSecond.innerHTML = `0<span> segs</span>`;
		
		pause();
	}
	
		// Barra de progresso
	
	let progressBarHour = document.getElementById('circle-progress-hour');
	let pointerHour = document.getElementById('dot-before-hour');
	let percentHour = document.getElementById('percent-hour');
	let titleHour = document.getElementById('title-percent-hour');	
	
	let progressBarMinute = document.getElementById('circle-progress-minute');
	let pointerMinnute = document.getElementById('dot-before-minute');
	let percentMinute = document.getElementById('percent-minute');
	let titleMinute = document.getElementById('title-percent-minute');	
	
	let progressBarSecond = document.getElementById('circle-progress-second');
	let pointerSecond = document.getElementById('dot-before-second');
	let percentSecond = document.getElementById('percent-second');
	let titleSecond = document.getElementById('title-percent-second');	
	
