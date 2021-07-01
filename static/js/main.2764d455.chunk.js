(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{18:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var s=a(2),r=a.n(s),i=a(13),n=a.n(i),d=(a(18),a(4)),c=a(5),o=a(3),l=a(7),u=a(6),m=a(9),p=a(10),h=(a(24),a(0)),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).handleKeyDown=function(e){e.keyCode===s.props.letter.charCodeAt()&&(s.audio.play(),s.audio.currentTime=0,s.props.handleDisplay(s.props.id),s.setState({buttonPress:!s.state.buttonPress}),setTimeout((function(){s.setState({buttonPress:!s.state.buttonPress})}),100))},s.handleClick=function(){s.audio.play(),s.audio.currentTime=0,s.props.handleDisplay(s.props.id)},s.handlePress=function(){s.setState({buttonPress:!s.state.buttonPress})},s.handleRelease=function(){s.setState({buttonPress:!s.state.buttonPress})},s.state={buttonPress:!0},s.handleKeyDown=s.handleKeyDown.bind(Object(o.a)(s)),s.handleClick=s.handleClick.bind(Object(o.a)(s)),s.handlePress=s.handlePress.bind(Object(o.a)(s)),s.handleRelease=s.handleRelease.bind(Object(o.a)(s)),s}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),window.focus()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this,t=this.state.buttonPress?"not-pressed":"pressed";return Object(h.jsxs)("button",{className:"drum-pad linear",onClick:this.handleClick,onMouseDown:this.handlePress,onMouseUp:this.handleRelease,id:this.props.id,children:[Object(h.jsx)("h1",{className:t,children:this.props.letter}),Object(h.jsx)("audio",{ref:function(t){return e.audio=t},className:"clip",src:this.props.src,id:this.props.letter})]})}}]),a}(s.Component),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).data=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],s.data2=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],s.state={},s}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return!0===this.props.switch?Object(h.jsx)("div",{id:"drum-layout",children:this.data.map((function(t){return Object(h.jsx)(y,{id:t.id,letter:t.keyTrigger,src:t.url,handleDisplay:e.props.handleDisplay},t.keyCode)}))}):Object(h.jsx)("div",{id:"drum-layout",children:this.data2.map((function(t){return Object(h.jsx)(y,{id:t.id,letter:t.keyTrigger,src:t.url,handleDisplay:e.props.handleDisplay},t.keyCode)}))})}}]),a}(s.Component),j=(a(26),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).handleDisplay=function(e){return s.setState({display:e})},s.state={display:"Hit a pad!",switch:!0,sliderVal:.3},s.handleSwitch=s.handleSwitch.bind(Object(o.a)(s)),s.adjustVolume=s.adjustVolume.bind(Object(o.a)(s)),s}return Object(c.a)(a,[{key:"handleSwitch",value:function(){this.setState((function(e){return{switch:!e.switch}}))}},{key:"adjustVolume",value:function(e){var t=this;this.setState({sliderVal:e.target.value,display:"Volume: ".concat(Math.round(100*e.target.value))}),setTimeout((function(){return t.clearDisplay()}),1e3)}},{key:"clearDisplay",value:function(){this.setState({display:""})}},{key:"render",value:function(){var e=this;return[].slice.call(document.getElementsByClassName("clip")).forEach((function(t){t.volume=e.state.sliderVal})),Object(h.jsxs)("div",{id:"drum-machine",children:[Object(h.jsx)("div",{className:"top"}),Object(h.jsxs)("div",{id:"display-panel",children:[Object(h.jsx)("div",{id:"display",children:this.state.display}),this.state.switch?Object(h.jsx)("div",{id:"display-two",children:"Kit 1"}):Object(h.jsx)("div",{id:"display-two",children:"Kit 2"})]}),Object(h.jsxs)("div",{className:"control-panel",children:[Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsx)(m.a,{icon:p.b,style:{marginRight:"5px",color:"darkgray"}}),Object(h.jsx)("input",{className:"slider",max:"1",min:"0",onChange:this.adjustVolume,step:"0.01",type:"range",value:this.state.sliderVal}),Object(h.jsx)(m.a,{icon:p.c,style:{marginLeft:"5px",color:"darkgray"}})]}),Object(h.jsx)("button",{onClick:this.handleSwitch,id:"change-pad-button",children:Object(h.jsx)(m.a,{icon:p.a,style:{fontSize:"28px"}})})]}),Object(h.jsx)(k,{clipVolume:this.state.sliderVal,switch:this.state.switch,handleDisplay:this.handleDisplay})]})}}]),a}(s.Component)),b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),s(e),r(e),i(e),n(e)}))};n.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root")),b()}},[[27,1,2]]]);
//# sourceMappingURL=main.2764d455.chunk.js.map