(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",occupation:"Fry Cook",location:"A Pineapple Under the Sea"},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",occupation:"Restaurant Owner",location:"A Giant Anchor"},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",occupation:"Cashier",location:"An Easter Island Head"},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",occupation:"Boy Genius",location:"A Secret Laboratory"},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",occupation:"A Cowardly Dog",location:"Nowhere, Kansas"},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",occupation:"Student",location:"Bluffington"},{id:7,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",occupation:"Looney Toon",location:"A Rabbit Burrow"},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",occupation:"Ladies Man",location:"Aron City"},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",occupation:"Adventurer",location:"California"},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",occupation:"Cashier",location:"O-Town, California"},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",occupation:"Superhero",location:"Earth"},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",occupation:"Ahhhh! A Real Monster!",location:"Under a City Dump"}]},10:function(e,a,t){e.exports=t(18)},16:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(3),c=t.n(o),r=(t(16),t(7)),s=t(4),l=t(5),m=t(8),u=t(6),g=t(9),d=(t(17),function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"col-md-3 pt-5 p-3"},i.a.createElement("div",{className:"fix"},i.a.createElement("img",{onClick:function(){return e.handleClick(e.id)},className:"card-img-top",src:e.image,alt:e.name,id:e.id}))))});var p=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},h=function(e){return i.a.createElement("nav",{className:"navbar navbar-expand-lg"},i.a.createElement("h3",null,"Clicky Game"),i.a.createElement("h5",{className:"ml-auto mt-2",id:"counters"},"Score: ",e.score))},v=t(1),k=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).state={score:0,cartoons:v,used:[]},t.handleClick=function(e){t.state.used.includes(e)?t.setState({score:0,used:[]}):(t.setState({score:t.state.score+1}),v.sort(function(){return Math.random()-.5}),v.forEach(function(a){t.setState({used:[].concat(Object(r.a)(t.state.used),[e])})}))},t}return Object(g.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(h,{score:this.state.score}),i.a.createElement(p,null,i.a.createElement("div",{className:"row"},this.state.cartoons.map(function(a){return i.a.createElement(d,{handleClick:e.handleClick,id:a.id,key:a.id,name:a.name,image:a.image})}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.d7248981.chunk.js.map