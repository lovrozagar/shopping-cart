import{c as O,j as n,B as T,X as pe,r as s,f as W,g as I,S as xe,L as he,a as ge,$ as $e,h as Se,i as k,k as ve,_ as E,l as P,m as B,o as we,p as be,q as Z,s as ye,M as je,P as Ce,t as Ee,u as Re,v as Me,w as Pe,C as ke}from"./index-99bdd6a4.js";import{B as De}from"./badge-8208acad.js";import{S as Ne,a as _e,b as Te,c as Ie,d as V}from"./select-e81dbf91.js";import{C as ze,a as Ae}from"./card-e7ea8349.js";import{L as Be}from"./like-button-17bd4c33.js";import{C as Ke,a as Le}from"./car-card-details-bar-eb796c8e.js";import{P as Ve}from"./page-section-heading-dc65520f.js";const Fe=O("ArrowDownUp",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]]),He=O("RotateCcw",[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M3 13a9 9 0 1 0 3-7.7L3 8",key:"aahkch"}]]),Oe=O("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]),Ue=e=>e.charAt(0).toUpperCase()+e.slice(1),F={min:0,max:51e5};function Ye({children:e,onClick:t}){return n.jsxs(De,{className:"relative flex gap-1",variant:"secondary",children:[e,n.jsx(T,{variant:"secondary",size:"sm",className:"max-h-[18px] max-w-[18px] p-0",onClick:t,children:n.jsx(pe,{size:16})})]})}function Ge({cars:e,setCarsSorted:t}){const o=r=>{t(r==="recommended"?e:r==="price-low"?i=>[...i].sort((a,l)=>l.price-a.price):i=>[...i].sort((a,l)=>a.price-l.price))};return n.jsxs(Ne,{onValueChange:o,children:[n.jsx(_e,{className:"transition-colors hover:bg-secondary focus:outline-none",children:n.jsxs("div",{className:"mx-auto flex gap-2 font-medium",children:[n.jsx(Fe,{size:16}),n.jsx(Te,{placeholder:"Recommended"})]})}),n.jsxs(Ie,{children:[n.jsx(V,{value:"recommended",children:"Recommended"}),n.jsx(V,{value:"price-high",children:"Lowest price"}),n.jsx(V,{value:"price-low",children:"Highest price"})]})]})}function Xe({mainSrc:e,hoverSrc:t,alt:o="picture"}){const[r,i]=s.useState(!1),[a,l]=s.useState(!1),[u,f]=s.useState(!1);let m=s.useRef(null),h=s.useRef(null);const c=async()=>{await new Promise($=>setTimeout(()=>$(1),300)),i(!0)},x=async()=>{h.current&&clearTimeout(h.current),await new Promise($=>{m.current=setTimeout(()=>$(1),500)}),f(!1),l(!0)},b=()=>{m.current&&clearTimeout(m.current),l(!1),f(!0),h.current=setTimeout(()=>f(!1),300)};return s.useEffect(()=>()=>{m.current&&clearTimeout(m.current),h.current&&clearTimeout(h.current)},[]),n.jsxs("div",{className:"relative z-10 grid h-full w-full  bg-cover bg-center bg-no-repeat",children:[n.jsx(W.LazyLoadImage,{className:I("relative z-10 grid aspect-video h-full w-full object-cover object-center transition-transform"),effect:"blur",placeholder:n.jsx(xe,{className:"h-full w-full"}),src:e,alt:o,afterLoad:()=>c()}),n.jsx(W.LazyLoadImage,{className:I("absolute grid aspect-video h-full w-full object-cover object-center opacity-0 transition-transform",r?"z-20":"",a?"animate-opacity-in":"",u?"animate-opacity-out":""),onMouseEnter:()=>{x()},onMouseLeave:()=>{b()},src:t,alt:o})]})}function qe({category:e,car:t}){return n.jsx(ze,{className:"transition-shadow duration-300 hover:shadow-around-low",children:n.jsxs(Ae,{className:"grid h-full overflow-hidden rounded-md p-0 shadow-md",children:[n.jsx("div",{className:"relative grid h-[270px] overflow-hidden",children:n.jsxs(he,{to:ge.goToProduct(e,t.id),tabIndex:-1,children:[n.jsx(Xe,{mainSrc:t.images[0],hoverSrc:t.images[1]}),n.jsx(Be,{carName:t.name,className:"absolute bottom-2 right-2 z-10 rounded-full bg-background/70 p-[6px]"})]})}),n.jsxs("div",{className:"grid gap-4 px-4 pb-5 pt-3",children:[n.jsx("div",{className:"ml-1 grid gap-3",children:n.jsx(Ke,{name:t.name,type:t.type,id:t.id,price:t.price})}),n.jsx("div",{className:"ml-1",children:n.jsx(Le,{color:t.color,upgrades:t.upgrades})})]})]})})}const ee=["PageUp","PageDown"],te=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ne={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},z="Slider",[H,We,Je]=$e(z),[ae,Rt]=Se(z,[Je]),[Qe,K]=ae(z),Ze=s.forwardRef((e,t)=>{const{name:o,min:r=0,max:i=100,step:a=1,orientation:l="horizontal",disabled:u=!1,minStepsBetweenThumbs:f=0,defaultValue:m=[r],value:h,onValueChange:c=()=>{},onValueCommit:x=()=>{},inverted:b=!1,...$}=e,[S,d]=s.useState(null),p=k(t,v=>d(v)),w=s.useRef(new Set),g=s.useRef(0),C=l==="horizontal",D=S?!!S.closest("form"):!0,Y=C?et:tt,[y=[],de]=ve({prop:h,defaultProp:m,onChange:v=>{var j;(j=[...w.current][g.current])===null||j===void 0||j.focus(),c(v)}}),G=s.useRef(y);function ue(v){const j=dt(y,v);N(v,j)}function fe(v){N(v,g.current)}function me(){const v=G.current[g.current];y[g.current]!==v&&x(y)}function N(v,j,{commit:A}={commit:!1}){const X=pt(a),L=xt(Math.round((v-r)/a)*a+r,X),_=Z(L,[r,i]);de((M=[])=>{const R=lt(M,_,j);if(mt(R,f*a)){g.current=R.indexOf(_);const q=String(R)!==String(M);return q&&A&&x(R),q?R:M}else return M})}return s.createElement(Qe,{scope:e.__scopeSlider,disabled:u,min:r,max:i,valueIndexToChangeRef:g,thumbs:w.current,values:y,orientation:l},s.createElement(H.Provider,{scope:e.__scopeSlider},s.createElement(H.Slot,{scope:e.__scopeSlider},s.createElement(Y,E({"aria-disabled":u,"data-disabled":u?"":void 0},$,{ref:p,onPointerDown:P($.onPointerDown,()=>{u||(G.current=y)}),min:r,max:i,inverted:b,onSlideStart:u?void 0:ue,onSlideMove:u?void 0:fe,onSlideEnd:u?void 0:me,onHomeKeyDown:()=>!u&&N(r,0,{commit:!0}),onEndKeyDown:()=>!u&&N(i,y.length-1,{commit:!0}),onStepKeyDown:({event:v,direction:j})=>{if(!u){const L=ee.includes(v.key)||v.shiftKey&&te.includes(v.key)?10:1,_=g.current,M=y[_],R=a*L*j;N(M+R,_,{commit:!0})}}})))),D&&y.map((v,j)=>s.createElement(it,{key:j,name:o?o+(y.length>1?"[]":""):void 0,value:v})))}),[oe,re]=ae(z,{startEdge:"left",endEdge:"right",size:"width",direction:1}),et=s.forwardRef((e,t)=>{const{min:o,max:r,dir:i,inverted:a,onSlideStart:l,onSlideMove:u,onSlideEnd:f,onStepKeyDown:m,...h}=e,[c,x]=s.useState(null),b=k(t,g=>x(g)),$=s.useRef(),S=ye(i),d=S==="ltr",p=d&&!a||!d&&a;function w(g){const C=$.current||c.getBoundingClientRect(),D=[0,C.width],y=U(D,p?[o,r]:[r,o]);return $.current=C,y(g-C.left)}return s.createElement(oe,{scope:e.__scopeSlider,startEdge:p?"left":"right",endEdge:p?"right":"left",direction:p?1:-1,size:"width"},s.createElement(se,E({dir:S,"data-orientation":"horizontal"},h,{ref:b,style:{...h.style,["--radix-slider-thumb-transform"]:"translateX(-50%)"},onSlideStart:g=>{const C=w(g.clientX);l==null||l(C)},onSlideMove:g=>{const C=w(g.clientX);u==null||u(C)},onSlideEnd:()=>{$.current=void 0,f==null||f()},onStepKeyDown:g=>{const D=ne[p?"from-left":"from-right"].includes(g.key);m==null||m({event:g,direction:D?-1:1})}})))}),tt=s.forwardRef((e,t)=>{const{min:o,max:r,inverted:i,onSlideStart:a,onSlideMove:l,onSlideEnd:u,onStepKeyDown:f,...m}=e,h=s.useRef(null),c=k(t,h),x=s.useRef(),b=!i;function $(S){const d=x.current||h.current.getBoundingClientRect(),p=[0,d.height],g=U(p,b?[r,o]:[o,r]);return x.current=d,g(S-d.top)}return s.createElement(oe,{scope:e.__scopeSlider,startEdge:b?"bottom":"top",endEdge:b?"top":"bottom",size:"height",direction:b?1:-1},s.createElement(se,E({"data-orientation":"vertical"},m,{ref:c,style:{...m.style,["--radix-slider-thumb-transform"]:"translateY(50%)"},onSlideStart:S=>{const d=$(S.clientY);a==null||a(d)},onSlideMove:S=>{const d=$(S.clientY);l==null||l(d)},onSlideEnd:()=>{x.current=void 0,u==null||u()},onStepKeyDown:S=>{const p=ne[b?"from-bottom":"from-top"].includes(S.key);f==null||f({event:S,direction:p?-1:1})}})))}),se=s.forwardRef((e,t)=>{const{__scopeSlider:o,onSlideStart:r,onSlideMove:i,onSlideEnd:a,onHomeKeyDown:l,onEndKeyDown:u,onStepKeyDown:f,...m}=e,h=K(z,o);return s.createElement(B.span,E({},m,{ref:t,onKeyDown:P(e.onKeyDown,c=>{c.key==="Home"?(l(c),c.preventDefault()):c.key==="End"?(u(c),c.preventDefault()):ee.concat(te).includes(c.key)&&(f(c),c.preventDefault())}),onPointerDown:P(e.onPointerDown,c=>{const x=c.target;x.setPointerCapture(c.pointerId),c.preventDefault(),h.thumbs.has(x)?x.focus():r(c)}),onPointerMove:P(e.onPointerMove,c=>{c.target.hasPointerCapture(c.pointerId)&&i(c)}),onPointerUp:P(e.onPointerUp,c=>{const x=c.target;x.hasPointerCapture(c.pointerId)&&(x.releasePointerCapture(c.pointerId),a(c))})}))}),nt="SliderTrack",at=s.forwardRef((e,t)=>{const{__scopeSlider:o,...r}=e,i=K(nt,o);return s.createElement(B.span,E({"data-disabled":i.disabled?"":void 0,"data-orientation":i.orientation},r,{ref:t}))}),J="SliderRange",ot=s.forwardRef((e,t)=>{const{__scopeSlider:o,...r}=e,i=K(J,o),a=re(J,o),l=s.useRef(null),u=k(t,l),f=i.values.length,m=i.values.map(x=>ie(x,i.min,i.max)),h=f>1?Math.min(...m):0,c=100-Math.max(...m);return s.createElement(B.span,E({"data-orientation":i.orientation,"data-disabled":i.disabled?"":void 0},r,{ref:u,style:{...e.style,[a.startEdge]:h+"%",[a.endEdge]:c+"%"}}))}),Q="SliderThumb",rt=s.forwardRef((e,t)=>{const o=We(e.__scopeSlider),[r,i]=s.useState(null),a=k(t,u=>i(u)),l=s.useMemo(()=>r?o().findIndex(u=>u.ref.current===r):-1,[o,r]);return s.createElement(st,E({},e,{ref:a,index:l}))}),st=s.forwardRef((e,t)=>{const{__scopeSlider:o,index:r,...i}=e,a=K(Q,o),l=re(Q,o),[u,f]=s.useState(null),m=k(t,d=>f(d)),h=we(u),c=a.values[r],x=c===void 0?0:ie(c,a.min,a.max),b=ct(r,a.values.length),$=h==null?void 0:h[l.size],S=$?ut($,x,l.direction):0;return s.useEffect(()=>{if(u)return a.thumbs.add(u),()=>{a.thumbs.delete(u)}},[u,a.thumbs]),s.createElement("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[l.startEdge]:`calc(${x}% + ${S}px)`}},s.createElement(H.ItemSlot,{scope:e.__scopeSlider},s.createElement(B.span,E({role:"slider","aria-label":e["aria-label"]||b,"aria-valuemin":a.min,"aria-valuenow":c,"aria-valuemax":a.max,"aria-orientation":a.orientation,"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,tabIndex:a.disabled?void 0:0},i,{ref:m,style:c===void 0?{display:"none"}:e.style,onFocus:P(e.onFocus,()=>{a.valueIndexToChangeRef.current=r})}))))}),it=e=>{const{value:t,...o}=e,r=s.useRef(null),i=be(t);return s.useEffect(()=>{const a=r.current,l=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(l,"value").set;if(i!==t&&f){const m=new Event("input",{bubbles:!0});f.call(a,t),a.dispatchEvent(m)}},[i,t]),s.createElement("input",E({style:{display:"none"}},o,{ref:r,defaultValue:t}))};function lt(e=[],t,o){const r=[...e];return r[o]=t,r.sort((i,a)=>i-a)}function ie(e,t,o){const a=100/(o-t)*(e-t);return Z(a,[0,100])}function ct(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function dt(e,t){if(e.length===1)return 0;const o=e.map(i=>Math.abs(i-t)),r=Math.min(...o);return o.indexOf(r)}function ut(e,t,o){const r=e/2,a=U([0,50],[0,r]);return(r-a(t)*o)*o}function ft(e){return e.slice(0,-1).map((t,o)=>e[o+1]-t)}function mt(e,t){if(t>0){const o=ft(e);return Math.min(...o)>=t}return!0}function U(e,t){return o=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(o-e[0])}}function pt(e){return(String(e).split(".")[1]||"").length}function xt(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}const le=Ze,ht=at,gt=ot,$t=rt,ce=s.forwardRef(({className:e,...t},o)=>{const{mode:r}=s.useContext(je);return n.jsxs(le,{ref:o,className:I("relative flex w-full touch-none select-none items-center",e),...t,children:[n.jsx(ht,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:n.jsx(gt,{className:I("absolute h-full",r?"bg-constant-blue":"bg-primary")})}),n.jsx($t,{className:I("block h-5 w-5 rounded-full border-2 bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",r?"border-constant-blue":"border-primary")})]})});ce.displayName=le.displayName;function St({range:e,filters:t,onRangeDrag:o,onFilterClick:r,onFiltersReset:i}){return n.jsxs(Ce,{children:[n.jsx(Ee,{asChild:!0,children:n.jsxs(T,{variant:"outline",className:"flex gap-2",children:[n.jsx(Oe,{size:16})," ",n.jsx(n.Fragment,{children:"Filter"})]})}),n.jsx(Re,{className:"p-0",children:n.jsx("div",{className:"h-100 w-full rounded-md border p-2",children:n.jsxs("div",{className:"grid gap-4 px-2 pb-2",children:[n.jsxs("div",{children:[n.jsx("h4",{className:"mb-3 mt-1 font-medium leading-none",children:"Price"}),n.jsxs("div",{className:"flex justify-between pb-1",children:[n.jsx("output",{children:"0"}),n.jsx("output",{children:e})]}),n.jsx(ce,{defaultValue:e,onValueChange:o,max:F.max,min:F.min})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"mb-3 mt-1 font-medium leading-none",children:"Type"}),n.jsx("div",{className:"flex flex-wrap gap-2",children:["Sport","Super","Hyper"].map((a,l)=>n.jsx(T,{variant:t.filtersType.size&&t.filtersType.get(a)?"default":"outline",className:"flex",onClick:()=>r("type",a),children:a},l))})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"mb-3 mt-1 font-medium leading-none",children:"Color"}),n.jsx("div",{className:"flex flex-wrap gap-2",children:["Red","Blue","Black","Grey","Purple","Green","Yellow"].map((a,l)=>n.jsx(T,{variant:t.filtersColor.size&&t.filtersColor.get(a)?"default":"outline",className:"flex",onClick:()=>r("color",a),children:a},l))})]}),n.jsx(Me,{}),n.jsxs(T,{size:"sm",variant:"outline",onClick:i,className:"mx-auto flex gap-2",children:[n.jsx(He,{size:16}),n.jsx(n.Fragment,{children:"Reset"})]})]})})})]})}function Mt(){const{category:e}=Pe(),t=s.useMemo(()=>ke,[]),[o,r]=s.useState(t),[i,a]=s.useState(()=>{if(!e||e==="all")return new Map;{const d=Ue(e);return new Map([[`${d}`,`${d}`]])}}),[l,u]=s.useState(new Map),[f,m]=s.useState(new Map),[h,c]=s.useState([F.max]),x=(d,p)=>{let w;switch(d){case"type":w=new Map(i);break;case"color":w=new Map(l);break;case"brand":w=new Map(f);break}switch(w.get(p)?w.delete(p):w.set(p,p),d){case"type":a(w);break;case"color":u(w);break;case"brand":m(w);break}},b=()=>{a(new Map),u(new Map),m(new Map)},$=d=>{if(i.has(d)){const p=new Map(i);p.delete(d),a(p)}if(l.has(d)){const p=new Map(l);p.delete(d),u(p)}if(f.has(d)){const p=new Map(f);p.delete(d),m(p)}},S=d=>{c(d)};return n.jsxs("div",{className:"mx-auto min-h-screen pb-12 pt-6 xl:max-w-[1280px]",children:[n.jsx("div",{children:n.jsx(Ve,{title:"Cars",description:"Discover Your Perfect Ride."})}),n.jsxs("div",{className:"mt-3 w-full items-center justify-between gap-2 sm:flex",children:[n.jsx("div",{className:"my-2 flex flex-wrap gap-1 overflow-x-auto",children:[...i,...l,...f].map(([d,p])=>n.jsx(Ye,{onClick:()=>$(d),children:d},p))}),n.jsxs("div",{className:"grid grid-cols-1 justify-end gap-2 sm:flex sm:grid-cols-none",children:[n.jsx(St,{range:h,filters:{filtersType:i,filtersColor:l,filtersBrand:f},onRangeDrag:S,onFilterClick:x,onFiltersReset:b}),n.jsx(Ge,{cars:t,setCarsSorted:r})]})]}),n.jsx("div",{className:"mt-3 grid grid-cols-fill-min gap-3 sm:grid-cols-fill-max",children:o==null?void 0:o.map(d=>n.jsx(s.Fragment,{children:(i.size===0||i.get(d.type))&&(l.size===0||l.get(d.color))&&(f.size===0||f.get(d.brand))&&h[0]>=d.price&&n.jsx(qe,{category:e||"all",car:d})},d.id))})]})}export{Mt as default};