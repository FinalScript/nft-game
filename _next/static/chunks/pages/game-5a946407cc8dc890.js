(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{4055:function(e,n,t){"use strict";t.r(n);var r=t(76687),o=t(59499),a=t(50029),c=t(87794),i=t.n(c),s=t(9008),l=t(67294),u=t(9473),d=t(76509),f=t(3283),m=t.n(f),h=t(85893);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==t.return||t.return()}finally{if(i)throw a}}}}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}n.default=function(){var e=(0,u.v9)((function(e){return e.blockchain})),n=(0,l.useState)([]),t=n[0],c=n[1],f=(0,l.useState)([]),x=f[0],g=f[1],b=(0,l.useState)([]),y=b[0],w=b[1],j=(0,l.useState)([]),k=j[0],C=j[1],N=(0,l.useState)([]),O=N[0],S=N[1],I=(0,l.useState)({}),Z=I[0],A=I[1],D=(0,l.useState)([]),_=D[0],E=D[1],M=(0,l.useState)([]),T=M[0],F=M[1],P=(0,l.useState)({}),R=P[0],U=P[1],q=(0,l.useState)(),W=q[0],B=q[1],L=(0,l.useState)(0),X=L[0],G=L[1],H=(0,l.useState)(0),K=H[0],V=H[1],Y=(0,l.useState)(),$=Y[0],z=Y[1];(0,l.useEffect)((function(){g([]),e.minerContract&&e.account&&Q()}),[e.minerContract,e.account]),(0,l.useEffect)((function(){C([]),e.mineContract&&e.account&&ee(),E([]),e.mineContract&&e.account&&ne()}),[e.mineContract,e.account]),(0,l.useEffect)((function(){J()}),[e.diamondContract,e.account]);var J=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=0,null===(t=e.diamondContract)||void 0===t||!t.methods||!e.account){n.next=5;break}return n.next=4,null===(o=e.diamondContract)||void 0===o?void 0:o.methods.balanceOf(e.account).call();case 4:r=n.sent;case 5:G(parseFloat(m().utils.fromWei(m().utils.toBN(r))));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Q=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,a,s,l,u,d,f;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=[],null===(t=e.minerContract)||void 0===t||!t.methods||!e.account){n.next=10;break}return n.next=4,null===(a=e.minerContract)||void 0===a?void 0:a.methods.balanceOf(e.account).call();case 4:if(0===(s=n.sent)){n.next=10;break}return n.next=8,e.minerContract.methods.batchedMinerOfOwner(e.account,0,s).call();case 8:if(l=n.sent){u=p(l);try{for(f=function(){var e=d.value;r.push(parseInt(e.tokenId)),c((function(n){return v(v({},n),{},(0,o.Z)({},e.tokenId,v(v({},n[e.tokenId]),{},{level:parseInt(e.level)})))}))},u.s();!(d=u.n()).done;)f()}catch(i){u.e(i)}finally{u.f()}r.sort((function(e,n){return e-n}))}case 10:g(r);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ee=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,a,s,l,u,d,f,h,x;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=[],clearTimeout($),null===(t=e.mineContract)||void 0===t||!t.methods||!e.account){n.next=18;break}return n.next=5,null===(a=e.mineContract)||void 0===a?void 0:a.methods.ownedStakesBalance(e.account).call();case 5:if(0===(s=n.sent)){n.next=18;break}return n.next=9,e.mineContract.methods.batchedStakesOfOwner(e.account,0,s).call();case 9:if(!(l=n.sent)){n.next=18;break}d=p(l);try{for(h=function(){var e=f.value;r.push(parseInt(e.tokenId)),c((function(n){return v(v({},n),{},(0,o.Z)({},e.tokenId,v(v({},n[e.tokenId]),{},{level:parseInt(e.level)})))}))},d.s();!(f=d.n()).done;)h()}catch(i){d.e(i)}finally{d.f()}return n.next=15,null===(u=e.mineContract)||void 0===u?void 0:u.methods.YIELD_CPS().call();case 15:x=n.sent,z(setInterval((function(){var e,n=parseFloat(m().utils.fromWei("0","ether")),t=p(l);try{var r=function(){var t=e.value,r=1e4*parseFloat(m().utils.fromWei(m().utils.toBN(Math.round(Date.now()-Math.round(1e3*t.startTimestamp))*("0"===t.level?1:5)*parseFloat(x)/1e3/1e4),"ether"));t.tokenId,A((function(e){return v(v({},e),{},(0,o.Z)({},t.tokenId,v(v({},e[t.tokenId]),{},{earned:r})))})),n+=r};for(t.s();!(e=t.n()).done;)r()}catch(i){t.e(i)}finally{t.f()}V(n)}),100)),r.sort((function(e,n){return e-n}));case 18:C(r);case 19:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ne=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,a,s,l,u,d,f,m,h;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=[],clearTimeout(W),null===(t=e.mineContract)||void 0===t||!t.methods||!e.account){n.next=14;break}return n.next=5,null===(a=e.mineContract)||void 0===a?void 0:a.methods.ownedCooldownsBalance(e.account).call();case 5:if(0===(s=n.sent)){n.next=14;break}return n.next=9,e.mineContract.methods.batchedCooldownsOfOwner(e.account,0,s).call();case 9:return u=n.sent,n.next=12,null===(l=e.mineContract)||void 0===l?void 0:l.methods.UNSTAKE_COOLDOWN_DURATION().call();case 12:if(d=n.sent,u){f=p(u);try{for(h=function(){var e=m.value;r.push(parseInt(e.tokenId)),c((function(n){return v(v({},n),{},(0,o.Z)({},e.tokenId,v(v({},n[e.tokenId]),{},{level:parseInt(e.level)})))}))},f.s();!(m=f.n()).done;)h()}catch(i){f.e(i)}finally{f.f()}B(setInterval((function(){var e,n=p(u);try{var t=function(){var n=e.value,t=new Date(1e3*(parseInt(n.startTimestamp)+parseInt(d))).getTime()-(new Date).getTime(),r={h:Math.floor(t/1e3/60/60),m:Math.floor(t%36e5/6e4),s:Math.floor(t%6e4/1e3)};U((function(e){return v(v({},e),{},(0,o.Z)({},n.tokenId,v(v({},e[n.tokenId]),{},{timeDiff:t,timeRemaining:r,withdraw:!(t>0)})))}))};for(n.s();!(e=n.n()).done;)t()}catch(i){n.e(i)}finally{n.f()}}),1e3))}case 14:E(r);case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),te=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null!==(t=e.diamondContract)&&void 0!==t&&t.methods&&null!==(r=e.mineContract)&&void 0!==r&&r.methods&&e.account&&(null===(o=e.mineContract)||void 0===o||o.methods.claimDiamondsAndMaybeUnstake(k,!1).send({to:d.q7.mine,from:e.account,value:0}).once("sending",(function(e){console.log(e)})).once("sent",(function(e){console.log(e)})).once("transactionHash",(function(e){console.log(e)})).once("receipt",(function(e){ee(),J()})).on("error",(function(e){console.log(e)})).then((function(e){console.log(e)})).catch((function(e){console.log(e)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),re=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,o,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===(t=e.mineContract)||void 0===t||!t.methods||!e.account){n.next=5;break}return n.next=3,null===(r=e.minerContract)||void 0===r?void 0:r.methods.isApprovedForAll(e.account,d.q7.mine).call();case 3:n.sent?null===(o=e.mineContract)||void 0===o||o.methods.stakeMany(y).send({to:d.q7.mine,from:e.account,value:0}).once("receipt",(function(e){ee(),Q()})).catch((function(e){console.log(e)})):null===(a=e.minerContract)||void 0===a||a.methods.setApprovalForAll(d.q7.mine,!0).send({to:d.q7.mine,from:e.account,value:0}).then((function(){var n;null===(n=e.mineContract)||void 0===n||n.methods.stakeMany(y).send({to:d.q7.mine,from:e.account,value:0}).once("receipt",(function(e){ee(),Q()})).catch((function(e){console.log(e)}))}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),oe=function(){var n=(0,a.Z)(i().mark((function n(){var t,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null!==(t=e.diamondContract)&&void 0!==t&&t.methods&&null!==(r=e.mineContract)&&void 0!==r&&r.methods&&e.account&&(null===(o=e.mineContract)||void 0===o||o.methods.claimDiamondsAndMaybeUnstake(O,!0).send({to:d.q7.mine,from:e.account,value:0}).once("receipt",(function(e){ee(),ne()})).catch((function(e){console.log(e)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ae=function(){var n=(0,a.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null!==(t=e.mineContract)&&void 0!==t&&t.methods&&e.account&&(null===(r=e.mineContract)||void 0===r||r.methods.withdrawMiner(T).send({to:d.q7.mine,from:e.account,value:0}).once("receipt",(function(e){Q(),ne()})).catch((function(e){console.log(e)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.default,{children:(0,h.jsx)("title",{children:"Game | MinerVerse"})}),d.e1.whitelistOnly&&(d.e1.whitelistedWallets.find((function(n){var t;return n.toLowerCase()===(null===(t=e.account)||void 0===t?void 0:t.toLowerCase())||""}))?(0,h.jsx)("section",{className:"text-gray-900 bg-gray-900 body-font h-full",children:(0,h.jsxs)("div",{className:"flex flex-col justify-center items-center space-y-5 overflow-auto pt-44 pb-11",children:[(0,h.jsx)("div",{className:"px-11 text-center w-full",children:(0,h.jsxs)("div",{className:"text-xl text-center flex flex-col items-center bg-gray-700 text-white shadow-lg p-6 rounded-lg",children:[(0,h.jsxs)("div",{className:"flex items-center space-x-5",children:[(0,h.jsxs)("h5",{className:"flex flex-col items-start",children:[(0,h.jsx)("span",{children:"Total Diamonds: "}),(0,h.jsx)("span",{children:"Earned Diamonds: "})]}),(0,h.jsxs)("h5",{className:"flex flex-col items-start",children:[(0,h.jsx)("span",{children:X.toFixed(5)}),(0,h.jsx)("span",{children:K.toFixed(5)})]})]}),(0,h.jsx)("button",{disabled:0===K,onClick:te,className:"mt-4 py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md",children:"Claim"})]})}),(0,h.jsxs)("div",{className:"px-11 text-center w-full",children:[(0,h.jsxs)("div",{className:"flex items-center justify-between w-full mb-4 p-2 px-3 bg-gray-700 text-white rounded-lg shadow-lg",children:[(0,h.jsx)("h3",{className:"font-bold text-xl",children:"Staked"}),(0,h.jsxs)("div",{className:"flex space-x-3",children:[(0,h.jsx)("button",{onClick:function(){S([])},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Unselect"}),(0,h.jsx)("button",{onClick:function(){S((0,r.Z)(k))},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Select All"}),(0,h.jsx)("button",{disabled:0===O.length,onClick:oe,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md",children:"Unstake"})]})]}),(0,h.jsx)("div",{className:"flex flex-wrap justify-center",children:k.map((function(e){var n,o;return(0,h.jsx)("div",{onClick:function(){var n=O.indexOf(e);S(n>-1?O.filter((function(n){return n!==e})):[].concat((0,r.Z)(O),[e]))},className:"relative shadow-lg p-4 mr-1 mb-1 w-[100px] cursor-pointer "+(1===(null===(n=t[e])||void 0===n?void 0:n.level)?" text-red-500 ":"text-white ")+(-1!==O.indexOf(e)?" bg-gray-500":"bg-gray-700"),children:(0,h.jsxs)("div",{className:"flex flex-col items-center",children:[(0,h.jsx)("p",{className:"text-lg",children:e}),(null===(o=Z[e])||void 0===o?void 0:o.earned)&&(0,h.jsx)("p",{className:"text-sm text-gray-300",children:Z[e].earned.toFixed(3)})]})},e)}))})]}),(0,h.jsxs)("div",{className:"px-11 text-center w-full",children:[(0,h.jsxs)("div",{className:"flex items-center justify-between w-full mb-4 p-2 px-3 bg-gray-700 text-white rounded-lg shadow-lg",children:[(0,h.jsx)("h3",{className:"font-bold text-xl",children:"Not Staked"}),(0,h.jsxs)("div",{className:"flex space-x-3",children:[(0,h.jsx)("button",{onClick:function(){w([])},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Unselect"}),(0,h.jsx)("button",{onClick:function(){w((0,r.Z)(x))},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Select All"}),(0,h.jsx)("button",{disabled:0===y.length,onClick:re,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md",children:"Stake"})]})]}),(0,h.jsx)("div",{className:"flex flex-wrap justify-center",children:x.map((function(e){var n;return(0,h.jsx)("div",{onClick:function(){var n=y.indexOf(e);w(n>-1?y.filter((function(n){return n!==e})):[].concat((0,r.Z)(y),[e]))},className:"relative shadow-lg p-4 mr-1 mb-1 w-[100px] cursor-pointer "+(1===(null===(n=t[e])||void 0===n?void 0:n.level)?" text-red-500 ":"text-white ")+(-1!==y.indexOf(e)?" bg-gray-500":"bg-gray-700"),children:(0,h.jsx)("p",{className:"",children:e})},e)}))})]})," ",(0,h.jsxs)("div",{className:"px-11 text-center w-full",children:[(0,h.jsxs)("div",{className:"flex items-center justify-between w-full mb-4 p-2 px-3 bg-gray-700 text-white rounded-lg shadow-lg",children:[(0,h.jsx)("h3",{className:"font-bold text-xl",children:"Cooldown"}),(0,h.jsxs)("div",{className:"flex space-x-3",children:[(0,h.jsx)("button",{onClick:function(){F([])},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Unselect"}),(0,h.jsx)("button",{onClick:function(){F((0,r.Z)(_))},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Select All"}),(0,h.jsx)("button",{disabled:0===T.length,onClick:ae,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md",children:"Withdraw"})]})]}),(0,h.jsx)("div",{className:"flex flex-wrap justify-center",children:_.map((function(e){var n,o,a;return(0,h.jsxs)("div",{onClick:function(){var n;if(null!==(n=R[e])&&void 0!==n&&n.withdraw){var t=T.indexOf(e);F(t>-1?T.filter((function(n){return n!==e})):[].concat((0,r.Z)(T),[e]))}},className:"relative shadow-lg p-4 mr-1 mb-1 w-[120px] cursor-pointer "+(1===(null===(n=t[e])||void 0===n?void 0:n.level)?" text-red-500 ":"text-white ")+(-1!==T.indexOf(e)?" bg-gray-500":"bg-gray-700"),children:[(0,h.jsx)("p",{className:"text-lg",children:e}),null===(o=R[e])||void 0===o||!o.timeRemaining||null!==(a=R[e])&&void 0!==a&&a.withdraw?(0,h.jsx)("p",{className:"text-sm text-green-500 flex space-x-1 justify-center",children:"Ready!"}):(0,h.jsxs)("p",{className:"text-sm text-gray-300 flex space-x-1 justify-center",children:[0!==R[e].timeRemaining.h&&(0,h.jsxs)("span",{children:[R[e].timeRemaining.h,"h"]}),0!==R[e].timeRemaining.m&&(0,h.jsxs)("span",{children:[R[e].timeRemaining.m,"m"]}),0!==R[e].timeRemaining.s&&(0,h.jsxs)("span",{children:[R[e].timeRemaining.s,"s"]})]})]},e)}))})]})]})}):(0,h.jsx)(h.Fragment,{}))]})}},43790:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return t(4055)}])}},function(e){e.O(0,[774,888,179],(function(){return n=43790,e(e.s=n);var n}));var n=e.O();_N_E=n}]);