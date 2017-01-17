function qs(selector){
	return document.querySelector(selector);
};

function $(selector){
	if (window === this) return new $(selector);
	if(typeof selector === 'string') this.e = document.querySelectorAll(selector);
	else if(selector.length) this.e = selector;
	else this.e = [selector];
	return this;
}
$.prototype = {
	each: function(callback){
		for(i=0;i<this.e.length;i++){
			callback.call(this.e[i], i, this.e[i]);
		}
		return this;
	},
	addClass: function(cls){
		return this.each(function(){
			var cl = cls.split(' ');
			for(c=0;c<cl.length;c++){
				this.classList.add(cl[c]);
			}
		});
	},
	toggleClass: function(cls){
		return this.each(function(){
			var cl = cls.split(' ');
			for(c=0;c<cl.length;c++){
				this.classList.toggle(cl[c]);
			}
		});
	},
	removeClass: function(cls){
		return this.each(function(){
			var cl = cls.split(' ');
			for(c=0;c<cl.length;c++){
				this.classList.remove(cl[c]);
			}
		});
	},
	hasClass: function(cls){
		return this.e[0].classList.contains(cls);
	},
	click: function(callback){
		return this.each(function(){
			this.onclick = callback;
		});
	},
	on: function(type, callback){
		return this.each(function(){
			this.addEventListener(type,callback,false);
		});
	},
	css: function(type, value){
		if(value){
			return this.each(function(){
				this.style[type] = value;
			});
		} else if(typeof type==='object'){
			return this.each(function(){
				for (var key in type) {
    				 this.style[key] = type[key];
				}
			});
		} else {
			return window.getComputedStyle(this.e[0], null).getPropertyValue(type);
		}
	},
	remove: function(){
		this.each(function(){
			this.remove();
		});
	},
	parents: function(){
		var el = this.e;
		var p = Array();
		while (el) {
			p.unshift(el);
			el = el.parentNode;
		}
		this.e = p;
		return this;
	},
	get: function(i){
		return this.e[i];
	},
	attr: function(atr,val){
		if(val){
			return this.each(function(){
				this.setAttribute(atr,val);
			});
		} else {
			return this.e[0].getAttribute(atr);
		}
	},
	html: function(html){
		return this.each(function(){
			this.innerHTML = html;
		});
	}
};
$.ajax = function (settings){
	var x = new XMLHttpRequest();
	var data;

	x.onreadystatechange = function(){
		if(x.readyState == 4){
			if(x.status == 200){
				settings.success(x.responseText);
			} else {
				settings.error(x.status);
			}
		}
	}
	
	if(settings.type!='POST') settings.url += '?'+settings.data;
	
	x.open(settings.type, settings.url, true);
	
	if(settings.type=='POST'){
		data = settings.data;
		x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	}
	x.setRequestHeader('Accept', 'application/json');
	x.send(data);
}

// remove hash
if(window.location.hash) window.history.pushState(null,null,window.location.href.replace(/#.*$/,''));


// scroller
function autoScroll(selector,destiny, time) {
	var to = destiny ? (document.body.scrollTop + destiny) : (document.body.scrollTop + qs(selector).getClientRects()[0].top - parseInt($('header').css('height')) + 1);
	var duration = time || 500;
	function doThis(){
		if(duration <= 0) return;
		var difference = to - document.body.scrollTop;
		var perTick = difference / duration * 10;
		setTimeout(function() {
		  document.body.scrollTop += perTick;
		  if(document.body.scrollTop == to) return;
		  duration -= 10;
		  doThis();
		}, 10);
	}
	doThis();
}