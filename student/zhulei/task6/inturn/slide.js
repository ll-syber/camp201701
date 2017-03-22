window.onload = function () {
	/**
	*滑动组件API
	*param: id--滑动元素的父容器id，如ul的id: 'imglist'
	*param: cls--滑动元素不显示时的class
	*param: selectCls--滑动元素显示时的class，本API采用class叠加的形式
	*param: interval--滑动之间的暂停间隔
	**/
	function Slider (id, cls, selectCls, interval) {
		this.container = document.getElementById(id);
		this.items = this.container.querySelectorAll('.'+cls);
		this.cls = cls;
		this.selectCls = selectCls;
		this.interval = interval;
		this.rvs = false;
	}
	Slider.prototype.gItm = function(){
		console.log(this.items.length);
		// for (let key in  this.items) {
		// 	console.log(this.items[key]);
		// } 
		console.log(this.items);
	};
	Slider.prototype.setReverse = function() {
		this.rvs = true;
	};
	Slider.prototype.cancelReverse = function() {
		this.rvs = false;
	};
	Slider.prototype.getSelectedItem = function() {
		return this.container.querySelector('.'+this.selectCls);
	};
	Slider.prototype.getSelectedItemIndex = function() {
		return Array.from(this.items).indexOf(this.getSelectedItem());
	};
	Slider.prototype.slideTo = function(index){
		let selector = this.getSelectedItem();
		let item = this.items[index];
		if (selector) {
			selector.className = this.cls;
		}
		if (item) {
			item.className += (' '+this.selectCls);
		}
	};
	Slider.prototype.next = function(){
		let slctIndex = this.getSelectedItemIndex();
		// console.log(slctIndex);
		let nextIndex = (slctIndex + 1) % this.items.length;
		// console.log(nextIndex);
		this.slideTo(nextIndex);
	};
	Slider.prototype.previous = function(){
		let slctIndex = this.getSelectedItemIndex();
		let nextIndex = (slctIndex + this.items.length - 1) % this.items.length;
		this.slideTo(nextIndex);
	};
	Slider.prototype.start = function(){
		if(!this.rvs) {
			setInterval(() => this.next(), this.interval);
		} else {
			setInterval(() => this.previous(), this.interval);
		}
	};


	/**
	*控制组件
	**/
	function Controler (id, obj) {
		// Slider.call(this, id, cls, selectCls, interval);
		this.controler = document.getElementById(id);
		this.ctrlItems = controler.querySelectorAll('li');
		this.targetObj = obj;
	}
	Controler.prototype.setIndex = function(){
		for (let i = 0; i < this.ctrlItems.length; i++) {
			this.ctrlItems[i].setAttribute('index', i);
		}
	};
	Controler.prototype.setTrigger = function(){
		this.controler.addEventListener('mouseover', evt => {
			if (evt.target && evt.target.nodeName == 'LI') {
				console.log(evt.target.getAttribute('index') - 0);
				this.targetObj.slideTo(evt.target.getAttribute('index') - 0);
			}
		});
	};

	//单向绑定
	function bindComponent(obj1, obj2) {
		
	}

	let imgSlider = new Slider ('imgList', 'slide-list__item', 'slide-list__item--select', 3000);
	// imgSlider.setReverse();
	imgSlider.start();
	// imgSlider.gItm();
	let imgCtrl = new Controler('controler', imgSlider);
	imgCtrl.setIndex();
	imgCtrl.setTrigger();
};