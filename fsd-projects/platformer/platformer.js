$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(110,700,85,15,"white");
    createPlatform(200,600,85,15,"white"); 
    createPlatform(380,500,85,15,"white");
    createPlatform(500,400,120,15,"white");
    createPlatform(100,500,120,15,"white");
    createPlatform(600,200,180,15,"white")
    createPlatform(740,600,190,15,"white")
    createPlatform(350,300,200,15,"white")
    createPlatform(780,200,20,400,"white")
    createPlatform(980,500,160,15,"white")
    createPlatform(1200,700,160,15,"white")
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
  




    




    // TODO 3 - Create Collectables
      createCollectable("tokens",140,460)
      createCollectable("tokens",440,260)
      createCollectable("tokens",1050,460)
      createCollectable("flag",1300,650)


    
    // TODO 4 - Create Cannons 
    createCannon("bottom",250,1500)
    createCannon("bottom",650,1500)
    createCannon("right",300,1500)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
