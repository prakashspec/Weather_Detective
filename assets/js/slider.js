var sliderFunCalled = false;
function audioPlay()
	{	

		// if(SlideStatusArr[MainNavigations][2] == 'sliderhide') return;
		// globalAudioPause();
		// AudioText=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex][stepIndex];
		// LengthFind=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex].length-1;
		// currentIndex=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex].indexOf(AudioText);
		// slideImg=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["Image"];
		// if(currentStep =='digend' && FeedBack=='right'){AudioText=AudioText.replace('[X]',count);}
		// $(".expDiv .expPara").html(AudioText);
		// if(slideImg!="")$(".expimgcont img").attr("src",imgBaseAct+slideImg);
		// if(!sliderFunCalled){
			// //var slidetimeout=setTimeout(function(){		
				// $('.expChild').css('height','auto');			
				// SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
				// //clearTimeout(slidetimeout);
			// //},1);
		// }
		//sliderNavigationFun();
	}

function MoveToNextStep()
	{
		
		
		if(FeedBack=="wrong")
			{
				SliderOkClick("close");
				return;
			}
		if(audioIndex==0 && stepIndex == LengthFind)
			{
				audioIndex=0;
				stepIndex=0;
				SliderOkClick("close");
				return;
			}
		if(stepIndex!=LengthFind)
			{
				stepIndex++;			
				audioPlay();
				return;
			}
		if(audioIndex==1 && stepIndex==LengthFind)
			{	
				audioIndex=0;
				stepIndex=0;
				SliderOkClick("close");
				return;
			}
			FeedBack="step";
			
	}
var tempcurrentStep = 0;
function rightAttemptFun()
	{	
		sliderFunCalled = false;
		tempcurrentStep=0;
		FeedBack="right";
		$(".highlight,.glowEffect").hide();
		audioIndex=1;			
		stepIndex=0;
		audioPlay();
		//if(parseInt($('.expDiv').css("left")) < 0){	SliderOkClick("open");}
		//SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
	}
 
 function wrongAttemptFun(ElemLevel)
	{
		sliderFunCalled = false;
		$('.activeSlider').off('click').on('click',activitySlideDiv);
		noStepArr[currentStep]++;
		FeedBack="wrong";
		if(ElemLevel=="drop")
		{
			AudioText=incorrectText[wrongResPos]; 
			$(".expDiv .expPara").html(AudioText);
			if(parseInt($('.expDiv').css("left")) < 0){		var OpenTime = setTimeout(function(){clearTimeout(OpenTime);SliderOkClick("open");	},0);}
		}
		else if(ElemLevel=="stop")
		{
			audioIndex=2;
			if(tempcurrentStep<2){stepIndex=tempcurrentStep;tempcurrentStep++;}
			audioPlay();
		}
		//SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
		$('.navSliderBtn').hide();
	}

function toggleExpTabs()
	{
		StateCheck=$(this).attr("id").split("_")[1]-1;
		$(".labelRight").removeClass('labelArrow').css({'cursor':"pointer","background":backgroundNcolor[2][0],"color":backgroundNcolor[2][1]});
		$(this).addClass("labelArrow").css({'cursor':"pointer","background":backgroundNcolor[getIdSplit][0],"color":backgroundNcolor[getIdSplit][1]});
		audioPlay();
		//activityFunction(cpage);
	}

function SliderFunc(ImgStatus,okStatus,sliderStatus)
{
	sliderFunCalled = true;
	if(sliderStatus=="slidershow")
	{
		
		$(".expDiv").css("display","block");
		if((ImgStatus=="imgshow" && slideImg!="") || slideImg!=""){$(".expimgcont").css("display","block");$('.audioTextDiv').css('margin-top','-11px');}
		else if((ImgStatus=="imgshow" && slideImg!="")  || slideImg==""){$(".expimgcont").css("display","none");$('.audioTextDiv').css('margin-top','-12px');}
		if(FeedBack=='wrong'){$(".expimgcont").css("display","none");$('.audioTextDiv').css('margin-top','-12px');}
		if(okStatus=="okshow"){$(".moveNextFood").css("display","block");}
		else if(okStatus=="okhide"){$(".moveNextFood").css("display","none");}	
		
		scrollApplying();
		//------------Slider Bottom set when text changes-------//
		if(parseInt($('.expDiv').height()+parseInt($('.expDiv').css('top'))) >= 530){
			$('.expDiv').animate({top:parseInt(530-$('.expDiv').height())+'px'});
		}
		
	}
	else
	{
		 $(".expDiv,.EventNotAllowed").css("display","none");
	}
}

var scrollApplying = function(){				
	$('.expDiv').find('.shadowTop,.shadowBottom').remove();
	$('.expChild').mCustomScrollbar('destroy');
	$(".expChild").css({'overflow-y':'hidden'});
	//console.clear();
	
	if($(".expDiv").height() > 300){
		$('.expChild').css('height',300);		
		$('.expDiv').css('padding-bottom','0px');
		if($('.expFoodBar').css('display') == 'flex'){
			$('.expChild').css('height',256);
			$('.expDiv').css('padding-bottom','22px');
		}
		scrollApplyChoose('expDiv','expChild');
		sliderFunCalled = false;
		
		if(parseInt($('.expDiv').css("left")) < 0){		var OpenTime = setTimeout(function(){clearTimeout(OpenTime);SliderOkClick("open");	},0);}
	}
	else
	{		
		$('.expDiv').css('padding-bottom','0px');	
		$('.expChild').mCustomScrollbar('destroy');
		if(parseInt($('.expDiv').css("left")) < 0){		var OpenTime = setTimeout(function(){clearTimeout(OpenTime);SliderOkClick("open");	},0);}
	}
}

function scrollApplyChoose(parent,child)
{	
	$('.'+parent).append('<div class="shadowTop"></div><div class="shadowBottom"></div>');
	$('.shadowTop,.shadowBottom').css('display','none');
	$('.shadowBottom').css('display','block');	
	if($('.expFoodBar').css('display') == 'flex')
	{		
		$('.shadowBottom').css({bottom:'22px'});
	}
	
	else  {		
		$('.shadowBottom').css({bottom:'0px'});
	}	
	if(parent == 'helpinner') $('.helpinner .shadowBottom').css({bottom:'105px'});
	
	$("."+child).css({'overflow-y':'auto'});
	$("."+child).mCustomScrollbar({theme:"3d-thick",scrollInertia: 800,
	live: true,
	callbacks:{
		onScrollStart:function(){
		  if(parent == 'helpinner') $('.helpinner .shadowTop,.helpinner .shadowBottom').css('display','block');
		  else $('.shadowTop,.shadowBottom').css('display','block');
		},
		onTotalScroll:function(){
			if(parent == 'helpinner') {
				$('.helpinner .shadowBottom').css('display','none'); 
				$('.helpinner .shadowTop').css('display','block');
				}
			else {
				$('.shadowBottom').css('display','none'); 
				$('.shadowTop').css('display','block');
			}
		},
		onScroll:function(){
		  if(this.mcs.top == 0)
			{
				if(parent == 'helpinner') {
					$('.helpinner .shadowBottom').css('display','block'); 
					$('.helpinner .shadowTop').css('display','none');
					}
				else {
					$('.shadowBottom').css('display','block'); 
					$('.shadowTop').css('display','none');
				}
 				if($('.expFoodBar').css('display') == 'flex'){		
					$('.shadowBottom').css({bottom:'22px'});
				}
				else{
					$('.shadowBottom').css({bottom:'0px'});					
				}
				if(parent == 'helpinner') $('.helpinner .shadowBottom').css({bottom:'105px'});
			}
		}
	}});
	
	
	$("."+child).mCustomScrollbar("scrollTo",[0,0]);
	//$('.expFoodBar').css('bottom','-44px');
	scrollApply(parent)
}
	
var scrollApply = function(frParent)
	{	
		$('.mCSB_draggerContainer').css({boxShadow:'none'}).css('background','#fff').css('border','1px solid #898a8c').css('border-radius','0px');
		$('.mCSB_dragger_bar').css('margin','0px').css('background','rgba(0, 0, 0, 0.5)').css({boxShadow:'none'}).css('border-radius','0px');		
		$('.mCSB_draggerContainer').css({border:'1px solid rgba(0,0,0,0.7)'});
		$('.mCSB_dragger_bar').css({'left':'0px',"width":"100%"});
		//$('.mCSB_container').css({height:'100%'});
		$('.mCSB_dragger').css({minHeight:'94px'});
		$('.mCSB_scrollTools').css('z-index',10);
	}	
var buttonClick = function(e)
{ 
	buttonId = $(this).attr('id');
	getIdSplit=buttonId.split("ch")[1]-1;
	activityFunction(cpage);
	headerTabs($(this));
	audioPlay();
}

function SliderOkClick(OkClickState)
{
	if(OkClickState=="open")
	{		
		rotateValue=0;
		angleRot=0;
		if(MainNavigations==2){$(".EventNotAllowed").show();}
		else{$(".EventNotAllowed").hide();}
	}
	if(OkClickState=="close")
	{
		rotateValue=-280;
		angleRot=180;
		$(".EventNotAllowed").hide();
		globalAudioPause();
	}
	slideAnimate();
}



function activitySlideDiv()
	{
		
		if(cpage == "activity")
		{		
		if(currentStep == 2 || currentStep == 3 || currentStep == 4|| currentStep == 5 || currentStep == 6)
		{
			
			rotateValue = (rotateValue < 0)? ExpDivPos[currentStep][1] :-280;
			topv = ExpDivPos[currentStep][0];	
			angleRot = (angleRot == 180)?0:180;
		
		}
		
		else
		{
			rotateValue = (rotateValue >= 0)?-280:0;
			var staticval = ($('.expDiv').position().left >= 0)?-280:0;				
			angleRot = (staticval >= 0)?0:180;
				
		}
		
		
		}
		if(cpage == "explore")
		{
			rotateValue = (rotateValue >= 0)?-280:0;
			angleRot = (angleRot == 0)?180:0;
		}
		
		if(parseInt($('.expDiv').css('left'))>=0) globalAudioPause();
		slideAnimate();	
	}

function slideAnimate()
{
	
	if(parseInt(rotateValue)!=0)
	{
		globalAudioPause();
	}
	if(cpage == "activity")
		{
		
		$('.expDiv').stop().animate({left:rotateValue, top: topv},800,function(){			
		$('.activeSlider').myMethod1(angleRot);		
		});	
		}
		if(cpage == "explore")
		{
	$('.expDiv').stop().animate({left:rotateValue},800,function(){			
		$('.activeSlider').myMethod1(angleRot);		
	});
		}
}

$.fn.extend({
		myMethod1: function(angle){$(this).css('transform','rotate('+(angle)+'deg)')}
	});	
	
function TabsStateRightAndTop(topMenu,rightMenu,baseImg)
{
	if(topMenu=="topmenushow"){
		$(".highlightTab").show();
		$(".workArea, .EventNotAllowed").css({"top":"34px","height":"554px"});
		$(".commonWorkArea").css({"height":"554px"});
	}
	else if(topMenu=="topmenuhide"){
		$(".highlightTab").hide();
		$(".workArea, .EventNotAllowed,.commonWorkArea").css({"top":"0px","height":"588px"});
		$(".commonWorkArea").css({"height":"588px"});
	}
	if(rightMenu=="rightmenushow"){$(".Modes").show();}
	else if(rightMenu=="rightmenuhide"){$(".Modes").hide();}
	if(baseImg=="baseimgshow"){$(".baseImg").show();}
	else if(baseImg=="baseimghide"){$(".baseImg").hide();}
}
