casper.
  start( 'http://localhost:3000/' )
  .viewport(1200, 800)
  .then(function(){
    phantomcss.screenshot('#app-pusher', 'app-pusher');
  });

casper.run();
