$(document).ready(function(){
  
  let milliseconds = 0;
  let seconds = 0;
  let interval_id;
  
  $seconds = $(".count_seconds");
  $milliseconds = $(".count_milliseconds");
  
  $start = $("#start");
  $stop = $("#stop");
  $reset = $("#reset");
  
  $stop.prop("disabled",true);
/////////////////////////スタート押したとき//////////////////////////
  $start.click(function(){
    
    const startTime = function(){
      milliseconds += 1
      $milliseconds.text(milliseconds);
    };
  interval_id  =  setInterval(startTime,100);
    toggle();
  });
/////////////////////////ストップ押したとき//////////////////////////
    $stop.click(function(){
    
    clearInterval(interval_id);
    toggle();
  });
///////////////////////リセット押したとき/////////////////////////
   $reset.click(function(){
    milliseconds = 0;
    $milliseconds.text(milliseconds);
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
    };
  };
 ///////////////////////秒数の追加/////////////////////////
    function counter(){
      if(milliseconds > 99){
        milliseconds = 0;
        seconds += 1;
        $seconds.text(seconds);
      }
    };
  
});