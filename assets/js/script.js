
$(document).ready(function()
	{		
		initialfun();
		loadStart();
		$('.rightlabel1,.rightlabel2').off('click').on('click', toggleExpTabs);
		$('.help2').addClass('rclass');
		$('.activity_title').html(baseConfig.activityTitle);
		$('.expAudio').off('click').on('click', playGlobalAudio);
		$('<audio id="globalAudio"><source src="" type="audio/mp3"/></audio>').appendTo('.container');
		$('.expAudio').attr('audio-state','pause');	
		$('.okbtn').off('click').on('click', MoveToNextStep);
		$('.arrowbtn').off('click').on('click', MoveToNextStep);
		$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
		$('.PreBtnSlider').off('click').on("click",preNavigationFun);
		$(".exploreLabel_2").hide();
		
	/* $(function(){
		$.ajax({
			url: "version.txt",
			async: true,   // asynchronous request? (synchronous requests are discouraged...)
			cache: false,   // with this, you can force the browser to not make cache of the retrieved data
			dataType: "text",  // jQuery will infer this, but you can set explicitly
			success: function( data, textStatus, jqXHR ) {
				$('.activity_title').html(baseConfig.activityTitle+" "+'<span style="color:#999">'+data+'</span>');
				}
			});
		}); 	*/	
		 
	});


function loadStart_old()
	{
		var helpLen1 = Object.keys(info_background).length;
		for(var i=0;i<helpLen1;i++)
			{
				$('<div class="pdivHelp helpAudio"><img id="hlen_'+i+'" src="'+(templateStateImg.audiopause)+'" /><p class="m20">'+info_background['block'+i].text+'</p></div>').appendTo('.helpBlock1');				
			}
			
		var helpLen2 = Object.keys(info_help).length;
		for(var j=0;j<helpLen2;j++)
			{
				var imgFound = info_help['block'+j].imgText.lastIndexOf('.png');
				if(imgFound != -1)
					{
						$('<div class="pdiv helpAudio"><img style="align-self:flex-start;margin-top:18px; margin-bottom: 0px;" src="'+(templateStateImg.audiopause)+'" /><div class="imgContain" style= "width:70px;margin-top:-25px;"><img style="display:block;margin:auto;" id="info_'+i+'" src="'+helpimgPath+info_help['block'+j].imgText+'" /></div><p class="m20" style="width:400px">'+info_help['block'+j].text+'</p></div>').appendTo('.helpBlock2');
					}
				else
					{
						$('<div class="pdiv helpAudio"><img id="info_'+i+'" style="align-self:flex-start;margin-top:18px; margin-bottom: 0px;" src="'+(templateStateImg.audiopause)+'" /><span class="helpDiv1">'+info_help['block'+j].imgText+'</span><p class="m20" style="width:370px">'+info_help['block'+j].text+'</p></div>').appendTo('.helpBlock2');
					}
			}	
				
		//$(".helpBlock1").last().append("<div><span style='text-align:center'><img src='assets/images/activity/warm_front.png' alt='Warm front'/><br/>Warm front</span><br/><span style='text-align:center'><img src='assets/images/activity/stationary_front.png' alt='Warm front'/><br/>Stationary front</span><br/><span style='text-align:center'><img src='assets/images/activity/cold_front.png' alt='Warm front'/><br/>Cold front</span></div>");
		
		

		$('.helpinner .shadowTop,.helpinner .shadowBottom').remove();			
		scrollApplyChoose('helpinner','helpBlock1');
		
		$(".imgContain").css({"margin-top":"-18px","margin-left":"10px"})
		
	 }

function loadStart()
	{
		var helpLen1 = Object.keys(info_background).length;
		for(var i=0;i<helpLen1;i++)
			{
				$('<div class="pdivHelp helpAudio"><img id="hlen_'+i+'" src="'+(templateStateImg.audiopause)+'" /><p class="m20">'+info_background['block'+i].text+'</p></div>').appendTo('.helpBlock1');				
			}
			
		var helpLen2 = Object.keys(info_help).length;
		for(var j=0;j<helpLen2;j++)
			{
				var imgFound = info_help['block'+j].imgText.lastIndexOf('.png');
				if(imgFound != -1)
					{
						$('<div class="pdiv"><img id="info_'+j+'"  style="align-self:flex-start;margin-top:18px; margin-bottom: 0px;" src="'+(templateStateImg.audiopause)+'" /><div class="imgContain" style= "width:70px;margin-top:-25px;"><img style="display:block;margin:auto;" src="'+helpimgPath+info_help['block'+j].imgText+'" /></div><p class="m20" style="width:400px">'+info_help['block'+j].text+'</p></div>').appendTo('.helpBlock2');
					}
				else
					{
						$('<div class="pdiv"><img id="info_'+j+'" style="align-self:flex-start;margin-top:18px; margin-bottom: 0px;"  src="'+(templateStateImg.audiopause)+'" /><span class="helpDiv1">'+info_help['block'+j].imgText+'</span><p class="m20" style="width:370px">'+info_help['block'+j].text+'</p></div>').appendTo('.helpBlock2');
					}
			}		
	
		$('.helpinner .shadowTop,.helpinner .shadowBottom').remove();			
		scrollApplyChoose('helpinner','helpBlock1');
		/*$(".helpBlock1,.helpBlock2").mCustomScrollbar({theme:"3d-thick"});		
		$('.helpBlock1,.helpBlock2').find('.mCSB_draggerContainer').css('box-shadow','none').css('background','#fff').css('border','1px solid #898a8c').css('border-radius','0px');	
		$('.helpBlock1,.helpBlock2').find('.mCSB_dragger_bar').css('margin','0px').css('background','rgba(0, 0, 0, 0.5)').css('box-shadow','none').css('border-radius','0px');		
		$('.mCSB_draggerContainer').css({border:'1px solid rgba(0,0,0,0.7)'});
		$('.mCSB_dragger_bar').css({'left':'0px',"width":"100%"});
		$('#mCSB_1_dragger_vertical').css({minHeight:'94px'}); */ 
		//$('#explore').css("top","33px")
		$(".imgContain").css({"margin-top":"-18px","margin-left":"10px"})
	 }

	 
function speechToText(txt)
	{
		var audioMode = $('.screenArea').attr('audio-mode');
		var ctState = (audioMode == "on")?'pause':'play';	
		$('.expAudio').attr('audio-state','play');		
		$('#globalAudio').off('ended').on('ended', callEndFun);				
		playGlobalAudio(txt);
	}

	
	
function headerTabs(label)
	{	
		prevMove = -1;
		var thisTab = label;
		headerlabel = getIdSplit;
		var ctIndex = Number(thisTab.attr('data-show'));
		var ano = (ctIndex == 1)?2:1;
		imageName = (ctIndex == 1)?"monterey":"amazon";
		$('#ch'+ano).removeClass('chheader'+ano).addClass('chheader'+ano+'Act').css('background','#6d6e71').css('color','#fff');
		$('#ch'+ctIndex).removeClass('chheader'+ctIndex+'Act').addClass('chheader'+ctIndex).css('background',labelSettings[headerlabel]).css('color','#FFCC00');
		$('.baseImg').remove();		
		/* $('.workArea').prepend('<img class="baseImg" src="'+(imgBase+'welcomebg/'+imageName)+'.png"/>'); */
		var actClass = $('.rightlabel1').hasClass('labelArrow');
		var applyCol = (actClass == true)?1:2;
		$('.rightlabel'+applyCol).css({'cursor':"pointer","background":backgroundNcolor[getIdSplit][0],"color":backgroundNcolor[getIdSplit][1]});
		//globalAudioPause();	
		StateCheck=applyCol-1;
		
		//activityFunction(cpage);
	}
var selectedIndex = 0;
var prevMove = 0;
var defIndex = -1;
var globalAudioName,lastAudioPlaed_1;
var addAudioName;
var setID;

function playGlobalAudio(passText)
	{	
		
		
		var textPara = typeof passText;		
		var ctElem = (textPara != 'string')?$(this):$('.expAudio');			
		var childWindow = $('iframe').contents();
		var toggleState = ((cpage == 'welcome') && ($('.helpwindow').css('display') == 'none'))?childWindow.find('.expAudio').attr('audio-state'):ctElem.attr('audio-state');
		
		if(toggleState == "pause")
			{
				var getID = $(this).attr('id');			
				defIndex = -1;
				if($(this).attr('id')=='notice')
					{									
						//alert();
						if($(".head").html()=="Weather Forecast")
						{addAudioName = String(Weather_forecastText[citySelectd_ind][2]);}
						else
						{addAudioName = String(pairings[citySelectd][pair]["audio"]);}
									
					}
				
				if($('.helpwindow').css('display') != 'none')
					{
						var ctString = ($('.helpBlock1').css('display') == 'block')?'info_background':'info_help';
						var getIndex = $(this).parent().index();
						globalAudioName = String(window[ctString]['block'+getIndex]['audio']);
						//alert();
					}				
				selectedIndex = $(this).parent().index();
				
				if((selectedIndex != defIndex) && (getID != setID))
					{
						$("#globalAudio").prop('currentTime','0');						
					}
				if($("#globalAudio").prop('currentTime')<=0)
					{	
						if($(this).attr('id')=='notice'){
							var url = "assets/audios/"+addAudioName+".mp3";
						}
						else{
							var url = "assets/audios/"+globalAudioName+".mp3";
							
						}
						
					}	
					if(cpage == 'welcome' && ($('.helpwindow').css('display') == 'none'))
					{
						
						childWindow.find('.expAudio').attr('audio-state','play').attr('src',"../../"+templateStateImg.audioplay);		
					
					}
				else
					{
						$('.expAudio').attr('audio-state','pause').attr('src',templateStateImg.audiopause);
						ctElem.attr('src',templateStateImg.audioplay);
						ctElem.attr('audio-state','play');	
					}
			
				$("#globalAudio").attr("src",url).get(0).play();
				$('.expAudio').attr('audio-state','pause').attr('src',templateStateImg.audiopause);
				ctElem.attr('src',templateStateImg.audioplay);
				ctElem.attr('audio-state','play');	
				defIndex = selectedIndex;
				setID = getID;
				
			}
		else
			{
			if((cpage == 'welcome') && ($('.helpwindow').css('display') == 'none'))
					{						
						childWindow.find('.expAudio').attr('audio-state','pause').attr('src',"../../"+templateStateImg.audiopause);	
						
					}
				
				$('.screenArea').attr('audio-mode','off');
				$("#globalAudio").attr("src",url).get(0).pause();
				$('.expAudio').attr('audio-state','pause');
				ctElem.attr('src',templateStateImg.audiopause);
				ctElem.attr('audio-state','pause');					
			}
		$('#globalAudio').off('ended').on('ended', callEndFun);			
	}
	
function getTimeNow()
	{
		
	}	
	
function globalAudioPause()
	{	
		if((cpage == 'welcome') && ($('.helpwindow').css('display') == 'none'))
			{
			
				var childWindow = $('iframe').contents();
				childWindow.find('.expAudio').attr('audio-state','pause').attr('src',"../../"+templateStateImg.audiopause);
				$('.screenArea').attr('audio-mode','off');	
				$("#globalAudio").trigger('pause');	
				$("#globalAudio").prop('currentTime','0');
				prevMove = -1;
				
			}
		else
			{				
				$('.expAudio').attr('audio-state','pause');
				$('.expAudio').attr('src',templateStateImg.audiopause);
				$('.screenArea').attr('audio-mode','off');	
				$("#globalAudio").trigger('pause');	
				$("#globalAudio").prop('currentTime','0');
				prevMove = -1;
			}
	}

function callEndFun()
	{	
		
		globalAudioPause();			
	}
	
	

