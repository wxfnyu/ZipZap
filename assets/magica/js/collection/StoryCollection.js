define("underscore backbone backboneCommon ajaxControl command QuestUtil text!template/collection/StoryCollection.html text!css/collection/StoryCollection.css text!template/quest/OutlinePopup.html".split(" "),function(g,n,a,p,c,w,x,y,z){var l,r,h,D=n.View.extend({initialize:function(a){this.template=g.template(x);this.createDom()},events:function(){var b={};b[a.cgti+" #tabBtn .btn"]=this.tabScreen;b[a.cgti+" .chapterTitleWrap"]=this.openColumn;b[a.cgti+" .prologueStart"]=this.prologueStart;b[a.cgti+
" .ep1ending"]=this.ep1EndingMovie;return b},render:function(){this.$el.html(this.template(p.getPageJson()));return this},createDom:function(){a.setGlobalView();h="main";this.storyMainSub=A();a.content.append(this.render().el);t.prototype.parentView=this;t.prototype.template=g.template($("#ChapterTemp").text());u.prototype.template=g.template($("#SectionTemp").text());this.createView()},createView:function(){q("main",this.storyMainSub.mainStoryModels);q("sub",this.storyMainSub.subStoryModels);q("chara",
B());q("arena",C());m.prototype.parentView=this;m.prototype.templateCommon=g.template($("#EventStoryTempCommon").text());m.prototype.templateBranch=g.template($("#EventStoryTempBranch").text());m.prototype.templateSpecial=g.template($("#SpecialStoryTemp").text());var b=p.getPageJson();if(b.eventStoryList&&0<b.eventStoryList.length){a.removeClass(a.doc.getElementById("tabBtn").getElementsByClassName("event")[0],"none");var d=g.sortBy(b.eventStoryList,function(a){return-1*a.eventId});g.each(d,function(b,
d){!b.eventId||1>b.storyList.length||(a.doc.createDocumentFragment(),b=new m({model:b}),a.doc.getElementById("eventHiddenWrap").getElementsByClassName("scrollInner")[0].appendChild(b.render().el))});a.scrollSet("eventHiddenWrap","scrollInner")}b.campaignStoryList&&0<b.campaignStoryList.length&&(a.removeClass(a.doc.getElementById("tabBtn").getElementsByClassName("special")[0],"none"),b=g.sortBy(b.campaignStoryList,function(a){return-1*a.campaignId}),g.each(b,function(b,d){!b.campaignId||1>b.storyList.length||
(a.doc.createDocumentFragment(),b=new m({model:b}),a.doc.getElementById("specialHiddenWrap").getElementsByClassName("scrollInner")[0].appendChild(b.render().el))}),a.scrollSet("specialHiddenWrap","scrollInner"));(b=a.storage.userSectionList.findWhere({sectionId:102005}))&&b.toJSON().cleared&&a.removeClass(a.doc.getElementById("tabBtn").getElementsByClassName("ep1ending")[0],"none");c.getBaseData(a.getNativeObj());a.scrollSet("mainHiddenWrap","scrollInner");a.scrollSet("subHiddenWrap","scrollInner");
a.scrollSet("charaHiddenWrap","scrollInner");a.scrollSet("arenaHiddenWrap","scrollInner");a.scrollSet("storyTabScroll","common_tab");a.ready.hide()},tabScreen:function(b){b.preventDefault();if(!a.isScrolled()&&b.currentTarget.dataset.wrap&&b.currentTarget.dataset.wrap!==h){a.doc.getElementById("listTitle").innerText=b.currentTarget.innerText;a.removeClass(a.doc.getElementById("listWrap"),h);var d=a.doc.getElementById("tabBtn").getElementsByClassName("current")[0];a.removeClass(d,"current");a.addClass(a.doc.getElementById("listWrap"),
b.currentTarget.dataset.wrap);a.addClass(b.currentTarget,"current");h=b.currentTarget.dataset.wrap;a.scrollRefresh("mainHiddenWrap","scrollInner",!0);a.scrollRefresh("subHiddenWrap","scrollInner",!0);a.scrollRefresh("charaHiddenWrap","scrollInner",!0);a.scrollRefresh("arenaHiddenWrap","scrollInner",!0);"event"===h&&a.scrollRefresh("eventHiddenWrap","scrollInner",!0);"special"===h&&a.scrollRefresh("specialHiddenWrap","scrollInner",!0)}},openColumn:function(b){b.preventDefault();if(!a.isScrolled()){var d=
a.doc.getElementById(h).getElementsByClassName("chapterId"+b.currentTarget.dataset.chapter)[0];d.classList.toggle("on");a.doc.getElementById(h).getElementsByClassName("chapterIdPan"+b.currentTarget.dataset.chapter)[0].classList.toggle("on");d.classList.contains("on")&&(a.doc.getElementById(h).scrollTop=b.currentTarget.parentNode.offsetTop-20);a.scrollRefresh()}},prologueStart:function(b){b.preventDefault();if(!a.isScrolled()){var d="000001-1 000002-1 000003-1 000003-2 000003-3 000003-4 000003-5".split(" ");
window.isBrowser||(0===d.length?new a.PopupClass({title:"Confirm Story",content:"No Story Available",closeBtnText:"OK"}):(a.androidKeyStop=!0,$("#commandDiv").on("nativeCallback",function(){d[0]?(-1!=d[0].indexOf("_QS")?c.startStory(d[0].split("_QS")[0]):c.startStory(d[0]),d.splice(0,1)):setTimeout(function(){c.changeBg(a.background);c.startBgm(a.bgm);c.setWebView(!0);a.ready.target.className="nativeFadeOut";$("#commandDiv").off();a.androidKeyStop=!1},300)}),$(a.ready.target).on("webkitAnimationEnd",
function(){$(a.ready.target).off();$(a.ready.target).on("webkitAnimationEnd",function(b){"readyFadeOut"==b.originalEvent.animationName&&(a.ready.target.className="")});c.changeBg("web_black.jpg");setTimeout(function(){c.setWebView(!1);d&&d[0]&&-1!=d[0].indexOf("_QS")?c.startStory(d[0].split("_QS")[0]):c.startStory(d[0]);d.splice(0,1)},300)}),a.addClass(a.ready.target,"preNativeFadeIn")))}},ep1EndingMovie:function(b){b.preventDefault();a.isScrolled()||($(a.ready.target).on("webkitAnimationEnd",function(){$(a.ready.target).off();
$(a.ready.target).on("webkitAnimationEnd",function(b){"readyFadeOut"==b.originalEvent.animationName&&(a.ready.target.className="")});c.changeBg("web_black.jpg");a.androidKeyStop=!0;setTimeout(function(){c.setWebView(!1);a.ready.show();c.stopBgm();$("#commandDiv").on("nativeCallback",function(b,k){$("#commandDiv").off();a.ready.target.className="";c.changeBg("web_0015.ExportJson");c.startBgm("bgm02_anime11");a.androidKeyStop=!1;c.setWebView();a.ready.hide()});c.playMovie("resource/movie/other/102005_epilogue.usm")},
500)}),a.addClass(a.ready.target,"preNativeFadeIn"))}}),t=n.View.extend({className:"wrap",initialize:function(){this.frgmntNode=a.doc.createDocumentFragment();var b=this;g.each(this.model.sectionList,function(a,k){a.parentModel=b.model;a=new u({model:a});b.frgmntNode.appendChild(a.render().el)})},render:function(){this.$el.html(this.template({model:this.model}));this.el.getElementsByClassName("sectionListWrap")[0].appendChild(this.frgmntNode);return this}}),v,u=n.View.extend({className:function(){var a=
"sectionWrap commonFrame3 ";if("CHARA"==this.model.parentModel.questType||"ARENA"==this.model.parentModel.questType)this.model.canPlay||(a+="LOCKED");this.model.cleared&&-1==a.indexOf("LOCKED")?a+="CLEARED":-1==a.indexOf("LOCKED")&&(a+="NON_CLEAR");return a},initialize:function(){this.model.parentModel.chapterNoForView&&(this.model.chapterNoForView=this.model.parentModel.chapterNoForView)},events:function(){var b={};b[a.cgti+" .nextQuest"]=this.nextQuest;b[a.cgti+" .outline"]=this.outline;b[a.cgti+
" .storyStart"]=this.storyStart;b[a.cgti+" .lockQuest"]=this.lockQuest;return b},render:function(){this.$el.html(this.template({model:this.model}));return this},nextQuest:function(b){b.preventDefault();a.isScrolled()||(location.href="#/QuestBattleSelect/"+this.model.sectionId)},outline:function(b){b.preventDefault();a.isScrolled()||(b={},b.title="Story up to Chapter "+this.model.chapterNoForView+" Episode "+this.model.sectionNo,b.outline=this.model.outline.replace(/＠/g,"\x3cbr\x3e"),b.defaultCardId=
this.model.outlineCardId,new a.PopupClass(b,z),c.getBaseData(a.getNativeObj()))},storyStart:function(b){b.preventDefault();if(!a.isScrolled()){var d=this.model.storyArr.concat();if(!window.isBrowser)if(0===d.length)new a.PopupClass({title:"Confirm Story",content:"No Story Available",closeBtnText:"OK"});else{a.androidKeyStop=!0;var k=function(){$("#commandDiv").on("nativeCallback",function(){d[0]?(-1!=d[0].indexOf("_QS")?c.startStory(d[0].split("_QS")[0]):c.startStory(d[0]),d.splice(0,1)):setTimeout(function(){c.changeBg(a.background);
c.startBgm(a.bgm);c.setWebView(!0);a.ready.target.className="nativeFadeOut";$("#commandDiv").off();a.androidKeyStop=!1},300)})};if("main"===h){var e="section_"+this.model.sectionId;$(a.ready.target).on("webkitAnimationEnd",function(){$(a.ready.target).off();$(a.ready.target).on("webkitAnimationEnd",function(b){"readyFadeOut"==b.originalEvent.animationName&&(a.ready.target.className="")});c.changeBg("web_black.jpg");setTimeout(function(){c.setWebView(!1);$("#commandDiv").on("nativeCallback",function(){$("#commandDiv").off();
k();d&&d[0]&&-1!=d[0].indexOf("_QS")?c.startStory(d[0].split("_QS")[0]):c.startStory(d[0]);d.splice(0,1)});c.downloadFileFullVoice(e)},300)})}else k(),$(a.ready.target).on("webkitAnimationEnd",function(){$(a.ready.target).off();$(a.ready.target).on("webkitAnimationEnd",function(b){"readyFadeOut"==b.originalEvent.animationName&&(a.ready.target.className="")});c.changeBg("web_black.jpg");setTimeout(function(){c.setWebView(!1);d&&d[0]&&-1!=d[0].indexOf("_QS")?c.startStory(d[0].split("_QS")[0]):c.startStory(d[0]);
d.splice(0,1)},300)});a.addClass(a.ready.target,"preNativeFadeIn")}}},lockQuest:function(b){b.preventDefault();a.isScrolled()||(v=$("#OpenConditionPopupTemp").text(),b={exClass:"openConditionPopup",popupType:"original",conditionList:w.openConditionJson(this.model,this.model.parentModel.title)},new a.PopupClass(b,v))}}),q=function(b,d){var k;"main"==b?k=a.doc.getElementById("main").getElementsByClassName("scrollInner")[0]:"sub"==b?k=a.doc.getElementById("sub").getElementsByClassName("scrollInner")[0]:
"chara"==b?k=a.doc.getElementById("chara").getElementsByClassName("scrollInner")[0]:"arena"==b&&(k=a.doc.getElementById("arena").getElementsByClassName("scrollInner")[0]);var c=a.doc.createDocumentFragment();d.length?g.each(d,function(a,b){a=new t({model:a});c.appendChild(a.render().el)}):(b=a.doc.createElement("p"),b.className="storyCautionText ts_white",b.innerText="No Available Stories",c.appendChild(b));k.appendChild(c)},C=function(){var b=a.storage.userArenaBattle.toJSON(),d=[];g.each(l.arenaBattleFreeRankClassList,
function(c){var e=Number(b.currentFreeRankClassType.split("_")[2]),E=Number(c.arenaBattleFreeRankClass.split("_")[2]);e>=E&&(c.chapterId=c.arenaBattleFreeRankClass,c.title=c.className,c.questType="ARENA",c.sectionList=[],e={},e.sectionId=c.openConditionSectionId,e.sectionNo=c.className,e.title=c.className,a.storage.userQuestAdventureList.findWhere({adventureId:c.storyId})&&(e.canPlay=!0,e.cleared=!0,e.storyArr=[c.storyId],c.sectionList.push(e),d.push(c)))});d.sort(function(a,b){return a.sortKey>b.sortKey?
-1:a.sortKey<b.sortKey?1:0});return d},B=function(){var b=[];a.storage.userCharaList.each(function(d){var c={},e=d.toJSON();c.chapterId=e.charaId;c.title=e.chara.title?e.chara.name+" ("+e.chara.title+")":e.chara.name;c.cardId=e.chara.defaultCardId;c.questType="CHARA";c.sectionList=[];a.storage.userCardList.findWhere({id:e.userCardId})?c.displayCardId=a.storage.userCardList.findWhere({id:e.userCardId}).toJSON().displayCardId:c.displayCardId=c.cardId;g.each(l.userSectionList,function(b,e){if("CHARA"==
b.section.questType&&d.toJSON().charaId==b.section.genericId||"COSTUME"==b.section.questType&&d.toJSON().charaId==b.section.charaId){var f={};f.canPlay=b.canPlay;f.cleared=b.cleared;f.sectionId=b.sectionId;f.title=b.section.title;"CHARA"==b.section.questType?(d.toJSON().chara.title&&(f.title+=" ("+d.toJSON().chara.title+")"),f.sectionNo="Ep"+b.section.genericIndex):"COSTUME"==b.section.questType&&(e=(b.section.genericId+"").slice(-2),e=a.storage.userLive2dList.findWhere({charaId:d.toJSON().charaId,
live2dId:e}),d.toJSON().chara.title&&(f.title+=" ("+d.toJSON().chara.title+")"),f.sectionNo=e.toJSON().live2d.description);f.openConditionMagiaLevel=b.section.openConditionMagiaLevel||null;f.openConditionCharaBondsPt=b.section.openConditionCharaBondsPt||null;f.openConditionSection=b.section.openConditionSection||null;f.openConditionChapter=b.section.openConditionChapter||null;f.questList=[];f.storyArr=[];g.each(l.userQuestBattleList,function(a){b.section.sectionId===a.questBattle.sectionId&&f.questList.push(a)});
f.questList.sort(function(a,b){return a.questBattleId<b.questBattleId?-1:a.questBattleId>b.questBattleId?1:0});g.each(f.questList,function(a){a.questBattle.startStory&&f.storyArr.push(a.questBattle.startStory);a.questBattle.questStory&&f.storyArr.push(a.questBattle.questStory+"_QS");a.questBattle.endStory&&f.storyArr.push(a.questBattle.endStory)});c.sectionList.push(f)}});c.sectionList.sort(function(a,b){return a.sectionId<b.sectionId?-1:a.sectionId>b.sectionId?1:0});b.push(c)});b.sort(function(a,
b){return a.chapterId<b.chapterId?-1:a.chapterId>b.chapterId?1:0});return b},A=function(){var a={},d=[],c=[];g.each(l.userChapterList,function(a){if("MAIN"==a.chapter.questType||"SUB"==a.chapter.questType){var b={};b.chapterId=a.chapterId;b.title=a.chapter.title;b.questType=a.chapter.questType;b.chapterNoForView=a.chapter.chapterNoForView;b.sectionList=[];g.each(l.userSectionList,function(c,d){var e={};a.chapterId===c.section.genericId&&(e.canPlay=c.canPlay,e.cleared=c.cleared,e.sectionId=c.sectionId,
e.title=c.section.title,e.outline=c.section.outline,e.sectionNo=c.section.genericIndex,e.outlineCardId=c.section.defaultCardId,e.questList=[],e.storyArr=[],g.each(l.userQuestBattleList,function(a){c.section.sectionId!==a.questBattle.sectionId||a.questBattle.questBattleType&&"HARD"==a.questBattle.questBattleType||e.questList.push(a)}),e.questList.sort(function(a,b){return a.questBattleId<b.questBattleId?-1:a.questBattleId>b.questBattleId?1:0}),g.each(e.questList,function(a){var b=c.section.secret?
"_"+c.section.secret:"";a.questBattle.startStory&&e.storyArr.push(a.questBattle.startStory+b);a.questBattle.questStory&&e.storyArr.push(a.questBattle.questStory+b+"_QS");a.questBattle.endStory&&e.storyArr.push(a.questBattle.endStory+b)}),b.sectionList.push(e))});b.sectionList.sort(function(a,b){return a.sectionId<b.sectionId?-1:a.sectionId>b.sectionId?1:0});switch(b.questType){case "MAIN":d.push(b);break;case "SUB":c.push(b)}}});d.sort(function(a,b){return a.chapterId<b.chapterId?-1:a.chapterId>b.chapterId?
1:0});c.sort(function(a,b){return a.chapterId<b.chapterId?-1:a.chapterId>b.chapterId?1:0});a.mainStoryModels=d;a.subStoryModels=c;return a},m=n.View.extend({className:function(){var a="wrap";"BRANCH"===this.model.eventType&&(a+=" BRANCH");return a},events:function(){var b={};b[a.cgti+" .eventStoryStart"]=this.startStory;return b},initialize:function(){},render:function(){this.$el.html((this.model.campaignId?this.templateSpecial:"BRANCH"===this.model.eventType?this.templateBranch:this.templateCommon)({model:this.model}));
return this},startStory:function(b){b.preventDefault();if(!a.isScrolled()){var d=[];b=b.currentTarget.dataset.ids.split(",");for(var g in b)d.push(b[g]);if(!window.isBrowser)if(0===d.length)new a.PopupClass({title:"Confirm Story",content:"No Story Available",closeBtnText:"OK"});else{a.androidKeyStop=!0;var e=function(){$("#commandDiv").on("nativeCallback",function(){d[0]?(-1!=d[0].indexOf("_QS")?c.startStory(d[0].split("_QS")[0]):c.startStory(d[0]),d.splice(0,1)):setTimeout(function(){c.changeBg(a.background);
c.startBgm(a.bgm);c.setWebView(!0);a.ready.target.className="nativeFadeOut";$("#commandDiv").off();a.androidKeyStop=!1},300)})};if(this.model.existsVoice){var h="section_event_"+this.model.eventId;$(a.ready.target).on("webkitAnimationEnd",function(){$(a.ready.target).off();$(a.ready.target).on("webkitAnimationEnd",function(b){"readyFadeOut"==b.originalEvent.animationName&&(a.ready.target.className="")});c.changeBg("web_black.jpg");setTimeout(function(){c.setWebView(!1);$("#commandDiv").on("nativeCallback",
function(){$("#commandDiv").off();e();d&&d[0]&&-1!=d[0].indexOf("_QS")?c.startStory(d[0].split("_QS")[0]):c.startStory(d[0]);d.splice(0,1)});c.downloadFileFullVoice(h)},300)})}else e(),$(a.ready.target).on("webkitAnimationEnd",function(){$(a.ready.target).off();$(a.ready.target).on("webkitAnimationEnd",function(b){"readyFadeOut"==b.originalEvent.animationName&&(a.ready.target.className="")});c.changeBg("web_black.jpg");setTimeout(function(){c.setWebView(!1);d&&d[0]&&-1!=d[0].indexOf("_QS")?c.startStory(d[0].split("_QS")[0]):
c.startStory(d[0]);d.splice(0,1)},300)});a.addClass(a.ready.target,"preNativeFadeIn")}}}});return{needModelIdObj:[{id:"user"},{id:"gameUser"},{id:"userStatusList"},{id:"itemList"},{id:"userItemList"},{id:"userChapterList"},{id:"userSectionList"},{id:"userQuestBattleList"},{id:"userCharaList"},{id:"userLive2dList"},{id:"userCardList"},{id:"userDeckList"},{id:"userArenaBattle"},{id:"userQuestAdventureList"}],fetch:function(){p.pageModelGet(this.needModelIdObj)},init:function(){a.setStyle(y);l=p.getPageJson();
r=new D},startCommand:function(){c.changeBg("web_0015.ExportJson");c.startBgm("bgm02_anime11")},remove:function(a){r&&r.remove();a()}}});