
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){


Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym,e){
	parent.adobeReady = true;
	$('#Stage_welText').html(welcomeMode['step_0']['text']);
	$('#Stage_welcomeGroup').css('min-height','94px').css('background','#fff').css('box-shadow','2px 2px 2px 0px rgba(0,0,0,0.25)');
	$('#Stage_left_slider_act,#Stage_right_slider_act').css('top','auto').css('bottom','6px');
	$('#Stage_dot_nav').css('top','auto').css('bottom','6px');
	$('#Stage_left_slider_act').attr('src','images/left_slider_deact.png');
	var lpos=welcomeMode['step_'+welcomeMove].position[0];
	var tpos=welcomeMode['step_'+welcomeMove].position[1];
	$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos);
	$('#Stage_left_slider_act').css('cursor','default');
	$('#Stage_audio_icon_normal').attr('audio-state','pause');
	$('#Stage_audio_icon_normal').addClass('expAudio');
	var zi = /firefox/.test(navigator.userAgent.toLowerCase()); 
	if(zi){
		
		$('.w_dropDown').css('top','4px');
	}


});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16250, function(sym,e){this.stop()});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37360, function(sym,e){this.stop()});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24115, function(sym,e){this.stop()});
//Edge binding end




Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym,e){this.stop()});
//Edge binding end






      

      
Symbol.bindElementAction(compId, symbolName, "${_left_slider_act}", "click", function(sym,e){
	if(welcomeMove>0)
	{
		selectedIndex=0;
		welcomeMove--;
		$('#Stage_right_slider_act').attr('src','images/right_slider_act.png').css('cursor','pointer');
		if(welcomeMove==7)
			{
				$('#Stage_rabbit_update_1').css('background-image','url(images/rabbit_update_1.png)');
			}
		var actScr=welcomeMode['step_'+welcomeMove]['text'];
		var lpos=welcomeMode['step_'+welcomeMove].position[0];
		var tpos=welcomeMode['step_'+welcomeMove].position[1];
		var bubbleStyle=welcomeMode['step_'+welcomeMove].speechStyle;
		$('#Stage_welText').html(actScr);
		$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',$('#Stage_welText').outerHeight()+54);
		$('#Stage_welcomeGroup').removeClass(speechBubblePos);
		$('#Stage_welcomeGroup').addClass(bubbleStyle);
		AdobeEdge.getComposition("EDGE-1817669").getStage().play(animPlayArrRev[welcomeMove]);
		speechBubblePos=bubbleStyle;
		parent.globalAudioPause();
	}
if(welcomeMove==0)
	{
		$('#Stage_left_slider_act').attr('src','images/left_slider_deact.png').css('cursor','default');
	}
		
});
      //Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_right_slider_act}", "click", function(sym,e){
	if(welcomeMove<(weltextlen-1))
	{
		selectedIndex=0;
		welcomeMove++;
		$('#Stage_left_slider_act').attr('src','images/left_slider_act.png').css('cursor','pointer');		
		var actScr=welcomeMode['step_'+welcomeMove]['text'];
		var lpos=welcomeMode['step_'+welcomeMove].position[0];
		var tpos=welcomeMode['step_'+welcomeMove].position[1];
		var bubbleStyle=welcomeMode['step_'+welcomeMove].speechStyle;
		$('#Stage_welText').html(actScr);
		$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',$('#Stage_welText').outerHeight()+54);
		$('#Stage_welcomeGroup').removeClass(speechBubblePos);$('#Stage_welcomeGroup').addClass(bubbleStyle);
		AdobeEdge.getComposition("EDGE-1817669").getStage().play(animPlayArr[welcomeMove]);
		speechBubblePos=bubbleStyle;
		parent.globalAudioPause();
	}
	if(welcomeMove==(weltextlen-1))
	{
		$('#Stage_right_slider_act').attr('src','images/right_slider_deact.png').css('cursor','default');
	}
	});
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_audio_icon_normal}", "click", function(sym,e){
		  passText=$('#Stage_welText').text();
		  
		  parent.globalAudioName = welcomeMode['step_'+welcomeMove]['AudioNamecon'].toString();	
		  parent.playGlobalAudio(passText);
		});
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         //console.log(this.getPosition());

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11652, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         $('.bubbleDivMulti::after').css('display','none');
         $('#Stage_welcomeGroup').css('box-shadow','none');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 69250, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71250, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
         $('#cty').show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         $( "#salt" ).fadeOut( 2000)
         $('#cty_0_1').hide();
         $('.w_bottomButton,.Weather_Forecast,.airmass').show();
         $('#city_0').css('background','rgb(167, 169, 172)');
         $('.city').css('background','rgb(227, 31, 39)');
         $('#am_1').css('background','rgb(255, 204, 0)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         $('#Stage_welcomeGroup').css('box-shadow','rgba(0, 0, 0, 0.25) 2px 2px 2px 0px');
         $('#cty,#am_1_0,#am_2_1').hide();
         $('#cty_0_1').show();
         $('#salt,#memphis').show();
         $('.w_bottomButton,.Weather_Forecast,.airmass').hide();
         $('#city_0').css('background','rgb(255, 204, 0)');
         $('.city').css('background','#ffcb05');
         $('#am_1').css('background','rgb(167, 169, 172)');
         $('.w_dropDown,#memphis,#salt').show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         $('#cty').show();
         $('#cty_0_1,#salt').hide();
         $('.w_bottomButton,.Weather_Forecast,.airmass').show();
         $('#city_0').css('background','rgb(167, 169, 172)');
         $('.city').css('background','rgb(227, 31, 39)');
         $('#am_1').css('background','rgb(255, 204, 0)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $('#Stage_welcomeGroup').css('box-shadow','rgba(0, 0, 0, 0.25) 2px 2px 2px 0px');
         $('#cty').hide();
         $('#cty_0_1').show();
         $('#salt,#memphis').show();
         $('.w_bottomButton,.Weather_Forecast,.airmass').hide();
         $('#city_0').css('background','rgb(255, 204, 0)');
         $('.city').css('background','#ffcb05');
         $('#am_1').css('background','rgb(167, 169, 172)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28750, function(sym, e) {
         $(".instrumentsPopup").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31750, function(sym, e) {
         $(".instrumentsPopup").hide();
         $(".instrumentsPopup1").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         $(".instrumentsPopup").hide();
         $(".instrumentsPopup1").hide();
         $('#Stage_welcomeGroup').css('box-shadow','rgba(0, 0, 0, 0.25) 2px 2px 2px 0px');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34500, function(sym, e) {
         $(".instrumentsPopup1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38000, function(sym, e) {
         $(".instrumentsPopup").hide();
         $(".instrumentsPopup1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41750, function(sym, e) {
         $('#am1,#am_1_0').show();
		 

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43250, function(sym, e) {
         $('#am_1_1,#am_1_2,#am_1_3').hide();
         $('#am_1').css('background','rgb(167, 169, 172)')
         $('#am_2').css('background','rgb(255, 204, 0)')

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25500, function(sym, e) {
         $('#am_1_1,#am_1_2,#am_1_3').show();
         $('#am1,#am2').hide();
         $('#am_2').css('background','rgb(167, 169, 172)')
         $('#am_1').css('background','rgb(255, 204, 0)')
         $('.w_bottomButton').css({"background":"rgb(109, 110, 113)","color":"rgb(199, 200, 202)"})

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45250, function(sym, e) {
         $('#am2').show();
		 $('#am_2_1').show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 46750, function(sym, e) {
         $('#am_2_0,#am_2_2,#am_2_3').hide();
         $('#am_2').css('background','rgb(167, 169, 172)')
         $('.w_bottomButton').css({"background":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"})

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38500, function(sym, e) {
         $('#am_2').css('background','rgb(167, 169, 172)')
         $('#am_1').css('background','rgb(255, 204, 0)')
         $('.w_bottomButton').css({"background":"rgb(109, 110, 113)","color":"rgb(199, 200, 202)"})
         $('#am_2_0,#am_2_2,#am_2_3').show();
         $('#am_1_1,#am_1_2,#am_1_3').show();
         $('#am1,#am2').hide();
         $('.w_bottomButton,.airmass,.Weather_Forecast').fadeIn(100);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50000, function(sym, e) {
         $('#am_2_0,#am_2_2,#am_2_3').hide();
         $('#am_1_1,#am_1_2,#am_1_3').hide();
         $('#am_2,#am_1').css('background','rgb(167, 169, 172)');
         $('.w_bottomButton').css({"background":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"})
         $('#am2,#am1').show();
		 $('#am_2_1,#am_1_0').show();
         $('.w_bottomButton,.airmass,.Weather_Forecast').show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55750, function(sym, e) {
         $('.w_bottomButton,.airmass,.Weather_Forecast').fadeOut(2000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50500, function(sym, e) {
         $('.w_bottomButton,.airmass,.Weather_Forecast').show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70000, function(sym, e) {
         $('.w_bottomButton,.airmass,.Weather_Forecast').hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 47500, function(sym, e) {
         $("#Stage_welcomeGroup").animate({ top: "95px" }, 500);

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12750, function(sym, e) {
         $("#Stage_arrow_4").css('transform','scaleX(-1)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         $('#Stage_welcomeGroup').css('box-shadow','rgba(0, 0, 0, 0.25) 2px 2px 2px 0px');

      });
      //Edge binding end

})("stage");
   //Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'highAnim'
(function(symbolName){Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym,e){this.play(0)});
//Edge binding end
})("highAnim");
   //Edge symbol end:'highAnim'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
   //Edge symbol end:'Preloader'

})(jQuery, AdobeEdge, "EDGE-1817669");

$(document).ready(function(){	
	$(document).on('keyup', function(e){	
	if($('#Stage_welcomeGroup').css('opacity') == 1)		
	{
		//console.log(parent.parentTab,$('.helpwindow').css('display'))
		if(parent.parentTab == 'welcome' && parent.$('.helpwindow').css('display') == 'none')
			{			
				var ctKeyode = e.which || e.keyCode;			
				if(ctKeyode == 39)
					{
						$('#Stage_right_slider_act').trigger('click');
					}
				if(ctKeyode == 37)
					{
						$('#Stage_left_slider_act').trigger('click');
					}
			}
	}	
	})	
})