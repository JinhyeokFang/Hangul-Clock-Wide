const ALWAYS_ON = [0, 17]/*오, 시*/,AM_OR_PM = [1, 2]/*전, 후*/,SPECIAL_TIME = [35,34,32,33]; /*분, 반, 정, 각*/
const HOURS = [[4,4],[5,5],[9,9],[10,10],[6,8],[7,8],[11,12],[13,14],[15,16],[3,3],[3,4],[3,5]];
const MINUTES_TENS = [22,21,20,19,18]/*십, 이, 삼, 사, 오*/,MINUTES_UNITS = [31,30,29,28,27,26,25,24,23];
let hours, minutes, timeObject, isLedOn; //시, 분, time객체, ledMap
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
setInterval(() => {
  isLedOn = new Array(36).fill(0); //시계 초기화
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  timeObject = new Date;  //시간 캡처
  hours = timeObject.getHours();
  minutes = timeObject.getMinutes();
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  isLedOn[AM_OR_PM[!(hours < 12) + 0]] = 1; //오전, 오후 표시
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (hours > 12) //시 표시
    hours -= 12;
  isLedOn[HOURS[(hours - 1)][0]] = 1;
  isLedOn[HOURS[(hours - 1)][1]] = 1;
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (minutes == 0) { //정각 표시
    isLedOn[SPECIAL_TIME[2]] = 1;
    isLedOn[SPECIAL_TIME[3]] = 1;
  } else if(minutes == 30) { //반 표시
    isLedOn[SPECIAL_TIME[1]] = 1;
  } else { //분 표시
    isLedOn[SPECIAL_TIME[0]] = 1;
    if (minutes >= 10) { //10의 자리
      isLedOn[MINUTES_TENS[0]] = 1;
      if (minutes >= 20) 
        isLedOn[MINUTES_TENS[parseInt(minutes / 10 - 1)]] = 1;
    }
    isLedOn[MINUTES_UNITS[parseInt(minutes % 10 - 1)]] = 1; //1의 자리
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  for (var i=0; i<ALWAYS_ON.length; i++) {
    isLedOn[ALWAYS_ON[i]] = 1;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  for (var i=0; i<36; i++) { //렌더링
    if (isLedOn[i] == 1) {
      document.getElementById(i).style.backgroundColor = "yellow";
    } else {
      document.getElementById(i).style.backgroundColor = "white";
    }
  }
}, 1000); //spagetti :)