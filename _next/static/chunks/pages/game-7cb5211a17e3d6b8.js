(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{91110:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(76687),o=t(59499),a=t(50029),c=t(87794),i=t.n(c),s=t(9008),l=t(67294),u=t(9473),d=t(76509),f=t(3283),m=t.n(f),v=t(44431),x=t.n(v),h=t(85893),p=function(e){var n=e.vaultContract,t=e.account,r=(0,l.useState)(),o=r[0],c=r[1],s=(0,l.useState)(),u=s[0],f=s[1],v=(0,l.useState)(),p=v[0],g=v[1],b=(0,l.useState)(),w=b[0],y=b[1],j=(0,l.useState)("0"),k=j[0],N=j[1];(0,l.useEffect)((function(){S(),C(),O(),I()}),[n,t]);var C=function(){var e=(0,a.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=0,null===n||void 0===n||!n.methods||!t){e.next=5;break}return e.next=4,null===n||void 0===n?void 0:n.methods.diamondBalance().call();case 4:r=e.sent;case 5:c(new(x())(m().utils.fromWei(new(x())(r).toFixed(0))));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,a.Z)(i().mark((function e(){var r,o,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=0,o=0,a=0,null===n||void 0===n||!n.methods||!t){e.next=11;break}return e.next=4,null===n||void 0===n?void 0:n.methods.balanceOf(t).call();case 4:return r=e.sent,e.next=7,null===n||void 0===n?void 0:n.methods.diamondBalance().call();case 7:return o=e.sent,e.next=10,null===n||void 0===n?void 0:n.methods.totalSupply().call();case 10:a=e.sent;case 11:f(new(x())(m().utils.fromWei(new(x())(r).times(o).div(a).toFixed(0))));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,a.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=0,null===n||void 0===n||!n.methods||!t){e.next=5;break}return e.next=4,null===n||void 0===n?void 0:n.methods.unlockAmounts(t).call();case 4:r=e.sent;case 5:g(new(x())(m().utils.fromWei(new(x())(r).toFixed(0))));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,a.Z)(i().mark((function e(){var r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===n||void 0===n||!n.methods||!t){e.next=6;break}return e.next=3,null===n||void 0===n?void 0:n.methods.unlockTimestamps(t).call();case 3:r=e.sent,o=new Date(1e3*parseInt(r)),setInterval((function(){var e=o.getTime()-(new Date).getTime(),n={h:Math.floor(e/1e3/60/60),m:Math.floor(e%36e5/6e4),s:Math.floor(e%6e4/1e3)};y({timeDiff:e,timeRemaining:n,withdraw:!(e<0)})}),1e3);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==n&&void 0!==n&&n.methods&&t&&(null===n||void 0===n||n.methods.stake(m().utils.toWei(k)).send({to:d.q7.vault,from:t,value:0}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=(0,a.Z)(i().mark((function e(){var r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===n||void 0===n||!n.methods||!t){e.next=8;break}return e.next=3,null===n||void 0===n?void 0:n.methods.diamondBalance().call();case 3:return r=e.sent,e.next=6,null===n||void 0===n?void 0:n.methods.totalSupply().call();case 6:o=e.sent,null===n||void 0===n||n.methods.quickUnstake(m().utils.toWei(new(x())(k).times(o).div(r).toFixed(10))).send({to:d.q7.vault,from:t,value:0});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,a.Z)(i().mark((function e(){var r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===n||void 0===n||!n.methods||!t){e.next=8;break}return e.next=3,null===n||void 0===n?void 0:n.methods.diamondBalance().call();case 3:return r=e.sent,e.next=6,null===n||void 0===n?void 0:n.methods.totalSupply().call();case 6:o=e.sent,null===n||void 0===n||n.methods.prepareDelayedUnstake(m().utils.toWei(new(x())(k).times(o).div(r).toFixed(10))).send({to:d.q7.vault,from:t,value:0});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:"text-center flex flex-col space-y-2 items-center justify-between bg-gray-700 text-white shadow-lg p-2 px-6 rounded-lg w-[500px]",children:[(0,h.jsx)("h3",{className:"text-2xl font-bold",children:"Vault"}),(0,h.jsxs)("div",{className:"w-full flex flex-col space-y-1 text-sm text-gray-200",children:[(0,h.jsxs)("div",{className:"flex justify-between w-full",children:[(0,h.jsx)("p",{children:"Total Vault Balance"}),(0,h.jsx)("p",{children:null===o||void 0===o?void 0:o.toFormat(2)})]}),(0,h.jsxs)("div",{className:"flex justify-between w-full",children:[(0,h.jsx)("p",{children:"Staked Balance"}),(0,h.jsx)("p",{children:null===u||void 0===u?void 0:u.toFormat(2)})]}),(0,h.jsxs)("div",{className:"flex justify-between w-full",children:[(0,h.jsx)("p",{children:"% of Vault"}),(0,h.jsx)("p",{children:o&&u&&"".concat(null===u||void 0===u?void 0:u.dividedBy(o).times(100).toFormat(3),"%")})]}),(0,h.jsxs)("div",{className:"flex justify-between w-full",children:[(0,h.jsx)("p",{children:"Pending Balance"}),(0,h.jsx)("p",{children:null===p||void 0===p?void 0:p.toFormat(2)})]}),(0,h.jsxs)("div",{className:"flex justify-between w-full",children:[(0,h.jsx)("p",{children:"Withdrawable In"}),(0,h.jsx)("div",{children:null!==w&&void 0!==w&&w.timeRemaining&&null!==w&&void 0!==w&&w.withdraw?(0,h.jsxs)("span",{className:"text-sm text-gray-300 flex space-x-1 justify-center",children:[w.timeRemaining.h&&(0,h.jsxs)("span",{children:[w.timeRemaining.h,"h"]}),w.timeRemaining.m&&(0,h.jsxs)("span",{children:[w.timeRemaining.m,"m"]}),w.timeRemaining.s&&(0,h.jsxs)("span",{children:[w.timeRemaining.s,"s"]})]}):(0,h.jsx)("span",{className:"text-sm text-green-500 flex space-x-1 justify-center",children:"Ready!"})})]})]}),(0,h.jsxs)("div",{className:"w-full flex flex-col space-y-3",children:[(0,h.jsx)("input",{value:k,onChange:function(e){N(e.target.value)},type:"number",max:2e4,placeholder:"0",className:"text-center border-none outline-none bg-gray-600 text-white rounded w-full"}),(0,h.jsxs)("div",{className:"flex space-x-2 w-full",children:[(0,h.jsx)("button",{onClick:Z,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md flex-grow",children:"Stake"}),(0,h.jsxs)("div",{className:"flex space-x-1 flex-grow",children:[(0,h.jsx)("button",{onClick:D,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md w-1/2",children:"Fast Unstake"}),(0,h.jsx)("button",{onClick:M,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md w-1/2",children:"Slow Unstake"})]})]})]})]})},g=l.memo(p);function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==t.return||t.return()}finally{if(i)throw a}}}}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}x().config({FORMAT:{decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0}});var k=function(){var e=(0,u.v9)((function(e){return e.blockchain})),n=(0,l.useState)([]),t=n[0],c=n[1],f=(0,l.useState)([]),v=f[0],p=f[1],b=(0,l.useState)([]),j=b[0],k=b[1],N=(0,l.useState)([]),C=N[0],S=N[1],O=(0,l.useState)([]),I=O[0],Z=O[1],D=(0,l.useState)({}),M=D[0],q=D[1],A=(0,l.useState)([]),F=A[0],R=A[1],E=(0,l.useState)([]),U=E[0],_=E[1],T=(0,l.useState)({}),P=T[0],W=T[1],B=(0,l.useRef)(),L=(0,l.useState)(),G=L[0],V=L[1],z=(0,l.useState)(),X=z[0],H=z[1],K=(0,l.useRef)(),Q=(0,l.useState)({level:0,quantity:0}),Y=Q[0],$=Q[1];(0,l.useEffect)((function(){p([]),e.minerContract&&e.account&&(ee(),re())}),[e.minerContract,e.account]),(0,l.useEffect)((function(){S([]),e.mineContract&&e.account&&ne(),R([]),e.mineContract&&e.account&&te()}),[e.mineContract,e.account]),(0,l.useEffect)((function(){J()}),[e.diamondContract,e.account]);var J=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=0,null===(t=e.diamondContract)||void 0===t||!t.methods||!e.account){n.next=5;break}return n.next=4,null===(o=e.diamondContract)||void 0===o?void 0:o.methods.balanceOf(e.account).call();case 4:r=n.sent;case 5:V(new(x())(m().utils.fromWei(r.toString())));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ee=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,a,s,l,u,d,f;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=[],null===(t=e.minerContract)||void 0===t||!t.methods||!e.account){n.next=10;break}return n.next=4,null===(a=e.minerContract)||void 0===a?void 0:a.methods.balanceOf(e.account).call();case 4:if(0===(s=n.sent)){n.next=10;break}return n.next=8,e.minerContract.methods.batchedMinerOfOwner(e.account,0,s).call();case 8:if(l=n.sent){console.log(l),u=y(l);try{for(f=function(){var e=d.value;r.push(parseInt(e.tokenId)),c((function(n){return w(w({},n),{},(0,o.Z)({},e.tokenId,w(w({},n[e.tokenId]),{},{level:parseInt(e.level)})))}))},u.s();!(d=u.n()).done;)f()}catch(i){u.e(i)}finally{u.f()}r.sort((function(e,n){return e-n}))}case 10:p(r);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ne=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,a,s,l,u,d,f,v,h;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=[],clearInterval(K.current),H(new(x())(0)),null===(t=e.mineContract)||void 0===t||!t.methods||!e.account){n.next=19;break}return n.next=6,null===(a=e.mineContract)||void 0===a?void 0:a.methods.ownedStakesBalance(e.account).call();case 6:if(0===(s=n.sent)){n.next=19;break}return n.next=10,e.mineContract.methods.batchedStakesOfOwner(e.account,0,s).call();case 10:if(!(l=n.sent)){n.next=19;break}d=y(l);try{for(v=function(){var e=f.value;r.push(parseInt(e.tokenId)),c((function(n){return w(w({},n),{},(0,o.Z)({},e.tokenId,w(w({},n[e.tokenId]),{},{level:parseInt(e.level)})))}))},d.s();!(f=d.n()).done;)v()}catch(i){d.e(i)}finally{d.f()}return n.next=16,null===(u=e.mineContract)||void 0===u?void 0:u.methods.YIELD_CPS().call();case 16:h=n.sent,K.current=setInterval((function(){var e,n=new(x())(0),t=y(l);try{var r=function(){var t=e.value,r=new(x())(m().utils.fromWei(new(x())(Math.round(Date.now()-Math.round(1e3*t.startTimestamp))*("0"===t.level?1:"1"===t.level?25:"2"===t.level?5:"3"===t.level?1e3:0)*parseFloat(h)/1e3).toFixed(0),"ether"));q((function(e){return w(w({},e),{},(0,o.Z)({},t.tokenId,w(w({},e[t.tokenId]),{},{earned:r})))})),n=n.plus(r)};for(t.s();!(e=t.n()).done;)r()}catch(i){t.e(i)}finally{t.f()}H(n)}),l.length>15?120:80),r.sort((function(e,n){return e-n}));case 19:S(r);case 20:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),te=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,a,s,l,u,d,f,m,v;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=[],clearInterval(B.current),null===(t=e.mineContract)||void 0===t||!t.methods||!e.account){n.next=14;break}return n.next=5,null===(a=e.mineContract)||void 0===a?void 0:a.methods.ownedCooldownsBalance(e.account).call();case 5:if(0===(s=n.sent)){n.next=14;break}return n.next=9,e.mineContract.methods.batchedCooldownsOfOwner(e.account,0,s).call();case 9:return u=n.sent,n.next=12,null===(l=e.mineContract)||void 0===l?void 0:l.methods.UNSTAKE_COOLDOWN_DURATION().call();case 12:if(d=n.sent,u){f=y(u);try{for(v=function(){var e=m.value;r.push(parseInt(e.tokenId)),c((function(n){return w(w({},n),{},(0,o.Z)({},e.tokenId,w(w({},n[e.tokenId]),{},{level:parseInt(e.level)})))}))},f.s();!(m=f.n()).done;)v()}catch(i){f.e(i)}finally{f.f()}oe(u,d),B.current=setInterval((function(){oe(u,d)}),u.length<15?1e3:6e4)}case 14:R(r);case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),re=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,o,a,c,s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===(t=e.minerContract)||void 0===t||!t.methods||!e.account){n.next=20;break}r=[],o=!1,a=0;case 4:if(o){n.next=19;break}return c=void 0,n.prev=6,n.next=9,null===(s=e.minerContract)||void 0===s?void 0:s.methods.levels(a).call();case 9:c=n.sent,r.push(c),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(6),o=!0;case 16:a++,n.next=4;break;case 19:console.log(r);case 20:case"end":return n.stop()}}),n,null,[[6,13]])})));return function(){return n.apply(this,arguments)}}(),oe=function(e,n){var t,r=y(e);try{var a=function(){var r=t.value,a=new Date(1e3*(parseInt(r.startTimestamp)+parseInt(n))).getTime()-(new Date).getTime(),c={h:Math.floor(a/1e3/60/60),m:Math.floor(a%36e5/6e4),s:e.length<15?Math.floor(a%6e4/1e3):null};W((function(e){return w(w({},e),{},(0,o.Z)({},r.tokenId,w(w({},e[r.tokenId]),{},{timeDiff:a,timeRemaining:c,withdraw:!(a>0)})))}))};for(r.s();!(t=r.n()).done;)a()}catch(c){r.e(c)}finally{r.f()}},ae=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null!==(t=e.diamondContract)&&void 0!==t&&t.methods&&null!==(r=e.mineContract)&&void 0!==r&&r.methods&&e.account&&(null===(o=e.mineContract)||void 0===o||o.methods.claimDiamondsAndMaybeUnstake(C,!1).send({to:d.q7.mine,from:e.account,value:0}).once("sending",(function(e){console.log(e)})).once("sent",(function(e){console.log(e)})).once("transactionHash",(function(e){console.log(e)})).once("receipt",(function(e){ne(),J()})).on("error",(function(e){console.log(e)})).then((function(e){console.log(e)})).catch((function(e){console.log(e)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ce=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,o,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===(t=e.mineContract)||void 0===t||!t.methods||!e.account){n.next=5;break}return n.next=3,null===(r=e.minerContract)||void 0===r?void 0:r.methods.isApprovedForAll(e.account,d.q7.mine).call();case 3:n.sent?null===(o=e.mineContract)||void 0===o||o.methods.stakeMany(j).send({gasLimit:String(7999999),to:d.q7.mine,from:e.account,value:0}).once("receipt",(function(e){ne(),ee()})).catch((function(e){console.log(e)})):null===(a=e.minerContract)||void 0===a||a.methods.setApprovalForAll(d.q7.mine,!0).send({to:d.q7.mine,from:e.account,value:0}).then((function(){var n;null===(n=e.mineContract)||void 0===n||n.methods.stakeMany(j).send({gasLimit:String(7e6),to:d.q7.mine,from:e.account,value:0}).once("receipt",(function(e){ne(),ee()})).catch((function(e){console.log(e)}))}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ie=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null!==(t=e.diamondContract)&&void 0!==t&&t.methods&&null!==(r=e.mineContract)&&void 0!==r&&r.methods&&e.account&&(null===(o=e.mineContract)||void 0===o||o.methods.claimDiamondsAndMaybeUnstake(I,!0).send({gasLimit:String(7e6),to:d.q7.mine,from:e.account,value:0}).once("receipt",(function(e){ne(),J(),te()})).catch((function(e){console.log(e)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),se=function(){var n=(0,a.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null!==(t=e.mineContract)&&void 0!==t&&t.methods&&e.account&&(null===(r=e.mineContract)||void 0===r||r.methods.withdrawMiner(U).send({gasLimit:String(7e6),to:d.q7.mine,from:e.account,value:0}).once("receipt",(function(e){ee(),te()})).catch((function(e){console.log(e)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),le=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,o,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===(t=e.minerContract)||void 0===t||!t.methods||!e.account){n.next=5;break}return n.next=3,null===(r=e.minerContract)||void 0===r?void 0:r.methods.isApprovedForAll(e.account,d.q7.miner).call();case 3:n.sent?null===(o=e.minerContract)||void 0===o||o.methods.mintUpgrade(Y.level,Y.quantity).send({to:d.q7.miner,from:e.account,value:0}).once("receipt",(function(e){console.log(e)})).catch((function(e){console.log(e)})):null===(a=e.minerContract)||void 0===a||a.methods.setApprovalForAll(d.q7.miner,!0).send({to:d.q7.miner,from:e.account,value:0}).once("receipt",(function(n){var t;null===(t=e.minerContract)||void 0===t||t.methods.mintUpgrade(Y.level,Y.quantity).send({to:d.q7.miner,from:e.account,value:0}).once("receipt",(function(e){console.log(e)})).catch((function(e){console.log(e)}))}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ue=function(e){switch(e){case 0:return" text-white";case 1:return" text-red-500";case 2:return" text-green-500";case 3:return" text-amber-500";case 4:return" text-cyan-500"}};return d.e1.whitelistOnly&&!d.e1.whitelistedWallets.find((function(n){var t;return n.toLowerCase()===(null===(t=e.account)||void 0===t?void 0:t.toLowerCase())||""}))?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.default,{children:(0,h.jsx)("title",{children:"Game | MinerVerse"})}),(0,h.jsx)("section",{className:"text-gray-900 bg-gray-900 body-font h-full",children:(0,h.jsxs)("div",{className:"flex flex-col justify-center items-center space-y-5 overflow-auto pt-44 pb-11",children:[(0,h.jsxs)("div",{className:"px-11 flex flex-col items-center space-y-3 text-xl text-center bg-gray-700 text-white shadow-lg p-2 rounded-lg",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{children:"Level"}),(0,h.jsx)("input",{value:Y.level,onChange:function(e){$((function(n){return w(w({},n),{},{level:e.target.value})}))},type:"number",max:2e4,placeholder:"0",className:"text-center border-none outline-none ml-3 w-[200px] bg-gray-700 text-white"})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{children:"Quantity"}),(0,h.jsx)("input",{value:Y.quantity,onChange:function(e){$((function(n){return w(w({},n),{},{quantity:e.target.value})}))},type:"number",max:2e4,placeholder:"0",className:"text-center border-none outline-none ml-3 w-[200px] bg-gray-700 text-white"})]}),(0,h.jsx)("button",{onClick:le,className:"ml-4 bg-rose-500 rounded-lg p-2 px-4",children:"Mint Upgrade"})]}),(0,h.jsxs)("div",{className:"flex space-x-5",children:[(0,h.jsxs)("div",{className:"text-xl text-center flex flex-col items-center justify-center bg-gray-700 text-white shadow-lg p-6 px-11 w-[400px] rounded-lg",children:[(0,h.jsxs)("div",{className:"flex",children:[(0,h.jsxs)("h5",{className:"flex flex-col items-start w-[100px]",children:[(0,h.jsx)("span",{children:"Balance: "}),(0,h.jsx)("span",{children:"Earned: "})]}),(0,h.jsx)("div",{className:"relative w-[100px]",children:(0,h.jsxs)("h5",{className:"flex flex-col items-start absolute top-0 left-0 whitespace-nowrap",children:[(0,h.jsx)("span",{children:null===G||void 0===G?void 0:G.toFormat(5)}),(0,h.jsx)("span",{children:null===X||void 0===X?void 0:X.toFormat(5)})]})})]}),(0,h.jsx)("button",{disabled:null===X||void 0===X?void 0:X.eq(0),onClick:ae,className:"mt-4 py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md",children:"Claim"})]}),(0,h.jsx)(g,{vaultContract:e.vaultContract,account:e.account})]}),(0,h.jsxs)("div",{className:"px-11 text-center w-full",children:[(0,h.jsxs)("div",{className:"flex items-center justify-between w-full mb-4 p-2 px-3 bg-gray-700 text-white rounded-lg shadow-lg",children:[(0,h.jsx)("h3",{className:"font-bold text-xl",children:"Staked"}),(0,h.jsxs)("div",{className:"flex space-x-3",children:[(0,h.jsx)("button",{onClick:function(){Z([])},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Unselect"}),(0,h.jsx)("button",{onClick:function(){Z((0,r.Z)(C))},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Select All"}),(0,h.jsx)("button",{disabled:0===I.length,onClick:ie,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md",children:"Unstake"})]})]}),(0,h.jsx)("div",{className:"flex flex-wrap justify-center",onContextMenu:function(e){e.preventDefault()},children:C.map((function(e){var n,o;return(0,h.jsx)("div",{onMouseDown:function(n){if(n.preventDefault(),1==n.buttons||3==n.buttons){var t=I.indexOf(e);Z(t>-1?I.filter((function(n){return n!==e})):[].concat((0,r.Z)(I),[e]))}},onMouseEnter:function(n){if(n.preventDefault(),1==n.buttons||3==n.buttons){var t=I.indexOf(e);Z(t>-1?I.filter((function(n){return n!==e})):[].concat((0,r.Z)(I),[e]))}},className:"relative shadow-lg p-4 mr-1 mb-1 w-[100px] cursor-pointer select-none "+(-1!==I.indexOf(e)?" bg-gray-500 ":"bg-gray-700 ")+ue(null===(n=t[e])||void 0===n?void 0:n.level),children:(0,h.jsxs)("div",{className:"flex flex-col items-center",children:[(0,h.jsx)("p",{className:"text-lg",children:e}),(null===(o=M[e])||void 0===o?void 0:o.earned)&&(0,h.jsx)("p",{className:"text-sm text-gray-300",children:M[e].earned.toFixed(3)})]})},e)}))})]}),(0,h.jsxs)("div",{className:"px-11 text-center w-full",children:[(0,h.jsxs)("div",{className:"flex items-center justify-between w-full mb-4 p-2 px-3 bg-gray-700 text-white rounded-lg shadow-lg",children:[(0,h.jsx)("h3",{className:"font-bold text-xl",children:"Not Staked"}),(0,h.jsxs)("div",{className:"flex space-x-3",children:[(0,h.jsx)("button",{onClick:function(){k([])},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Unselect"}),(0,h.jsx)("button",{onClick:function(){k((0,r.Z)(v))},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Select All"}),(0,h.jsx)("button",{disabled:0===j.length,onClick:ce,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md",children:"Stake"})]})]}),(0,h.jsx)("div",{className:"flex flex-wrap justify-center",onContextMenu:function(e){e.preventDefault()},children:v.map((function(e){var n;return(0,h.jsx)("div",{onMouseDown:function(n){if(n.preventDefault(),1==n.buttons||3==n.buttons){var t=j.indexOf(e);k(t>-1?j.filter((function(n){return n!==e})):[].concat((0,r.Z)(j),[e]))}},onMouseEnter:function(n){if(n.preventDefault(),1==n.buttons||3==n.buttons){var t=j.indexOf(e);k(t>-1?j.filter((function(n){return n!==e})):[].concat((0,r.Z)(j),[e]))}},className:"relative shadow-lg p-4 mr-1 mb-1 w-[100px] cursor-pointer select-none "+(-1!==j.indexOf(e)?" bg-gray-500":"bg-gray-700 ")+ue(null===(n=t[e])||void 0===n?void 0:n.level),children:(0,h.jsx)("p",{className:"",children:e})},e)}))})]})," ",(0,h.jsxs)("div",{className:"px-11 text-center w-full",children:[(0,h.jsxs)("div",{className:"flex items-center justify-between w-full mb-4 p-2 px-3 bg-gray-700 text-white rounded-lg shadow-lg",children:[(0,h.jsx)("h3",{className:"font-bold text-xl",children:"Cooldown"}),(0,h.jsxs)("div",{className:"flex space-x-3",children:[(0,h.jsx)("button",{onClick:function(){_([])},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Unselect"}),(0,h.jsx)("button",{onClick:function(){_((0,r.Z)(F))},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Select All"}),(0,h.jsx)("button",{disabled:0===U.length,onClick:se,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md",children:"Withdraw"})]})]}),(0,h.jsx)("div",{className:"flex flex-wrap justify-center",children:F.map((function(e){var n,o,a;return(0,h.jsxs)("div",{onMouseDown:function(n){if(n.preventDefault(),1==n.buttons||3==n.buttons){var t=U.indexOf(e);_(t>-1?U.filter((function(n){return n!==e})):[].concat((0,r.Z)(U),[e]))}},onMouseEnter:function(n){if(n.preventDefault(),1==n.buttons||3==n.buttons){var t=U.indexOf(e);_(t>-1?U.filter((function(n){return n!==e})):[].concat((0,r.Z)(U),[e]))}},className:"relative shadow-lg p-4 mr-1 mb-1 w-[120px] cursor-pointer select-none "+(-1!==U.indexOf(e)?" bg-gray-500 ":"bg-gray-700 ")+ue(null===(n=t[e])||void 0===n?void 0:n.level),children:[(0,h.jsx)("p",{className:"text-lg",children:e}),null===(o=P[e])||void 0===o||!o.timeRemaining||null!==(a=P[e])&&void 0!==a&&a.withdraw?(0,h.jsx)("p",{className:"text-sm text-green-500 flex space-x-1 justify-center",children:"Ready!"}):(0,h.jsxs)("p",{className:"text-sm text-gray-300 flex space-x-1 justify-center",children:[P[e].timeRemaining.h&&(0,h.jsxs)("span",{children:[P[e].timeRemaining.h,"h"]}),P[e].timeRemaining.m&&(0,h.jsxs)("span",{children:[P[e].timeRemaining.m,"m"]}),P[e].timeRemaining.s&&(0,h.jsxs)("span",{children:[P[e].timeRemaining.s,"s"]})]})]},e)}))})]})]})})]})}},43790:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return t(91110)}])}},function(e){e.O(0,[431,774,888,179],(function(){return n=43790,e(e.s=n);var n}));var n=e.O();_N_E=n}]);