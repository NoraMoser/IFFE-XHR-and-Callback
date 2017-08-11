console.log("hi");

var Predator = (function () {
    var carnivores = [];
    var herbivores = [];
  
    return {
      loadCarnivores: function (callbackToInvoke) {
        let loader = new XMLHttpRequest();
        
        loader.addEventListener("load", dataRequestComplete);
        loader.addEventListener("error", dataRequestFailed);

        function dataRequestComplete(event){
          carnivores = JSON.parse(event.target.responseText);
          showCarnivores (carnivores);
        }

        function dataRequestFailed(event){
          console.log("dataFailed", event);
        }
         
        
        loader.open("GET", "JSON/carnivores.json");
        loader.send();

      }, 
    
      loadHerbivores: function (callbackToInvoke) {
          let loader2 = new XMLHttpRequest();
          
          loader2.addEventListener("load", dataRequestComplete);
          loader2.addEventListener("error", dataRequestFailed);
  
          function dataRequestComplete(event){
            herbivores = JSON.parse(event.target.responseText);
            showHerbivores (herbivores);
          }
  
          function dataRequestFailed(event){
            console.log("dataFailed", event);
          }
           
          
          loader2.open("GET", "JSON/herbivores.json");
          loader2.send();
  
        },
      }

    
  })(Predator || {});