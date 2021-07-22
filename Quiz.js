class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState = data.val();
    })
  
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  
    Contestant.getContestantInfo();
    if(allContestants!== undefined){
      question.button.mousePressed(()=>{
        fill(0,0,255);
        textSize(20)
        text("NOTE: Contestant who answered correctly are highlighted in green", 130,230)
      })
      
      for(var plr in allContestants){
        var correctAns= "1";
        if(correctAns===allContestants[plr].answer)
        fill(0,255,0);
        else{
          fill(255,0,0);
        }
      }


    }
    
  }


}
