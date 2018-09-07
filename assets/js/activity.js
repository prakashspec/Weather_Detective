var adobeReady = false;
var citySelectd, massSelected, citySelectd_ind, li_massSelected, selectSprite_1, selectSprite_2, timeDelay, indNo, massOne_timeOut, massTwo_timeOut;
var selectCnt = 0, guideInd = 0, actComStep=0, currentStep=0, initialVal=0, resetCount=0, expCnt = 0, totDir =6, len=0, currentIndex=0, stepIndex = 0, airmasFirst_left = 0,airmasFirst_top = 0, airmasSecond_left = 0, airmasSecond_top = 0, massAnimated=0;
var selectedMass='',tempSelect1='',tempSelect2='',cityTemp='', fullAnim='', am1='',am2='', pair='';
var movingSpeed=9000;	
var tempStre=[0,0];
var enableClick = 0;
var topv = "142px";
var canSelect=false;
var ExpDivPos =[["",""],["",""],["223px", "618px"],["223px", "618px"],["223px", "0px"],["223px", "618px"],["130px", "618px"],["142px", "0px"]];
var direction=[
[['01'],['02'],['03']],
[['10'],['11']],
[['20']]
];
var ActStepShow =[".cities #memphis","#airmass_0","#airmass_1","","#airmass_3","#airmass_2"];
var highlightData =["#city_0", "#airmass_0 .dataShow", "#airmass_1 .dataShow", "#am_1", "#airmass_3 .dataShow", "#airmass_2 .dataShow","#am_2","#collide"];

function activityFunction(cpage)
	{	
	resetMass();
	menuCont();
	clearTimeout(timeDelay);
	$(".Weather_Forecast").stop().removeAttr("style").css("display","none");
	$(".avoidClick").css("display","none");	
	$(".checkAns").remove();
	
	if(cpage=="welcome")
	{
	$(".screenIcon").css('display','none')
	$(".expDiv").css({"display":"none"});
	$(".commonWorkArea, .sliderContain").css({"z-index":"-1"});
	}
	
	if(cpage!="welcome")
	{
	if(adobeReady) restartWelcome();
	$(".workArea").append("<div class='cities'></div>");
	$("#city_0").css({"background":"#ffcc00", "cursor": "pointer"});
	for(var i=0;i<FindState.length;i++)
	{
	$(".cities").append("<div id='"+FindState[i]+"' class='hideIt'><span class='city'> </span><span class='cityName'>"+city_names[FindState[i]].name+"</span></div>");
	}	
	$('.menu .arrow-down').css("transform","rotate(0deg)");
	$(".commonWorkArea").css({"z-index":"1"});
	$(".sliderContain").css({"z-index":"0"});
	}
	
	if(cpage=="explore")
	{	
		
	$(".menu").removeAttr("style");
	$("#city_0").css({"background":"#ffcc00","cursor": "pointer"});
	$('.screenIcon').off('click').on("click",captureScreen).removeAttr("style").show();
	$(".avoidClick").removeClass("wrongSelection");		
	$(".expimgcont,.moveNextFood").css("display","none");
	$(".expFoodBar").css("display","none");
	$(".expDivIcon").css("top","20px");
	$(".expPara").html(guide_Text[guideInd][0]);
	globalAudioName = String(guide_Text[guideInd][1]);
	$(".expDiv").css({"height": "auto","min-height": "80px","display":"block"});	
	$("#"+cpage).append("<div class='checkAns'>Check Answer</div>");
	$(".avoidClick").css({"display":"block","z-index":2});	
	$(".expDiv").css({"left": "-280px"}).show();	
	$(".activeSlider").off('click').on('click', function(e){e.stopPropagation();activitySlideDiv();}).css("cursor","pointer");	
	if(resetCount==0)
	{
		$(".activeSlider").stop().trigger('click');
	}
	}
	
	if(cpage=="activity")
	{
		$(".expimgcont,.moveNextFood").css("display","none");	
	$("#testmp").css("top","20px");	
	
	$(".menu").removeAttr("style");
	$("#city_0").css({"background":"#ffcc00", "cursor": "pointer"});
	$('.screenIcon').off('click').css({"cursor":"default"}).show();
	$(".expFoodBar").css("display","none");
	currentStep =0;
	$("#activity").append("<div class='avoidClick'></div>");
	$(".expPara").html(audios['activity']['step_0']['txt']);
	globalAudioName = String(audios['activity']['step_0']['audio']);
	$(".expDiv").css({"left": "-280px"}).show();	
	rotateValue=-280;
	$(".avoidClick").css({"display":"block","zIndex":4});
	$(".avoidClick").addClass("wrongSelection");
	$(".wrongSelection").off('click').on('click', wrongAttempt);		
	switchFun(currentStep);	
	activitySlideDiv();
	}
	
	$(".commonWorkArea").off('click').on('click', function(e){
		checkVisible();
		if(rotateValue == -280)
		{
			activitySlideDiv();
		}
	});
	}
function checkVisible()
{
	
	if($(".submenu").find("li:visible").length>1)
		{
		if(am1==''){$("#am1").hide();}	
		if(am2==''){$("#am2").hide();}
		if(citySelectd_ind==''){$("#cty").hide();}
		$("#cty_0_"+citySelectd_ind).css("display","block").siblings("li").hide();
		$("#am_1_"+am1).css("display","block").siblings("li").hide();
		$("#am_2_"+am2).css("display","block").siblings("li").hide();		
		}
}
function highlightAnim(getType)
	{		
	$(getType).css({'animation':'blink 2s linear infinite','z-index':'5'});			
	}
	
var rightAttempt = function()
	{
	globalAudioPause();
	$(highlightData[currentStep]).css("animation","none");
	currentStep++;	
	stepIndex = 0;
	ActTxtBox("right");
	sliderNavigationFun();
	}

var wrongAttempt = function()
	{
	globalAudioPause();
	stepIndex = 0;
	ActTxtBox("wrong");
	highlightAnim(highlightData[currentStep]);
	}

var ActTxtBox = function(comment)
	{
	$(".expFoodBar").css("display","none");
	$(".expPara").html(audios[cpage][comment]["step_"+currentStep]["txt"][0]);
	globalAudioName = String(audios[cpage][comment]["step_"+currentStep]["audio"][0]);		
	$('.expChild').css('height','auto');
	$('.shadowTop,.shadowBottom').remove();
	if(comment =="right")
	{
	sliderNavigationFun();			
	}
	$(".expDiv").show();	
	if(rotateValue < 0)
	{
		
		activitySlideDiv();}
	}

var navigation = function(limit)
	{
	$(".expFoodBar").css("display","flex");
	$(".navSliderBtn").css("display","inline-flex");
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);	
	}

var nxtNavigationFun = function()
	{
	globalAudioPause();			
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);
	if(LengthFind > stepIndex){stepIndex++; $('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);}
	else{ $('.nxtBtnSlider').off('click');}	
	$(".expPara").html(audios[cpage]["right"]["step_"+currentStep]["txt"][stepIndex]);
	globalAudioName = String(audios[cpage]["right"]["step_"+currentStep]["audio"][stepIndex]);
	sliderNavigationFun();	
	}

var preNavigationFun = function()
	{
	globalAudioPause();
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);	
	if(stepIndex > 0){stepIndex--;$('.PreBtnSlider').off('click').on("click",preNavigationFun);}
	else {$('.PreBtnSlider').off('click');}
	$(".expPara").html(audios[cpage]["right"]["step_"+currentStep]["txt"][stepIndex]);
	globalAudioName = String(audios[cpage]["right"]["step_"+currentStep]["audio"][stepIndex]);	
	sliderNavigationFun();	
	}
var wrongEnable = function()
{
	if(cpage == "activity" && currentStep == enableClick)
		{
		$(".wrongSelection").off('click').on('click', wrongAttempt);
		}
}
var sliderNavigationFun = function()
	{	
	
	LengthFind = Object.keys(audios[cpage]["right"]["step_"+currentStep]["txt"]).length - 1;
	$('.PreBtnSlider,.nxtBtnSlider').css({'width':'28px','height':'28px'});
	$(".wrongSelection").off('click');	
	$('.shadowTop,.shadowBottom').remove();
	$('.expChild').css('height','auto');
	if($('.expChild').height() >= 300)
	{
		$('.expChild').css('height',300);
		$('.audioTextDiv').css('margin-top','-20px !important');
		scrollApplyChoose('expDiv','expChild');
	}
	else
	{
		$('.expChild').css('height','auto');
		$('.expChild').mCustomScrollbar('destroy');			
	}
	
	if(LengthFind == 0)
	{
	$(".wrongSelection").off('click').on('click', wrongAttempt);	
	if(currentStep==1 || currentStep==2 || currentStep==4 || currentStep==5)
	{$(ActStepShow[currentStep]).css("z-index",5);}
	switchFun(currentStep);		
	}
	if(LengthFind == stepIndex && LengthFind !=0)
	{
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);		
	$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_act.png')",'cursor':'pointer'})
	$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_deact.png')",'cursor':'default'}).off("click");
	$('.expFoodBar,.navSliderBtn').show();
	enableClick = currentStep;	
	if(currentStep==1 || currentStep==2 || currentStep==4 || currentStep==5)
	{$(ActStepShow[currentStep]).css("z-index",5);}
	if(currentStep !=3 && currentStep !=6)	
	{
	$("#city_0, #am_1, #am_2").off("click").on("click", wrongAttempt);
	}
	switchFun(currentStep);
	wrongEnable();
	return;
	}
	if(stepIndex == 0 && LengthFind !=0)
	{	
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
	$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_deact.png')",'cursor':'default'}).off("click")
	$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_act.png')",'cursor':'pointer'})
	$('.expFoodBar,.navSliderBtn').show();
	$("#city_0, #am_1, #am_2, .wrongSelection").off("click");
	wrongEnable();
	return;
	}
	if( stepIndex > 0 && LengthFind !=0 )
	{
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);
	$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_act.png')",'cursor':'pointer'})
	$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_act.png')",'cursor':'pointer'})
	$('.expFoodBar,.navSliderBtn').show();
	$("#city_0, #am_1, #am_2, .wrongSelection").off("click");
	wrongEnable();
	return;
	}	
	}

var switchFun = function(stepValue)
	{
	switch(stepValue)
	{
	case 0:
	$("#am_1, #am_2").off("click").on("click", wrongAttempt);
	$("#city_0").css({"cursor": "pointer"});
	break;

	case 1:	
	break;

	case 2:	
	break;

	case 3:				
	$("#city_0, #am_2").off("click").on("click", wrongAttempt);
	$("#am_1").off("click").on("click", actMassSelect);
	$("#am_1").css({"background":"#ffcc00", "cursor": "pointer"});
	$("#am_1").attr("value","allowclick").css({"cursor":"pointer"});	
	break;

	case 4:	
	$("#am_1").off("click").on("click", wrongAttempt);				
	break;

	case 5:			
	break;

	case 6:			
	$("#city_0, #am_1").off("click").on("click", wrongAttempt);
	$("#am_2").off("click").on("click", actMassSelect);
	$("#am_2").css({"background":"#ffcc00", "cursor": "pointer"});
	$("#am_2").attr("value","allowclick").css({"cursor":"pointer"});
	
	break;

	case 7:	
	//$(".expDiv").css("z-index","101");
	$("#am_2").off("click").on("click", wrongAttempt).css({"cursor":"default"});	
	globalAudioPause();
	$(".airmass").css("animation","none");	
	$('#collide').removeAttr("style");
	$('#collide').css({"background":"#ffcc00","color":"black","cursor":"pointer"}).off('click').on('click', collideFun);
	break;

	case 8:	
	$(".wrongSelection").off('click');		
	timeDelay = setTimeout(contentShow,2000);				
	break;
	}
	}

var actMassSelect = function()
	{
	$(".instrumentsPopup").hide();
	$(this).children(".submenu").show();
	if(currentStep==3)
	{
	$(".wrongSelection").off('click').on('click', wrongAttempt);
	$(highlightData[currentStep]).css("animation","none");					
	highlightData[currentStep]=("#am_1_1");
	}
	if(currentStep==6)
	{
	$(".wrongSelection").off('click').on('click', wrongAttempt);
	$(highlightData[currentStep]).css("animation","none");
	highlightData[currentStep]=("#am_2_3");
	
	if($('.expDiv').position().left > -280) 
	{	
	if(currentStep == 6)
		{
			ExpDivPos[currentStep][1] ="0px";
			ExpDivPos[currentStep][0] ="142px";			
			rotateValue = ExpDivPos[currentStep][1];
			topv = ExpDivPos[currentStep][0];	
			angleRot = 0;
			
		}
	slideAnimate();
	}	
	
	}
	}

var txtInBox = function()
	{	
	$(".expPara").html(guide_Text[guideInd][0]);
	globalAudioName = String(guide_Text[guideInd][1]);			
	$(".expDiv").show();	
	if(cpage=="explore" && am1 =="" && resetCount==0 && rotateValue == -280){activitySlideDiv();}
	$('.expChild').css('height','auto');
	$('.shadowTop,.shadowBottom').remove();
	}

var menuCont = function()
	{	
	$(".dropdown_cont").removeAttr("style");
	$(".submenu").css("display","none");	
	$("#am_1,#am_2").attr("value","").css("cursor","default");
	if(cpage!="welcome")
	{
	$(".dropDown").show();	
	$("li").off('click').on('click', function(e)
	{
	globalAudioPause();
	e.stopPropagation();
	var a = $(this).attr("id");				
	selectedMass = $("#"+a).parent().attr("id");
	if(currentStep==0 && a=="city_0")
	{
	$(highlightData[currentStep]).css("animation","none");
	highlightData.shift();
	highlightData.unshift("#cty_0_0");
	}				
	if($("#"+a).attr("class")=="dropdown_cont")
	{
	if($("#"+a).parent().attr("id")=="cty")	
	{	
	guideInd=0;				
	citySelectd_ind = $(this).attr("id").split("_")[2];
	citySelectd= FindState[citySelectd_ind];				
	if(citySelectd=="salt")
	{				
	$(".Weather_Forecast").css({"top":"250px", "left":"670px"});
	}
	else
	{
	$(".Weather_Forecast").css({"top":"195px", "left":"670px"});
	}
	if(cpage=="activity" && citySelectd_ind==1)
	{
	wrongAttempt();
	return;
	}
	if(cpage=="activity" && citySelectd_ind==0)
	{
	rightAttempt();
	}
	if(cityTemp != citySelectd_ind && cityTemp != '')							
	{	
	resetTwomasses();	
	$("#collide").remove();										
	airmassfun(citySelectd);
	$(".cities").children("#"+FindState[cityTemp]).removeClass("ShowIt").addClass("hideIt").removeAttr("style");
	$(".cities").children("#"+FindState[citySelectd_ind]).removeAttr("style");
	}				
	else
	{
	airmassfun(citySelectd);
	if(cpage=="activity")
	{
	switchFun(currentStep);
	}		
	}
	cityTemp = citySelectd_ind;
	if(citySelectd_ind==1)
	{	
	if(cpage=="explore")
	{
	$("#cty_0_0").css("display","none");
	$("#cty_0_0").css({"pointer-events":"auto","cursor":"pointer"});
	$("#cty_0_1").css({"pointer-events":"none","cursor":"default"});
	$("#am_1_0 span, #am_2_0 span").html("Maritime Polar");
	}
	if(cpage=="activity")
	{
	return;
	}
	}	
	else
	{
	$("#cty_0_1").css("display","none");
	$("#cty_0_1").css({"pointer-events":"auto","cursor":"pointer"});
	$("#cty_0_0").css({"pointer-events":"none","cursor":"default"});	
	$("#am_1_0 span, #am_2_0 span").html("Arctic");					
	}				
	$(".cities").children("#"+citySelectd).removeClass("hideIt").addClass("ShowIt");
	$("#"+citySelectd+" .cityName").css({"background":"#ffffff", "color":"black"});
	$("#"+citySelectd+" .city").css({"border-color":"#ffcb05", "background":"#e31f27"});
	$(".hideIt").fadeOut();	
	if(citySelectd=="memphis")
	{
	$("#airmass_0").find("span").css("top","27px");

	}				
	
	
	if(citySelectd_ind!='undefined' && am1!='')
	{		
		$("#am_1").css({"background":"#a7a9ac"});
		
	}
	else
	{
	if(citySelectd_ind!='undefined')
	{
		$("#city_0").css({"background":"#a7a9ac"});
		if(cpage == "explore")
		{
			$("#am_1").css({"background":"#ffcc00", "cursor": "pointer"});
			$("#am_1").attr("value","allowclick").css({"cursor":"pointer"});	
		}
		if(cpage == "activity")
		{
			$("#city_0").css({"cursor":"default"});
		}
	}
		
	}	
	$("#am_1 li").css({"pointer-events":"auto"});				
	}
	
	if($("#"+a).parent().attr("id")=="am1")
	{		
	if(tempSelect1!=''){$("#am_1_"+tempSelect1).css({"pointer-events":"auto"});}
	am1=$(this).attr("id").split("_")[2];
	if(cpage=="activity" && am1 == 1) {rightAttempt();}
	if(cpage=="activity" && am1 != 1) {wrongAttempt();return;}			
	tempSelect1=am1;			
	if(am1==am2)
	{			
	if($("#am_2 .submenu").css("display") == "block"){$("#am_2 .submenu").css("display","none");}
	}
	
	if(am1!=am2 && am2!='')
	{$("#am_2").css({"background":"#a7a9ac"});}
	else
	{
	if(cpage == "explore")
	{
		$("#am_2").css({"background":"#ffcc00", "cursor": "pointer"});
		$("#am_2").attr("value","allowclick").css({"cursor":"pointer"});
	}
	if(cpage == "activity")
	{
		$("#am_1").css({"cursor": "default"});
	}
	}
	$("#am2 li").css({"color":"black","pointer-events":"auto"});	
	
	$("#am_2_"+am1).css({"color":"gray", "pointer-events":"none"});	
	$("#am_1_"+am1).css({"pointer-events":"none"});	
	$("#"+a).siblings("li").hide();	
	$("#am_1").css({"background":"#a7a9ac"});			
	selectMass();			
	}
	
	if($("#"+a).parent().attr("id")=="am2")
	{
	
	$("#am_2_"+am1).css({"color":"gray", "pointer-events":"none"});		
	am2=$(this).attr("id").split("_")[2];
	if(tempSelect2!='')
	{		
	$("#am_2_"+tempSelect2).css({"pointer-events":"auto","cursor":"pointer"});
	}
	tempSelect2	= am2;			
	if(cpage=="activity" && am2 == 3) {rightAttempt();}
	if(cpage=="activity" && am2 != 3) {wrongAttempt();return;}
	$("#"+a).css({"pointer-events":"none","cursor":"default"}).siblings("li").hide();
	if($("#am_1 .submenu").css("display") == "block"){$("#am_1_"+am1).siblings("li").hide();}
	selectMass();	
	$("#am_2").css({"background":"#a7a9ac"});	
	}	
	}
	
	if($(this).attr("value")=="allowclick")
	{
	if(a=="am_1")
	{
	$("#cty_0_"+citySelectd_ind).css("display","block").siblings("li").hide();
	$("#am_2_"+am2).css("display","block").siblings("li").hide();	
	}
	if(a=="am_2")
	{	
	$("#cty_0_"+citySelectd_ind).css("display","block").siblings("li").hide();
	$("#am_1_"+am1).css("display","block").siblings("li").hide();
	}	
	$(".instrumentsPopup").hide();
	
	if($("#"+a).children("ul").css("display")=="block")
	{
	if($(this).find(".submenu li:visible").length==4)
	{					
	if(a=="am_1")
	{
	if(am1==''){$("#am1").hide();}	
	if(am2==''){$("#am2").hide();}
	$("#cty_0_"+citySelectd_ind).css("display","block").siblings("li").hide();
	$("#am_1_"+am1).css("display","block").siblings("li").hide();
	$("#am_2_"+am2).css("display","block").siblings("li").hide();	
	}
	if(a=="am_2")
	{
	if(am2==''){$("#am2").hide();}
	$("#cty_0_"+citySelectd_ind).css("display","block").siblings("li").hide();
	$("#am_1_"+am1).css("display","block").siblings("li").hide();
	$("#am_2_"+am2).css("display","block").siblings("li").hide();	
	}				
	}
	
	else if($(this).find(".submenu li:visible").length==2)
	{	
	if(cpage=="activity" && citySelectd_ind == 0)
	{
	$("#cty_0_"+citySelectd_ind).css("display","block").siblings("li").hide();
	}
	if(cpage == "explore")
	{
	if(am1==''){$("#am1").hide();}	
	if(am2==''){$("#am2").hide();}
	if(citySelectd_ind==''){$("#cty").hide();}
	$("#cty_0_"+citySelectd_ind).css("display","block").siblings("li").hide();
	$("#am_1_"+am1).css("display","block").siblings("li").hide();
	$("#am_2_"+am2).css("display","block").siblings("li").hide();		
	}
	}
	
	else 
	{	
	if(am1==''){$("#am1").hide();}	
	if(am2==''){$("#am2").hide();}
	$("#am_1_"+am1).css("display","block").siblings("li").hide();
	$("#am_2_"+am2).css("display","block").siblings("li").hide();
	$("#"+a).children("ul").css("display","block");	
	$("#"+a).find("li").show();	
	}
	}
	else
	{
	$("#"+a).children("ul").css("display","block");	
	$("#"+a).find("li").show();		
	}
	}
	if(($(this).attr("value")!="allowclick") && ($("#"+a).parent().attr("id")!= "am2"))
	{
	if(cpage=="explore")
	{
	txtInBox();
	}				
	}			
	});
	}
	else
	{
	$(".dropDown").hide();
	}
	}

var resetTwomasses = function()
	{	
	$("#city_0").siblings("li").attr("value","").css({"background": "#a7a9ac"});
	$("#am_1 ul,#am_2 ul").css("display","none");
	am1='',am2='',tempSelect1='',tempSelect2='';	
	}
	
var resetMass = function()
	{
	ExpDivPos =[["",""],["",""],["223px", "618px"],["223px", "618px"],["223px", "0px"],["223px", "618px"],["130px", "618px"],["142px", "0px"]];
	$(".airmass").stop();
	$('.expChild').mCustomScrollbar('destroy');
	$(".expDiv").removeAttr("style");
	$(".expDiv").css({"left":"-280px","height":"auto"});
	citySelectd_ind ='', am1='',am2='',tempSelect1='',tempSelect2='';
	clearTimeout(timervar_1);
	clearTimeout(timervar_2);
	clearTimeout(massOne_timeOut);
	clearTimeout(massTwo_timeOut);
	spriteaniinr_1=0;
	spriteaniinr_2=0;
	$("#spriteArea").hide();
	$(".cities,.airmass,.instrumentsPopup,#collide,#resetMass").remove();
	$('.weatherRep,.pressure,.front').remove();
	$(".Weather_Forecast").stop().hide();
	tempStre=[0,0];
	selectCnt = 0;
	guideInd = 0;
	initialVal=0;
	topv = "142px";
	$("#am_1_0 span, #am_2_0 span").html("<span>Arctic</span>");
	if($('.expDiv').position().left == 0 || $('.expDiv').position().left > -280) 
	{	rotateValue = -280;			
	//angleRot =180;
	slideAnimate();	
	}	
	globalAudioPause();
	$("li").css("cursor","pointer");
	highlightData =["#city_0", "#airmass_0 .dataShow", "#airmass_1 .dataShow", "#am_1", "#airmass_3 .dataShow", "#airmass_2 .dataShow","#am_2","#collide"];
	return;
	}

var airmassfun = function(citySelectd)
	{
	$('.airmass').remove();
	$('.city').off('click');		
	var massCount = Object.keys(SlideContents[citySelectd]).length;
	for(var i=0;i<massCount;i++)
	{
	$("#"+cpage).append("<div class='airmass notseleted' id='airmass_"+i+"'><div class='dataShow'></div><span>"+SlideContents[citySelectd]["airmass_"+i].label+"</span><div class='main_sprite_"+i+"'></div>");
	$("#airmass_"+i).css({"transform": "translate("+spriteFindWH[citySelectd_ind][i][0]+","+spriteFindWH[citySelectd_ind][i][1]+")",	"-webkit-transform": "translate("+spriteFindWH[citySelectd_ind][i][0]+","+spriteFindWH[citySelectd_ind][i][1]+")",	"-moz-transform": "translate("+spriteFindWH[citySelectd_ind][i][0]+","+spriteFindWH[citySelectd_ind][i][1]+")",	"-o-transform": "translate("+spriteFindWH[citySelectd_ind][i][0]+","+spriteFindWH[citySelectd_ind][i][1]+")"});		
	$(".main_sprite_"+i).attr("style",SlideContents[citySelectd]["airmass_"+i]["style"]);
	}
	
	$("#"+cpage).append("<div id='collide' class='bottomButton'>Move Air Masses</div>");
	$("#collide").show();
	$(".dataShow").off("click").on("click",weatherInstruments);
	
	if(citySelectd_ind==1)
	{
	$(".expDiv").css("top","182px");
	}
	$(".head").html("Weather Forecast");
	$(".cName").html(city_names[citySelectd]["name"]);
	$(".fore_img").html("<img src='assets/images/activity/"+Weather_forecastText[citySelectd_ind][0]+"' alt='"+citySelectd+"'Weather Forecast'/>").css({"height":"50px", "margin-bottom":"-5px", "display":"block"});
	$(".rep_txt").html(Weather_forecastText[citySelectd_ind][1]);
	guideInd++;
	$(".Weather_Forecast").stop().removeAttr("style").show();
	return;
	}

var weatherInstruments = function()
	{
	checkVisible();	
	$('.instrumentsPopup').remove();	
	massSelected = $(this).parent().attr("id");	
	if(cpage == "explore")
	{
	if($('.expDiv').position().left == 0 || $('.expDiv').position().left > -280) 
	{	
	rotateValue = -280;			
	angleRot =180;
	slideAnimate();	
	}	
	}
	
	if(cpage == "activity")
	{
	rightAttempt();		
	$(ActStepShow[currentStep-1]).css("z-index",1);
	if($('.expDiv').position().left > -280) 
	{	
	if(currentStep == 2 || currentStep == 3 || currentStep == 5 || currentStep == 6)
		{
			rotateValue = ExpDivPos[currentStep][1];
			topv = ExpDivPos[currentStep][0];	
			angleRot = 0;
		}
	slideAnimate();
	}	
	}
	
	$("#"+cpage).append("<div class='instrumentsPopup'><div class='"+massArrow[citySelectd_ind][massSelected.split("_")[1]]+"'></div><div class='closePopup'></div><div class='masstitle'>"+SlideContents[citySelectd][massSelected].label+"</div><div class='instruments'><div class='thermometer'><div class='thermometer_reading'><div class='thermometer_pointer'></div></div><div class='labelText'>Temperature</div><div class='labelTextVal'>"+SlideContents[citySelectd][massSelected].temp_val+"</div></div><div class='hygrometer'><div class='hygrometer_reading'><div class='hygrometer_pointer'></div></div><div class='labelText'>Humidity</div><div class='labelTextVal'>"+SlideContents[citySelectd][massSelected].humidity_val+"</div></div><div class='barometer'><div class='barometer_reading'><div class='barometer_pointer'></div><div class='barometer_ind_sec'></div></div><div class='labelText'>Air pressure</div><div class='labelTextVal'>"+SlideContents[citySelectd][massSelected].ap_val+"</div></div><div class='wine_vane'><div class='vane_reading'><div class='vane_pointer'></div><div class='vane_mph'>"+SlideContents[citySelectd][massSelected].Wind_speed+" mph</div></div><div class='labelText'>Wind</div><div class='labelTextVal'>"+SlideContents[citySelectd][massSelected].wind_val+"</div></div></div><div class='instrumentsReadings'></div></div>");		
	if(citySelectd_ind==1){$(".instrumentsPopup").css({"position":"absolute","top":"60px","left": "685px"});}	
	$(".thermometer_pointer").css("clip","rect(0px, 10px, "+SlideContents[citySelectd][massSelected].Temp+"px, 0px)");
	$(".hygrometer_pointer").css("transform", "rotate("+SlideContents[citySelectd][massSelected].Humidity+"deg)");	
	$(".barometer_pointer").css("transform", "rotate("+SlideContents[citySelectd][massSelected].Air_pressure+"deg)");
	$(".anometer_pointer span").html(SlideContents[citySelectd][massSelected].Wind_speed);
	$(".vane_pointer").css("transform", "rotate("+direction_deg[SlideContents[citySelectd][massSelected].Wind_direction]+"deg)");	
	if(cpage=="activity")
	{
	$(".barometer_pointer").css("transform", "rotate("+SlideContents_activity[citySelectd][massSelected].Air_pressure+"deg)");
	}
	$(".instrumentsPopup").show();	
	/* if(cpage=="activity")
	{
	rightAttempt();		
	$(ActStepShow[currentStep-1]).css("z-index",1);
	} */	
	$('.closePopup').off('click').on('click', closePopup);
	}

var closePopup = function()
	{	
	$(".avoidClick, .activeSlider").off('click').on('click', function(e){e.stopPropagation();activitySlideDiv();});
	$(".instrumentsPopup").hide();	
	}

var selectMass= function()
	{
	tempStre[0]= parseInt(tempSelect1);
	tempStre[1] = parseInt(tempSelect2);	
	tempStre.sort(function(a, b){return a-b});
	pair= tempStre.toString();
	$(".airmass").addClass('notseleted');
	selectSprite_1 = updated_FindLevel[citySelectd_ind][am1].split('_')[1];
	$("#"+updated_FindLevel[citySelectd_ind][am1]).removeClass('notseleted');
	if(am2!='')
	{selectSprite_2 = updated_FindLevel[citySelectd_ind][am2].split('_')[1];
	$("#"+updated_FindLevel[citySelectd_ind][am2]).removeClass('notseleted');}		
	if(cpage == "explore")
	{if(tempSelect1!='' && tempSelect2!='' && tempSelect1!=tempSelect2)
	{
	globalAudioPause();
	$(".airmass").css("animation","none");	
	$('#collide').removeAttr("style");
	$('#collide').css({"background":"#ffcc00","color":"black","cursor":"pointer"}).off('click').on('click', collideFun);	
	}
	else
	{
	$('#collide').css({"background":"#6d6e71","color":"#c7c8ca","cursor":"default"}).off('click');	
	}
	}	
	$(".avoidClick, .activeSlider").off('click').on('click', function(e){e.stopPropagation();activitySlideDiv();}).css("cursor","pointer");
	$(".wrongSelection").off('click').on('click', wrongAttempt);
	}

var collideFun = function()
	{	
	if(cpage=="activity"){$(".wrongSelection").off('click');}
	if($(".submenu").css("display") == "block"){$("#am_1_"+am1).siblings("li").hide();$("#am_2_"+am2).siblings("li").hide();}
	$(".instrumentsPopup").hide();
	globalAudioPause();
	$(".activeSlider, .menu, .airmass, .dataShow").off('click').css("cursor","default");
	$(".commonWorkArea").off('click');
	
	if($('.expDiv').position().left == 0 || $('.expDiv').position().left > -280) 
	{	
	if(cpage=="explore"){rotateValue = -280;angleRot = 180;}
	if(cpage=="activity"){rotateValue = -280;angleRot = 180;}	
	slideAnimate();	
	}			
	$('#collide').hide();
	$(".notseleted, .Weather_Forecast").stop().fadeOut("slow", function(){animation();});
	$(".airmass span").fadeOut();	
	}

var animation = function()
	{	
	clearTimeout(timervar_1);
	clearTimeout(timervar_2);
	clearTimeout(massOne_timeOut);
	clearTimeout(massTwo_timeOut);
	spriteaniinr_1=0;
	spriteaniinr_2=0;
	$('.full_sprite_'+citySelectd_ind).hide();	
	massOne_timeOut = setTimeout(function(){$("#"+updated_FindLevel[citySelectd_ind][pair.split(',')[0]]).stop().animate({
	"transform": "translate("+pairings[citySelectd][pair]["pos"][0][1]+","+pairings[citySelectd][pair]["pos"][0][0]+")"},
	{
	duration: movingSpeed,
	step: function()
	{			
	airmasFirst_left =$(this).position().left;
	airmasFirst_top =$(this).position().top;
	},
	complete: function()
	{
	clearTimeout(timervar_1);
	}
	});
	
	cloudAnim_1();},0);
	massTwo_timeOut = setTimeout(function(){$("#"+updated_FindLevel[citySelectd_ind][pair.split(',')[1]]).stop().animate({"transform": "translate("+pairings[citySelectd][pair]["pos"][1][1]+","+pairings[citySelectd][pair]["pos"][1][0]+")"},{duration: movingSpeed,
	step: function()
	{			
	airmasSecond_left =$(this).position().left;
	airmasSecond_top =$(this).position().top;
	},
	complete: function()
	{
	clearAnim();
	clearTimeout(timervar_2);	
	}});	
	cloudAnim_2();},0);
	}

var clearAnim = function()
	{		
	clearTimeout(massOne_timeOut);
	clearTimeout(massTwo_timeOut);
	$("#"+updated_FindLevel[citySelectd_ind][am1]).stop();
	$("#"+updated_FindLevel[citySelectd_ind][am2]).stop();	
	$(".airmass").fadeOut(2000);	
	spriteaniinr_1=0;
	spriteaniinr_2=0;	
	massAnimated=2;	
	updateFun();	
	}

var cloudAnim_1 = function()
	{	
	getw1 = act_img[citySelectd_ind][selectSprite_1][0]/act_img[citySelectd_ind][selectSprite_1][2];
	geth1 = act_img[citySelectd_ind][selectSprite_1][1]/act_img[citySelectd_ind][selectSprite_1][3];
	startAnim_1();
	$("#spriteArea_"+selectSprite_1).show();
	initialVal++;
	}
	
var cloudAnim_2 = function()
	{	
	getw2 = act_img[citySelectd_ind][selectSprite_2][0]/act_img[citySelectd_ind][selectSprite_2][2];
	geth2 = act_img[citySelectd_ind][selectSprite_2][1]/act_img[citySelectd_ind][selectSprite_2][3];
	startAnim_2();
	$("#spriteArea_"+selectSprite_2).show();
	initialVal++;
	}

var updateFun = function()
	{
	clearTimeout(timervar_1);
	clearTimeout(timervar_2);	
	clearTimeout(timervar_3);	
	$(".head").html("Weather Update");
	$(".rep_txt").html(pairings[citySelectd][pair].text);	
	$(".fore_img").css("display","none");	
	$("#"+cpage).append("<div class='front cold_front'></div><div class='front warm_front'></div><div class='front occluded_front'></div><div class='front stationary_front'></div><div class='weatherRep sun_cloud'></div><div class='weatherRep cloud'></div><div class='weatherRep clouds'></div><div class='weatherRep sun'></div><div class='weatherRep rains'></div><div class='weatherRep thunder'></div><div class='weatherRep snow'></div><div class='pressure h'>H</div><div class='pressure l'>L</div>");	
	for(var i=0; i<Object.keys(pairings[citySelectd][pair]["imgShow"]).length; i++)
	{
	$("."+pairings[citySelectd][pair]["imgShow"][i][0]).attr("style",pairings[citySelectd][pair]["imgShow"][i][1]).fadeIn(2000);		
	}
	$(".ShowIt .city").animate({opacity:0},2000);	
	weatherupdate();
	}

var weatherupdate = function()
	{
	$(".activeSlider").off('click').on('click', function(e){e.stopPropagation();activitySlideDiv();}).css("cursor","pointer");
	$(".commonWorkArea").off('click').on('click', function(e){if(rotateValue != -280){activitySlideDiv();}});
	if(cpage=="explore")
	{
	$(".expPara").html(audios["repeat"]["quest"]);	
	globalAudioName = String(audios["repeat"]["audio"]);
	$(".avoidClick, .activeSlider").off('click').on('click', function(e){e.stopPropagation();activitySlideDiv();});
	}
	if(cpage=="activity")
	{
	$(".avoidClick").off("click").removeClass("wrongSelection");	
	$(".activeSlider").off('click').on('click', function(e){e.stopPropagation();activitySlideDiv();});
	rightAttempt();		
	}
			
	timeDelay = setTimeout(contentShow,2000);
	lastAudioPlayed=String(audios["repeat"]["audio"]);	
	}

var contentShow = function()
	{
	clearTimeout(timeDelay);
	if((rotateValue != 0)&&(angleRot != 0))
	{activitySlideDiv();}
	$(".Weather_Forecast").fadeIn(2500);	
	$('.checkAns').show();
	$('.checkAns').off('click').on('click', resultShw);	
	}

var resultShw = function(e)
	{
	e.stopPropagation();
	$(this).hide();
	$("#"+cpage).append("<div id='resetMass'>Reset</div>");
	$('#resetMass').off('click').on('click', resetFun);
	$("#resetMass").show();
	/* spriteaniinr_1=0;
	spriteaniinr_2=0;
	spriteaniinr_3=0; */
	if(rotateValue < 0){activitySlideDiv();}
	$(".expPara").html(pairings[citySelectd][pair]["weatherRepMsg"]);
	globalAudioName = String(pairings[citySelectd][pair]["audio_Msg"]);	
	globalAudioPause();	
	}

var resetFun = function()
	{	
	topv = "142px";
	highlightData =["#city_0", "#airmass_0 .dataShow", "#airmass_1 .dataShow", "#am_1", "#airmass_3 .dataShow", "#airmass_2 .dataShow","#am_2","#collide"];
	resetCount++;
	$(this).hide(); 
	selectCnt = 0;
	am1="";
	am2="";
	tempSelect1='';
	tempSelect2='';	
	spriteaniinr_1=0;
	spriteaniinr_2=0;
	spriteaniinr_3=0;	
	tempStre=[0,0];
	currentStep=0;
	massAnimated=0;
	clearTimeout(timeDelay);
	clearTimeout(massOne_timeOut);
	clearTimeout(massTwo_timeOut);
	clearTimeout(timervar_1);
	clearTimeout(timervar_2);
	clearTimeout(timervar_3);
	$("#city_0").css({"background":"#ffcc00", "cursor": "pointer"});
	$("#am_1, #am_2").css({"background":"#a7a9ac"});	
	$("#collide").remove();
	$('#resetMass, .checkAns').remove();
	$('.weatherRep,.pressure,.front').stop();
	$('.weatherRep,.pressure,.front').clearQueue();
	$('.weatherRep,.pressure,.front').remove();
	$('.Weather_Forecast').stop().hide();		
	if(rotateValue > -280){activitySlideDiv();}
	activityFunction(cpage);	
	}
	
	/* var arrowRot = function(x)
	{	
	if($("#"+x+" .arrow-down").css("transform")== 'matrix(-1, 0, 0, -1, 0, 0)' )
	{
	$("#"+x+" .arrow-down").css("transform","matrix(1, 0, 0, 1, 0, 0)");
	}
	else
	{
	$("#"+x+" .arrow-down").css("transform","matrix(-1, 0, 0, -1, 0, 0)");
	}
	}
	
function overlapeProb(a_l, a_t, b_l, b_t)
	{
	if(massAnimated<1)
	{e = a_l+parseInt($(".airmass").width());	
	f = a_t+parseInt($(".airmass").height());
	g = b_l+parseInt($(".airmass").width());	
	h = b_t+parseInt($(".airmass").height());	
	if(((a_l<b_l)&&(b_l<e)&&(a_t<b_t)&&(b_t<f))||((a_l>b_l)&&(a_l<g)&&(a_t>b_t)&&(a_t<h)))
	{
	clearAnim();		
	}
	}
	} 

var posCont = function(e, ui)
	{	
	if(ui.position.top < 45) 
	{ui.position.top=45}	
	if(ui.position.top > 510)
	{ui.position.top=510}	
	if(ui.position.left<5)
	{ui.position.left=5}
	if(ui.position.left>640)
	{ui.position.left=640}
	}
	*/
	function restartWelcome()
    {
        document.getElementById("myFrame").contentWindow.welcomeMove = 0;	
        var childWindow = $('iframe').contents();
        childWindow.find('#Stage_welText').html(document.getElementById("myFrame").contentWindow.welcomeMode['step_0']['text']);	
        childWindow.find('#Stage_welcomeGroup').css('background','#fff').css('box-shadow','1px 1px 2px 1px rgba(0,0,0,0.25)');
        childWindow.find('#Stage_left_slider_act,#Stage_right_slider_act').css('top','auto').css('bottom','6px');
        childWindow.find('#Stage_left_slider_act').attr('src','images/left_slider_deact.png');
        childWindow.find('#Stage_right_slider_act').attr('src','images/right_slider_act.png').css('cursor','pointer');
        var lpos = 274;	
        var tpos = 226;	
        childWindow.find('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',126);
        childWindow.find('#Stage_left_slider_act').css('cursor','default');
        childWindow.find('#Stage_audio_icon_normal').attr('audio-state','pause');
        childWindow.find('#Stage_audio_icon_normal').addClass('expAudio');				
        childWindow.find('#Stage_welcomeGroup').removeClass(document.getElementById("myFrame").contentWindow.speechBubblePos);
        document.getElementById("myFrame").contentWindow.AdobeEdge.getComposition("EDGE-1817669").getStage().play(0);
    }