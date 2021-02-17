!function(e){function n(n){for(var a,l,c=n[0],u=n[1],i=n[2],d=0,b=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&b.push(r[l][0]),r[l]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(s&&s(n);b.length;)b.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var u=t[c];0!==r[u]&&(a=!1)}a&&(o.splice(n--,1),e=l(l.s=t[0]))}return e}var a={},r={0:0},o=[];function l(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,a){t=r[e]=[n,a]}));n.push(t[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=function(e){return l.p+""+({1:"computerKeyboard",2:"guitar",3:"piano"}[e]||e)+".js"}(e);var u=new Error;o=function(n){c.onerror=c.onload=null,clearTimeout(i);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,t[1](u)}r[e]=void 0}};var i=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(n)},l.m=e,l.c=a,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)l.d(t,a,function(n){return e[n]}.bind(null,a));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var i=0;i<c.length;i++)n(c[i]);var s=u;o.push([38,4]),t()}({13:function(e,n,t){"use strict";var a=t(0),r=t(10);n.a=Object(r.b)()((function(e){var n=e.data,t=e.onChangeEventHandler,r=e.controlType,o=e.selectedValue,l=e.dispatch,c=n.map((function(e){return a.default.createElement("option",{value:e.label,key:e.label},e.label)}));return a.default.createElement("select",{onChange:function(e){var n={};n[e.target.dataset.controlType]=e.target.value,t(l,n)}.bind(void 0),"data-control-type":r,value:o},c)}))},3:function(e,n,t){"use strict";n.a={LOAD_NOTES:"LOAD_NOTES",VFLIP_FRETBOARD:"VFLIP_FRETBOARD",HFLIP_FRETBOARD:"HFLIP_FRETBOARD",CHANGE_TUNING:"CHANGE_TUNING",CHANGE_INSTRUMENT:"CHANGE_INSTRUMENT",MIDI_NOTE_ON:"MIDI_NOTE_ON",MIDI_NOTE_OFF:"MIDI_NOTE_OFF"}},31:function(e,n,t){var a=t(32);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(19)(a,r);a.locals&&(e.exports=a.locals)},32:function(e,n,t){(e.exports=t(18)(!1)).push([e.i,".notesSetter {\n  list-style: none;\n  padding: 0;\n  margin: 5px 0;\n  display: flex;\n}\n",""])},34:function(e,n,t){var a=t(35);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(19)(a,r);a.locals&&(e.exports=a.locals)},35:function(e,n,t){(e.exports=t(18)(!1)).push([e.i,".menu {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.menu a {\n  text-decoration: none;\n  text-transform: uppercase;\n}\n.menu nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.menu nav ul li {\n  margin: 0 10px;\n}\n.menu nav ul li a {\n  color: black;\n  font-weight: bold;\n}\n.menu,\nnav ul {\n  display: flex;\n  align-items: center;\n}\n/* The menu on home page is postioned differently than the pages */\n.home .menu {\n  position: static;\n}\n.home .menu .notesSetter {\n  display: none;\n}\n.page .menu {\n  position: fixed;\n  top: 20px;\n}\n.page .menu p {\n  display: none;\n}\na,\nnav ul li a:focus,\nli.selected a {\n  color: #00dab8;\n}\n",""])},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(42),o=t(12),l=t(10),c=t(3),u=t(4),i={octavesOfPianoNotes:Object(u.c)(),scale:"Major",chord:"M",notesType:"scale",rootNote:"C",notes:[],fretboardIsVFlipped:!1,fretboardIsHFlipped:!1,selectedTuningIdx:0,selectedInstrumentIdx:0,activeMidiNote:""},s=t(9),d=t(40),b=t(41),f=t(15),p=t.n(f),m=t(13),E=(t(31),Object(l.b)((function(e){return{scales:e.scales,chords:e.chords,notesType:e.notesType,rootNote:e.rootNote,currentScale:e.scale,currentChord:e.chord}}))((function(e){var n,t,r,o=e.currentScale,l=e.currentChord,c=e.notesType,i=e.rootNote;return a.default.createElement("ul",{className:"notesSetter"},a.default.createElement("li",null,a.default.createElement(m.a,{data:Object(u.d)(),controlType:"rootNote",onChangeEventHandler:s.c,selectedValue:i})),a.default.createElement("li",null,(n=Object(u.f)(),t="scale",r=o,"chord"===c&&(n=Object(u.b)(),t="chord",r=l),a.default.createElement(m.a,{data:n,controlType:t,onChangeEventHandler:s.c,selectedValue:r}))),a.default.createElement("li",null,a.default.createElement(m.a,{data:[{name:"scale",label:"scale"},{name:"chord",label:"chord"}],controlType:"notesType",onChangeEventHandler:s.c,selectedValue:c})))}))),g=(t(34),function(){var e=location.hash.replace("#/",""),n="guitar"===e?"selected":"",t="piano"===e?"selected":"",r="keyboard"===e?"selected":"";return a.default.createElement("div",{className:"menu"},a.default.createElement("p",null,"Generate chord & scale charts to practice"),a.default.createElement("nav",null,a.default.createElement("ul",null,a.default.createElement("li",{className:n},a.default.createElement(d.a,{to:"/guitar"},"Guitar")),a.default.createElement("li",{className:t},a.default.createElement(d.a,{to:"/piano"},"Piano")),a.default.createElement("li",{className:r},a.default.createElement(d.a,{to:"/keyboard"},"Keyboard")))),a.default.createElement(E,null))}),h=p()({loader:function(){return t.e(3).then(t.bind(null,50))},loading:function(){return a.default.createElement("div",null,"loading ...")}}),D=p()({loader:function(){return t.e(2).then(t.bind(null,49))},loading:function(){return a.default.createElement("div",null,"loading ...")}}),O=p()({loader:function(){return t.e(1).then(t.bind(null,51))},loading:function(){return a.default.createElement("div",null,"loading ...")}}),I=function(){var e="page";return"#/"===location.hash&&(e="home"),e+=" app",a.default.createElement("section",{className:e},a.default.createElement(d.a,{to:"/"},a.default.createElement("h1",{className:"logo"},"Johann")),a.default.createElement(g,null),a.default.createElement(b.a,{path:"/piano",exact:!0,component:h}),a.default.createElement(b.a,{path:"/guitar",exact:!0,component:D}),a.default.createElement(b.a,{path:"/keyboard",exact:!0,component:O}))},v=t(24),G=Object(l.b)()((function(e){var n=e.dispatch;function t(e){var t=e.data;144===t[0]&&Object(s.g)(n,v.Util.noteFromMidiPitch(t[1],!0)),128===t[0]&&Object(s.f)(n)}return navigator.requestMIDIAccess?navigator.requestMIDIAccess({sysex:!1}).then((function(e){for(var n=e.inputs.values(),a=n.next();a&&!a.done;a=n.next())a.value.onmidimessage=t}),(function(e){console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim "+e)})):console.log("No MIDI support in your browser."),""})),A=Object(o.b)((function(e,n){switch(void 0===e&&(e=i),n.type){case c.a.LOAD_NOTES:var t=Object.assign({},e,n.data);return"chord"===t.notesType?t.notes=Object(u.a)(t.rootNote+t.chord):t.notes=Object(u.e)(t.rootNote,t.scale),t.octavesOfPianoNotes.forEach((function(e){e.forEach((function(e){e.highlight=t.notes.indexOf(e.note)>-1,e.rootNote=e.name===t.rootNote}))})),t;case c.a.VFLIP_FRETBOARD:return Object.assign({},e,{fretboardIsVFlipped:!e.fretboardIsVFlipped});case c.a.HFLIP_FRETBOARD:return Object.assign({},e,{fretboardIsHFlipped:!e.fretboardIsHFlipped});case c.a.CHANGE_TUNING:case c.a.CHANGE_INSTRUMENT:return Object.assign({},e,n.data);case c.a.MIDI_NOTE_ON:return Object.assign({},e,{activeMidiNote:n.data});case c.a.MIDI_NOTE_OFF:return Object.assign({},e,{activeMidiNote:""});default:return e}}));A.subscribe((function(){a.default.render(a.default.createElement(r.a,null,a.default.createElement(l.a,{store:A},a.default.createElement(a.default.Fragment,null,a.default.createElement(I,null),a.default.createElement(G,null)))),document.getElementById("root"))})),Object(s.e)(A.dispatch)},4:function(e,n,t){"use strict";t.d(n,"f",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"e",(function(){return c})),t.d(n,"a",(function(){return u})),t.d(n,"d",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"j",(function(){return d})),t.d(n,"k",(function(){return b})),t.d(n,"i",(function(){return f})),t.d(n,"h",(function(){return p})),t.d(n,"g",(function(){return m}));var a=t(5),r=function(){return Object(a.scales)().map((function(e){return{name:e,label:e[0].toUpperCase()+e.slice(1)}}))},o=function(){return Object(a.chords)().map((function(e){return{name:e,label:e}}))},l=function(e){if(!e.includes("#"))return e;var n=e.replace(/\d/,"");return e.replace(n,{"C#":"Db","D#":"Eb","F#":"Gb","G#":"Ab","A#":"Bb"}[n])},c=function(e,n){var t=Object(a.scale)(e+1+" "+n.toLowerCase()).map(l),r=Object(a.scale)(e+2+" "+n.toLowerCase()).map(l),o=Object(a.scale)(e+3+" "+n.toLowerCase()).map(l),c=Object(a.scale)(e+4+" "+n.toLowerCase()).map(l),u=Object(a.scale)(e+5+" "+n.toLowerCase()).map(l),i=Object(a.scale)(e+6+" "+n.toLowerCase()).map(l);return t.concat(r,o,c,u,i)},u=function(e){var n=Object(a.chord)(e+"_2"),t=Object(a.chord)(e+"_3"),r=Object(a.chord)(e+"_4"),o=Object(a.chord)(e+"_5");return n.concat(t,r,o)},i=function(){return[{label:"C",name:"C",color:"white"},{label:"Db",name:"Db",color:"black"},{label:"D",name:"D",color:"white"},{label:"Eb",name:"Eb",color:"black"},{label:"E",name:"E",color:"white"},{label:"F",name:"F",color:"white"},{label:"Gb",name:"Gb",color:"black"},{label:"G",name:"G",color:"white"},{label:"Ab",name:"Ab",color:"black"},{label:"A",name:"A",color:"white"},{label:"Bb",name:"Bb",color:"black"},{label:"B",name:"B",color:"white"}]},s=function(){var e=i(),n=[[],[],[]];return e.forEach((function(e){n[0].push(Object.assign({},e,{note:e.label+3})),n[1].push(Object.assign({},e,{note:e.label+4})),n[2].push(Object.assign({},e,{note:e.label+5}))})),n},d=function(){return[{display:"EBGDAE",label:"Regular",name:0,strings:["E2","A2","D3","G3","B3","E4"],tuningIdx:0},{display:"EBGDAD",label:"Dropped D",name:1,strings:["D2","A2","D3","G3","B3","E4"],tuningIdx:1},{display:"DADGBD",label:"Double dropped D",name:2,strings:["D2","B2","G3","D3","A3","D4"],tuningIdx:2},{display:"DAFCGC",label:"Drop C",name:3,strings:["C2","G2","C3","F3","A3","D4"],tuningIdx:3},{display:"DGDGBD",label:"Open G",name:4,strings:["D2","B2","G3","D3","G3","D4"],tuningIdx:4},{display:"ECG#ECG#",label:"Major Third",name:5,strings:["Ab2","C3","E3","Ab3","C4","E4"],tuningIdx:5},{display:"FCGDAE",label:"All Fourths",name:6,strings:["E2","A2","D3","G3","C4","F4"],tuningIdx:6}]},b=function(){return[{display:"GCEA",label:"Regular",name:0,strings:["G4","C4","E4","A4"],tuningIdx:0},{display:"gCEA",label:"Low G",name:1,strings:["G3","C4","E4","A4"],tuningIdx:1},{display:"GCEG",label:"Drop G",name:2,strings:["G4","C4","E4","G4"],tuningIdx:2},{display:"DGBE",label:"Baritone",name:3,strings:["D4","G3","B3","E3"],tuningIdx:3}]},f=function(){return[{label:"Standard",display:"EBGDAEB",strings:["B1","E2","A2","D3","G3","B3","E4"],tuningIdx:0,name:0}]},p=function(e,n){var t=["C1","Db1","D1","Eb1","E1","F1","Gb1","G1","Ab1","A1","Bb1","B1","C2","Db2","D2","Eb2","E2","F2","Gb2","G2","Ab2","A2","Bb2","B2","C3","Db3","D3","Eb3","E3","F3","Gb3","G3","Ab3","A3","Bb3","B3","C4","Db4","D4","Eb4","E4","F4","Gb4","G4","Ab4","A4","Bb4","B4","C5","Db5","D5","Eb5","E5","F5","Gb5","G5","Ab5","A5","Bb5","B5","C6","Db6","D6","Eb6","E6","F6","Gb6","G6","Ab6","A6","Bb6","B6"].indexOf(e);return["C1","Db1","D1","Eb1","E1","F1","Gb1","G1","Ab1","A1","Bb1","B1","C2","Db2","D2","Eb2","E2","F2","Gb2","G2","Ab2","A2","Bb2","B2","C3","Db3","D3","Eb3","E3","F3","Gb3","G3","Ab3","A3","Bb3","B3","C4","Db4","D4","Eb4","E4","F4","Gb4","G4","Ab4","A4","Bb4","B4","C5","Db5","D5","Eb5","E5","F5","Gb5","G5","Ab5","A5","Bb5","B5","C6","Db6","D6","Eb6","E6","F6","Gb6","G6","Ab6","A6","Bb6","B6"].slice(t,t+n+1)},m=function(){return[{label:"Guitar",numberOfStrings:6,frets:24,getTunings:d,instrumentIdx:0,name:0},{label:"Ukulele",numberOfStrings:4,frets:15,getTunings:b,instrumentIdx:1,name:1},{label:"7 Strings Guitar",numberOfStrings:7,frets:24,getTunings:f,instrumentIdx:2,name:2}]}},9:function(e,n,t){"use strict";t.d(n,"e",(function(){return o})),t.d(n,"c",(function(){return l})),t.d(n,"h",(function(){return c})),t.d(n,"d",(function(){return u})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"g",(function(){return d})),t.d(n,"f",(function(){return b}));var a=t(3),r=t(4),o=function(e){return e({type:a.a.LOAD_NOTES})},l=function(e,n){e({type:a.a.LOAD_NOTES,data:n})},c=function(e){e({type:a.a.VFLIP_FRETBOARD})},u=function(e){e({type:a.a.HFLIP_FRETBOARD})},i=function(e){return function(n,t){var r=e.find((function(e){return e.label===t.selectedTuningIdx}));n({type:a.a.CHANGE_TUNING,data:{selectedTuningIdx:r.tuningIdx}})}},s=function(e,n){var t=Object(r.g)().find((function(e){return e.label===n.selectedInstrumentIdx}));e({type:a.a.CHANGE_INSTRUMENT,data:{selectedTuningIdx:0,selectedInstrumentIdx:t.instrumentIdx}})},d=(i(r.j),i(r.k),i(r.i),function(e,n){e({type:a.a.MIDI_NOTE_ON,data:n})}),b=function(e){e({type:a.a.MIDI_NOTE_OFF})}}});
//# sourceMappingURL=bundle.js.map