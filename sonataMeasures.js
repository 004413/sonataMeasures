var CANVAS_HORZ_SIZE = 2000;
var CANVAS_VERT_SIZE = 1500;
var LEFT_MARGIN = 30;
var TOP_MARGIN = 24;
var canvas = Raphael(0,0,CANVAS_HORZ_SIZE,CANVAS_VERT_SIZE);

var PIX_PER_MEASURE = 3;
var LINE_WIDTH = 3;
var INTER_LINE_DISTANCE = 4;
var MOVEMENT_FONT_SIZE = 6;
var SONATA_FONT_SIZE = 12;
var MOVEMENT_EXTRA_SPACING = 1;
var SONATA_EXTRA_SPACING = 9;

var COLORS = {'Sonata':'#0000FF','Adagio':'#808000','M/S':'#FF0000','Rondo':'#008000','Variations':'#008080','Fugue':'#800080'};
var MEASURE_MARKINGS = [1,16,32,48,64,96,128,160,192,224,256,320,384,448,512];

for(var n=0;n<MEASURE_MARKINGS.length;n++){
  canvas.text(LEFT_MARGIN+PIX_PER_MEASURE*(MEASURE_MARKINGS[n]-1)+1,2*TOP_MARGIN/3,MEASURE_MARKINGS[n]);
}
canvas.text(LEFT_MARGIN,TOP_MARGIN/4,'Measures').attr({'text-anchor':'start'});

/* produces string to represent a line from (x1,y1) to (x2,y2) */
function parseLine(x1,y1,x2,y2){
  var lineString = "m";
  lineString += x1;
  lineString += ",";
  lineString += y1;
  lineString += "l";
  lineString += x2-x1;
  lineString += ",";
  lineString += y2-y1;
  return lineString;
}

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
  return outputList;
}

/*
 * creates a mark on the chart on a per-measure basis
 * measureNumber is the measure number
 * movementOffset is the vertical offset to reach the movement, in measures
 * vertOffset is the vertical offset due to displaying of repeats, in pixels
 * sonataOffset is amount of offset to refer to current sonata, in pixels
 * lineColor is color to color the marking, based on the type of movement
 */
function produceMarkingForMeasure(measureNumber,movementOffset,vertOffset,sonataOffset,lineColor){
  var centerPosition = measureNumber*PIX_PER_MEASURE;
  var measureLine = canvas.path(parseLine(LEFT_MARGIN+centerPosition-PIX_PER_MEASURE,sonataOffset+movementOffset+vertOffset,LEFT_MARGIN+centerPosition,sonataOffset+movementOffset+vertOffset)).attr({'stroke':lineColor}).attr({'stroke-width':LINE_WIDTH});
}

/* Remember LEFT_MARGIN for setting original movementOffset. */

var sonataData = []

var ONE_ONE = allConcat([bml(1,48),bml(1,48),bml(49,152)]);
var ONE_TWO = allConcat([bml(1,61)]);
var ONE_THREE = allConcat([bml(1,14),bml(1,14),bml(15,40),bml(15,40),bml(41,50),bml(41,50),bml(51,73),bml(51,73),bml(1,14),bml(1,14),bml(15,40),bml(15,40)]);
var ONE_FOUR = allConcat([bml(1,1),bml(2,57),bml(2,57),bml(58,58),bml(59,196),bml(59,196)]);
var ONE_ALL = [[ONE_ONE,'Sonata'],[ONE_TWO,'Adagio'],[ONE_THREE,'M/S'],[ONE_FOUR,'Sonata']];

var TWO_ONE = allConcat([bml(1,117),bml(1,117),bml(118,336)]);
var TWO_TWO = allConcat([bml(1,80)]);
var TWO_THREE = allConcat([bml(1,8),bml(1,8),bml(9,44),bml(9,44),bml(45,52),bml(45,52),bml(53,68),bml(53,68),bml(1,8),bml(1,8),bml(9,44),bml(9,44)]);
var TWO_FOUR = allConcat([bml(1,56),bml(57,66),bml(57,66),bml(67,187)]);
var TWO_ALL = [[TWO_ONE,'Sonata'],[TWO_TWO,'Adagio'],[TWO_THREE,'M/S'],[TWO_FOUR,'Rondo']];

var THREE_ONE = allConcat([bml(1,90),bml(1,90),bml(91,257)]);
var THREE_TWO = allConcat([bml(1,82)]);
var THREE_THREE = allConcat([bml(1,16),bml(1,16),bml(17,64),bml(17,64),bml(65,72),bml(65,72),bml(73,104),bml(1,16),bml(1,16),bml(17,64),bml(17,64),bml(105,127)]);
var THREE_FOUR = allConcat([bml(1,312)]);
var THREE_ALL = [[THREE_ONE,'Sonata'],[THREE_TWO,'Adagio'],[THREE_THREE,'M/S'],[THREE_FOUR,'Rondo']];

var FOUR_ONE = allConcat([bml(1,136),bml(1,136),bml(137,362)]);
var FOUR_TWO = allConcat([bml(1,90)]);
var FOUR_THREE = allConcat([bml(1,24),bml(1,24),bml(25,95),bml(25,95),bml(96,111),bml(96,111),bml(112,149),bml(1,24),bml(1,24),bml(25,95),bml(25,95)]);
var FOUR_FOUR = allConcat([bml(1,64),bml(65,72),bml(65,88),bml(72,87),bml(88,183)]);
var FOUR_ALL = [[FOUR_ONE,'Sonata'],[FOUR_TWO,'Adagio'],[FOUR_THREE,'M/S'],[FOUR_FOUR,'Rondo']];

var FIVE_ONE = allConcat([bml(1,105),bml(1,105),bml(106,284)]);
var FIVE_TWO = allConcat([bml(1,112)]);
var FIVE_THREE = allConcat([bml(1,46),bml(1,46),bml(47,122)]);
var FIVE_ALL = [[FIVE_ONE,'Sonata'],[FIVE_TWO,'Adagio'],[FIVE_THREE,'Sonata']];

var SIX_ONE = allConcat([bml(1,66),bml(1,66),bml(67,202),bml(67,202)]);
var SIX_TWO = allConcat([bml(1,8),bml(1,8),bml(9,38),bml(9,38),bml(39,170)]);
var SIX_THREE = allConcat([bml(1,32),bml(1,32),bml(33,150),bml(33,150)]);
var SIX_ALL = [[SIX_ONE,'Sonata'],[SIX_TWO,'M/S'],[SIX_THREE,'Sonata']];

var SEVEN_ONE = allConcat([bml(1,124),bml(1,124),bml(125,344)]);
var SEVEN_TWO = allConcat([bml(1,87)]);
var SEVEN_THREE = allConcat([bml(1,16),bml(1,16),bml(17,54),bml(17,54),bml(55,86),bml(1,54)]);
var SEVEN_FOUR = allConcat([bml(1,113)]);
var SEVEN_ALL = [[SEVEN_ONE,'Sonata'],[SEVEN_TWO,'Adagio'],[SEVEN_THREE,'M/S'],[SEVEN_FOUR,'Rondo']];

var EIGHT_ONE = allConcat([bml(1,10),bml(11,132),bml(11,132),bml(133,310)]);
var EIGHT_TWO = allConcat([bml(1,73)]);
var EIGHT_THREE = allConcat([bml(1,210)]);
var EIGHT_ALL = [[EIGHT_ONE,'Sonata'],[EIGHT_TWO,'Adagio'],[EIGHT_THREE,'Rondo']];

var NINE_ONE = allConcat([bml(1,1),bml(2,61),bml(2,60),bml(61,162)]);
var NINE_TWO = allConcat([bml(1,62),bml(63,78),bml(63,78),bml(79,100),bml(1,62),bml(101,116)]);
var NINE_THREE = allConcat([bml(1,131)])
var NINE_ALL = [[NINE_ONE,'Sonata'],[NINE_TWO,'M/S'],[NINE_THREE,'Rondo']];

var TEN_ONE = allConcat([bml(1,63),bml(1,63),bml(64,200)]);
var TEN_TWO = allConcat([bml(1,8),bml(9,20),bml(9,20),bml(21,29),bml(30,41),bml(30,40),bml(41,48),bml(49,60),bml(49,59),bml(60,90)]);
var TEN_THREE = allConcat([bml(1,254)]);
var TEN_ALL = [[TEN_ONE,'Sonata'],[TEN_TWO,'Variations'],[TEN_THREE,'Rondo']];

var ELEVEN_ONE = allConcat([bml(1,68),bml(1,68),bml(69,199)]);
var ELEVEN_TWO = allConcat([bml(1,77)]);
var ELEVEN_THREE = allConcat([bml(1,8),bml(1,8),bml(9,30),bml(9,30),bml(31,38),bml(31,38),bml(39,46),bml(39,46),bml(1,30)]);
var ELEVEN_FOUR = allConcat([bml(1,199)]);
var ELEVEN_ALL = [[ELEVEN_ONE,'Sonata'],[ELEVEN_TWO,'Adagio'],[ELEVEN_THREE,'M/S'],[ELEVEN_FOUR,'Rondo']];

var TWELVE_ONE = allConcat([bml(1,219)]);
var TWELVE_TWO = allConcat([bml(1,16),bml(17,67),bml(17,67),bml(68,75),bml(68,75),bml(76,91),bml(76,95),bml(1,67)]);
var TWELVE_THREE = allConcat([bml(1,30),bml(31,34),bml(31,34),bml(35,38),bml(35,37),bml(38,75)]);
var TWELVE_FOUR = allConcat([bml(1,80),bml(81,88),bml(81,87),bml(88,169)]);
var TWELVE_ALL = [[TWELVE_ONE,'Variations'],[TWELVE_TWO,'M/S'],[TWELVE_THREE,'Adagio'],[TWELVE_FOUR,'Rondo']];

var THIRTEEN_ONE = allConcat([bml(1,4),bml(1,4),bml(5,8),bml(5,8),bml(9,12),bml(9,11),bml(12,36),bml(37,44),bml(37,44),bml(45,86)]);
var THIRTEEN_TWO = allConcat([bml(1,1),bml(2,17),bml(2,17),bml(18,41),bml(18,41),bml(42,55),bml(42,55),bml(56,73),bml(56,73),bml(74,140)]);
var THIRTEEN_THREE = allConcat([bml(1,26)]);
var THIRTEEN_FOUR = allConcat([bml(1,285)]);
var THIRTEEN_ALL = [[THIRTEEN_ONE,'M/S'],[THIRTEEN_TWO,'M/S'],[THIRTEEN_THREE,'Adagio'],[THIRTEEN_FOUR,'Rondo']];

var FOURTEEN_ONE = allConcat([bml(1,68)]);
var FOURTEEN_TWO = allConcat([bml(1,16),bml(17,36),bml(17,36),bml(37,44),bml(37,44),bml(45,60),bml(45,60),bml(1,16),bml(17,36),bml(17,36)]);
var FOURTEEN_THREE = allConcat([bml(1,1),bml(2,65),bml(2,65),bml(66,200)]);
var FOURTEEN_ALL = [[FOURTEEN_ONE,'Sonata'],[FOURTEEN_TWO,'M/S'],[FOURTEEN_THREE,'Sonata']];

var FIFTEEN_ONE = allConcat([bml(1,1),bml(2,163),bml(2,163),bml(164,461)]);
var FIFTEEN_TWO = allConcat([bml(1,8),bml(1,8),bml(9,22),bml(9,22),bml(23,30),bml(23,30),bml(31,38),bml(31,38),bml(39,99)]);
var FIFTEEN_THREE = allConcat([bml(1,32),bml(33,70),bml(33,70),bml(71,78),bml(71,78),bml(79,94),bml(1,32),bml(33,70),bml(33,70)]);
var FIFTEEN_FOUR = allConcat([bml(1,210)]);
var FIFTEEN_ALL = [[FIFTEEN_ONE,'Sonata'],[FIFTEEN_TWO,'Adagio'],[FIFTEEN_THREE,'M/S'],[FIFTEEN_FOUR,'Rondo']];

var SIXTEEN_ONE = allConcat([bml(1,2),bml(3,113),bml(3,113),bml(114,325)]);
var SIXTEEN_TWO = allConcat([bml(1,119)]);
var SIXTEEN_THREE = allConcat([bml(1,275)]);
var SIXTEEN_ALL = [[SIXTEEN_ONE,'Sonata'],[SIXTEEN_TWO,'Adagio'],[SIXTEEN_THREE,'Rondo']];

var SEVENTEEN_ONE = allConcat([bml(1,92),bml(1,92),bml(93,228)]);
var SEVENTEEN_TWO = allConcat([bml(1,103)]);
var SEVENTEEN_THREE = allConcat([bml(1,94),bml(1,94),bml(95,399)]);
var SEVENTEEN_ALL = [[SEVENTEEN_ONE,'Sonata'],[SEVENTEEN_TWO,'Adagio'],[SEVENTEEN_THREE,'Rondo']];

var EIGHTEEN_ONE = allConcat([bml(1,88),bml(1,88),bml(89,253)]);
var EIGHTEEN_TWO = allConcat([bml(1,2),bml(3,63),bml(3,63),bml(64,171)]);
var EIGHTEEN_THREE = allConcat([bml(1,1),bml(2,9),bml(2,8),bml(9,16),bml(9,16),bml(17,24),bml(17,24),bml(25,38),bml(25,38),bml(39,39),bml(40,47),bml(40,46),bml(47,54),bml(47,54),bml(55,62)]);
var EIGHTEEN_FOUR = allConcat([bml(1,79),bml(1,79),bml(80,333)]);
var EIGHTEEN_ALL = [[EIGHTEEN_ONE,'Sonata'],[EIGHTEEN_TWO,'M/S'],[EIGHTEEN_THREE,'M/S'],[EIGHTEEN_FOUR,'Sonata']];

var TWENTYONE_ONE = allConcat([bml(1,2),bml(3,87),bml(3,85),bml(86,302)]);
var TWENTYONE_TWO = allConcat([bml(1,28)]);
var TWENTYONE_THREE = allConcat([bml(1,543)]);
var TWENTYONE_ALL = [[TWENTYONE_ONE,'Sonata'],[TWENTYONE_TWO,'Adagio'],[TWENTYONE_THREE,'Rondo']];

var TWENTYTWO_ONE = allConcat([bml(1,154)]);
var TWENTYTWO_TWO = allConcat([bml(1,20),bml(1,19),bml(20,22),bml(23,163),bml(23,161),bml(162,188)]);
var TWENTYTWO_ALL = [[TWENTYTWO_ONE,'M/S'],[TWENTYTWO_TWO,'Fugue']];

var TWENTYTHREE_ONE = allConcat([bml(1,262)]);
var TWENTYTHREE_TWO = allConcat([bml(1,8),bml(1,8),bml(9,16),bml(9,16),bml(17,17),bml(18,25),bml(18,24),bml(25,32),bml(25,32),bml(33,40),bml(33,40),bml(41,47),bml(41,46),bml(47,97)]);
var TWENTYTHREE_THREE = allConcat([bml(1,117),bml(118,307),bml(118,307),bml(308,315),bml(308,315),bml(316,325),bml(316,324),bml(325,361)]);
var TWENTYTHREE_ALL = [[TWENTYTHREE_ONE,'Sonata'],[TWENTYTHREE_TWO,'Variations'],[TWENTYTHREE_THREE,'Sonata']];

var TWENTYFOUR_ONE = allConcat([bml(1,5),bml(6,39),bml(6,38),bml(39,105),bml(39,105)]);
var TWENTYFOUR_TWO = allConcat([bml(1,183)]);
var TWENTYFOUR_ALL = [[TWENTYFOUR_ONE,'Sonata'],[TWENTYFOUR_TWO,'Rondo']];

var TWENTYFIVE_ONE = allConcat([bml(1,1),bml(2,50),bml(2,51),bml(52,173),bml(52,169),bml(170,201)]);
var TWENTYFIVE_TWO = allConcat([bml(1,34)]);
var TWENTYFIVE_THREE = allConcat([bml(1,8),bml(1,8),bml(9,16),bml(9,15),bml(16,117)]);
var TWENTYFIVE_ALL = [[TWENTYFIVE_ONE,'Sonata'],[TWENTYFIVE_TWO,'Adagio'],[TWENTYFIVE_THREE,'Rondo']];

var TWENTYSIX_ONE = allConcat([bml(1,16),bml(17,68),bml(17,66),bml(67,255)]);
var TWENTYSIX_TWO = allConcat([bml(1,42)]);
var TWENTYSIX_THREE = allConcat([bml(1,10),bml(11,81),bml(11,81),bml(82,196)]);
var TWENTYSIX_ALL = [[TWENTYSIX_ONE,'Sonata'],[TWENTYSIX_TWO,'Adagio'],[TWENTYSIX_THREE,'Sonata']];

var TWENTYSEVEN_ONE = allConcat([bml(1,245)]);
var TWENTYSEVEN_TWO = allConcat([bml(1,290)]);
var TWENTYSEVEN_ALL = [[TWENTYSEVEN_ONE,'Sonata'],[TWENTYSEVEN_TWO,'Rondo']];

var TWENTYEIGHT_ONE = allConcat([bml(1,102)]);
var TWENTYEIGHT_TWO = allConcat([bml(1,8),bml(1,8),bml(9,11),bml(12,54),bml(12,54),bml(55,64),bml(55,64),bml(65,94),bml(1,54)]);
var TWENTYEIGHT_THREE = allConcat([bml(1,32)]);
var TWENTYEIGHT_FOUR = allConcat([bml(1,81),bml(1,80),bml(81,329)]);
var TWENTYEIGHT_ALL = [[TWENTYEIGHT_ONE,'Sonata'],[TWENTYEIGHT_TWO,'M/S'],[TWENTYEIGHT_THREE,'Adagio'],[TWENTYEIGHT_FOUR,'Fugue']];

var TWENTYNINE_ONE = allConcat([bml(1,125),bml(1,119),bml(120,405)]);
var TWENTYNINE_TWO = allConcat([bml(1,175)]);
var TWENTYNINE_THREE = allConcat([bml(1,187)]);
var TWENTYNINE_FOUR = allConcat([bml(1,400)]);
var TWENTYNINE_ALL = [[TWENTYNINE_ONE,'Sonata'],[TWENTYNINE_TWO,'M/S'],[TWENTYNINE_THREE,'Adagio'],[TWENTYNINE_FOUR,'Fugue']];

var THIRTY_ONE = allConcat([bml(1,99)]);
var THIRTY_TWO = allConcat([bml(1,177)]);
var THIRTY_THREE = allConcat([bml(1,8),bml(1,8),bml(9,16),bml(9,16),bml(17,24),bml(17,24),bml(25,32),bml(25,32),bml(33,48),bml(49,64),bml(65,72),bml(65,72),bml(73,80),bml(73,80),bml(81,120),bml(121,171)]);
var THIRTY_ALL = [[THIRTY_ONE,'Sonata'],[THIRTY_TWO,'M/S'],[THIRTY_THREE,'Variations']];

var THIRTYONE_ONE = allConcat([bml(1,116)]);
var THIRTYONE_TWO = allConcat([bml(1,8),bml(1,8),bml(9,40),bml(9,39),bml(40,111),bml(112,144),bml(112,143),bml(144,159)]);
var THIRTYONE_THREE = allConcat([bml(1,213)]);
var THIRTYONE_ALL = [[THIRTYONE_ONE,'Sonata'],[THIRTYONE_TWO,'M/S'],[THIRTYONE_THREE,'Fugue']];

var THIRTYTWO_ONE = allConcat([bml(1,18),bml(19,69),bml(19,68),bml(69,158)]);
var THIRTYTWO_TWO = allConcat([bml(1,8),bml(1,8),bml(9,16),bml(9,16),bml(17,24),bml(17,24),bml(25,32),bml(25,32),bml(33,40),bml(33,40),bml(41,48),bml(41,48),bml(49,56),bml(49,56),bml(57,64),bml(57,64),bml(65,177)]);
var THIRTYTWO_ALL = [[THIRTYTWO_ONE,'Sonata'],[THIRTYTWO_TWO,'Variations']];

sonataData = [ONE_ALL,TWO_ALL,THREE_ALL,FOUR_ALL,FIVE_ALL,SIX_ALL,SEVEN_ALL,EIGHT_ALL,NINE_ALL,TEN_ALL,ELEVEN_ALL,TWELVE_ALL,THIRTEEN_ALL,FOURTEEN_ALL,FIFTEEN_ALL,SIXTEEN_ALL,SEVENTEEN_ALL,EIGHTEEN_ALL,TWENTYONE_ALL,TWENTYTWO_ALL,TWENTYTHREE_ALL,TWENTYFOUR_ALL,TWENTYFIVE_ALL,TWENTYSIX_ALL,TWENTYSEVEN_ALL,TWENTYEIGHT_ALL,TWENTYNINE_ALL,THIRTY_ALL,THIRTYONE_ALL,THIRTYTWO_ALL];

var sonataOffset = TOP_MARGIN;
var previousSonataOffset = TOP_MARGIN;
for(var a=0;a<sonataData.length;a++){
  var movementOffset = 0;
  var sonataNewLines = 0;
  var previousMovementOffset = 0;
  for(var b=0;b<sonataData[a].length;b++){
    var vertOffset = 0;
    var newLines = 0;
    for(var m=0;m<sonataData[a][b][0].length;m++){
      if(m>0 && sonataData[a][b][0][m]!=sonataData[a][b][0][m-1]+1){
        vertOffset += INTER_LINE_DISTANCE;
        newLines += 1;
        sonataNewLines += 1
      }
      var measure = produceMarkingForMeasure(sonataData[a][b][0][m],movementOffset,vertOffset,sonataOffset,COLORS[sonataData[a][b][1]]);
    }
    previousMovementOffset = movementOffset;
    movementOffset += INTER_LINE_DISTANCE*(newLines+1) + MOVEMENT_EXTRA_SPACING;
    var movementNumber = canvas.text(2*LEFT_MARGIN/3,sonataOffset+(movementOffset-INTER_LINE_DISTANCE-MOVEMENT_EXTRA_SPACING+previousMovementOffset)/2,b+1).attr({'fill':COLORS[sonataData[a][b][1]]}).attr({'size':MOVEMENT_FONT_SIZE+'px'});
  }
  previousSonataOffset = sonataOffset;
  sonataOffset += movementOffset + SONATA_EXTRA_SPACING;
  var number = 0;
  if(a>17){
    number += 2;
  }
  number += a+1;
  if(a<2){
    console.log(previousSonataOffset);
    console.log(sonataOffset-INTER_LINE_DISTANCE-SONATA_EXTRA_SPACING-MOVEMENT_EXTRA_SPACING);
  }
  var sonataNumber = canvas.text(LEFT_MARGIN/3,(sonataOffset-INTER_LINE_DISTANCE-SONATA_EXTRA_SPACING-MOVEMENT_EXTRA_SPACING+previousSonataOffset)/2,number).attr({'size':SONATA_FONT_SIZE+'px'});
}
