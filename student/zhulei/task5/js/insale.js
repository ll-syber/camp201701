window.onload = function () {
	var today = new Date();
	// var startDay = new Date('2017, 2, 1');
	var startDay = new Date(2017, 1, 1);
	var endDay = new Date(2017, 1, 28);
	var saleDayList = [];
	var j = 0;

	// alert(endDay);
	var countStart = (startDay.getTime() - today.getTime() > 0) ? startDay : today;
	console.log(startDay.toLocaleString());

	if (countStart.getTime() - endDay.getTime() > 0) {
		// alert(typeof(countStart.getTime() - endDay.getTime()));
		return;
	}

	for (var i = countStart.getDate(); i <= endDay.getDate(); i++) {
		// var currentStr = '2017, 2, ' + i;
		var currentStr = [2017, 2, i];
		// console.log(currentStr);
		var currentDay = new Date(currentStr);

		
		if (currentDay.getDay() === 3) {
			var obj = {};
			obj.date = currentDay.toLocaleDateString();
			obj.daysBefore = dayToWed(today, currentDay);
			saleDayList[j] = obj;
			j++;
			// obj = null;
		}
	}

	console.log(saleDayList);

	var daysList = document.getElementById('day_to_wednesday');
	for (var m = 0; m < saleDayList.length; m++) {
		var li = document.createElement('li');
		li.innerHTML = '';
		var liStr = '第' + (m + 1) + '次促销在' + saleDayList[m].date + ', 距离今天还有' + saleDayList[m].daysBefore + '天';
		li.innerHTML = liStr;
		daysList.appendChild(li);
		// li.innerHTML = '';
	}
};

function dayToWed (today, wednesday) {
	var msPerDay = 24 * 60 * 60 * 1000;
	var daysLeft = (wednesday.getTime() - today.getTime()) / msPerDay;
	daysLeft = Math.ceil(daysLeft);
	return daysLeft;
}