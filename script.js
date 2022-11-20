function toggleText(element, texts, delay) {
  let i = 0;
  
  const work = () => {
    element.innerHTML = texts[i].text;

    setTimeout(work, (texts[i].delay * 1000))

    i = (i < texts.length - 1) ? i + 1 : 0;
  }

  setTimeout(work, (delay * 1000))
}

toggleText(document.querySelector(".js-dialog"), [
  {
    text: 'Welcome to...',
    delay: 1.6
  },
  {
    text: '...my portfolio.',
    delay: 2.4
  }
], 2);

let hrElement;
let counter = 5;
for (let i = 0; i < counter; i++) {
  hrElement = document.createElement("HR");
  if (i == counter - 1) {
    hrElement.className = "thunder";
  } else {
    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    hrElement.style.animationDuration = 7 + Math.random() * 0.1 + "s";
    hrElement.style.animationDelay = Math.random() * 10 + "s";
  }
  document.body.appendChild(hrElement);
}

number = 40
function bubble() {
  var b = document.createElement('div')
  var size = (Math.random()*200) + 50
  var skew = Math.random()*50
  b.style.width = size +'px'
  b.style.height = size +'px'
  b.style.filter = 'blur(20px)'
  b.style.transform = Math.random() < .5 ? 'skew('+skew*(-1)+'deg)' : 'skew('+skew+'deg)'
  b.style.borderRadius = '50%'
  b.style.background = 'white'
  b.style.opacity = '.1'
  b.style.position = 'absolute'
  b.style.bottom = '-200px'
  b.style.left = Math.random()*(window.innerWidth - 75) + 'px'
  b.style.animationDelay = Math.random()*10 + 's'
  b.style.animationDuration = (Math.random()*30) + 2 + 's'
  document.body.appendChild(b)
}

setTimeout(function() {
  for(var i=0;i<number;i++) { bubble() }
},100)
