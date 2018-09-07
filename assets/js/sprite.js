var speedSprite=40;	
var speedSprite1=100;	
var getw1, geth1, getw2, geth2;	
var spriteaniinr_1 = 0, spriteaniinr_2 = 0, spriteaniinr_3=0;
var act_img= [
			  [[1600,2160,10,18],[1600,2160,10,18],[1600,2160,10,18],[1600,2160,10,18]],
			  [[1600,2160,10,18],[1600,2160,10,18],[1600,2160,10,18],[1600,2160,10,18]]
			  ];
			//width, height, column, row
var act_img_1= [[[5200,8400,10,20],[3400,7000,10,20]],[[3800,7400,10,20], [4300,8000,10,20]]];			
var timervar_1,timervar_2, timervar_3;
var startAnim_1 = function()
	{
		spriteaniinr_1++;	
		if(spriteaniinr_1 == act_img[citySelectd_ind][selectSprite_1][2]*act_img[citySelectd_ind][selectSprite_1][3])
			{		
				clearTimeout(timervar_1);
				clearTimeout(timervar_2);	
				
			}
		else
			{			
				$('.main_sprite_'+selectSprite_1).css('background-position-x',(spriteaniinr_1%act_img[citySelectd_ind][selectSprite_1][2])*getw1*-1);
				$('.main_sprite_'+selectSprite_1).css('background-position-y',Math.floor(spriteaniinr_1/act_img[citySelectd_ind][selectSprite_1][2])*geth1*-1);	
				timervar_1 = setTimeout(startAnim_1,speedSprite);					
			}
				
	}
var startAnim_2 = function()
	{
		spriteaniinr_2++;	
		if(spriteaniinr_2 == act_img[citySelectd_ind][selectSprite_2][2]*act_img[citySelectd_ind][selectSprite_2][3])
			{			
				clearTimeout(timervar_1);
				clearTimeout(timervar_2);		
			}
		else
			{			
				$('.main_sprite_'+selectSprite_2).css('background-position-x',(spriteaniinr_2%act_img[citySelectd_ind][selectSprite_2][2])*getw2*-1);
				$('.main_sprite_'+selectSprite_2).css('background-position-y',Math.floor(spriteaniinr_2/act_img[citySelectd_ind][selectSprite_2][2])*geth2*-1);	
				timervar_2 = setTimeout(startAnim_2,speedSprite);					
			}
				
	}
	