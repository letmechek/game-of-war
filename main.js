const player = {
    currentChoice: null
  }
  
  const computer = {
    currentChoice: null
  }
  
  let suits = ["1", "2", "3", "4"];
  let choices = ['1','2','3','4','5','6','7','8','9','10','11','12'];
  
  
  
    let randomIdxp =Math.floor(Math.random() * 13 + 2);
    const randomIdxc =Math.floor(Math.random() * choices.length);
    const rdx= Math.floor(Math.random() * suits.length);
    const rdx1= Math.floor(Math.random() * suits.length);
    
  
    let rdxoutput = " "
    if(rdx === 0) {
      rdxoutput = "♠️"
  } else if(rdx === 1) {
      rdxoutput = "♥️";
  } else if(rdx === 2) {
      rdxoutput = "♦️";
  } else if(rdx === 3) {
      rdxoutput = "♣️";
  } else {
      rdxoutput = rdx
  }
  
  
    let rdxoutputp = " "
    if(rdx1 === 0) {
      rdxoutputp = "♠️"
  } else if(rdx1 === 1) {
      rdxoutputp = "♥️";
  } else if(rdx1 === 2) {
      rdxoutputp= "♦️";
  } else if(rdx1 === 3) {
      rdxoutputp = "♣️";
  } else {
      rdxoutputp = rdx1
  }
  
  
  
  
  
  
    let usercardoutput = " "
    if(randomIdxp === 0) {
      usercardoutput = "A"
  } else if (randomIdxp === 1 ){
      usercardoutput = 1
  } else if (randomIdxp === 2){
    usercardoutput= 2
  } else if (randomIdxp === 3){
    usercardoutput = 3
  } else if (randomIdxp === 4){
    usercardoutput = 4
  } else if (randomIdxp === 5){
    usercardoutput = 5
  } else if (randomIdxp === 6){
    usercardoutput = 6
  } else if(randomIdxp === 7){
    usercardoutput = 7
  } else if (randomIdxp === 8){
    usercardoutput = 8
  } else if (randomIdxp === 9){
    usercardoutput = 9
  }else if (randomIdxp === 10){
    usercardoutput = 10
  }else if(randomIdxp === 11) {
      usercardoutput = "J";
  } else if(randomIdxp === 12) {
      usercardoutput = "Q";
  } else if(randomIdxp === 13) {
      usercardoutput = "K";
  } else if (randomIdxp === 14){
      usercardoutput = "J"
  }
  else {
      usercardoutput = randomIdxp
  }
  console.log(randomIdxp)
  
    let cpuUsercardOutput = " "
    if(randomIdxc === 0) {
      cpuUsercardOutput = "A"
  } else if (randomIdxc === 1 ){
    cpuUsercardOutput = 1
  } else if (randomIdxc === 2){
    cpuUsercardOutput= 2
  } else if (randomIdxc === 3){
    cpuUsercardOutput = 3
  } else if (randomIdxc === 4){
    cpuUsercardOutput = 4
  } else if (randomIdxc === 5){
    cpuUsercardOutput = 5
  } else if (randomIdxc === 6){
    cpuUsercardOutput = 6
  } else if(randomIdxc === 7){
    cpuUsercardOutput = 7
  } else if (randomIdxc === 8){
    cpuUsercardOutput = 8
  } else if (randomIdxc === 9){
    cpuUsercardOutput = 9
  }else if (randomIdxc === 10){
    cpuUsercardOutput = 10
  }else if(randomIdxc === 11) {
    cpuUsercardOutput = "J";
  } else if(randomIdxc === 12) {
    cpuUsercardOutput = "Q";
  } else if(randomIdxc === 13) {
    cpuUsercardOutput = "K";
  } else if (randomIdxc === 14){
    cpuUsercardOutput = "J"
  }
  else {
    cpuUsercardOutput = randomIdxc
  }
  console.log(randomIdxc)
  
  
  
  computer.currentChoice  = cpuUsercardOutput + rdxoutput ;
  player.currentChoice = usercardoutput + rdxoutputp;
    
  document.getElementById('cardright').innerHTML =player.currentChoice 
  document.getElementById('cardleft').innerText= computer.currentChoice
      
  
  
  
  choices.forEach(function(choice){
      
      if (computer.currentChoice === player.currentChoice){
           document.getElementById('results').innerText = 'Its  a  tie'
      }else if (computer.currentChoice < player.currentChoice ) {
           document.getElementById('results').innerText = 'Player wins!'
      }else {
           document.getElementById('results').innerText = 'Computer wins!'
      }
    })
    
    function buttonClick() {
     window.location.reload()
    
    }
    
    document.getElementById('plays').addEventListener('click',buttonClick) 


    function sumNumber(nums){
      sum = 0
      nums.forEach(function(num){
        sum += num
        return sum
      })
    }