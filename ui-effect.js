/*
 * Not eliminate, modify these lines. 
 * Eliminates one of the boxes language not belonging to your knowledge.
 *					-----------------------
 * Non eliminare, modificare queste linee. 
 * Elimina una delle caselle lingua non appartenenti alla vostra conoscenza.
 *
 * Material Ripple Effect
 * Copyright 2015-2016 | espoweb.com - Francesco Esposito
 * espoweb.com di francesco esposito saverio è distribuito con Licenza Creative Commons Attribuzione - Non commerciale - Non opere derivate 4.0 Internazionale.
 * Based on a work at http://espoweb.com//demo/uiMaterial/ui-effect.js .
 * Permessi ulteriori rispetto alle finalità della presente licenza possono essere disponibili presso http://espoweb.com/?a=licenze.
 * Licensed by creativecommons
 */

function detectIE() {	//detect used browser and block to IE and Edge
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // IE 12 (aka Edge) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

if(!detectIE()){	//block to IE and Edge

	$(document).ready(function() {
		$('.btn').mousedown(function(e){	//mousedown on .btn class
			var target = e.target;
					
			var rect = target.getBoundingClientRect();
			var ripple = target.querySelector('.ui-animation-ripple');

			if (!ripple) {

				ripple = document.createElement('span');
				ripple.className = 'ui-animation-ripple';
				ripple.style.height = ripple.style.width = Math.max(rect.width , rect.height ) + 'px';
				target.appendChild(ripple);
				
			}
				
			ripple.classList.remove('show');
			ripple.classList.remove($(this).data("rippleColor"));
			
			
			var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
			var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
			
			ripple.style.top = top + 'px';
			ripple.style.left = left + 'px';
			ripple.classList.add('show');
			
			ripple.classList.add($(this).data("rippleColor"));

			return false;
		});
	});
}