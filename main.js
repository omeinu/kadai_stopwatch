$(document).ready(function(){
  
  let time = 0;
  let interval_id;
  
  $counter = $("#counter")
  
  $start = $("#start");
  $stop = $("#stop");
  $reset = $("#reset");
  
  $stop.prop("disabled",true);
/////////////////////////スタート押したとき//////////////////////////
  $start.click(function(){
    
    const startTime = function(){
      time += 1
      document.getElementById('counter').value = count_format(time);
    };
  interval_id  =  setInterval(startTime,10);
    toggle();
  });
/////////////////////////ストップ押したとき//////////////////////////
    $stop.click(function(){
    
    clearInterval(interval_id);
    toggle();
  });
///////////////////////リセット押したとき/////////////////////////
   $reset.click(function(){
    time = 0;
    document.getElementById('counter').value = count_format(0);
  });
///////////////////////ボタンの切り替え/////////////////////////
  function toggle(){
    if(!$start.prop("disabled")){
        $start.prop("disabled", true);
        $stop.prop("disabled",false);
        $reset.prop("disabled",true);
    }else{
        $start.prop("disabled",false);
        $stop.prop("disabled",true);
        $reset.prop("disabled",false);
    }
  }
 ///////////////////////秒数の追加/////////////////////////
    function count_format(num){
      let tms = num % 99;
      let ts= Math.floor(num / 99);
      let tm = Math.floor(ts / 60);
      ts = ts % 60;
      if(tms < 10)tms = "0" + tms;
      if(ts < 10)ts = "0" + ts;
      if(tm < 10)tm = "0" + tm;
      return tm + ":" + ts + ":" + tms;
    }
});
