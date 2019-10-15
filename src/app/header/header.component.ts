import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	
    $(document).ready(function(){
  		//user menu animation
  		var n = 0;
  		$('.users-menu').click(function(){
  			n++;
  			if(n % 2){
  				$('.nav-user').css({'display': 'block',
  									'transition' : 'display 2s',
  								});
  			}else{
  				$('.nav-user').css({'display': 'none',
  									'transition' : 'display 2s',
  								});
  			}
  		});

      var m = 0;
      $('.fa-bars').click(function(){
        m++;
        if(m % 2){
          $('.nav').css({
                        'display': 'none',
                        'transition' : 'display 2s',
                      });
        }else{
          $('.nav').css({
                        'display': 'block',
                        'transition' : 'display 2s',
                      });
        }
      });

  	});// end document.ready

  }

}
