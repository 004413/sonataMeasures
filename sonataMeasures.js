// increase x when detected that next measure is not one more than previous
// DO TESTING

/* bml: build measure list */
function bml(start,end){
  outputList = [];
  for(var n=start; n<=end; n++){
    outputList.push(n);
  }
  return outputList;
}

/* concatenates the entire list of lists into one list */
function allConcat(listOfLists){
  outputList = [];
  for(var n=0; n<listOfLists.length; n++){
    outputList = outputList.concat(listOfLists[n]);
  }
  console.log(outputList);
  console.log(outputList.slice(40,50));
  return outputList;
}

var sonataData = []

var ONE_ONE = allConcat([bml(1,48),bml(1,48),bml(49,152)]);
var ONE_TWO = allConcat([bml(1,61)]);
var ONE_THREE = allConcat([bml(1,14),bml(1,14),bml(15,40),bml(15,40),bml(41,50),bml(41,50),bml(51,73),bml(51,73),bml(1,14),bml(1,14),bml(15,40),bml(15,40)]);
var ONE_FOUR = allConcat([bml(1,1),bml(2,57),bml(2,57),bml(58,58),bml(59,196),bml(59,196)]);
var ONE_FULL = [ONE_ONE,ONE_TWO,ONE_THREE,ONE_FOUR];

var TWO_ONE = allConcat([bml(1,117),bml(1,117),bml(118,336)]);
var TWO_TWO = allConcat([bml(1,80)]);
var TWO_THREE = allConcat([bml(1,8),bml(1,8),bml(9,44),bml(9,44),bml(45,52),bml(45,52),bml(53,68),bml(53,68),bml(1,8),bml(1,8),bml(9,44),bml(9,44)]);
var TWO_FOUR = allConcat([bml(1,56),bml(57,66),bml(57,66),bml(67,187)]);
var TWO_FULL = [TWO_ONE,TWO_TWO,TWO_THREE,TWO_FOUR];

var THREE_ONE = allConcat([bml(1,90),bml(1,90),bml(91,257)]);
var THREE_TWO = allConcat([bml(1,82)]);
var THREE_THREE = allConcat([bml(1,16),bml(1,16),bml(17,64),bml(17,64),bml(65,72),bml(65,72),bml(73,104),bml(1,16),bml(1,16),bml(17,64),bml(17,64),bml(105,127)]);
var THREE_FOUR = allConcat([bml(1,312)]);
var THREE_FULL = [THREE_ONE,THREE_TWO,THREE_THREE,THREE_FOUR];

var FOUR_ONE = allConcat([bml(1,136),bml(1,136),bml(137,362)]);
var FOUR_TWO = allConcat([bml(1,90)]);
var FOUR_THREE = allConcat([bml(1,24),bml(1,24),bml(25,95),bml(25,95),bml(96,111),bml(96,111),bml(112,149),bml(1,24),bml(1,24),bml(25,95),bml(25,95)]);
var FOUR_FOUR = allConcat([bml(1,64),bml(65,72),bml(65,88),bml(72,87),bml(88,183)];
var FOUR_FULL = [FOUR_ONE,FOUR_TWO,FOUR_THREE,FOUR_FOUR];

var FIVE_ONE = allConcat([bml(1,105),bml(1,105),bml(106,284)]);
var FIVE_TWO = allConcat([bml(1,112)]);
var FIVE_THREE = allConcat([bml(1,46),bml(1,46),bml(47,122)]);
var FIVE_FULL = [FIVE_ONE,FIVE_TWO,FIVE_THREE];

var SIX_ONE = allConcat([bml(1,66),bml(1,66),bml(67,202),bml(67,202)]);
var SIX_TWO = allConcat([bml(1,8),bml(1,8),bml(9,38),bml(9,38),bml(39,170)]);
var SIX_THREE = allConcat([bml(1,32),bml(1,32),bml(33,150),bml(33,150)]);
var SIX_FULL = [SIX_ONE,SIX_TWO,SIX_THREE];

var SEVEN_ONE = allConcat([bml(1,124),bml(1,124),bml(125,344)]);
var SEVEN_TWO = allConcat([bml(1,87)]);
var SEVEN_THREE = allConcat([bml(1,16),bml(1,16),bml(17,54),bml(17,54),bml(55,86),bml(1,54)]);
var SEVEN_FOUR = allConcat([bml(1,113)]);
var SEVEN_FULL = [SEVEN_ONE,SEVEN_TWO,SEVEN_THREE];

var EIGHT_ONE = allConcat([bml(1,10),bml(11,132),bml(11,132),bml(133,310)]);
var EIGHT_TWO = allConcat([bml(1,73)]);
var EIGHT_THREE = allConcat([bml(1,210]);
var EIGHT_FULL = [EIGHT_ONE,EIGHT_TWO,EIGHT_THREE];

var NINE_ONE = allConcat([bml(1,1),bml(2,61),bml(2,60),bml(61,162)]);
var NINE_TWO = allConcat([bml(1,62),bml(63,78),bml(63,78),bml(79,100),bml(1,62),bml(101,116)]);
var NINE_THREE = allConcat([bml(1,131)])
var NINE_FULL = [NINE_ONE,NINE_TWO,NINE_THREE];

var TEN_ONE = allConcat([bml(1,63),bml(1,63),bml(64,200)]);
var TEN_TWO = allConcat([bml(1,8),bml(9,20),bml(9,20),bml(21,29),bml(30,41),bml(30,40),bml(41,48),bml(49,60),bml(49,59),bml(60,90)]);
var TEN_THREE = allConcat([bml(1,254)]);
var TEN_FULL = [TEN_ONE,TEN_TWO,TEN_THREE];

var ELEVEN_ONE = allConcat([bml(1,68),bml(1,68),bml(69,199)]);
var ELEVEN_TWO = allConcat([bml(1,77)]);
var ELEVEN_THREE = allConcat([bml(1,8),bml(1,8),bml(9,30),bml(9,30),bml(31,38),bml(31,38),bml(39,46),bml(39,46),bml(1,30)]);
var ELEVEN_FOUR = allConcat([bml(1,199)]);
var ELEVEN_FULL = [ELEVEN_ONE,ELEVEN_TWO,ELEVEN_THREE,ELEVEN_FOUR];

var TWELVE_ONE = allConcat([bml(1,219)]);
var TWELVE_TWO = allConcat([bml(1,16),bml(17,67),bml(17,67),bml(68,75),bml(68,75),bml(76,91),bml(76,95),bml(1,67)]);
var TWELVE_THREE = allConcat([bml(1,30),bml(31,34),bml(31,34),bml(35,38),bml(35,37),bml(38,75)]);
var TWELVE_FOUR = allConcat([bml(1,80),bml(81,88),bml(81,87),bml(88,169)]);
var TWELVE_FULL = [TWELVE_ONE,TWELVE_TWO,TWELVE_THREE,TWELVE_FOUR];

var THIRTEEN_ONE = allConcat([bml(1,4),bml(1,4),bml(5,8),bml(5,8),bml(9,12),bml(9,11),bml(12,36),bml(37,44),bml(37,44),bml(45,86)]);
var THIRTEEN_TWO = allConcat([bml(1,1),bml(2,17),bml(2,17),bml(18,41),bml(18,41),bml(42,55),bml(42,55),bml(56,73),bml(56,73),bml(74,140)]);
var THIRTEEN_THREE = allConcat([bml(1,26)]);
var THIRTEEN_FOUR = allConcat([bml(1,285)]);
var THIRTEEN_FULL = [THIRTEEN_ONE,THIRTEEN_TWO,THIRTEEN_THREE,THIRTEEN_FOUR];

var FOURTEEN_ONE = allConcat([bml(1,68)]);
var FOURTEEN_TWO = allConcat([bml(1,16),bml(17,36),bml(17,36),bml(37,44),bml(37,44),bml(45,60),bml(45,60),bml(1,16),bml(17,36),bml(17,36)]);
var FOURTEEN_THREE = allConcat([bml(1,1),bml(2,65),bml(2,65),bml(66,200)]);
var FOURTEEN_ALL = [FOURTEEN_ONE,FOURTEEN_TWO,FOURTEEN_THREE];

var FIFTEEN_ONE = allConcat([bml(1,1),bml(2,163),bml(2,163),bml(164,461)]);
var FIFTEEN_TWO = allConcat([bml(1,8),bml(1,8),bml(9,22),bml(9,22),bml(23,30),bml(23,30),bml(31,38),bml(31,38),bml(39,99)]);
var FIFTEEN_THREE = allConcat([bml(1,32),bml(33,70),bml(33,70),bml(71,78),bml(71,78),bml(79,94),bml(1,32),bml(33,70),bml(33,70)]);
var FIFTEEN_FOUR = allConcat([bml(1,210)]);
var FIFTEEN_ALL = [FIFTEEN_ONE,FIFTEEN_TWO,FIFTEEN_THREE,FIFTEEN_FOUR];
