function convert(Opponents){
  var converted = '';


  for(var i = 0; i < Opponents.length; i++) {
    var enemyString = '';
    enemyString += '[ \'' + Opponents[i][0].replace(/<br>/g,'\', \'') + '\' ]';

    converted += '{\r\n  enemies: '+enemyString+',\r\n  xpValue: ' + Opponents[i][1] + ',\r\n  count: '+ Opponents[i][2] + '\r\n}';
    if( i !== Opponents.length - 1 ) {
      converted += ',\r\n'
    }
  }
  console.log(converted);
}