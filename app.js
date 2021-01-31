window.addEventListener('DOMContentLoaded', function () {
  let friends = ['Elliot', 'Darlene', 'Angela', 'Tyrell', 'Dom'];
  var count = 99;
  var word = "lines";
  let singBtn = document.getElementById('singBtn');

  singBtn.addEventListener('click', function () {
    for (let n = 0; n < friends.length; n++) {
      let friendArea = document.createElement('div');
      friendArea.className = 'friend';
      let friendHeader = document.createElement('h3');
      let friendName = document.createTextNode(friends[n] + ':');

      friendHeader.appendChild(friendName);
      friendArea.appendChild(friendHeader);
      document.body.appendChild(friendArea);

      while (count > 0) {
        if (count == 1) {
          word = "line";
        }
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        let p1Text = document.createTextNode(count + ' ' + word + ' of code in the file, ' + count + ' ' + word + ' of code;');
        let p2Text = document.createTextNode(friends[n] + ' strikes one out, clears it all out,');

        p1.appendChild(p1Text);
        p2.appendChild(p2Text);
        friendArea.appendChild(p1);
        friendArea.appendChild(p2);

        count = count - 1;
        if (count == 1) {
          word = "line";
        } else {
          word = "lines";
        }

        let p3Text = document.createTextNode(count + ' ' + word + ' of code on the wall.');

        p3.appendChild(p3Text);
        friendArea.appendChild(p3);

      }
      count = 99;
    };
  });

});
