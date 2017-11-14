//     jsork.js 0.1
//     https://github.com/kenwalker/jsork
//     (c) 2017 Ken Walker
//     jsork may be freely distributed under the MIT license.
!function(){var e="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},t=function(e){return e instanceof t?e:this instanceof t?void(this._wrapped=e):new t(e)};"undefined"==typeof exports||exports.nodeType?e.jsork=t:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=t),exports.jsork=t),t.VERSION="0.1";var R="https://amtgard.com/ork/orkservice/Json/index.php";t.filters={ACTIVE:0,INACTIVE:1,WAIVERED:2,UNWAIVERED:3,BANNED:4,SUSPENDED:5,DUESPAID:6,ROSE:""},t.kingdom={},t.kingdom.getKingdoms=function(e){$.getJSON(R+"?request=",{call:"Kingdom/GetKingdoms",request:{}},function(t){if(0===t.Status.Status){var R=$.map(t.Kingdoms,function(e,t){return e});e(R)}else console.log(JSON.stringify(t))})},t.kingdom.getParks=function(e,t){$.getJSON(R+"?request=",{call:"Kingdom/GetParks",request:{KingdomId:e}},function(e){0===e.Status.Status?t(e.Parks):console.log(JSON.stringify(e))})},t.kingdom.getOfficers=function(e,t){$.getJSON(R+"?request=",{call:"Kingdom/GetOfficers",request:{KingdomId:e}},function(e){0===e.Status.Status?t(e.Officers):console.log(JSON.stringify(e))})},t.kingdom.getParkTitles=function(e,t){$.getJSON(R+"?request=",{call:"Kingdom/GetKingdomParkTitles",request:{KingdomId:e}},function(e){0===e.Status.Status?t(e.ParkTitles):console.log(JSON.stringify(e))})},t.kingdom.getKingdomDetails=function(e,t){$.getJSON(R+"?request=",{call:"Kingdom/GetKingdomDetails",request:{KingdomId:e}},function(e){0===e.Status.Status?t(e.KingdomInfo):console.log(JSON.stringify(e))})},t.kingdom.getPrincipalities=function(e,t){$.getJSON(R+"?request=",{call:"Kingdom/GetPrincipalities",request:{KingdomId:e}},function(e){t(0===e.Status.Status?e.Principalities:[])})},t.kingdom.getPlayers=function(e,t,A){var E={Id:e,Type:"Kingdom"};addFilterToPlayerRequest(E,t),$.getJSON(R+"?request=",{call:"Report/GetPlayerRoster",request:E},function(e){0===e.Status.Status||e.Status===!0?A(e.Roster):console.log(JSON.stringify(e))})},t.park={},t.park.getPlayers=function(e,t,A){var E={Id:e,Type:"Park"};addFilterToPlayerRequest(E,t),$.getJSON(R+"?request=",{call:"Report/GetPlayerRoster",request:E},function(e){0===e.Status.Status||e.Status===!0?A(e.Roster):console.log(JSON.stringify(e))})},t.park.getOfficers=function(e,t){$.getJSON(R+"?request=",{call:"Park/GetOfficers",request:{ParkId:e}},function(e){0===e.Status.Status?t(e.Officers):console.log(JSON.stringify(e))})},t.player={},t.player.getPlayer=function(e,t){var A={MundaneId:e};$.getJSON(R+"?request=",{call:"Player/GetPlayer",request:A},function(e){0===e.Status.Status||e.Status===!0?t(e.Player):console.log(JSON.stringify(e))})},t.player.getAwards=function(e,A,E){var S={MundaneId:e};addFilterToAwardRequest(S,A),$.getJSON(R+"?request=",{call:"Player/AwardsForPlayer",request:S},function(e){0===e.Status.Status||e.Status===!0?(A!==t.awardIDs.ALL&&(e.Awards=e.Awards.filter(function(e){return e.AwardId===A})),E(e.Awards)):console.log(JSON.stringify(e))})},t.player.getAttendance=function(e,t){var A={MundaneId:e};$.getJSON(R+"?request=",{call:"Player/AttendanceForPlayer",request:A},function(e){0===e.Status.Status||e.Status===!0?t(e.Attendance):console.log(JSON.stringify(e))})},t.award={},t.award.getAwardList=function(e){$.getJSON(R+"?request=",{call:"Award/GetAwardList"},function(t){0===t.Status.Status||t.Status===!0?e(t.Awards):console.log(JSON.stringify(t))})},t.searchservice={},addFilterToPlayerRequest=function(e,R){switch(R){case t.filters.WAIVERED:return $.extend(e,{Waivered:!0});case t.filters.UNWAIVERED:return $.extend(e,{UnWaivered:!0});case t.filters.ACTIVE:return $.extend(e,{Active:!0});case t.filters.INACTIVE:return $.extend(e,{InActive:!0});case t.filters.BANNED:return $.extend(e,{Banned:!0});case t.filters.SUSPENDED:return $.extend(e,{Suspended:!0});case t.filters.DUESPAID:return $.extend(e,{DuesPaid:!0});default:throw"Illegal filter argument "+R}},addFilterToAwardRequest=function(e,t){return $.extend(e,{AwardsId:t})},t.awardIDs={ALL:9999,MASTER_ROSE:1,MASTER_SMITH:2,MASTER_LION:3,MASTER_OWL:4,MASTER_DRAGON:5,MASTER_GARBER:6,MASTER_JOVIUS:7,MASTER_ZODIAC:8,MASTER_MASK:9,MASTER_HYDRA:10,MASTER_GRIFFIN:11,WARLORD:12,LORDS_PAGE:13,MANATARMS:14,PAGE:15,SQUIRE:16,KNIGHT_OF_THE_FLAME:17,KNIGHT_OF_THE_CROWN:18,KNIGHT_OF_THE_SERPENT:19,KNIGHT_OF_THE_SWORD:20,ORDER_OF_THE_ROSE:21,ORDER_OF_THE_SMITH:22,ORDER_OF_THE_LION:23,ORDER_OF_THE_OWL:24,ORDER_OF_THE_DRAGON:25,ORDER_OF_THE_GARBER:26,ORDER_OF_THE_WARRIOR:27,ORDER_OF_THE_JOVIUS:28,ORDER_OF_THE_MASK:29,ORDER_OF_THE_ZODIAC:30,ORDER_OF_THE_WALKER_IN_THE_MIDDLE:31,ORDER_OF_THE_HYDRA:32,ORDER_OF_THE_GRIFFIN:33,ORDER_OF_THE_FLAME:34,DEFENDER:35,WEAPONMASTER:36,PARAGON_ANTIPALADIN:37,PARAGON_ARCHER:38,PARAGON_ASSASSIN:39,PARAGON_BARBARIAN:40,PARAGON_BARD:41,PARAGON_DRUID:42,PARAGON_HEALER:43,PARAGON_MONK:44,PARAGON_MONSTER:45,PARAGON_PALADIN:46,PARAGON_PEASANT:47,PARAGON_RAIDER:48,PARAGON_SCOUT:49,PARAGON_WARRIOR:50,PARAGON_WIZARD:51,LORD:52,LADY:53,BARONET:54,BARONETESS:55,BARON:56,BARONESS:57,VISCOUNT:58,VISCOUNTESS:59,COUNT:60,COUNTESS:61,MARQUIS:62,MARQUESS:63,DUKE:64,DUCHESS:65,ARCHDUKE:66,ARCHDUCHESS:67,GRAND_DUKE:68,GRAND_DUCHESS:69,SHERIFF:70,PROVINCIAL_BARON:71,PROVINCIAL_BARONESS:72,PROVINCIAL_DUKE:73,PROVINCIAL_DUCHESS:74,PROVINCIAL_GRAND_DUKE:75,PROVINCIAL_GRAND_DUCHESS:76,SHIRE_REGENT:77,BARONIAL_REGENT:78,DUCAL_REGENT:79,GRAND_DUCAL_REGENT:80,SHIRE_CLERK:81,BARONIAL_SENESCHAL:82,DUCAL_CHANCELLOR:83,GRAND_DUCAL_GENERAL_MINISTER:84,PROVINCIAL_CHAMPION:85,BARONIAL_CHAMPION:86,DUCAL_DEFENDER:87,GRAND_DUCAL_DEFENDER:88,KINGDOM_CHAMPION:89,KINGDOM_REGENT:90,KINGDOM_PRIME_MINISTER:91,KINGDOM_MONARCH:92,DIRECTOR_OF_THE_BOARD:93,CUSTOM_AWARD:94,GUILDMASTER_OF_REEVES:202,GUILDMASTER_OF_WIZARDS:201,GUILDMASTER_OF_WARRIORS:200,GUILDMASTER_OF_SCOUTS:199,PLAGUESERVANT_OF_PEASANTS:198,GUILDMASTER_OF_PALADINS:197,GUILDMASTER_OF_MONSTERS:196,GUILDMASTER_OF_MONKS:195,GUILDMASTER_OF_HEALERS:194,GUILDMASTER_OF_DRUIDS:193,GUILDMASTER_OF_BARDS:192,GUILDMASTER_OF_BARBARIANS:191,GUILDMASTER_OF_ASSASSINS:190,GUILDMASTER_OF_ARCHERS:189,GUILDMASTER_OF_KNIGHTS:188,APPRENTICE:203,COM_EXECUTIVE_COMMITTEE:204,CHAMPION_PRINCIPALITY:205,CHAMPION_SHIRE:206,DRAGONMASTER:207,CULTURAL_OLYMPIAN:208,ESQUIRE:209,GUILDMASTER_OF_ANTIPALADINS:210,GUILDMASTER_OF_REEVES_SHIRE:211,GUILDMASTER_OF_REEVES_BARONY:212,GUILDMASTER_OF_REEVES_DUCHY:213,GUILDMASTER_OF_REEVES_GRAND_DUCHY:214,GUILDMASTER_OF_REEVES_PRINCIPALITY:215,AUTOCRAT_KINGDOM:216,SUBCRAT_KINGDOM:217,AUTOCRAT_INTERKINGDOM:218,SUBCRAT_INTERKINGDOM:219,AUTOCRAT_PARK:220,SUBCRAT_PARK:221,AUTOCRAT_INTERPARK:222,SUBCRAT_INTERPARK:223,GRAND_OLYMPIAN:224,RULES_REPRESENTATIVE:225,MASTER:226,MONARCH_PRINCIPALITY:227,REGENT_PRINCIPALITY:228,WAR_EVENT_WINNER:229,WAR_OLYMPIAN:230,WARMASTER:231},"function"==typeof define&&define.amd&&define("jsork",[],function(){return t})}();
//# sourceMappingURL= 