$(window).load(function(){$('#myModal').modal('show');var grid=document.querySelector(".grid");new TinyMasonry(grid)});$(document).ready(function(){if($(".cd-vertical-nav ul.section-indicators").length>0){var $ulSection=$(".cd-vertical-nav ul.section-indicators");$(".cd-section").each(function(index){var sectionId=$(this).attr("id");var sectionTitle=$(this).data("indicator");var sectionClass="dot-ind dot-ind"+(index+1).toString();if(index===0){$ulSection.append('<li><a href="#'+sectionId+'" class="active"><span class="'+sectionClass+'">'+sectionTitle+'</span></a></li>')}else{$ulSection.append('<li><a href="#'+sectionId+'"><span class="'+sectionClass+'">'+sectionTitle+'</span></a></li>')}});}
if($("#tab").val()=="tabs-1"){$("#investor-rel").addClass("active").attr("href","javascript:void(0);");$("#secretarial-rel").removeClass("active");$("#tab").attr("value","tabs-1");$("#tabs-3").hide();$("#tabs-2").hide();$("#tabs-1").show();$("#tabs-4").hide();$("#tabs-5").hide();$("#tabs-2").addClass("item");}
if($("#tab").val()=="tabs-2"){$("#secretarial-rel").addClass("active").attr("href","javascript:void(0);");$("#investor-rel").removeClass("active");$("#tab").attr("value","tabs-2");$("#tabs-3").hide();$("#tabs-1").hide();$("#tabs-2").show();$("#tabs-4").hide();$("#tabs-5").hide();$("#tabs-1").addClass("item");}
if($("#tab").val()=="tabs-3"){$("#credit-ratings").addClass("active").attr("href","javascript:void(0);");$("#investor-rel").removeClass("active");$("#tab").attr("value","tabs-3");$("#tabs-1").hide();$("#tabs-2").hide();$("#tabs-3").show();$("#tabs-4").hide();$("#tabs-5").hide();}
if($("#tab").val()=="tabs-4"){$("#investor-governance").addClass("active").attr("href","javascript:void(0);");$("#investor-rel").removeClass("active");$("#tab").attr("value","tabs-4");$("#tabs-1").hide();$("#tabs-2").hide();$("#tabs-3").hide();$("#tabs-4").show();$("#tabs-5").hide();}
if($("#tab").val()=="tabs-5"){$("#investor-sustainability").addClass("active").attr("href","javascript:void(0);");$("#investor-rel").removeClass("active");$("#tab").attr("value","tabs-5");$("#tabs-1").hide();$("#tabs-2").hide();$("#tabs-3").hide();$("#tabs-4").hide();$("#tabs-5").show();}
$("ul li .page").on("click",function(){var year="";var tab="";if($("li .checkAll[type='year']").hasClass("selected")){year="all";}else{$("li .selected[type='year']").each(function(k){if(!$("li .selected[type='year']").eq(k).hasClass("checkAll")){if(year!=""){year+=",";}
year+=$("li .selected[type='year']").eq(k).find("button").val();}});}
tab=$("#tab").val();window.open($("#show-reports").attr('action')+"?year="+year+"&tab="+tab+"#show-reports","_self");});if($("#show-secretarial-reports").length){$("#show-secretarial-reports").on("click",function(){var year="";var category="";var tab="";if($("li .checkAll[type='sec-year']").hasClass("selected")){year="all";}else{$("li .selected[type='sec-year']").each(function(k){if(!$("li .selected[type='sec-year']").eq(k).hasClass("checkAll")){if(year!=""){year+=",";}
year+=$("li .selected[type='sec-year']").eq(k).find("button").val();}});}
if($("li .checkAll[type='sec-category']").hasClass("selected")){category="all";}else{$("li .selected[type='sec-category']").each(function(k){if(!$("li .selected[type='sec-category']").eq(k).hasClass("checkAll")){if(category!=""){category+=",";}
category+=$("li .selected[type='sec-category']").eq(k).find("button").val();}});}
tab=$("#tab").val();window.open($("#show-secretarial-reports").attr('action')+"?year="+year+"&category="+category+"&tab="+tab+"#show-secretarial-reports","_self");});}
if($("#secretarial-rel").length){$("#secretarial-rel").on("click",function(){$("#secretarial-rel").addClass("active").attr("href","javascript:void(0);");$("#investor-rel").removeClass("active");$("#credit-ratings").removeClass("active");$("#investor-governance").removeClass("active");$("#investor-sustainability").removeClass("active");$("#tab").attr("value","tabs-2");});}
if($("#investor-rel").length){$("#investor-rel").on("click",function(){$("#investor-rel").addClass("active").attr("href","javascript:void(0);");$("#secretarial-rel").removeClass("active");$("#credit-ratings").removeClass("active");$("#investor-governance").removeClass("active");$("#investor-sustainability").removeClass("active");$("#tab").attr("value","tabs-1");});}
if($("#credit-ratings").length){$("#credit-ratings").on("click",function(){$("#credit-ratings").addClass("active").attr("href","javascript:void(0);");$("#secretarial-rel").removeClass("active");$("#investor-rel").removeClass("active");$("#investor-governance").removeClass("active");$("#investor-sustainability").removeClass("active");$("#tab").attr("value","tabs-3");});}
if($("#investor-governance").length){$("#investor-governance").on("click",function(){$("#investor-governance").addClass("active").attr("href","javascript:void(0);");$("#secretarial-rel").removeClass("active");$("#investor-rel").removeClass("active");$("#credit-ratings").removeClass("active");$("#investor-sustainability").removeClass("active");$("#tab").attr("value","tabs-4");});}
if($("#investor-sustainability").length){$("#investor-sustainability").on("click",function(){$("#investor-sustainability").addClass("active").attr("href","javascript:void(0);");$("#secretarial-rel").removeClass("active");$("#investor-rel").removeClass("active");$("#credit-ratings").removeClass("active");$("#investor-governance").removeClass("active");$("#tab").attr("value","tabs-5");});}
$("#investor-rel").click(function(){$("#tabs-2").hide();$("#tabs-3").hide();$("#tabs-1").show();$("#tabs-4").hide();$("#tabs-5").hide();var year="";var category="";var tab="";if($("li .checkAll[type='year']").hasClass("checked")){year="all";}else{$("li .checked[type='year']").each(function(k){if(!$("li .checked[type='year']").eq(k).hasClass("checkAll")){if(year!=""){year+=",";}
year+=$("li .checked[type='year']").eq(k).find("button").val();}});}
if($("li .checkAll[type='category']").hasClass("checked")){category="all";}else{$("li .checked[type='category']").each(function(k){if(!$("li .checked[type='category']").eq(k).hasClass("checkAll")){if(category!=""){category+=",";}
category+=$("li .checked[type='category']").eq(k).find("button").val();}});}
tab=$("#tab").val();window.open($("#show-reports").attr('action')+"?year="+year+"&category="+category+"&tab="+tab+"#show-reports","_self");});$("#secretarial-rel").click(function(){$("#tabs-1").hide();$("#tabs-3").hide();$("#tabs-2").show();$("#tabs-4").hide();$("#tabs-5").hide();var year="";var category="";var tab="";if($("li .checkAll[type='sec-year']").hasClass("checked")){year="all";}else{$("li .checked[type='sec-year']").each(function(k){if(!$("li .checked[type='sec-year']").eq(k).hasClass("checkAll")){if(year!=""){year+=",";}
year+=$("li .checked[type='sec-year']").eq(k).find("button").val();}});}
if($("li .checkAll[type='sec-category']").hasClass("checked")){category="all";}else{$("li .checked[type='sec-category']").each(function(k){if(!$("li .checked[type='sec-category']").eq(k).hasClass("checkAll")){if(category!=""){category+=",";}
category+=$("li .checked[type='sec-category']").eq(k).find("button").val();}});}
tab=$("#tab").val();window.open($("#show-secretarial-reports").attr('action')+"?year="+year+"&category="+category+"&tab="+tab+"#show-secretarial-reports","_self");});$("#credit-ratings").click(function(){$("#tabs-1").hide();$("#tabs-2").hide();$("#tabs-3").show();$("#tabs-4").hide();$("#tabs-5").hide();tab=$("#tab").val();window.open($("#credit-ratings").attr('action')+"?tab="+tab+"#credit-ratings","_self");});$("#investor-governance").click(function(){$("#tabs-1").hide();$("#tabs-2").hide();$("#tabs-3").hide();$("#tabs-4").show();$("#tabs-5").hide();tab=$("#tab").val();window.open($("#investor-governance").attr('action')+"?tab="+tab+"#investor-governance","_self");});$("#investor-sustainability").click(function(){$("#tabs-1").hide();$("#tabs-2").hide();$("#tabs-3").hide();$("#tabs-4").hide();$("#tabs-5").show();tab=$("#tab").val();window.open($("#investor-sustainability").attr('action')+"?tab="+tab+"#investor-sustainability","_self");});$("#esg").click(function(){window.open($("#esg").attr('action'),"_blank");});var array=new Array();var k=1;$("a[name]").each(function(){array.push($(this).prop('name'));})
for(i=0;i<array.length;i++){$("div[category='"+array[i]+"']").each(function(){if(k>4)
{$(this).addClass("pdf-grid sm-pdf-grid").attr("style","display:none;");}
k++;})
k=1;}
for(i=0;i<array.length;i++){$("div[category1='"+array[i]+"']").each(function(){if(k>1)
{$(this).addClass("panel-collapse collapse");}
k++;})
k=1;}
$("#leftCarousel").click(function(){$("#tabs-3").addClass("item");$("#tabs-4").addClass("item");$("#tabs-1").removeAttr("style");$("#tabs-2").removeAttr("style");$("#tabs-3").removeAttr("style");$("#tabs-4").removeAttr("style");});$("#rightCarousel").click(function(){$("#tabs-1").removeAttr("style");$("#tabs-2").removeAttr("style");$("#tabs-3").removeAttr("style");$("#tabs-4").removeAttr("style");$("#tabs-3").addClass("item");$("#tabs-4").addClass("item");});});