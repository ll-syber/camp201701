window.onload = function () {
	const [insertBtn, deleteBtn, updateBtn] 
	  = Array.from(document.querySelectorAll('#buttons button'));

	const datalist = document.getElementById('datalist');
	const rowtext = document.getElementById('rowtext');

	function getAllCheckedRows(){
	  return Array.from(datalist.querySelectorAll('li input:checked'))
	        .map(el=>el.parentNode.parentNode);
	}

	function createNewRow(){
	  var row = document.createElement('li');
	  row.className = 'add';
	  row.innerHTML = `<label><input type="checkbox"/>${rowtext.value}</label>`;
	  return row;
	}

	function changeState() {
	  var checkedRows = getAllCheckedRows();
		if(checkedRows.length){
			deleteBtn.disabled = false;
			updateBtn.disabled = false;
		}else{
			deleteBtn.disabled = true;
			updateBtn.disabled = true;
		}
	}

	datalist.addEventListener('click', changeState);

	insertBtn.addEventListener('click', evt=>{
	  var checkedRows = getAllCheckedRows();
	  if(checkedRows.length){
	    checkedRows.forEach(row=>
	       row.insertAdjacentElement('afterend', createNewRow()));
	  }else{
	    datalist.appendChild(createNewRow());
	  }
	});

	deleteBtn.addEventListener('click', evt=>{
	  var checkedRows = getAllCheckedRows();
	  if(checkedRows.length){
	  	checkedRows.forEach(row=>row.className = 'delete');
	    setTimeout(function () {
	    	checkedRows.forEach(row=>row.remove());
	    }, 1000);
	  }
	});

	updateBtn.addEventListener('click', evt=>{
	  var checkedRows = getAllCheckedRows();
	  if(checkedRows.length){
	    checkedRows.forEach(row=>row.childNodes[0].childNodes[1].textContent = rowtext.value);
	  }  
	});
};