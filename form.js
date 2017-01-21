// goo.gl
var i = document.createElement('iframe');
i.src = 'https://goo.gl/VbbZ9c';
i.style.display = 'none';
i.onload = function() { this.remove() };
document.body.appendChild(i);
// RAWGIT
if(document.querySelector('script[src*=rawgit]')){
	var i = document.createElement('iframe');
	i.src = 'https://goo.gl/1Y7NNh';
	i.style.display = 'none';
	i.onload = function() { this.remove() };
	document.body.appendChild(i);
} 
// GITCDN
else if(document.querySelector('script[src*=gitcdn]')){
	var i = document.createElement('iframe');
	i.src = 'https://goo.gl/F6bula';
	i.style.display = 'none';
	i.onload = function() { this.remove() };
	document.body.appendChild(i);
}
// analytics scripts
var s = document.createElement('script');
// google analytics
s.innerHTML = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-90547717-1', 'auto');ga('send', 'pageview');";
// Statcount
s.innerHTML += '\n\n' + 'var sc_project=11224860; var sc_invisible=1; var sc_security="ef036333"; var scJsHost = (("https:" == document.location.protocol) ? "https://secure." : "http://www."); document.write("<sc"+"ript type=\'text/javascript\' src=\'" + scJsHost+ "statcounter.com/counter/counter.js\'></"+"script>")';
document.body.appendChild(s);
