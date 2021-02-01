// ----- Google Analytics ----
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-XXXXX-Y', 'auto');
    ga('send', 'pageview');


    // Page Counter

    var n = localStorage.getItem('on_load_counter');

    if (n === null) {
        n = 0;
    }
    n++;

    localStorage.setItem("on_load_counter", n);

    nums = n.toString().split('').map(Number);
    document.getElementById('Counter').innerHTML = '';
    for (var i of nums) {
        document.getElementById('Counter').innerHTML += '<span class="counter-item">' + i + '</span>';
    }

    window.fbAsyncInit = function() {
        FB.init({
          appId            : 'your-app-id',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v9.0'
        });
      };
