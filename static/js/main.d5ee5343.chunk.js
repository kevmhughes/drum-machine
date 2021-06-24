(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),i=a(8),d=a.n(i),n=(a(13),a(3)),c=a(4),o=a(2),l=a(6),u=a(5),m=(a(14),a(0)),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handleKeyDown=function(e){e.keyCode===s.props.letter.charCodeAt()&&(s.audio.play(),s.audio.currentTime=0,s.props.handleDisplay(s.props.id))},s.handleClick=function(){s.audio.play(),s.audio.currentTime=0,s.props.handleDisplay(s.props.id)},s.state={},s.handleKeyDown=s.handleKeyDown.bind(Object(o.a)(s)),s.handleClick=s.handleClick.bind(Object(o.a)(s)),s}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),window.focus()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("button",{className:"drum-pad",onClick:this.handleClick,id:this.props.id,children:[Object(m.jsx)("h1",{children:this.props.letter}),Object(m.jsx)("audio",{ref:function(t){return e.audio=t},className:"clip",src:this.props.src,id:this.props.letter})]})}}]),a}(s.Component),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).data=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],s.data2=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],s.state={},s}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return!0===this.props.switch?Object(m.jsx)("div",{id:"drum-layout",children:this.data.map((function(t){return Object(m.jsx)(p,{id:t.id,letter:t.keyTrigger,src:t.url,handleDisplay:e.props.handleDisplay},t.keyCode)}))}):Object(m.jsx)("div",{id:"drum-layout",children:this.data2.map((function(t){return Object(m.jsx)(p,{id:t.id,letter:t.keyTrigger,src:t.url,handleDisplay:e.props.handleDisplay},t.keyCode)}))})}}]),a}(s.Component),y=(a(16),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handleDisplay=function(e){return s.setState({display:e})},s.state={display:"Hit a pad!",switch:!0,sliderVal:.3},s.handleSwitch=s.handleSwitch.bind(Object(o.a)(s)),s.adjustVolume=s.adjustVolume.bind(Object(o.a)(s)),s}return Object(c.a)(a,[{key:"handleSwitch",value:function(){this.setState((function(e){return{switch:!e.switch}})),this.state.switch?this.setState({displayTwo:"Pad: 808"}):this.setState({displayTwo:"Pad: 909"})}},{key:"adjustVolume",value:function(e){var t=this;this.setState({sliderVal:e.target.value,display:"Volume: "+Math.round(100*e.target.value)}),setTimeout((function(){return t.clearDisplay()}),1e3)}},{key:"clearDisplay",value:function(){this.setState({display:""})}},{key:"render",value:function(){var e=this;return[].slice.call(document.getElementsByClassName("clip")).forEach((function(t){t.volume=e.state.sliderVal})),Object(m.jsxs)("div",{id:"drum-machine",children:[Object(m.jsx)("div",{className:"top"}),Object(m.jsxs)("div",{id:"display-panel",children:[Object(m.jsx)("div",{id:"display",children:this.state.display}),this.state.switch?Object(m.jsx)("div",{id:"display-two",children:"Pad: 808"}):Object(m.jsx)("div",{id:"display-two",children:"Pad: 909"})]}),Object(m.jsxs)("div",{className:"control-panel",children:[Object(m.jsx)("div",{children:Object(m.jsx)("input",{className:"slider",max:"1",min:"0",onChange:this.adjustVolume,step:"0.01",type:"range",value:this.state.sliderVal})}),Object(m.jsx)("button",{onClick:this.handleSwitch,className:"btn btn-primary",id:"change-pad-button",children:"Change Pad"})]}),Object(m.jsx)(h,{clipVolume:this.state.sliderVal,switch:this.state.switch,handleDisplay:this.handleDisplay})]})}}]),a}(s.Component)),k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,i=t.getLCP,d=t.getTTFB;a(e),s(e),r(e),i(e),d(e)}))};d.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),k()}},[[17,1,2]]]);
//# sourceMappingURL=main.d5ee5343.chunk.js.map