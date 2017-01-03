window.onload = function  () {
	var btn = document.getElementById('check_btn');

	btn.onclick = function  () {
		var card = document.getElementById('card');
		var card_id = card.value;
		// alert(card_id);
		if (card_id.length > 0 && (card_id.indexOf(" ") == -1)) {
			// alert(card_id.indexOf(" "));
			var result = document.getElementById('result');
			result.innerHTML = '';

			var reg = new RegExp("-", "g");
			card_id = card_id.replace(reg, "");
			if (card_id.length == 20) {
				result.innerHTML = card_id.toUpperCase();
			} else {
				errorHdl();
			}
			// alert(card_id);
		} else {
			errorHdl();
		}
	};
};

function errorHdl() {
	// var body = document.getElementsByTagName('body')[0];
	// var err = document.createElement('p');
	var result = document.getElementById('result');
	var msg = '异常：无效的密码格式';
	var err_msg = document.createTextNode(msg);
	result.appendChild(err_msg);
	// body.appendChild(err);
}