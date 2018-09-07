
	var welcomeMode = {
		'step_0':{
				'bgimg':'step_0',
				'text':'Welcome to Weather Detective! &#x2003;&#x2003;&#x2003;&#x2003;&#x2003;In this lab, you will practice your detective skills by analyzing clues in weather data.',
				'speechStyle':'bubbleDivNone',
				'position':[274,220],
				'anim':{},
				'AudioNamecon':['vlwdw_01']
				},
		'step_1':{
				'bgimg':'step_1',
				'text':'You will begin by selecting a city to investigate.',
				'speechStyle':'bubbleDivMulti',
				'position':[327,48],
				'anim':{},
				'AudioNamecon':['vlwdw_02']
				},
		'step_2':{
				'bgimg':'step_1',
				'text':'You will see several air masses over North America.',
				'speechStyle':'bubbleDivMultidouble3',
				'position':[274,285],
				'anim':{},
				'AudioNamecon':['vlwdw_03']
				},
		'step_3':{
				'bgimg':'step_2',
				'text':'You will also see the weather forecast for your selected city. Your task is to determine <i>which pair</i> of air masses would need to collide to make the forecast come true.',
				'speechStyle':'bubbleDivNone',
				'position':[271,220],
				'anim':{},
				'AudioNamecon':['vlwdw_04']
				},				
		'step_4':{
				'bgimg':'step_1',
				'text':'You can select any air mass on the map to find out more about its temperature, humidity, air pressure, and wind.',
				'speechStyle':'bubbleDivMultidouble1',
				'position':[274,270],
				'anim':{							
					'flow0':{'highlight':'yes','type':'cursor','from':[480,250],'to':[850,100],'toAnim':'animlabel1','bgChange':'step_4','defShow':'no'}
				},
				'AudioNamecon':['vlwdw_05']
				},		
		'step_5':{
				'bgimg':'step_4',
				'text':'After reviewing the data, predict which two air masses would need to collide to make the weather forecast come true. Select these two air masses using the Air Mass 1 and Air Mass 2 drop-downs.',
				'speechStyle':'bubbleDivMultidouble2',
				'position':[420,190],
				'anim':{
					'flow0':{'type':'cursor','from':[850,100],'to':[850,50],'toAnim':'animlabel1','bgChange':'step_1','highlight':'no','defShow':'yes'},
					'flow1':{'type':'fadeBubble'}
				},
				'AudioNamecon':['vlwdw_06']
				},		
		'step_6':{
				'bgimg':'step_1',
				'text':'Then, select Move Air Masses to test your prediction. Observe the movement of the air masses and find out how it affects the weather in your selected city.',
				'speechStyle':'bubbleDivNone',
				'position':[40,350],
				'anim':{
					'flow0':{'type':'cursor','from':[850,50],'to':[500,450],'toAnim':'animlabel1','bgChange':'step_3','highlight':'no','defShow':'yes'},
					'flow1':{'type':'fadeBubble','highlight':'no'}
				},
				'AudioNamecon':['vlwdw_07']
				},	
		'step_7':{
				'bgimg':'step_1',
				'text':'Now select Explore or Activity to begin the lab. Or go to Information to learn more about weather, air masses, and weather fronts.',
				'speechStyle':'bubbleDivNone',
				'position':[540,30],
				'anim':{},
				'AudioNamecon':['vlwdw_08']
				}
		/*'step_8':{
				'bgimg':'step_4',
				'text':"Select Trophic Levels to view the ecosystem's food pyramid.",
				'speechStyle':'bubbleDivNone',
				'position':[274,230],
				'anim':{}
				},			
		'step_9':{
				'bgimg':'step_5',
				'text':'Each trophic level is shown as a section of the pyramid. Complete the pyramid by dragging each organism to its correct trophic level.',
				'speechStyle':'bubbleDivTop',
				'position':[274,230],
				'anim':{
					'flow0':{'highlight':'yes','type':'kelp','from':[140,120],'to':[706,388],'toAnim':'','bgChange':'','defShow':'yes'}				
				}
				},
		'step_10':{
				'bgimg':'step_6',
				'text':'After the pyramid is complete, you can explore how changes to one trophic level affect other trophic levels. Each trophic level has a different amount of energy. Energy decreases as you move up the pyramid.',
				'speechStyle':'bubbleDivNone',
				'position':[10,110],
				'anim':{}
				},			
		'step_11':{
				'bgimg':'step_7',
				'text':'You can use the number lines to adjust the energy at any trophic level. After you change one number line, you will see what happens to the amount of energy at other trophic levels.',
				'speechStyle':'bubbleDivNone',
				'position':[10,110],
				'anim':{}
				},
		'step_12':{
				'bgimg':'step_6',
				'text':'When you have finished, select Reset so that you can try another change to energy values.',
				'speechStyle':'bubbleDivBottom',
				'position':[10,385],
				'anim':{}
				},
		'step_13':{
				'bgimg':'step_1',
				'text':'Select Explore to begin the lab, or select Activity to complete a guided exploration. At any time during the lab, you can select the Information icon to learn more about trophic levels. Good luck!',
				'speechStyle':'bubbleDivTopCustom',
				'position':[487,30],
				'anim':{}
				},*/		
		};
var weltextlen = Number(Object.keys(welcomeMode).length);
var animPlayArr = [0,2000,12000,17000,25000,38000,50000,70000];
var animPlayArrRev = [0,2500,12500,17500,25500,38500,50500,70000];

var welcomeMove = 0;
var speechBubblePos = 'bubbleDivNone';