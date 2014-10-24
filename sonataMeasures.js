// increase x when detected that next measure is not one more than previous
// DO TESTING

var PIX_PER_MEASURE = 3;
var LINE_WIDTH = 3;
var COLUMN_DISTANCE = 4;

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

var SIXTEEN_ONE = allConcat([bml(1,2),bml(3,113),bml(3,113),bml(114,325)]);
var SIXTEEN_TWO = allConcat([bml(1,119)]);
var SIXTEEN_THREE = allConcat([bml(1,275)]);
var SIXTEEN_ALL = [SIXTEEN_ONE,SIXTEEN_TWO,SIXTEEN_THREE];

var SEVENTEEN_ONE = allConcat([bml(1,92),bml(1,92),bml(93,228)]);
var SEVENTEEN_TWO = allConcat([bml(1,103)]);
var SEVENTEEN_THREE = allConcat([bml(1,94),bml(1,94),bml(95,399)]);
var SEVENTEEN_ALL = [SEVENTEEN_ONE,SEVENTEEN_TWO,SEVENTEEN_THREE];

var EIGHTEEN_ONE = allConcat([bml(1,88),bml(1,88),bml(89,253)]);
var EIGHTEEN_TWO = allConcat([bml(1,2),bml(3,63),bml(3,63),bml(64,171)]);
var EIGHTEEN_THREE = allConcat([bml(1,1),bml(2,9),bml(2,8),bml(9,16),bml(9,16),bml(17,24),bml(17,24),bml(25,38),bml(25,38),bml(39,39),bml(40,47),bml(40,46),bml(47,54),bml(47,54),bml(55,62)]);
var EIGHTEEN_FOUR = allConcat([bml(1,79),bml(1,79),bml(80,333)]);
var EIGHTEEN_ALL = [EIGHTEEN_ONE,EIGHTEEN_TWO,EIGHTEEN_THREE,EIGHTEEN_FOUR];

var NINETEEN_ONE = allConcat([bml(1,33),bml(1,33),bml(34,110)]);
var NINETEEN_TWO = allConcat([bml(1,164)]);
var NINETEEN_ALL = [NINETEEN_ONE,NINETEEN_TWO];

var TWENTY_ONE = allConcat([bml(1,52),bml(1,52),bml(53,122)]);
var TWENTY_TWO = allConcat([bml(1,120)]);
var TWENTY_ALL = [TWENTY_ONE,TWENTY_TWO];

var TWENTYONE_ONE = allConcat([bml(1,2),bml(3,87),bml(3,85),bml(86,302)]);
var TWENTYONE_TWO = allConcat([bml(1,28)]);
var TWENTYONE_THREE = allConcat([bml(1,543)]);
var TWENTYONE_ALL = [TWENTYONE_ONE,TWENTYONE_TWO,TWENTYONE_THREE];

var TWENTYTWO_ONE = allConcat([bml(1,154)]);
var TWENTYTWO_TWO = allConcat([bml(1,20),bml(1,19),bml(20,22),bml(23,163),bml(23,161),bml(162,188)]);
var TWENTYTWO_ALL = [TWENTYTWO_ONE,TWENTYTWO_TWO];

var TWENTYTHREE_ONE = allConcat([bml(1,262)]);
var TWENTYTHREE_TWO = allConcat([bml(1,8),bml(1,8),bml(9,16),bml(9,16),bml(17,17),bml(18,25),bml(18,24),bml(25,32),bml(25,32),bml(33,40),bml(33,40),bml(41,47),bml(41,46),bml(47,97)]);
var TWENTYTHREE_THREE = allConcat([bml(1,117),bml(118,307),bml(118,307),bml(308,315),bml(308,315),bml(316,325),bml(316,324),bml(325,361)]);
var TWENTYTHREE_ALL = [TWENTYTHREE_ONE,TWENTYTHREE_TWO,TWENTYTHREE_THREE];

var TWENTYFOUR_ONE = allConcat([bml(1,5),bml(6,39),bml(6,38),bml(39,105),bml(39,105)]);
var TWENTYFOUR_TWO = allConcat([bml(1,183)]);
var TWENTYFOUR_ALL = [TWENTYFOUR_ONE,TWENTYFOUR_TWO];

var TWENTYFIVE_ONE = allConcat([bml(1,1),bml(2,50),bml(2,51),bml(52,173),bml(52,169),bml(170,201)]);
var TWENTYFIVE_TWO = allConcat([bml(1,34)]);
var TWENTYFIVE_THREE = allConcat([bml(1,8),bml(1,8),bml(9,16),bml(9,15),bml(16,117)]);
var TWENTYFIVE_ALL = [TWENTYFIVE_ONE,TWENTYFIVE_TWO,TWENTYFIVE_THREE];

var TWENTYSIX_ONE = allConcat([bml(1,16),bml(17,68),bml(17,66),bml(67,255)]);
var TWENTYSIX_TWO = allConcat([bml(1,42)]);
var TWENTYSIX_THREE = allConcat([bml(1,10),bml(11,81),bml(11,81),bml(82,196)]);
var TWENTYSIX_ALL = [TWENTYSIX_ONE,TWENTYSIX_TWO,TWENTYSIX_THREE];

var TWENTYSEVEN_ONE = allConcat([bml(1,245)]);
var TWENTYSEVEN_TWO = allConcat([bml(1,290)]);
var TWENTYSEVEN_ALL = [TWENTYSEVEN_ONE,TWENTYSEVEN_TWO];

var TWENTYEIGHT_ONE = allConcat([bml(1,102]);
var TWENTYEIGHT_TWO = allConcat([bml(1,8),bml(1,8),bml(9,11),bml(12,54),bml(12,54),bml(55,64),bml(55,64),bml(65,94),bml(1,54)]);
var TWENTYEIGHT_THREE = allConcat([bml(1,32)]);
var TWENTYEIGHT_FOUR = allConcat([bml(1,81),bml(1,80),bml(81,329)]);
var TWENTYEIGHT_ALL = [TWENTYEIGHT_ONE,TWENTYEIGHT_TWO,TWENTYEIGHT_THREE,TWENTYEIGHT_FOUR];

var TWENTYNINE_ONE = allConcat([bml(1,125),bml(1,119),bml(120,405)]);
var TWENTYNINE_TWO = allConcat([bml(1,175)]);
var TWENTYNINE_THREE = allConcat([bml(1,187)]);
var TWENTYNINE_FOUR = allConcat([bml(1,400)]);
var TWENTYNINE_ALL = [TWENTYNINE_ONE,TWENTYNINE_TWO,TWENTYNINE_THREE,TWENTYNINE_FOUR];

var THIRTY_ONE = allConcat([bml(1,99)]);
var THIRTY_TWO = allConcat([bml(1,177)]);
var THIRTY_THREE = allConcat([bml(1,8),bml(1,8),bml(9,16),bml(9,16),bml(17,24),bml(17,24),bml(25,32),bml(25,32),bml(33,48),bml(49,64),bml(65,72),bml(65,72),bml(73,80),bml(73,80),bml(81,120),bml(121,171)]);
var THIRTY_ALL = [THIRTY_ONE,THIRTY_TWO,THIRTY_THREE];

var THIRTYONE_ONE = allConcat([bml(1,116)]);
var THIRTYONE_TWO = allConcat([bml(1,8),bml(1,8),bml(9,40),bml(9,39),bml(40,111),bml(112,144),bml(112,143),bml(144,159)]);
var THIRTYONE_THREE = allConcat([bml(1,213)]);
var THIRTYONE_ALL = [THIRTYONE_ONE,THIRTYONE_TWO,THIRTYONE_THREE];

var THIRTYTWO_ONE = allConcat([bml(1,18),bml(19,69),bml(19,68),bml(69,158)]);
var THIRTYTWO_TWO = allConcat([bml(1,8),bml(1,8),bml(9,16),bml(9,16),bml(17,24),bml(17,24),bml(25,32),bml(25,32),bml(33,40),bml(33,40),bml(41,48),bml(41,48),bml(49,56),bml(49,56),bml(57,64),bml(57,64),bml(65,177)]);
var THIRTYTWO_ALL = [THIRTYTWO_ONE,THIRTYTWO_TWO,THIRTYTWO_THREE];
