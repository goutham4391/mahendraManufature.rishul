jQuery(document).ready(function($){var scrolling=false;var contentSections=$('.cd-section'),verticalNavigation=$('.cd-vertical-nav'),navigationItems=verticalNavigation.find('a'),navTrigger=$('.cd-nav-trigger'),scrollArrow=$('.cd-scroll-down');$(window).on('scroll',checkScroll);verticalNavigation.on('click','a',function(event){event.preventDefault();smoothScroll($(this.hash));verticalNavigation.removeClass('open');});scrollArrow.on('click',function(event){event.preventDefault();smoothScroll($(this.hash));});navTrigger.on('click',function(event){event.preventDefault();verticalNavigation.toggleClass('open');});function checkScroll(){if(!scrolling){scrolling=true;(!window.requestAnimationFrame)?setTimeout(updateSections,300):window.requestAnimationFrame(updateSections);}}
function updateSections(){var halfWindowHeight=$(window).height()/2,scrollTop=$(window).scrollTop();contentSections.each(function(){var section=$(this),sectionId=section.attr('id'),navigationItem=navigationItems.filter('[href^="#'+sectionId+'"]');if((section.offset().top-halfWindowHeight<scrollTop)&&(section.offset().top+section.height()-halfWindowHeight>scrollTop))
{navigationItem.addClass('active');}else{navigationItem.removeClass('active');}});scrolling=false;}
function smoothScroll(target){$('body,html').animate({'scrollTop':target.offset().top},300);}});$(document).ready(function(){$('.section-indicators li').hover(function(){$(this).children().find(".dot-ind").fadeIn();},function(){$(this).children().find(".dot-ind").hide();});});