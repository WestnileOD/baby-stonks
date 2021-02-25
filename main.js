let money = 25.00
let a = {
	b: {
		c: 0}
}
let x = {
	y: {
		z: 0}
}
let asset = {
	farm: {
	 rate: 2.17,
	  user: 0},
	unicorn: {
	  rate: 34.87,
	  user: 0},
	rainbow: {
      rate: 7.98,
	  user: 0},
	bubble: {
	  rate: 14.84,
	  user: 0.00000000},
	troll: {
	  rate: 1,
	  user: 0.00000000}
 }
 function makeMoney() {
	 document.getElementById("start").style.visibility = "hidden";
	 document.getElementById("start").disabled = true;
	 asset.troll.rate = (Math.random()* 27)
	 setInterval(playGame, 6800)
	 setInterval(bubblePop, 34000)
	 setInterval(bigCrash, 98000)
	 setInterval(unicornPoop, 100000)
 }
 
 function playGame() {
	 
	 asset.farm.rate = (asset.farm.rate + Math.random()* 0.06)
	 asset.unicorn.rate = (asset.unicorn.rate + Math.random()* 0.16)
	 asset.rainbow.rate = (asset.rainbow.rate + Math.random()* 0.19)
	 asset.bubble.rate = (asset.bubble.rate + Math.random()* 5.86)
	 asset.troll.rate = (asset.troll.rate + Math.random()* 0.11)
     asset.farm.rate = (asset.farm.rate - Math.random()* 0.03)
	 asset.unicorn.rate = (asset.unicorn.rate - Math.random()* 0.12)
	 asset.rainbow.rate = (asset.rainbow.rate - Math.random()* 0.19)
	 asset.bubble.rate = (asset.bubble.rate - Math.random()* 1.96)
	 asset.troll.rate = (asset.troll.rate - Math.random()* 0.19)
	
	 update()
 }
 
 function bubblePop() {
	 asset.troll.rate = (asset.troll.rate + Math.random() * 5.84 )
	 asset.bubble.rate = (asset.bubble.rate - Math.random() * 8 )
	 if (asset.bubble.rate <= 0) {
		asset.bubble.rate = (Math.random() * 1.20)
	 }
	 update()
 }
 function bigCrash() {
	  asset.troll.rate = (asset.troll.rate - Math.random() * 11 )
	  asset.bubble.rate = (asset.bubble.rate - Math.random() * 24 )
	 if (asset.bubble.rate <= 0) {
		asset.bubble.rate = (Math.random() * 0.20)
	 }
	 fixTroll()
 }
 function fixTroll() {
	 if (asset.troll.rate <= 0)
	  asset.troll.rate = (Math.random() * 7)
	  update()
 }
 function unicornPoop() {
	 asset.unicorn.rate = (asset.unicorn.rate - Math.random() * 1)
	 update()
 }
 function divDen() {
	 
	 
 }
 
 
 function buy() {
	 if (a.b.c == 1) {
		buyFarm() 
	} 
	else if (a.b.c == 2) {
		buyUnicorn() 
	} 
	else if (a.b.c == 3) {
		buyRainbow() 
	} 
	else if (a.b.c == 4) {
		buyBubble() 
	} 
	else if (a.b.c == 5) {
		buyTroll() 
	} 
	else {
		alert ("ERROR! Retry buy")
	}
 }
 function sell() {
	 if (x.y.z == 1) {
		sellFarm() 
	} 
	 else if (x.y.z == 2) {
		sellUnicorn() 
	} 
	 else if (x.y.z == 3) {
		sellRainbow() 
	} 
	 else if (x.y.z == 4) {
		sellBubble() 
	} 
	 else if (x.y.z == 5) {
		sellTroll() 
	} 
	 else {
		alert ("ERROR! Retry sell")
	}
 }
 
 function buyFarm() {
	 if (money >= asset.farm.rate) {
	 money = (money - asset.farm.rate) 
	 asset.farm.rate = (asset.farm.rate + 0.001)
	 asset.farm.user = (asset.farm.user + 1)
	 update()
	 }
 }
  function buyUnicorn() {
	 if (money >= asset.unicorn.rate) {
	 money = (money - asset.unicorn.rate) 
	 asset.unicorn.rate = (asset.unicorn.rate +  0.001)
	 asset.unicorn.user = (asset.unicorn.user + 1)
	 update()
	 }
 }
  function buyRainbow() {
	 if (money >= asset.rainbow.rate) {
	 money = (money - asset.rainbow.rate) 
	 asset.rainbow.rate = (asset.rainbow.rate +  0.01)
	 asset.rainbow.user = (asset.rainbow.user + 1)
	 update()
	 }
 }
  function buyBubble() {
	 if (money >= asset.bubble.rate) {
	 money = (money - asset.bubble.rate) 
	 asset.bubble.rate = (asset.bubble.rate + 0.075)
	 asset.bubble.user = (asset.bubble.user + 1)
	 update()
	 }
 }
  function buyTroll() {
	 if (money >= asset.troll.rate) {
	 money = (money - asset.troll.rate) 
	 asset.troll.rate = (asset.troll.rate +  0.25)
	 asset.troll.user = (asset.troll.user + 1)
	 update()
	 }
 }
 function sellFarm() {
	 if (asset.farm.user >= 1) {
	 asset.farm.user = (asset.farm.user - 1)
	 money = (money + asset.farm.rate) 
	 asset.farm.rate = (asset.farm.rate - 0.11)
	 update()
	 }
 }
  function sellUnicorn() {
	 if (asset.unicorn.user >= 1) {
	 asset.unicorn.user = (asset.unicorn.user - 1)
	 money = (money + asset.unicorn.rate) 
	 asset.unicorn.rate = (asset.unicorn.rate - 0.5)
	 update()
	 }
 }
  function sellRainbow() {
	 if (asset.rainbow.user >= 1) {
	 asset.rainbow.user = (asset.rainbow.user - 1)
	 money = (money + asset.rainbow.rate) 
	 asset.rainbow.rate = (asset.rainbow.rate -  0.01)
	 update()
	 }
 }
   function sellBubble() {
	  if (asset.bubble.user >= 1) {
	 asset.bubble.user = (asset.bubble.user - 1)
	 money = (money + asset.bubble.rate) 
	 asset.bubble.rate = (asset.bubble.rate -  1)
	 update()
	  }
 }
  function sellTroll() {
	  if (asset.troll.user >= 1) {
	 asset.troll.user = (asset.troll.user - 1)
	 money = (money + asset.troll.rate) 
	 asset.troll.rate = (asset.troll.rate - 0.01)
	 update()
	  }
 }
 
 function update() {
	 document.getElementById("showCash").innerHTML = money.toFixed(2)
	 document.getElementById("farmPrice").innerHTML = asset.farm.rate.toFixed(2)
	 document.getElementById("unicornPrice").innerHTML = asset.unicorn.rate.toFixed(2)
	 document.getElementById("rainbowPrice").innerHTML = asset.rainbow.rate.toFixed(2)
	 document.getElementById("bubblePrice").innerHTML = asset.bubble.rate.toFixed(2)
	 document.getElementById("trollPrice").innerHTML = asset.troll.rate.toFixed(2)
     document.getElementById("farmMe").innerHTML = asset.farm.user
	 document.getElementById("unicornMe").innerHTML = asset.unicorn.user
	 document.getElementById("rainbowMe").innerHTML = asset.rainbow.user
     document.getElementById("bubbleMe").innerHTML = asset.bubble.user
	 document.getElementById("trollMe").innerHTML = asset.troll.user
 }
 