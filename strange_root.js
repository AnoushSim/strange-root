var express = require('express');
var app = express();

function strange_root(num)
{
  let square = num*num;
  let square_root = Math.sqrt(num);

  let square_str = square.toString();
  let squareroot_str = square_root.toString();

  let square_len = square_str.length;
  let sqroot_len = squareroot_str.length;

  for (let ix = 0; ix < square_len ; ++ix) {
    for(let jx = 0; jx < sqroot_len; ++jx) {
      if (square_str[ix] == squareroot_str[jx]) {
        console.log('The number is strange root. The square is:' + square +' and the square root is: ' +  square_root );
        return true;
      }
      if (squareroot_str[jx] == '.')
          sqroot_len = jx + 4;
    }
  }

  console.log('The number is not strange root. The square is:' + square + ' and the square root is: ' +  square_root );
  return false;

}


app.get('/calculate', (req, res) => {
  if(strange_root(req.query.number)) {
    res.send('The number is  strange root. The square is:' + req.query.number * req.query.number + ' and the square root is: ' +  Math.sqrt(req.query.number))
  }
  else
    res.send('The number is not strange root. The square is:' + req.query.number * req.query.number + ' and the square root is: ' +  Math.sqrt(req.query.number))
});

app.listen(3000, () =>  console.log ('Example app listening on port 3000'));
