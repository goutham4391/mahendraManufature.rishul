$(document).ready(function(){$("#SBUBot").click(function(){$(".chaticon3").addClass("micon");$("#bot").toggleClass("mopacity");$("#closeChat").removeClass("hidden");$("#PopupOverlay").removeClass("popup-overlay");$("#PopupOverlay").addClass("box-overlay");createCookie("SBUBotButtonClicked","1",30);});var cTime;if(!readCookie("SBUBotButtonClicked")){cTime=setTimeout(function(){$('#SBUBot').click();},5000);}
function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}else var expires="";document.cookie=name+"="+value;}
function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;}
function deleteCookie(name){createCookie(name,"",-1);}
$(document).on("click",function(){clearTimeout(cTime);$("html").removeAttr("style","overflow: hidden;");});});function chatBot(){$("#bot").removeClass("mopacity");$("#SBUBot").removeClass("micon");$("#closeChat").addClass("hidden");$("#PopupOverlay").removeClass("box-overlay");$("#PopupOverlay").addClass("popup-overlay");}
if(window.innerWidth>600){focus();var listener=window.addEventListener('blur',function(){if(document.activeElement===document.getElementById('bot')){$("html").attr("style","overflow: hidden;");}
window.removeEventListener('blur',listener);});}