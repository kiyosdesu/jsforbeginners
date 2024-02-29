let userName = '';
userName
? console.log('Hello, ' + userName)//if meron username it will say hello and the username's name
: console.log('Hello!');//if wala username ung user it will only say Hello!

const userQuestion = 'mahal ba ako ni akemi';//ung question ng user
if (userName) {
  console.log(userName + ' asked, ' + userQuestion);//userName if meron username ung user
  }else {
    console.log('asked ' + userQuestion);//if wala username ung user it will only say Hello!
  }


let randomNumber = Math.floor(Math.random() * 7);//nag generate ng random number and ung floor is para walang .98989 every number
let eightBall = 'AI';

switch (randomNumber) {
  case 0:
    console.log(eightBall + ':' + 'maybe');
    break;
  case 1:
  console.log(eightBall + ':' + 'sobra');
  break;
  case 2:
  console.log(eightBall + ':' + 'hindi po');
  break;
  case 3:
  console.log(eightBall + ':' + 'Malay ko');
  break;
  case 4:
  console.log(eightBall + ':' + 'Di ko kayang sagutin for now');
  break;
  case 5:
  console.log(eightBall + ':' + 'Are you gagoing me?');
  break;
  case 6:
  console.log(eightBall + ':' + 'sure na sure');
  break;
  case 7:
  console.log(eightBall + ':' + 'dond');
  break;
}