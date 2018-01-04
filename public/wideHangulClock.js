var ALWAYS_ON = [0, 17]; //오, 시
var AM_OR_PM = [1, 2]; //전, 후
var HOURS_BEFORE_5_O_CLOCK = [4,5,9,10]; //한, 두, 세, 네
var HOURS_AFTER_4_O_CLOCK = [6,8,7,8,11,12,13,14,15,16,3,4,3,5]; //다, 섯, 여, 섯, 일, 곱, 여, 덟, 아, 홉, 열, 한, 열, 두
var MINUTES_TENS = [22,21,20,19,18]; //십, 이, 삼, 사, 오
var MINUTES_UNITS = [31,30,29,28,27,26,25,24,23]; //일, 이, 삼, 사, 오, 육, 칠, 팔, 구
var SPECIAL_TIME = [35,34,32,33]; //분, 반, 정, 각

var isAm, isHalfAHour, isSharp, hours, minutes, timeObject; //오전후, 반, 정각, 시, 분, time객체
var isLedOn = [];

setInterval(() => {
  isLedOn = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  //WHAT THE HEALTH!!!!!!!!!!!!





  timeObject = new Date;  //시간 캡처
  hours = timeObject.getHours();
  minutes = timeObject.getMinutes();

  if (hours <= 12) { //시 설정
    isAm = true;
  } else {
    isAm = false;
    hours -= 12;
  }

  if (minutes == 0) { //분 설정
    isHalfAHour = false;
    isSharp = true;
  } else if(minutes == 30){
    isHalfAHour = true;
    isSharp = false;
  } else {
    isHalfAHour = false;
    isSharp = false;
  }



  isLedOn[AM_OR_PM[!isAm + 0]] = 1; //오전, 오후 표시

  if (hours < 5) { //시 표시
    isLedOn[HOURS_BEFORE_5_O_CLOCK[hours - 1]] = 1;
  } else {
    isLedOn[HOURS_AFTER_4_O_CLOCK[(hours - 5) * 2]] = 1;
    isLedOn[HOURS_AFTER_4_O_CLOCK[(hours - 5) * 2 + 1]] = 1;
  }

  if (isSharp) { //분, 반, 정각 표시
    isLedOn[SPECIAL_TIME[2]] = 1;
    isLedOn[SPECIAL_TIME[3]] = 1;
  } else if(isHalfAHour) {
    isLedOn[SPECIAL_TIME[1]] = 1;
  } else {
    //0분, 30분이 아닐때
    isLedOn[SPECIAL_TIME[0]] = 1;

    if (minutes >= 10) {
      isLedOn[MINUTES_TENS[0]] = 1;
      if (minutes >= 20) {
        isLedOn[MINUTES_TENS[parseInt(minutes / 10 - 1)]] = 1;
      } 
    }

    isLedOn[MINUTES_UNITS[parseInt(minutes % 10 - 1)]] = 1;
  }

  for (var i=0; i<ALWAYS_ON.length; i++) {
    isLedOn[ALWAYS_ON[i]] = 1;
  }



  for (var i=0; i<36; i++) { //렌더링
    if (isLedOn[i] == 1) {
      document.getElementById(i).style.backgroundColor = "yellow";
    } else {
      document.getElementById(i).style.backgroundColor = "white";
    }
  }
}, 1000); //spagetti :)