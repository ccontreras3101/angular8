import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
   animations: [
   	//animations here
  ]
  
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	
  	$(document).ready(function(){
      $('.btn-signup_animate').click(function(){
      		$('.frame-singup').css('opacity', 1);

			 $('.slim-singin').animate({
			     left: "-=55%"
			   },2000);

			 $('.fat-singin').animate({
			     left: "+=50%"
			   }, 2000);

		   $('.frame-singin').animate({
			  	opacity: 0,
			},2000, function(){
				$(this).css('z-index', 0);
			});

		  	$('.frame-singup').animate({
		  		opacity: 1,
		  	},2000, function(){
		  		$(this).css('z-index', 100);
		  		$('.frame-singin').css('z-index', 0);
		  		$('.slim-singin').removeAttr('style');
		  		$('.fat-singin').removeAttr('style');
		  		$('.slim-singup').removeAttr('style');
		  		$('.fat-singup').removeAttr('style');	  		
		  	});
       });// end .btn-singin

      $('.btn-signin_animate').click(function(){

			$('.slim-singup').animate({
			     left: "+=55%",
			},2000);

			$('.fat-singup').animate({
			     left: "-=50%",
			}, 2000);

			$('.frame-singup').animate({
			   	opacity: 0,
			 },2000, function(){
			});
   
			$('.frame-singin').animate({
		  		opacity: 1,
		  	},2000, function(){
		  		$(this).css('z-index', 100);
		  		$('.frame-singup').css('z-index', 0);
		  		$('.slim-singin').removeAttr('style');
		  		$('.fat-singin').removeAttr('style');
		  		$('.slim-singup').removeAttr('style');
		  		$('.fat-singup').removeAttr('style');	  		
		  	});
       });// end .btn-singin

      // actions in responsive
			$('.btn-signin_animate--responsive').click(function(){
		  		$('.frame-singin').animate({
		  			opacity: 1
		  		},2000, function(){
				 	$(this).css('z-index', 1000);
				});
		  		$('.frame-singup').animate({
		  			opacity: 0
		  		},2000, function(){
				 	$(this).css('z-index', 0);
				});
		  		$('.fat-singin').animate({
		  			opacity: 1
		  		},2000, function(){
					$(this).css('z-index', 1000);
					$('.slim-singin').removeAttr('style');
					$('.slim-singup').removeAttr('style');
					$('.fat-singup').removeAttr('style');
					$('.frame-singin').removeAttr('style');
					$('.frame-singup').removeAttr('style');
				});

		  		$('.slim-singin').animate({
		  			opacity: 0
		  		},2000,function(){
		  			$(this).css('z-index', 0)
		  		});
		  		$('.slim-singup').animate({
		  			opacity: 0
		  		},2000,function(){
		  			$(this).css('z-index', 0)
		  		});
		  		$('.fat-singup').animate({
		  			opacity: 0
		  		},2000,function(){
		  			$(this).css('z-index', 0)
		  		});
			});

			$('.btn-signup_animate--responsive').click(function(){
		  		$('.frame-singin').animate({
		  			opacity: 0
		  		},2000, function(){
				 	$(this).css('z-index', 0);
				});
		  		$('.fat-singup').animate({
		  			opacity: 1
		  		},2000, function(){
				 	$(this).css('z-index', 1000);
				});
				$('.frame-singup').animate({
		  			opacity: 1
		  		},2000, function(){
				 	$(this).css('z-index', 1000);
				});
				$('.fat-singin').animate({
		  			opacity: 0
		  		},2000,function(){
		  			$(this).css('z-index', 0)
		  		});
		  		$('.slim-singin').animate({
		  			opacity: 0
		  		},2000,function(){
		  			$(this).css('z-index', 0)
		  		});
		  		$('.slim-singup').animate({
		  			opacity: 0
		  		},2000,function(){
		  			$(this).css('z-index', 0)
		  		});
			});
    
    });// end document.ready

  }

}
