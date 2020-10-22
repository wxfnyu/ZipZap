define(["underscore","backbone","backboneCommon","ajaxControl","command"],function(h,l,d,y,G){function z(a){var c=[],b=a.questBattle;!a.cleared&&b.firstClearRewardCodes&&(a=b.firstClearRewardCodes.split(","),h.each(a,function(a,b){c.push({firstClearRewardCode:a})}));b.addDropItemId&&c.push({addDropItemId:b.addDropItemId});b.defaultDropItem&&c.push(b.defaultDropItem);for(a=0;5>a;)b["dropItem"+(a+1)]&&c.push(b["dropItem"+(a+1)]),a=a+1|0;return c}function A(a){var c=null,b=[],g=[],e={},f=[];h.each(a,
function(a,e){if(a.firstClearRewardCode)f.push(a.firstClearRewardCode);else if(a.addDropItemId)c=a.addDropItemId;else for(e=0;10>e;)a["rewardCode"+(e+1)]&&b.push(a["rewardCode"+(e+1)]),e=e+1|0});0<f.length&&(e.firstClearReward=[],e.firstClearRewardName=[],e.firstClearRewardQuantity=[],h.each(f,function(a){a=d.itemSet(a).itemCode.toLowerCase();e.firstClearReward.push(a);var b,c;-1!==a.indexOf("gift")?(b=d.storage.giftList.findWhere({id:Number(a.split("item_gift_")[1])}),c=d.storage.userGiftList.findWhere({giftId:Number(a.split("item_gift_")[1])})):
(b=d.storage.itemList.findWhere({itemCode:a.toUpperCase()}),c=d.storage.userItemList.findWhere({itemId:a.toUpperCase()}));if(b)e.firstClearRewardName.push(b.toJSON().name),c?e.firstClearRewardQuantity.push(c.toJSON().quantity):e.firstClearRewardQuantity.push("0");else switch(a){case "riche":e.firstClearRewardName.push("Curse Chips"),e.firstClearRewardQuantity.push(d.storage.gameUser.toJSON().riche)}}));if(c){e.addDropItem=c.toLowerCase();a=e.addDropItem;var t=null,u=null,t=d.storage.itemList.findWhere({itemCode:a.toUpperCase()}),
u=d.storage.userItemList.findWhere({itemId:a.toUpperCase()});t&&(e.addDropItemName=t.toJSON().name,e.addDropItemQuantity=u?u.toJSON().quantity:"0")}h.each(b,function(a,b){if(a=d.itemSet(a))a=a.itemCode.toLowerCase(),g.push(a)});var g=g.filter(function(a,b,e){return e.indexOf(a)===b}),m=[],r=[];h.each(g,function(a){var b,e;"riche"==a?(e="Curse Chips",b=d.storage.gameUser.toJSON().riche):(-1!==a.indexOf("gift")?(b=d.storage.giftList.findWhere({id:Number(a.split("item_gift_")[1])}),a=d.storage.userGiftList.findWhere({giftId:Number(a.split("item_gift_")[1])})):
(b=d.storage.itemList.findWhere({itemCode:a.toUpperCase()}),a=d.storage.userItemList.findWhere({itemId:a.toUpperCase()})),b&&(e=b.toJSON().name),b=a?a.toJSON().quantity:"0");m.push(e);r.push(b)});e.list=g;e.nameList=m;e.quantityList=r;return e}l={};var v=!1;l.createChapterModel=function(a){var c=d.storage.userChapterList.findWhere({chapterId:a}).toJSON();a=h.filter(d.storage.userSectionList.toJSON(),function(a){return a.section.genericId==c.chapterId});var b=h.filter(d.storage.userQuestBattleList.toJSON(),
function(a){return 1E5<=a.questBattle.sectionId&&2E5>a.questBattle.sectionId});c.sectionList=[];h.each(a,function(a,e){a.section.questBattleList=[];h.each(b,function(b){if(a.sectionId===b.questBattle.sectionId&&d.mainQuestMode==b.questBattle.questBattleType){var e="CLEARED"===b.missionStatus2?"cleared":null,c="CLEARED"===b.missionStatus3?"cleared":null,f=b.cleared?"clear":"new";b.questState="CLEARED"===b.missionStatus1&&e&&c?"comp":f;a.section.questBattleList.push(b)}});a.section.questBattleList.length&&
(a.section.questBattleList.sort(function(a,b){return a.questBattle.sectionIndex-b.questBattle.sectionIndex}),c.sectionList.push(a))});c.sectionList.sort(function(a,b){return a.sectionId>b.sectionId?-1:a.sectionId<b.sectionId?1:0});return c};l.openCampaignCheck=function(a){h.each(a,function(a,b){})};l.openEventCheck=function(a,c){var b={event:{},eventOpenFlag:!1};h.each(c,function(c,e){a==c.eventId&&(b.event=c,b.eventOpenFlag=!0,b.event.endAtText=d.getTimeText(b.event.endAt))});return b};var k;l.canPlayQuestNum=
function(){k={MAIN:0,SUB:0,CHARA:0,EVENT:0};var a=d.storage.userSectionList.toJSON().concat(),c=d.storage.userQuestBattleList.toJSON();h.each(a,function(a,d){if("MAIN"==a.section.questType){if(a.canPlay){var b=!1;h.each(c,function(c,e){a.sectionId==c.questBattle.sectionId&&(c.cleared||(b=!0))});b&&(k.MAIN+=1)}}else a.canPlay&&!a.cleared&&(d=a.section.questType,"COMPOSE"==d||"MATERIAL"==d?d="EVENT":"COSTUME"==d?d="CHARA":d in k||(k[d]=0),a.canPlay&&(b=!1,h.each(c,function(c,e){a.sectionId==c.questBattle.sectionId&&
(c.cleared||(b=!0))}),b&&(k[d]+=1)))});0<k.MAIN&&d.addClass(d.doc.querySelector("#questLinkBtnWrap .main"),"batch");0<k.SUB&&d.addClass(d.doc.querySelector("#questLinkBtnWrap .side"),"batch");0<k.CHARA&&(d.addClass(d.doc.querySelector("#questLinkBtnWrap .chara"),"batch"),d.doc.querySelector("#questLinkBtnWrap .chara span").textContent=k.CHARA);0<k.EVENT&&(d.addClass(d.doc.querySelector("#questLinkBtnWrap .event"),"batch"),d.doc.querySelector("#questLinkBtnWrap .event span").textContent=k.EVENT)};
var B="TOWER DAILYTOWER BRANCH ARENAMISSION SINGLERAID STORYRAID TRAINING ACCOMPLISH DUNGEON RAID".split(" "),C={TOWER:"#/EventTowerTop",DAILYTOWER:"#/EventDailyTowerTop",BRANCH:"#/EventBranchTop",ARENAMISSION:"#/EventArenaMissionTop",SINGLERAID:"#/EventSingleRaidTop",STORYRAID:"#/EventStoryRaidTop",TRAINING:"#/EventTrainingTop",ACCOMPLISH:"#/EventAccomplishTop",DUNGEON:"#/EventDungeonTop",RAID:"#/EventRaidTop"},D={TOWER:"tower",DAILYTOWER:"dailytower",BRANCH:"branch",ARENAMISSION:"arenaMission",
SINGLERAID:"singleraid",STORYRAID:"storyraid",TRAINING:"training",ACCOMPLISH:"accomplish",DUNGEON:"dungeon",RAID:"raid"};l.eventTabSwitch=function(a,c){if(a&&!d.tutorialId){var b="se_decide linkBtn";c&&(b=c);var g=null;h.each(a,function(a,b){-1<B.indexOf(a.eventType)&&(g=a)});g&&(a=d.doc.querySelector("#questLinkBtnWrap .btns"),d.addClass(a,"type_s"),g.eventType.toLowerCase(),c=document.createElement("li"),c.innerHTML="\x3cspan\x3e\x3c/span\x3e\x3cdiv class\x3d'bg'\x3e\x3c/div\x3e",c.className="limitedEvent "+
b,c.dataset.href=C[g.eventType],c.querySelector(".bg").style.background='url("/magica/resource/image_web/event/'+D[g.eventType]+"/"+g.eventId+'/tab_limited_quest_s.png")',0<k[g.eventType]&&"BRANCH"!==g.eventType&&"ACCOMPLISH"!==g.eventType&&(d.addClass(c,"batch"),c.querySelector("span").textContent=k[g.eventType]),a.appendChild(c))}};l.charaConditionText=function(a){var c;a.onlyCharaIds&&(c="ONLY");a.containCharaIds&&(c="CONTAIN");var b=a.charaIdNameMap;a=(a.onlyCharaIds||a.containCharaIds).split(",");
var d="This Quest requires the following to begin:\x3cbr\x3e",e="";h.each(a,function(a,c){0!==c&&(e+=",");e+="\x3cspan class\x3d'c_pink'\x3e"+b[a]+"\x3c/span\x3e"});"ONLY"==c?d+=" A Team consisting only of ":"CONTAIN"==c&&(d+=" A Team including ");return d+e};l.charaConditionCheck=function(a,c){if(!d.storage.userCardListEx)return!1;var b;a.onlyCharaIds&&(b="ONLY");a.containCharaIds&&(b="CONTAIN");var g=(a.onlyCharaIds||a.containCharaIds).split(","),e=[],f={};h.each(g,function(a,b){f[a]=!1;h.each(c,
function(b,c){b=d.storage.userCardListEx.findWhere({userCardId:b}).toJSON();a==b.charaId&&(f[a]=!0);e.push(b.charaId)})});var k=!0;h.each(f,function(a,b){a||(k=!1)});"ONLY"==b&&h.each(e,function(a,b){var c=!1;h.each(g,function(b,d){a==b&&(c=!0)});c||(k=!1)});return k};l.dropItemJson=function(a){a=z(a);return A(a)};l.clearRewardChestColor=function(a){function c(a){switch("string"==typeof a&&-1!==a.indexOf("RANK_")?a.split("_")[1]|0:a){case 1:return"BRONZE";case 2:return"SILVER";default:return"GOLD"}}
switch(a.presentType){case "ITEM":return a.item.treasureChestColor;case "GIFT":return c(a.gift.rank);case "CARD":return c(a.card.rank);case "PIECE":case "MAXPIECE":return c(a.piece.rank);case "DOPPEL":case "LIVE2D":case "FORMATIONSHEET":case "GEM":return"GOLD";case "RICHE":return"BRONZE"}};var E={RANK_1:"★1",RANK_2:"★2",RANK_3:"★3",RANK_4:"★4",RANK_5:"★5"};l.openConditionJson=function(a,c,b){b=b?!0:!1;c=c?c:"";var g=b?"":c+"'s",e=[];if("CHARA"==a.questType){var f=a.genericId,k=a.genericIndex,l=null,
m=d.storage.userSectionList.filter(function(a){return a.toJSON().section.genericId==f});h.each(m,function(a,b){k-1==a.toJSON().section.genericIndex&&(l=a.toJSON().section)});l&&(m=" Complete "+g+" Magical Girl Story, Ep "+l.genericIndex,e.push(m))}a.openConditionSection&&e.push("Complete Chapter "+a.openConditionChapter.chapterNoForView+", Episode "+a.openConditionSection.genericIndex+" of the Main Story");999999==a.openConditionSectionId&&e.push("Complete Episodes that will be added in future");
a.openConditionCharaBondsPt&&(m=g+" Episode Lvl. "+a.openConditionCharaBondsPt+" or Higher",e.push(m));a.openConditionMagiaLevel&&(m="Enhance "+g+" Magia to Lvl. "+a.openConditionMagiaLevel,e.push(m));a.openConditionRank&&(m="Awaken "+(b?"":c)+" to "+E[a.openConditionRank],e.push(m));return e};l.supportPickUp=function(a){if(a.gameUser&&!d.strSupportPickUpUserIds&&!d.tutorialId){var c=Date.parse(a.currentTime)/1E3,b,g=a.gameUser;b=1>g.level-5?1:g.level-5;var g=g.level+5,e=new Date(1E3*(c-864E3)),f=
new Date(1E3*(c+600)),h,k,m,l,n,p,q;window.isDebug&&(e=new Date(1E3*(c-864E5)),f=new Date(1E3*(c+864E5)),b=1,g=100);h=10>e.getMonth()+1?"0"+(e.getMonth()+1):e.getMonth()+1;k=10>e.getDate()?"0"+e.getDate():e.getDate();m=10>e.getHours()?"0"+e.getHours():e.getHours();l=10>e.getMinutes()?"0"+e.getMinutes():e.getMinutes();c=10>f.getMonth()+1?"0"+(f.getMonth()+1):f.getMonth()+1;n=10>f.getDate()?"0"+f.getDate():f.getDate();p=10>f.getHours()?"0"+f.getHours():f.getHours();q=10>f.getMinutes()?"0"+f.getMinutes():
f.getMinutes();e=e.getFullYear()+"-"+h+"-"+k+"T"+m+":"+l+":00.000Z";f=f.getFullYear()+"-"+c+"-"+n+"T"+p+":"+q+":00.000Z";b={size:30,query:{function_score:{query:{bool:{must:[{range:{userRank:{gte:b,lte:g}}},{range:{lastAccessDate:{gte:e,lte:f}}}],must_not:{term:{_id:String(d.storage.gameUser.get("userId"))}}}},functions:[{random_score:{}}]}},stored_fields:"id userName attributeId lastAccessDate inviteCode userRank cardId cardRank displayCardId level revision lbCount".split(" ")};console.log("searchQuery",
b);w(b,a)}};var w=function(a,c){d.tutorialId||!c.gameUser||d.supportUserList||(d.supportPickUpUserIds=[],d.strSupportPickUpUserIds="",y.ajaxPost(d.searchLinkList.friend,a,function(b){b=b.hits.hits;var g=d.storage.userFollowList?d.storage.userFollowList.toJSON():[],e=!1;b[0]&&b[0].fields&&(e=!0);h.each(b,function(a){var b;if(e){b={};for(var c in a.fields)b[c]=a.fields[c][0]}else b=a._source;var f=!1;h.each(g,function(a){b.id==a.followUserId&&(f=!0)});f||d.supportPickUpUserIds.push({userRank:b.userRank,
id:b.id})});if(0!=d.supportPickUpUserIds.length||v)v=!1,F();else{v=!0;var f=Date.parse(c.currentTime)/1E3;b=new Date(1E3*(f-864E3));var f=new Date(1E3*(f+600)),k,l,m,r,n,p,q,x;k=10>b.getMonth()+1?"0"+(b.getMonth()+1):b.getMonth()+1;l=10>b.getDate()?"0"+b.getDate():b.getDate();m=10>b.getHours()?"0"+b.getHours():b.getHours();r=10>b.getMinutes()?"0"+b.getMinutes():b.getMinutes();n=10>f.getMonth()+1?"0"+(f.getMonth()+1):f.getMonth()+1;p=10>f.getDate()?"0"+f.getDate():f.getDate();q=10>f.getHours()?"0"+
f.getHours():f.getHours();x=10>f.getMinutes()?"0"+f.getMinutes():f.getMinutes();b=b.getFullYear()+"-"+k+"-"+l+"T"+m+":"+r+":00.000+0900";f=f.getFullYear()+"-"+n+"-"+p+"T"+q+":"+x+":00.000+0900";a.query.function_score.query.bool.must[1].range.lastAccessDate.gte=b;a.query.function_score.query.bool.must[1].range.lastAccessDate.lte=f;b=c.gameUser;70>b.level?(a.query.function_score.query.bool.must[0].range.userRank.gte=5,a.query.function_score.query.bool.must[0].range.userRank.lte=b.level+15):a.query.function_score.query.bool.must[0].range.userRank.gte=
5;w(a,c)}}))},F=function(){d.strSupportPickUpUserIds="";d.supportPickUpUserIds.sort(function(a,c){return a.userRank>c.userRank?-1:a.userRank<c.userRank?1:0});d.supportPickUpUserIds=d.supportPickUpUserIds.slice(0,15);h.each(d.supportPickUpUserIds,function(a,c){var b=",";0===c&&(b="");d.strSupportPickUpUserIds+=b+a.id})};return l});