(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{52536:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var a=n(67294),s=n(9473),r=n(3283),i=n.n(r),l=n(76509),o=n(84446),c=n(25675),d=n.n(c),u=n(50029),h=n(87794),m=n.n(h),p=n(80895),x=n(51393),f=function(e){return{type:p.t_,payload:e}},v=n(57592),g=n(33065),b=n(69415),y=n(9008),w=n(41664),j=n.n(w),S=n(21190),N=n(85893),k=function(){var e=(0,s.I0)(),t=(0,s.v9)((function(e){return e.general})),n=(0,a.useState)(!1),r=n[0],i=n[1];(0,a.useEffect)((function(){var e="true"===localStorage.getItem("markAlreadyClicked");i(e)}),[]);return(0,N.jsx)("div",{className:"absolute flex justify-center z-20 transition-all duration-300 select-none p-inherit "+(t.botCurrentSpeech||t.botToggled?"-bottom-[14vh]":"-bottom-[18vh] animate-bounce"),children:(0,N.jsxs)(S.M,{children:[(0,N.jsx)(v.E.div,{className:"z-30 drop-shadow-mark h-[30vh] w-[13.5vh] transition-all duration-500 select-none p-inherit ",children:(0,N.jsx)(d(),{title:"Mark Bot",src:"/images/mark.png",layout:"fill",objectFit:"contain",className:"cursor-pointer",onClick:function(){t.botCurrentSpeech?e((0,g.$i)()):(r||(i(!0),localStorage.setItem("markAlreadyClicked","true")),e((0,g.t9)()))}})},"mark-image"),t.botCurrentSpeech&&!t.botToggled&&(0,N.jsxs)(v.E.div,{exit:{scale:0},initial:{scale:0},animate:{scale:1,transformOrigin:"bottom left",transition:{duration:.3,delay:.5,ease:"easeInOut"}},className:"left-5 md:left-10 z-10 w-max max-w-[16rem] md:max-w-[20rem] lg:max-w-[24rem] flex flex-col justify-center items-center absolute bottom-[33vh] text-gray-900",children:[(0,N.jsx)("div",{className:"mt-[3vh] md:mt-[5vh] -z-10 absolute w-full h-full overflow-hidden select-none text-bubble",children:(0,N.jsx)(d(),{src:"/images/text-bubble.png",layout:"fill",objectFit:"fill"})}),(0,N.jsx)("p",{className:"z-10 p-[5vh] md:p-[5vh] text-center w-full text-xs md:text-sm "+(t.botCurrentSpeech.isError?" text-red-500":" text-black"),children:t.botCurrentSpeech.message})]},"text-bubble"),!r&&!t.botCurrentSpeech&&(0,N.jsx)(v.E.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1,scale:[0,2,1],transition:{duration:.5}},className:"z-10 p-[2vh] flex items-center justify-center text-center absolute bottom-[32vh]",children:(0,N.jsx)("div",{className:"h-[5vh] w-[1vh] lg:h-[10vh] lg:w-[6vh]  flex items-center exclamation-mark cursor-pointer",children:(0,N.jsx)(d(),{src:"/images/exclamation-mark.png",layout:"fill",objectFit:"contain"})})},"exclamation-mark"),(0,N.jsx)(v.E.div,{className:"z-20 p-5 left-0 md:left-auto w-auto flex flex-col space-y-[2vh] justify-center absolute bottom-[31vh] text-gray-900",children:(0,N.jsx)(S.M,{children:t.botToggled&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(v.E.div,{className:"flex md:justify-center space-x-[2vh] z-10",children:[(0,N.jsx)(v.E.a,{href:"https://twitter.com/MinerVerseNFT",target:"_blank",rel:"noopener noreferrer",variants:{hidden:{opacity:0,translateY:100,zIndex:-7,transition:{delay:.2,duration:.1}},show:{opacity:1,translateY:0,zIndex:-6,transition:{delay:.4,duration:.4}}},exit:"hidden",initial:"hidden",animate:"show",whileHover:{scale:1.1},className:"relative w-[50px] h-[50px] cursor-pointer twitter-button",children:(0,N.jsx)(d(),{src:"/images/twitter-icon.png",layout:"fill",objectFit:"contain"})},"twitter-button"),(0,N.jsx)(v.E.a,{href:"https://discord.gg/2hVNsWRaJV",target:"_blank",rel:"noopener noreferrer",variants:{hidden:{opacity:0,translateY:100,zIndex:-8,transition:{delay:.1,duration:.1}},show:{opacity:1,translateY:0,zIndex:-7,transition:{delay:.6,duration:.4}}},exit:"hidden",initial:"hidden",animate:"show",whileHover:{scale:1.1},className:"relative w-[50px] h-[50px] cursor-pointer discord-button",children:(0,N.jsx)(d(),{src:"/images/discord-icon.png",layout:"fill",objectFit:"contain"})},"discord-button")]}),(0,N.jsx)(v.E.div,{variants:{hidden:{opacity:0,translateY:100,zIndex:10,transition:{delay:.3,duration:.1}},show:{opacity:1,translateY:0,zIndex:11,transition:{delay:.2,duration:.4}}},onClick:function(){e((0,g.t9)())},exit:"hidden",initial:"hidden",animate:"show",whileHover:{scale:1.1},className:"h-[50px] flex items-center whitelist-button cursor-pointer",children:(0,N.jsx)(j(),{href:"/whitepaper",children:(0,N.jsx)("div",{className:"h-[50px] w-[180px] flex items-center whitelist-button cursor-pointer",children:(0,N.jsx)(d(),{src:"/images/whitepaper-button.png",layout:"fill",objectFit:"contain"})})})},"whitepaper-button")]})})})]})})},M=n(11163),E=function(){var e=(0,s.I0)(),t=(0,M.useRouter)(),n=(0,s.v9)((function(e){return e.blockchain})),r=(0,s.v9)((function(e){return e.mintData})),c=(0,s.v9)((function(e){return e.general})),h=(0,a.useState)(""),w=h[0],j=h[1],S=(0,a.useState)(0),E=S[0],T=S[1],C=["Price: ".concat(i().utils.fromWei(r.price)," ").concat(l.$.nativeCurrency.symbol),"Total Supply: ".concat(r.maxTotalSupply," Miners"),"Presale Supply: ".concat(r.maxPresaleSupply," Miners"),"".concat(r.superPercentage,"% chance to mint a Super Miner")],P=(0,a.useState)(),I=P[0],_=P[1],z=(0,a.useRef)();(0,a.useEffect)((function(){}),[]),(0,a.useEffect)((function(){e(function(){var e=(0,u.Z)(m().mark((function e(t){var n,a,s,r,i,l,o,c,d,u,h,v,g,b,y;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.h.getState().blockchain.minerContract;case 3:if(!(n=e.sent)){e.next=57;break}return e.next=7,null===n||void 0===n?void 0:n.methods.BASE_SUPER_PERCENTAGE().call();case 7:return a=e.sent,e.next=10,null===n||void 0===n?void 0:n.methods.MAX_PER_MINT().call();case 10:return s=e.sent,e.next=13,null===n||void 0===n?void 0:n.methods.NFT_TAX().call();case 13:return r=e.sent,e.next=16,null===n||void 0===n?void 0:n.methods.baseSupply().call();case 16:return i=e.sent,e.next=19,null===n||void 0===n?void 0:n.methods.presaleSupply().call();case 19:return l=e.sent,e.next=22,null===n||void 0===n?void 0:n.methods.MAX_BASE_SUPPLY().call();case 22:return o=e.sent,e.next=25,null===n||void 0===n?void 0:n.methods.MAX_PRESALE_SUPPLY().call();case 25:return c=e.sent,e.next=28,null===n||void 0===n?void 0:n.methods.totalSupply().call();case 28:return d=e.sent,e.next=31,null===n||void 0===n?void 0:n.methods.presaleOpen().call();case 31:return u=e.sent,e.next=34,null===n||void 0===n?void 0:n.methods.baseSalesOpen().call();case 34:return h=e.sent,e.next=37,null===n||void 0===n?void 0:n.methods.gameStarted().call();case 37:return v=e.sent,e.next=40,null===n||void 0===n?void 0:n.methods.presaleStartTime().call();case 40:return g=e.sent,e.next=43,null===n||void 0===n?void 0:n.methods.salesStartTime().call();case 43:if(b=e.sent,y=0,!h){e.next=51;break}return e.next=48,null===n||void 0===n?void 0:n.methods.BASE_MINT_PRICE().call();case 48:y=e.sent,e.next=54;break;case 51:return e.next=53,null===n||void 0===n?void 0:n.methods.PRESALE_MINT_PRICE().call();case 53:y=e.sent;case 54:t((m={superPercentage:parseFloat(a),maxPerMint:parseInt(s),nftTax:r,baseSupply:parseInt(i),presaleSupply:parseInt(l),maxBaseSupply:parseInt(o),maxPresaleSupply:parseInt(c),maxTotalSupply:parseInt(o)+parseInt(c),totalSupply:d,presaleOpen:u,baseSalesOpen:h,gameStarted:v,price:y,presaleStartTime:g,baseSaleStartTime:b},{type:p.Rt,payload:m})),e.next=58;break;case 57:t(f({errorMsg:"Smart contract doesn't exist"}));case 58:e.next=64;break;case 60:e.prev=60,e.t0=e.catch(0),console.log(e.t0),t(f({errorMsg:e.t0}));case 64:case"end":return e.stop()}var m}),e,null,[[0,60]])})));return function(t){return e.apply(this,arguments)}}())}),[n.minerContract]),(0,a.useEffect)((function(){var t;j(""),n.account&&e((t=n.account,function(){var e=(0,u.Z)(m().mark((function e(n){var a,s;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.h.getState().blockchain.minerContract;case 3:if(!(a=e.sent)){e.next=11;break}return e.next=7,null===a||void 0===a?void 0:a.methods.isWhiteListed(t).call();case 7:s=e.sent,n((r={isWhiteListed:s},{type:p.Oe,payload:r})),e.next=12;break;case 11:n(f({errorMsg:"Smart contract doesn't exist"}));case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),n(f({errorMsg:e.t0}));case 18:case"end":return e.stop()}var r}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()))}),[n.account,n.network]),(0,a.useEffect)((function(){clearInterval(z.current);var e=1e3,t=6e4,n=36e5,a=24*n;r.baseSalesOpen?r.presaleOpen||r.presaleStartTime&&(z.current=setInterval((function(){var s=new Date(1e3*parseInt(r.presaleStartTime)).getTime()-(new Date).getTime(),i=s>0?{d:Math.floor(s/a),h:Math.floor(s%a/n),m:Math.floor(s%n/t),s:Math.floor(s%t/e),until:"PRESALE"}:null;_(i)}),1e3)):r.baseSaleStartTime&&(z.current=setInterval((function(){var s=new Date(1e3*parseInt(r.presaleStartTime)).getTime()-(new Date).getTime(),i=s>0?{d:Math.floor(s/a),h:Math.floor(s%a/n),m:Math.floor(s%n/t),s:Math.floor(s%t/e),until:"Sales"}:null;_(i)}),1e3))}),[r.baseSaleStartTime,r.presaleStartTime,r.baseSalesOpen,r.presaleOpen]),(0,a.useEffect)((function(){T(""!==w?parseFloat(r.price)*parseFloat(w)+parseFloat(r.nftTax):0)}),[w]);var F=(0,a.useCallback)((function(){l.e1.whitelistOnly&&!l.e1.whitelistedWallets.find((function(e){var t;return e.toLowerCase()===(null===(t=n.account)||void 0===t?void 0:t.toLowerCase())||""}))?e((0,g.hc)("Woah there, game is still in development, you're not allowed to enter yet!")):t.push("/game")}),[n.account]),O=(0,a.useCallback)((function(){setTimeout((function(){var t;if(l.e1.whitelistOnly&&!l.e1.whitelistedWallets.find((function(e){var t;return e.toLowerCase()===(null===(t=n.account)||void 0===t?void 0:t.toLowerCase())||""})))e((0,g.hc)("Woah there, game is still in development, you're not allowed to enter yet!"));else if(""===w&&e((0,g.hc)("Please enter a quantity (0-".concat(r.maxPerMint,")"))),n.minerContract&&n.account&&""!==w)if(r.baseSalesOpen)null===(t=n.minerContract)||void 0===t||t.methods.mintBase(parseInt(w)).send({gasLimit:String(7e6),to:l.q7.miner,from:n.account,value:E}).once("sending",(function(e){console.log(e)})).once("sent",(function(e){console.log(e)})).once("transactionHash",(function(t){e((0,g.zn)("Requesting ".concat(w," ").concat("1"===w?"miner":"miners","... Please wait"))),console.log(t)})).once("receipt",(function(t){e((0,g.zn)("Your ".concat("1"===w?"miner has":"miners have"," arrived!"))),console.log(t)})).on("error",(function(t){e((0,g.hc)("Oh no! Your ".concat("1"===w?"miner":"miners"," couldn't make it!"))),console.log(t)})).then((function(t){n.account&&e((0,o.cr)(n.account)),e((0,g.V_)({isError:!1,key:"Transaction-"+t.transactionHash,hash:t.transactionHash,link:"".concat(l.$.snowtrace).concat(t.transactionHash)})),console.log(t)}));else if(r.presaleOpen&&r.isWhiteListed){var a;null===(a=n.minerContract)||void 0===a||a.methods.presaleMintBase(parseInt(w)).send({gasLimit:String(7e6),to:l.q7.miner,from:n.account,value:E}).once("sending",(function(e){console.log(e)})).once("sent",(function(e){console.log(e)})).once("transactionHash",(function(t){e((0,g.zn)("Requesting ".concat(w," ").concat("1"===w?"miner":"miners","... Please wait"))),console.log(t)})).once("receipt",(function(t){e((0,g.zn)("Your ".concat("1"===w?"miner has":"miners have"," arrived!"))),console.log(t)})).on("error",(function(t){e((0,g.hc)("Oh no! Your ".concat("1"===w?"miner":"miners"," couldn't make it!"))),console.log(t)})).then((function(t){n.account&&e((0,o.cr)(n.account)),e((0,g.V_)({isError:!1,key:"Transaction-"+t.transactionHash,hash:t.transactionHash,link:"".concat(l.$.snowtrace).concat(t.transactionHash)})),console.log(t.transactionHash)})).catch((function(e){console.log(e)}))}}),100)}),[n.minerContract,n.account,r,w,E]),A=(0,a.useMemo)((function(){var e="0%";r.totalSupply&&(e=r.baseSalesOpen||r.gameStarted?(r.totalSupply/r.maxBaseSupply*100).toFixed(2)+"%":(r.totalSupply/r.maxPresaleSupply*100).toFixed(2)+"%");return e}),[r]),L=(0,a.useMemo)((function(){var e="- / -";return r.totalSupply&&(r.baseSalesOpen||r.gameStarted?(e=r.totalSupply+" / "+r.maxBaseSupply,r.totalSupply>=r.maxBaseSupply&&(e="Sold Out")):e=r.totalSupply+" / "+r.maxPresaleSupply),e}),[r]),R=(0,a.useMemo)((function(){return!r.gameStarted&&(!!r.presaleOpen&&!!r.isWhiteListed)}),[r]),Y=(0,a.useMemo)((function(){return r.gameStarted?"Game has already started":r.presaleOpen?r.isWhiteListed?"Mint":"You're not whitelisted":"Presale hasn't started"}),[r]);return(0,N.jsxs)("div",{className:"relative overflow-hidden h-screen w-screen max-w-[100vw] px-0 md:px-10 lg:px-16 xl:px-24",children:[(0,N.jsx)(y.default,{children:(0,N.jsx)("title",{children:"Home | MinerVerse"})}),!c.isLoading&&(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(v.E.section,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1,transition:{duration:.6,delay:.1}},className:"mint-section text-gray-400 body-font relative bottom-0",children:[!c.isLoading&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:"parchment-frame absolute z-10 overflow-hidden select-none drop-shadow-parchment-stand",children:(0,N.jsx)(d(),{src:"/images/parchment-frame.png",layout:"fill",objectFit:"fill"})}),(0,N.jsxs)("div",{className:"parchment-content relative text-gray-900 rounded-xl flex justify-center z-10",children:[(0,N.jsx)("div",{className:"parchment-image-container absolute -z-10 w-full h-full overflow-hidden select-none drop-shadow-parchment",children:(0,N.jsx)(d(),{src:"/images/parchment.png",layout:"fill",objectFit:"fill"})}),(0,N.jsxs)("div",{className:"flex flex-col h-full mint-container",children:[(0,N.jsx)("h2",{className:"text-center font-bold text-black",children:(0,N.jsx)("span",{children:"Mint Miners"})}),(0,N.jsx)("div",{className:"relative text-md flex items-center justify-center section",children:(0,N.jsx)("div",{className:"relative image",children:(0,N.jsx)(d(),{src:"/images/MinerTrio.png",objectFit:"contain",layout:"fill"})})}),I&&(0,N.jsxs)("div",{className:"text-center text-white font-bold countdown",children:[I.until&&(0,N.jsx)("p",{className:" ",children:I.until}),0!=I.d&&(0,N.jsxs)("span",{children:[I.d,"d "]}),0!=I.h&&(0,N.jsxs)("span",{children:[I.h,"h "]}),0!=I.m&&(0,N.jsxs)("span",{children:[I.m,"m "]}),I.s&&(0,N.jsxs)("span",{className:"text-red-500",children:[I.s,"s "]})]}),(0,N.jsxs)("div",{className:"relative section",children:[(0,N.jsx)("div",{className:"flex justify-end",children:(0,N.jsx)("p",{className:"font-medium text-gray-900",children:L})}),(0,N.jsx)("div",{className:"w-full bg-yellow-900 rounded-full progress",children:(0,N.jsx)("div",{className:"bg-green-500 h-full rounded-full",style:{width:A}})})]}),(0,N.jsxs)("div",{className:"relative flex flex-col section",children:[(0,N.jsxs)("label",{htmlFor:"quantity",className:"text-gray-900 flex justify-between",children:[(0,N.jsx)("span",{className:"font-bold",children:"Quantity"}),(0,N.jsxs)("span",{className:"tracking-widest",children:["MAX ( ",r.maxPerMint," )"]})]}),(0,N.jsx)("input",{disabled:!R,title:Y,type:"text",id:"quantity",name:"quantity",min:0,max:r.maxPerMint,onSelect:function(e){"0"===w&&j("")},value:w,onChange:function(e){var t=e.target,n=t.value,a=t.min,s=t.max;isNaN(n)?j(""):(n=Math.max(Number(a),Math.min(Number(s),Number(n))).toString(),j("0"===n?"":n))},placeholder:"Max ".concat(r.maxPerMint," at a time"),className:"w-full text-center disabled:cursor-not-allowed placeholder:text-gray-700 bg-zinc-400 bg-opacity-20 focus:bg-transparent focus:ring-2 rounded border-gray-600 outline-none transition-colors duration-200 ease-in-out"})]}),(0,N.jsxs)("div",{className:"section font-bold",children:[(0,N.jsxs)("div",{className:"relative tracking-widest flex justify-between",children:[(0,N.jsx)("h5",{children:"NFT Tax"}),(0,N.jsx)("h5",{children:0===E?"--":i().utils.fromWei(r.nftTax)+" AVAX"})]}),(0,N.jsxs)("div",{className:"relative tracking-widest flex justify-between",children:[(0,N.jsx)("h4",{children:"Total"}),(0,N.jsxs)("h4",{children:[0===E?"--":i().utils.fromWei(E.toString())+" AVAX"," "]})]})]}),(0,N.jsx)("div",{className:"relative flex flex-col section",children:n.hasMetaMask?n.account?(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("button",{disabled:!!n.isRightNetwork&&!R,onClick:function(){n.isRightNetwork?O():(0,o.If)()},title:n.isRightNetwork?Y:"",className:"w-full text-white text-shadow-white font-bold border-0 disabled:cursor-not-allowed focus:outline-none rounded shadow-center-lg "+(n.isRightNetwork?"bg-cyan-400  hover:bg-cyan-500 disabled:hover:bg-cyan-400 shadow-cyan-400":" bg-red-600 cursor-pointer shadow-red-700"),children:n.isRightNetwork?"Mint":"Switch Network \ud83d\udd3a"})}):(0,N.jsx)("button",{onClick:function(){e((0,o.$j)())},className:"w-full bg-cyan-400 hover:bg-cyan-500 shadow-center-lg shadow-cyan-500 font-semibold text-gray-900 rounded-lg",children:"Connect Wallet"}):(0,N.jsx)(b.G,{})}),(0,N.jsxs)("div",{className:"relative flex flex-col section",children:[(0,N.jsx)("h3",{className:"font-bold text-center",children:"Sale Details"}),C.map((function(e,t){return(0,N.jsxs)("p",{className:"flex justify-between text-center",children:[(0,N.jsx)("span",{children:"\ud83d\udc8e"}),(0,N.jsx)("span",{children:e}),(0,N.jsx)("span",{children:"\ud83d\udc8e"})]},t)}))]})]})]})]}),(0,N.jsxs)(v.E.div,{initial:{opacity:0,translateY:400},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.5}},className:"flex justify-between w-full absolute bottom-10 z-20",children:[(0,N.jsx)("div",{className:"relative",children:(0,N.jsx)(k,{})}),(0,N.jsxs)(v.E.button,{initial:{opacity:0},animate:{opacity:1},whileHover:{scale:1.1},className:"play-button z-30 transition-all drop-shadow-arrow",onClick:F,children:[(0,N.jsx)(d(),{src:"/images/arrow-sign.png",layout:"fill",objectFit:"fill"}),(0,N.jsx)("h2",{className:"text-white font-bold play-button",children:"PLAY"})]})]})]},"minting-container")})]})}},45301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(52536)}])}},function(e){e.O(0,[774,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);