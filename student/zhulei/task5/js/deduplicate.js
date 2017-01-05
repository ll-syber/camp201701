window.onload = function  () {
	var btn = document.getElementById('check_btn');

	btn.onclick = function  () {
		var hobby = document.getElementById('input');
		var hobby_info = hobby.value;
		// alert(card_id);
		if (hobby_info.length > 0) {
			// alert(card_id.indexOf(" "));
			var result = document.getElementById('result');
			result.innerHTML = '';

			var hobbys = hobby_info.split(',');
			console.log(hobbys);
			var hobby_list = {};
			for (var i = 0; i < hobbys.length; i++) {
				var tmp_hb = hobbys[i];
				if (tmp_hb !== '') {
					hobby_list[tmp_hb] = 1;
				}			
			}
			console.log(hobby_list);
			var dedup = '';
			for (var key in hobby_list) {
				dedup = dedup + key + ',';
			}
			dedup = dedup.slice(0, -1);

			result.innerHTML = dedup;
		} else {
			blankHdl();
		}
	};
};

function blankHdl () {
	var result = document.getElementById('result');
	var msg = '不能为空';
	var err_msg = document.createTextNode(msg);
	result.appendChild(err_msg);
}