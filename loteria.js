$(document).ready(function($){
        
   var c = 1;
   var baraja = [];

   $("#inicio").click(function(event){

     let cartas = [];

     for (var i = 1; i <=16; i++) {
         $("#c"+i).removeClass("marca");
         $("#2c"+i).removeClass("marca");
     }

      for(var i = 1; i<=16; i++){

         let b = true;

         while(b){
           let existe = false;
           var num = Math.floor(Math.random() * 54) + 1;

           for(var j = 0; j<cartas.length; j++){
              if(cartas[j] == num){
                 existe = true;
              }
           }
              if(existe == false){
               $("#c"+i).attr("src", "imagenes/loteria/"+num+".jpg");
               $("#c"+i).attr("carta", num);
               b=false;
               cartas.push(num);
              }
         }
      

    }

   let cartas2 = [];

      for(var i = 1; i<=16; i++){

         let b = true;

         while(b){
           let existe = false;
           var num = Math.floor(Math.random() * 54) + 1;

           for(var j = 0; j<cartas2.length; j++){
              if(cartas2[j] == num){
                 existe = true;
              }
           }
              if(existe == false){
               $("#2c"+i).attr("src", "imagenes/loteria/"+num+".jpg");
               $("#2c"+i).attr("carta", num);
               b=false;
               cartas2.push(num);
              }
         }
      

   }
   
   baraja = [];
   for (let index = 1; index <= 54; index++){
      baraja.push(index);
   }
    
   $("#lista").empty();
   c=0;
   baraja = baraja.sort(()=>Math.random() - 0.5)

    $("#darcarta").fadeIn("slow");
    
   });

   $("#darcarta").click(function(event){
      if(c%2==0){
      $("#lista").empty();
      }
      if(c < 54){
			$("#lista").append(
				"<div class='col-1'><img class='img-fluid' src='imagenes/loteria/"+baraja[c]+".jpg'></div>"
			);

			for (let index = 1; index <=16; index++) {

				if($("#c"+index).attr("carta") == baraja[c]){
					$("#c"+index).addClass("marca");
				}

				if($("#2c"+index).attr("carta") == baraja[c]){
					$("#2c"+index).addClass("marca");
				}


			}

			c++;
		}
		var cont_1 = 0;
		var cont_2 = 0;
		if(c>15){
			for (let index = 1; index <= 16; index++) {
				if($("#c"+index).hasClass("marca")){
					cont_1++;
				}
				
				if($("#2c"+index).hasClass("marca")){
					cont_2++;
				}	
			}

			if(cont_1 == 16) {
				alert("GANA CARTA 1");
			}

			if(cont_2 == 16) {
				alert("GANA CARTA 2");
			}
		}
		
	});

});