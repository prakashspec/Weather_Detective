var MainNavigations=0;	
var baseConfig = {activityTitle:'Weather Detective'};
var Tabs=["welcome","explore","activity"];
var FindState=["memphis","salt"];
var FindWH=[["845px","918px"],["850px","936px"]];
var spriteFindWH=[
[["535px","88px"],["300px","148px"],["695px","460px"],["350px","400px"]],
[["60px","40px"],["300px","130px"],["360px","420px"],["10px","420px"]]];
var massArrow=[["memphis_arrowDiv_0","memphis_arrowDiv_1","memphis_arrowDiv_2","memphis_arrowDiv_3"],["salt_arrowDiv_0","salt_arrowDiv_1","salt_arrowDiv_2","salt_arrowDiv_3"]];
var mass=["Arctic","Continental Polar","Continental Tropical","Maritime Tropical"];
var FindLevel=["airmass_0","airmass_1","airmass_2","airmass_3"];
var updated_FindLevel=[["airmass_0","airmass_1","airmass_3","airmass_2"],["airmass_0","airmass_1","airmass_2","airmass_3"]];
var directionNames=["n","s","e","w","nw","ne","sw","se"];
var cpage;
//label background on top
var labelSettings = {
						'monterey':'#140858', //monteryBay background
						'amazon':'#124521'    //Amazon background
					};

//label background on right
var backgroundNcolor=[
						["#150958","#FFCC00"], //monteryBay background
						['#124521','#FFCC00'], //Amazon background
						["#6d6e71","#fff"]     //default Grey background
					 ];
//array for slider okbtn and img show and hide
var SlideStatusArr=[
						["imghide","okhide","sliderhide"],	// welcome
						["imgshow","okhide","slidershow"],  //explore
						["imghide","okshow","slidershow"]   //activity
				   ]; 			
//imghide  imgshow
// okhide  okshow
// sliderhide slidershow

//array for topmenu rightmenu and base image show and hide
var topNSideMenu=[
					["topmenuhide","rightmenuhide","baseimghide"], //welcome
					["topmenuhide","rightmenuhide","baseimghide"], //explore
					["topmenuhide","rightmenuhide","baseimghide"]  //activity
				 ]; 
//topmenuhide  topmenushow
// rightmenuhide  rightmenushow
// baseimghide baseimgshow

var templateHdr = {textActive:'#FFF',textNormal:'#fff'};
var selectedIndex = 0;
var prevMove = 0;
var defIndex = -1;	
var activitytag = true;	
var currentactivity = 0;
var parentTab;
var imgBase = "assets/images/";
var imgBaseAct = "assets/images/activity/";
var helpimgPath = "assets/images/help/";
var imgBaseWelcome = "assets/images/welcomebg/";
var speechBubblePos = 'bubbleDivNone';
var selBubbleLen = 0;
var bubbleStart = 0;
var imgPng = '.png';
var imgJpg = '.jpg';
var ctAttrExp;
var headerlabel = 'monterey';
var exoploreCtBubble = 'anchovy0';

var templateStateImg = {
	audiopause:'assets/images/template/audio_icon_normal.png',
	audioplay:'assets/images/template/audio_icon_play.png',
	leftslideract:'assets/images/template/left_slider_act.png',
	leftsliderdeact:'assets/images/template/left_slider_deact.png',
	rightslideract:'assets/images/template/right_slider_act.png',
	rightsliderdeact:'assets/images/template/right_slider_deact.png',
};
var imageName="monterey";	
var noOfSteps=16;
var currentStep=0;
var wrongResPos=0;
var LengthFind=0;
var AudioText,audioIndex=0,stepIndex=0;
var getIdSplit=0;
var StateCheck=0;
var noStepArr=[];
var totalStepArr=[];
var FeedBack="Step";
var activeIcon="explore";
var slideImg="";
var rotateValue=-280;
var angleRot=180;

//incorrect Audio multiple
var incorrectText = [
					'Start by selecting the Arctic air mass.',
					'Select the <b>Continental polar</b> air mass.',
					'Select the <b>Continental tropical</b> air mass.',
					'Select the <b>Maritime tropical</b> air mass.'
					];
					
var Weather_forecastText = [
					['thunderstorms.png','Severe thunderstorms with possible tornado activity.','vlwdemf_01'],
					['sleet_freeze.png','Sleet and freezing rain will move in by morning, followed by warming temperatures.','vlwdesf_01']
					];
					
var guide_Text = [
["To begin, select a city from the drop-down.","vlwde_01"],
["Select any air mass on the map to view its data. Decide which pair of air masses must collide to make the Weather Forecast come true. Make your selections from the Air Mass 1 and Air Mass 2 drop-downs, then select Move Air Masses.","vlwde_02"]
];					



//shell Audio
var city_names={
"memphis": {'name':'Memphis, TN','pos':'left'},
"salt": {'name':'Salt Lake City, UT','pos':'right'}
};



var audios ={
"repeat":{'quest': 'Check the weather update and analyze the weather map. Did you pick the right pair of air masses, or has the forecast changed?<br/><br/>Select Check Answer when you’re ready to continue.','audio':'vlwde_03'},
"activity": {
	"step_0":{'txt':["In this activity, you will analyze clues to predict which two air masses collide to cause a specific change in weather in Memphis, Tennessee.<br/><br/>Select the city of Memphis, Tennessee to begin."],'audio':["vlwda_01"]},	
	"right": {		
	'step_1': {'txt':["A meteorologist has predicted thunderstorms with possible tornado activity for Memphis.","Recall that a thunderstorm forms when a rapidly-moving cold air mass overtakes a slow-moving warm air mass. A collision between these air masses produces a cold front.","Only two of the four air masses shown on the screen can possibly collide to form a cold front over Memphis. The others will either not collide over Memphis, or they will collide to produce a different kind of front.","You will need to analyze the data for each air mass. Try to figure out how it will move and what kind of weather it may produce if it collides with the other air masses. Begin by selecting the Arctic air mass to analyze its weather data."],'audio':["vlwda_02","vlwda_03","vlwda_04","vlwda_05"]},	
	
	'step_2': {'txt':["This Arctic air mass is cold, but its wind speed suggests that it is moving very slowly. Its winds are coming from the northeast, so the air mass will travel southwest. This means it will probably move to the west of Memphis, so it is unlikely to collide with another air mass over Memphis.","Let’s choose another air mass to analyze. Now select the continental polar air mass."],'audio':["vlwda_06", "vlwda_07"]},
	
	'step_3': {'txt':["This continental polar air mass is cold and fast-moving, with winds of 35 miles per hour. The air mass is also moving southeast, which will take it toward Memphis. There is a good chance that this air mass could collide with another air mass to form a cold front over Memphis.<br/><br/>Go to the Air Mass 1 drop-down and choose the continental polar air mass as one of the air masses you will collide."],'audio':["vlwda_08"]},
	
	'step_4': {'txt':["Now select the continental tropical air mass to view its properties. What properties will tell you whether this air mass could help form a cold front over Memphis?"],'audio':["vlwda_09"]},
	
	'step_5': {'txt':["The data show that this air mass is warm. Also, its strong winds are blowing from southwest to northeast, toward Memphis. It is possible that this air mass could collide with another air mass to form a cold front over Memphis.","Now select the maritime tropical air mass to view its properties."],'audio':["vlwda_10","vlwda_11"]},
	
	'step_6': {'txt':["From the data, you can see that this air mass is warm and slow-moving. It is also moving toward Memphis. It could collide with the continental polar air mass to form a cold front over Memphis. Select the maritime tropical air mass from the Air Mass 2 drop-down now."],'audio':["vlwda_12"]},
	
	'step_7': {'txt':["Now select Move Air Masses to observe what happens when the selected air masses collide. We’ll find out if your prediction was correct!"],'audio':["vlwda_13"]},
	
	'step_8': {'txt':["Analyze the weather map produced from the movements of the air masses you chose. Was your prediction correct?","You have identified the two air masses that must collide over Memphis to produce stormy weather. Congratulations!","You have reached the end of this guided activity. But there is more to learn in this virtual lab! Now go to Explore, where you can test out other air mass collisions over Memphis and Salt Lake City. Observe how the air masses move and collide to learn more about weather and weather fronts."],'audio':["vlwda_14","vlwda_15","vlwda_16"]}
	},
	"wrong": {'step_0':{'txt':['Select Memphis, Tennessee to begin this activity.'],'audio':['vlwdaw_01']},
	'step_1':{'txt':['Start by selecting the Arctic air mass.'],'audio':['vlwdaw_02']},
	'step_2':{'txt':['Select the continental polar air mass.'],'audio':['vlwdaw_03']},	
	'step_3':{'txt':['Go to the Air Mass 1 drop-down and select continental polar from the drop-down.'],'audio':['vlwdaw_04']},
	'step_4':{'txt':['Select the continental tropical air mass.'],'audio':['vlwdaw_05']},
	'step_5':{'txt':['Select the maritime tropical air mass.'],'audio':['vlwdaw_06']},
	'step_6':{'txt':['Select the maritime tropical air mass from the Air Mass 2 drop-down to find out whether it will collide to form a cold front over Memphis.'],'audio':['vlwdaw_07']},
	'step_7':{'txt':['Select Move Air Masses to see what happens when the two air masses collide.'],'audio':['vlwdaw_08']}
	}
	}

};

var direction_deg ={'N':0, 'NE':45, 'E':90, 'SE':135, 'S':180, 'SW':225, 'W':270, 'NW':315};

var SlideContents = {
	"memphis":{
		"airmass_0":{
				'label':'Arctic',
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']],
				'style': ["height: 120px;width: 160px;position: absolute;z-index: 3;	padding-right: 10px;background-image: url('assets/images/activity/artic.png');background-position: 0px 0px;text-align: center;margin-top: -20px;margin-left: -20px;"],
				'Temp': '11.5',
				'Humidity': '-95',
				'Wind_speed': '5',
				'Wind_direction': 'NE',
				'Air_pressure': '78',
				'temp_val':'&#8722;17&#176;C',	
				'humidity_val':'15%',	
				'ap_val':'1040 millibars',	
				'wind_val':'NE 5 mph'
		},
		"airmass_1":{
				'label':'Continental Polar',
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']],
				'style': ["height: 120px;width: 160px;position: absolute;z-index: 3;	padding-right: 10px;background-image: url('assets/images/activity/continental_polar.png');background-position: 0px 0px;text-align: center;margin-top: -20px;margin-left: -20px;"],
				'Temp': '24.5',
				'Humidity': '0',
				'Wind_speed': '35',
				'Wind_direction': 'NW',
				'Air_pressure': '51',
				'temp_val':'5&#176;C',	
				'humidity_val':'50%',	
				'ap_val':'1030 millibars',	
				'wind_val':'NW 35 mph'
		},
		
		"airmass_2":
		{
				'label':'Maritime Tropical',
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']],
				'style': ["height: 120px;width: 160px;position: absolute;z-index: 3;	padding-right: 10px;background-image: url('assets/images/activity/maritime_tropical.png');background-position: 0px 0px;text-align: center;margin-top: -20px;margin-left: -20px;"],
				'Temp': '43.5',
				'Humidity': '110',
				'Wind_speed': '10',
				'Wind_direction': 'SE',
				'Air_pressure': '78',
				'temp_val':'38&#176;C',	
				'humidity_val':'90%',	
				'ap_val':'1040 millibars',	
				'wind_val':'SE 10 mph'
				
		},
		"airmass_3":{
				'label':'Continental Tropical',
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']],
				'style': ["height: 120px;width: 160px;position: absolute;z-index: 3;	padding-right: 10px;background-image: url('assets/images/activity/continental_tropical.png');background-position: 0px 0px;text-align: center;margin-top: -20px;margin-left: -20px;"],
				'Temp': '37',
				'Humidity': '-108',
				'Wind_speed': '35',
				'Wind_direction': 'SW',
				'Air_pressure': '106',
				'temp_val':'28&#176;C',	
				'humidity_val':'10%',	
				'ap_val':'1050 millibars',	
				'wind_val':'SW 35 mph'
		},
		
	},
	
	"salt":
	{
		"airmass_0":
		{
				'label':'Maritime Polar',
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']],
				'style': ["height: 120px;width: 160px;position: absolute;z-index: 3;	padding-right: 10px;background-image: url('assets/images/activity/maritime_polar.png');background-position: 0px 0px;text-align: center;margin-top: -20px;margin-left: -20px;"],
				'Temp': '19.5',
				'Humidity': '40',
				'Wind_speed': '25',
				'Wind_direction': 'W',
				'Air_pressure': '25',
				'temp_val':'&#8722;5&#176;C',	
				'humidity_val':'65%',	
				'ap_val':'1020 millibars',	
				'wind_val':'W 25 mph'
		},
		"airmass_1":
		{
				'label':'Continental Polar',
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']],
				'style': ["height: 120px;width: 160px;position: absolute;z-index: 3;	padding-right: 10px;background-image: url('assets/images/activity/continental_polar.png');background-position: 0px 0px;text-align: center;margin-top: -20px;margin-left: -20px;"],
				'Temp': '23',
				'Humidity': '-126',
				'Wind_speed': '5',
				'Wind_direction': 'N',
				'Air_pressure': '106',
				'temp_val':'2&#176;C',	
				'humidity_val':'3%',	
				'ap_val':'1050 millibars',	
				'wind_val':'N 5 mph'
		},
		"airmass_2":
		{
				'label':'Continental Tropical',
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']],
				'style': ["height: 120px;width: 160px;position: absolute;z-index: 3;	padding-right: 10px;background-image: url('assets/images/activity/continental_tropical.png');background-position: 0px 0px;text-align: center;margin-top: -20px;margin-left: -20px;"],
				'Temp': '38',
				'Humidity': '-121',
				'Wind_speed': '5',
				'Wind_direction': 'SE',
				'Air_pressure': '133',
				'temp_val':'28&#176;C',	
				'humidity_val':'5%',	
				'ap_val':'1060 millibars',	
				'wind_val':'SE 5 mph'
		},
		"airmass_3":
		{
				'label':'Maritime Tropical',
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']],
				'style': ["height: 120px;width: 160px;position: absolute;z-index: 3;	padding-right: 10px;background-image: url('assets/images/activity/maritime_tropical.png');background-position: 0px 0px;text-align: center;margin-top: -20px;margin-left: -20px;"],
				'Temp': '34.3',
				'Humidity': '104',
				'Wind_speed': '30',
				'Wind_direction': 'SW',
				'Air_pressure': '50',
				'temp_val':'21&#176;C',	
				'humidity_val':'88%',	
				'ap_val':'1030 millibars',	
				'wind_val':'SW 30 mph'
		}
	}
};

var SlideContents_activity = {
	"memphis":{
		"airmass_0":{
					'Air_pressure': '106'			  
					},
		"airmass_1":{
					'Air_pressure': '26'			  
					},
		"airmass_2":{
					'Air_pressure': '0'			  
					},
		"airmass_3":{
					'Air_pressure': '133'			  
					}			
			}
}

var pairings = 
{
	"memphis":
	{
	
	'0,1':
		{
			'text':["Get out your sunglasses and put on a sweater! We’re in for sunny skies and cool temperatures in Memphis as a polar air mass sweeps down from Canada."],
			'pos':[["210px","355px"],["345px","460px"]],
			//'Wind_speed': [4500,1500],
			'Wind_speed': [6000,6000],
			'imgShow': [["sun", "left: 508px;top: 367px;"]],
			'weatherRepMsg': "The original forecast called for stormy weather, but it turned out to be cool and sunny. The air masses you chose did not collide.<br/><br/>Select Reset to try again.",
			'audio':"vlwdem_01",
			'audio_Msg':"vlwde_04"
			
		},
	'0,2':
		{
			'text':["It’s a beautiful day to get outdoors! Sunshine, moderate temperatures, and low humidity are expected today thanks to a warm, dry, continental air mass moving in from Mexico."],
			'pos':[["140px","460px"],["350px","464px"]],
			//'Wind_speed': [1500,4000],
			'Wind_speed': [6000,6000],			
			'imgShow': [["sun", "left: 508px;top: 367px;"]],
			'weatherRepMsg': "The original forecast called for stormy weather, but it turned out to be a warm, dry day. The air masses you chose did not collide.<br/><br/>Select Reset to try again.",
			'audio':"vlwdem_02",
			'audio_Msg':"vlwde_05"
		},
	'0,3':
		{
			'text':["Crank up the air conditioning! A warm, tropical air mass is bringing plenty of sunshine and hot, humid weather."],
			'pos':[["210px","355px"],["350px","470px"]],
			//'Wind_speed': [4500,1500],
			'Wind_speed': [6000,6000],
			'imgShow': [["sun", "left: 508px;top: 367px;"]],
			'weatherRepMsg': "The original forecast called for stormy weather, but it turned out to be warm and sunny. The air masses you chose did not collide.<br/><br/>Select Reset to try again.",
			'audio':"vlwdem_03",
			'audio_Msg':"vlwde_06"
		},
	'1,2':
		{
			'text':["The weather is great here in Memphis, with sunny skies and moderate temperatures expected. Folks to our north are not so lucky. They are in for a few dreary, rainy days as a stationary front forms over the upper Midwest."],
			'pos':[["265px","480px"],["350px","475px"]],
			//'Wind_speed': [1500,4000],
			'Wind_speed': [6000,6000],
			'imgShow': [["rains", "left:500px;top:300px"],["sun", "left: 508px;top: 367px;"],["stationary_front", "left:468px;top:335px; -webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg); width: 130px;"]],
			'weatherRepMsg': "The original forecast called for stormy weather, but it turned out to be a warm, dry day. The air masses you chose collided, but not over Memphis.<br/><br/>Select Reset to try again.",
			'audio':"vlwdem_04",
			'audio_Msg':"vlwde_07"
			
		},
	'1,3':
		{
			'text':["Severe weather alert! Thunderstorms are expected to dump heavy rain on Memphis thanks to a cold front moving in. Stay tuned for possible tornado activity and plan to stay indoors."],
			'pos':[["340px","450px"],["345px","484px"]],
			//'Wind_speed': [1500,1500],
			'Wind_speed': [6000,6000],
			'imgShow': [["thunder", "left:510px;top:325px"],["cold_front", "left:460px;top:380px; -webkit-transform: rotate(10deg);-moz-transform: rotate(10deg);-ms-transform: rotate(10deg);transform: rotate(10deg);"]],
			'weatherRepMsg': "The air masses you chose collided to produce a cold front over Memphis, resulting in severe thunderstorms. This matches the original forecast. Nice work!<br/><br/>Now select Reset to analyze a different weather forecast for another city.",
			'audio':"vlwdem_05",
			'audio_Msg':"vlwde_08"
		},
	'2,3':
		{
			'text':["We’re in for a spell of hot, dry weather as a continental air mass from Mexico sweeps through Memphis. But the weather will soon turn very humid as a maritime air mass brings moisture up from the Gulf of Mexico."],
			'pos':[["240px","554px"],["350px","470px"]],
			//'Wind_speed': [4000,1500],
			'Wind_speed': [6000,6000],
			'imgShow': [["sun", "left: 508px;top: 367px"]],
			'weatherRepMsg': "The original forecast called for stormy weather, but it turned out to be hot and dry. The air masses you chose did not collide.<br/><br/>Select Reset to try again.",
			'audio':"vlwdem_06",
			'audio_Msg':"vlwde_09"
		}		
	},
	
	"salt":	{	
	
	'0,1':
		{
			'text':["Zip up those parkas, folks! A polar air mass moving down from Canada has brought cold temperatures, low humidity, and sunny skies. It will be chilly!"],
			'pos':[["52px","580px"],["270px","270px"]],
			//'Wind_speed': [2500,4500],
			'Wind_speed': [6000,6000],
			'imgShow': [["sun", "left:327px;top:297px"]],
			'weatherRepMsg': "The original forecast called for sleet and freezing rain, but it turned out to be a cold, dry day. The air masses you chose did not collide.<br/><br/>Select Reset to try again.",
			'audio':"vlwdes_01",
			'audio_Msg':"vlwde_10"			
		},		
		'0,2':
		{
			'text':["A tropical air mass moving in from Mexico has brought warm weather, low humidity, and sunny skies."],
			'pos':[["52px","580px"],["265px","290px"]],
			//'Wind_speed': [2500,4500],
			'Wind_speed': [6000,6000],
			'imgShow': [["sun", "left:327px;top:297px"]],
			'weatherRepMsg': "The original forecast called for sleet and freezing rain, but it turned out to be a warm, dry day. The air masses you chose did not collide.<br/><br/>Select Reset to try again.",
			'audio':"vlwdes_02",
			'audio_Msg':"vlwde_11"
		},
	'0,3':
		{
			'text':["It will be warm and humid in Salt Lake City today as a tropical air mass has moved in from the Pacific. Expect a few clouds but plenty of sunshine."],
			'pos':[["52px","580px"],["270px","285px"]],
			//'Wind_speed': [2500,2000],
			'Wind_speed': [6000,6000],
			'imgShow': [["sun", "left:327px;top:297px"]],
			'weatherRepMsg': "The original forecast called for sleet and freezing rain, but it turned out to be a warm, humid day. The air masses you chose did not collide.<br/><br/>Select Reset to try again.",
			'audio':"vlwdes_03",
			'audio_Msg':"vlwde_12"
		},
	'1,2':
		{
			'text':["Get ready for a long spell of mild weather as a stationary front forms over Salt Lake City. Temperatures will remain cool but steady. Some clouds are likely with possible fog."],
			'pos':[["250px","290px"],["275px","290px"]],
			//'Wind_speed': [4500,4500],
			'Wind_speed': [6000,6000],
			'imgShow': [["clouds", "left:330px;top:270px;width:49px;height:36px;"],["stationary_front", "left:288px;top:305px;width:100px;height:28px;-webkit-transform: rotate(10deg);-moz-transform: rotate(10deg);-ms-transform: rotate(10deg);transform: rotate(10deg);"]],			
			'weatherRepMsg': "The original forecast called for sleet and freezing rain, but it turned out to be cool and humid. The air masses you chose formed a stationary front when they collided over Salt Lake City.<br/><br/>Select Reset to try again.",
			'audio':"vlwdes_04",
			'audio_Msg':"vlwde_13"
		},
	'1,3':
		{
			'text':["Salt Lake City schools are delayed this morning as sleet and freezing rain have turned the roads into ice rinks. Temperatures should begin rising later in the day as a warm front comes through."],
			'pos':[["275px","270px"],["290px","285px"]],
			//'Wind_speed': [4500,2000],
			'Wind_speed': [6000,6000],
			'imgShow': [["rains", "left:327px;top:265px"],["warm_front", "left:291px;top:308px;width:100px;-webkit-transform: rotate(-28deg);-moz-transform: rotate(-28deg);-ms-transform: rotate(-28deg);transform: rotate(-28deg);"]],
			'weatherRepMsg': "The air masses you chose produced a warm front when they collided, resulting in snow and freezing rain, followed by warming temperatures. This matches the original forecast. Nice work!<br/><br/>Now select Reset to analyze a different weather forecast for another city.",
			'audio':"vlwdes_05",
			'audio_Msg':"vlwde_14"
			},
	'2,3':
		{
			'text':["Things will be drying out a bit in Salt Lake City today. The moist, tropical air will continue moving east, to be replaced by some hot, dry air moving up from Mexico. Expect warm temperatures and partly cloudy skies."],
			'pos':[["275px","300px"],["285px","250px"]],
			//'Wind_speed': [4500,2000],
			'Wind_speed': [6000,6000],
			'imgShow': [["sun_cloud", "left:325px;top:260px;width:56px;height:45px;"]],
			'weatherRepMsg': "The original forecast called for sleet and freezing rain, but it turned out to be a warm day. Both of the air masses you chose carried warm air, so they did not form a front when they collided.<br/><br/>Select Reset to try again.",
			'audio':"vlwdes_06",
			'audio_Msg':"vlwde_15"			
		}
	}
}

//information icon background text
var info_background = {
	'block0':{
			'img':'audio_icon',
			'text':"<b>Weather</b> describes the atmospheric conditions in an area. It is described by air pressure, temperature, humidity, precipitation, wind speed, and wind direction.",
			'audio':'ib_1'
		},
	'block1':{
			'img':'audio_icon',
			'text':"Weather changes as large air masses move into an area.  An <b>air mass</b> is a large volume of air that moves as one mass and has uniform properties throughout. These properties include the pressure, temperature, and humidity of the air. An air mass is also characterized by the speed at which it moves and its direction of movement.",
			'audio':'ib_2'
		},
	'block2':{
			'img':'audio_icon',
			'text':"<b>Wind direction</b> is indicated by the direction it comes from, which is the opposite of the direction it is going. For example, a north wind comes from the north but is traveling south. In general, an air mass will move in the same direction that its winds are blowing.",
			'audio':'ib_3'
		},
	'block3':{
			'img':'audio_icon',
			'text':"The humidity of an air mass depends on where it forms. <b>Continental</b> air masses form over land and tend to be dry. <b>Maritime</b> air masses form over oceans and tend to have high humidity.",
			'audio':'ib_4'
			},
	'block4':{
			'img':'audio_icon',
			'text':"The temperature of an air mass is also influenced by where it forms. <b>Arctic</b> air masses form near or above the Arctic Circle. These air masses are very cold. <b>Polar</b> air masses form in northern latitudes below the Arctic Circle. These air masses tend to be cold too, but less cold than Arctic air masses. <b>Tropical</b> air masses form near the Equator. These air masses tend to be warm.",
			'audio':'ib_5'
			},
	'block5':{
			'img':'audio_icon',
			'text':"Air masses move from areas of high pressure to areas of low pressure. When one air mass replaces another, the weather changes. Air masses also cause changes in weather when they collide.",
			'audio':'ib_6'
			},
	'block6':{
			'img':'audio_icon',
			'text':"A <b>cold front</b> forms when a fast-moving, cold air mass collides with a slow-moving, warm air mass, causing the warm air to be pushed up sharply. If the warm air contains a lot of moisture, large clouds form as water vapor in the rising air cools and condenses. Under these conditions, the temperature will drop and a rain or snow storm is likely.",
			'audio':'ib_7'
			},
	'block7':{
			'img':'audio_icon',
			'text':"A <b>warm front</b> forms when a fast-moving warm air mass collides with a slow-moving cold air mass. The warm air slides over the cold air, cooling as it rises. This motion is more gradual than the rise of warm air in a cold front. Clouds form if the warm air contains moisture. Light rain, sleet, or snow may fall. Warm fronts generally bring warmer temperatures to a region.",
			'audio':'ib_8'
			},
	'block8':{
			'img':'audio_icon',
			'text':"A <b>stationary front</b> forms when a warm air mass collides with a cold air mass moving at the same speed. The two air masses remain stationary, sometimes for long periods. Neither air mass is able to move the other. If the air masses contain moisture, clouds can form. Many days of light precipitation and periods of fog may follow.",
			'audio':'ib_9'
			},
	'block9':{
			'img':'audio_icon',
			'text':"On weather maps, the three kinds of fronts are depicted using symbols:<br/><img src='assets/images/activity/cold_front.png' alt='Cold front' width='130px'/> <img src='assets/images/activity/warm_front.png' alt='Warm front' width='130px' style='padding-left: 25px;'/> <img src='assets/images/activity/stationary_front.png' alt='Stationary front' width='130px' style='padding-left: 30px;'/> <br/><span style='padding-left: 30px;'/>Cold front<span style='padding-left: 85px'/>Warm front<span style='padding-left: 65px'/>Stationary front",
			'audio':'ib_10'
			}
	};
			
//information icon help text
var info_help = {
	'block0':{
			'img':'Info_icon',
			'imgText':'Welcome',
			'text':"This mode shows you how to use the lab.",
			'audio':'help_1'
			},	
	'block1':{
			'img':'Info_icon',
			'imgText':'Explore',
			'text':"This mode lets you explore the lab on your own.",
			'audio':'help_2'
			},	
	'block2':{
			'img':'Info_icon',
			'imgText':'Activity',
			'text':"This mode guides you through an activity with step-by-step instructions.",
			'audio':'help_3'
			},
	'block3':{
			'img':'Info_icon',
			'imgText':'info_icon.png',
			'text':"This button provides Background Information and Help.",
			'audio':'help_4'
			},
	'block4':{
			'img':'Info_icon',
			'imgText':'camera_icon.png',
			'text':"This button takes a picture of your screen and saves it on your device.",
			'audio':'help_5'
		}
	};
