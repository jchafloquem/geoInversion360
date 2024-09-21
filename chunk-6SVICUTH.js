import{a as q,b as J,c as N,d as Q}from"./chunk-4WILS76L.js";import{a as i,b as p,d as f,e as U}from"./chunk-FVI5ZJD2.js";import{b as W}from"./chunk-6JO2TOC7.js";import{a as I,b as L,c as x,d as R}from"./chunk-BWBPPGKZ.js";import{b as j}from"./chunk-5HWUSMOZ.js";import{b as z}from"./chunk-VUCOCALS.js";import{a as y,b as E,c as k}from"./chunk-L6C4HF2Z.js";import{f as A,g as H,i as w,j as D,k as T,l as M}from"./chunk-YGFXBLGE.js";import"./chunk-6VELEYJV.js";import"./chunk-F2OWJI2Q.js";import"./chunk-GEIGRTSS.js";import{h as $,m as O,q as b,s as m}from"./chunk-P454QITB.js";import"./chunk-T62VBPHF.js";import"./chunk-MDAB6L5Y.js";import{d as s,e as _,f as c,h as v,j as S}from"./chunk-OMNN7QFV.js";import{g as C}from"./chunk-JEGVIFEP.js";var V={handle:"handle",handleSelected:"handle--selected"},ae={drag:"drag"},B={itemLabel:"{itemLabel}",position:"{position}",total:"{total}"},le=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;outline-color:transparent;color:var(--calcite-color-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:not([disabled])) .handle:focus{color:var(--calcite-color-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host(:not([disabled])) .handle--selected{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,oe=le,ce=v(class extends S{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteHandleChange=c(this,"calciteHandleChange",6),this.calciteHandleNudge=c(this,"calciteHandleNudge",6),this.calciteInternalAssistiveTextChange=c(this,"calciteInternalAssistiveTextChange",6),this.handleKeyDown=e=>{if(!this.disabled)switch(e.key){case" ":this.selected=!this.selected,this.calciteHandleChange.emit(),e.preventDefault();break;case"ArrowUp":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"up"});break;case"ArrowDown":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"down"});break}},this.handleBlur=()=>{this.blurUnselectDisabled||this.disabled||this.selected&&(this.selected=!1,this.calciteHandleChange.emit())},this.selected=!1,this.disabled=!1,this.dragHandle=void 0,this.messages=void 0,this.setPosition=void 0,this.setSize=void 0,this.label=void 0,this.blurUnselectDisabled=!1,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleAriaTextChange(){let e=this.getAriaText("live");e&&this.calciteInternalAssistiveTextChange.emit({message:e})}onMessagesChange(){}connectedCallback(){L(this),T(this),A(this)}componentWillLoad(){return C(this,null,function*(){y(this),yield w(this)})}componentDidLoad(){E(this)}componentDidRender(){I(this)}disconnectedCallback(){x(this),M(this),H(this)}effectiveLocaleChange(){D(this,this.effectiveLocale)}setFocus(){return C(this,null,function*(){yield k(this),this.handleButton?.focus()})}getTooltip(){let{label:e,messages:t}=this;return t?e?t.dragHandle.replace(B.itemLabel,e):t.dragHandleUntitled:""}getAriaText(e){let{setPosition:t,setSize:n,label:a,messages:l,selected:o}=this;return!l||!a||typeof n!="number"||typeof t!="number"?null:(e==="label"?o?l.dragHandleChange:l.dragHandleIdle:o?l.dragHandleActive:l.dragHandleCommit).replace(B.position,t.toString()).replace(B.itemLabel,a).replace(B.total,n.toString())}render(){return s("span",{key:"1b435a33669241997f126e273bd36801182a0ce5","aria-checked":this.disabled?null:b(this.selected),"aria-disabled":this.disabled?b(this.disabled):null,"aria-label":this.disabled?null:this.getAriaText("label"),class:{[V.handle]:!0,[V.handleSelected]:!this.disabled&&this.selected},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,ref:e=>{this.handleButton=e},role:"radio",tabIndex:this.disabled?null:0,title:this.getTooltip()},s("calcite-icon",{key:"da7f46a07a28eab86153f1a04a8f82f4d7b3a0c6",icon:ae.drag,scale:"s"}))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return oe}},[1,"calcite-handle",{selected:[1540],disabled:[516],dragHandle:[513,"drag-handle"],messages:[1040],setPosition:[2,"set-position"],setSize:[2,"set-size"],label:[1],blurUnselectDisabled:[4,"blur-unselect-disabled"],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function G(){if(typeof customElements>"u")return;["calcite-handle","calcite-icon"].forEach(e=>{switch(e){case"calcite-handle":customElements.get(e)||customElements.define(e,ce);break;case"calcite-icon":customElements.get(e)||z();break}})}G();var re=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);--calcite-list-item-icon-color:var(--calcite-color-brand)}:host([filter-hidden]),:host([closed]){display:none}.wrapper--bordered{border-block-end:1px solid var(--calcite-color-border-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-color-foreground-1)}.container *{box-sizing:border-box}.container--hover:hover{cursor:pointer;background-color:var(--calcite-color-foreground-2)}.container:active{background-color:var(--calcite-color-foreground-1)}.container--border{border-inline-start-width:4px;border-inline-start-style:solid}.container--border-selected{border-inline-start-color:var(--calcite-color-brand)}.container--border-unselected{border-inline-start-color:transparent}.container:hover.container--border-unselected{border-color:var(--calcite-color-border-1)}.nested-container{display:none;flex-direction:column;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);margin-inline-start:var(--calcite-list-item-spacing-indent, 1.5rem)}.nested-container--open{display:flex}.content-container{display:flex;flex:1 1 auto;-webkit-user-select:none;user-select:none;align-items:stretch;padding:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}tr,td{outline-color:transparent}tr{position:relative}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-color-text-1)}:host([selected]) .label{font-weight:var(--calcite-font-weight-medium)}.description{margin-block-start:0.125rem;color:var(--calcite-color-text-3)}:host([selected]) .description{color:var(--calcite-color-text-2)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.content-bottom{display:flex;flex-direction:column}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;padding-block:0px;color:var(--calcite-color-border-input)}.selection-container--single{color:transparent}:host(:not([disabled]):not([selected])) .container:hover .selection-container--single{color:var(--calcite-color-border-1)}:host([selected]:hover) .selection-container,:host([selected]:hover) .selection-container--single,:host([selected]) .selection-container{color:var(--calcite-list-item-icon-color)}.open-container{color:var(--calcite-color-text-3)}:host(:not([disabled])) .container:hover .open-container{color:var(--calcite-color-text-1)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.actions-start calcite-action,.actions-start calcite-handle,.actions-end calcite-action,.actions-end calcite-handle,.content-start calcite-action,.content-start calcite-handle,.content-end calcite-action,.content-end calcite-handle,.selection-container calcite-action,.selection-container calcite-handle,.drag-container calcite-action,.drag-container calcite-handle,.open-container calcite-action,.open-container calcite-handle{align-self:stretch}.open-container,.selection-container{cursor:pointer}.actions-start,.actions-end{position:relative;padding:0px}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}tr:focus .actions-start,tr:focus .actions-end{inset-block:0.125rem}tr:focus .actions-start .close,tr:focus .actions-start ::slotted(calcite-action),tr:focus .actions-start ::slotted(calcite-action-menu),tr:focus .actions-start ::slotted(calcite-handle),tr:focus .actions-start ::slotted(calcite-dropdown),tr:focus .actions-end .close,tr:focus .actions-end ::slotted(calcite-action),tr:focus .actions-end ::slotted(calcite-action-menu),tr:focus .actions-end ::slotted(calcite-handle),tr:focus .actions-end ::slotted(calcite-dropdown){block-size:calc(100% - 0.25rem)}tr:focus::after,tr:focus::before{position:absolute;content:"";inline-size:0.125rem;z-index:var(--calcite-z-index-header);background-color:var(--calcite-color-brand);inset-block:0}tr:focus::before{inset-inline-start:0}tr:focus::after{inset-inline-end:0}.container--border:focus::before{display:none}::slotted(calcite-list:empty){border-block-start-width:0px}:host([hidden]){display:none}[hidden]{display:none}`,de=re,K=new Map,he="calcite-list",X=v(class extends S{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListItemSelect=c(this,"calciteListItemSelect",6),this.calciteListItemClose=c(this,"calciteListItemClose",6),this.calciteListItemDragHandleChange=c(this,"calciteListItemDragHandleChange",6),this.calciteListItemToggle=c(this,"calciteListItemToggle",6),this.calciteInternalListItemSelect=c(this,"calciteInternalListItemSelect",6),this.calciteInternalListItemSelectMultiple=c(this,"calciteInternalListItemSelectMultiple",6),this.calciteInternalListItemActive=c(this,"calciteInternalListItemActive",6),this.calciteInternalFocusPreviousItem=c(this,"calciteInternalFocusPreviousItem",6),this.calciteInternalListItemChange=c(this,"calciteInternalListItemChange",6),this.calciteInternalListItemToggle=c(this,"calciteInternalListItemToggle",6),this.dragHandleSelectedChangeHandler=e=>{this.dragSelected=e.target.selected,this.calciteListItemDragHandleChange.emit(),e.stopPropagation()},this.emitInternalListItemActive=()=>{this.calciteInternalListItemActive.emit()},this.focusCellHandle=()=>{this.handleCellFocusIn(this.handleGridEl)},this.focusCellActionsStart=()=>{this.handleCellFocusIn(this.actionsStartEl)},this.focusCellContent=()=>{this.handleCellFocusIn(this.contentEl)},this.focusCellActionsEnd=()=>{this.handleCellFocusIn(this.actionsEndEl)},this.handleCloseClick=()=>{this.closed=!0,this.calciteListItemClose.emit()},this.handleContentSlotChange=e=>{this.hasCustomContent=m(e)},this.handleActionsStartSlotChange=e=>{this.hasActionsStart=m(e)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=m(e)},this.handleContentStartSlotChange=e=>{this.hasContentStart=m(e)},this.handleContentEndSlotChange=e=>{this.hasContentEnd=m(e)},this.handleContentBottomSlotChange=e=>{this.hasContentBottom=m(e)},this.handleDefaultSlotChange=e=>{this.handleOpenableChange(e.target)},this.handleToggleClick=()=>{this.toggle()},this.toggle=(e=!this.open)=>{this.open=e,this.calciteListItemToggle.emit()},this.handleItemClick=e=>{e.defaultPrevented||this.toggleSelected(e.shiftKey)},this.toggleSelected=e=>{let{selectionMode:t,selected:n}=this;this.disabled||(t==="multiple"||t==="single"?this.selected=!n:t==="single-persist"&&(this.selected=!0),this.calciteInternalListItemSelectMultiple.emit({selectMultiple:e&&t==="multiple"}),this.calciteListItemSelect.emit())},this.handleItemKeyDown=e=>{if(e.defaultPrevented)return;let{key:t}=e,n=e.composedPath(),{containerEl:a,actionsStartEl:l,actionsEndEl:o,open:d,openable:g}=this,r=this.getGridCells(),h=r.findIndex(u=>n.includes(u));if(t==="Enter"&&!n.includes(l)&&!n.includes(o))e.preventDefault(),this.toggleSelected(e.shiftKey);else if(t==="ArrowRight"){e.preventDefault();let u=h+1;h===-1?!d&&g?(this.toggle(!0),this.focusCell(null)):r[0]&&this.focusCell(r[0]):r[h]&&r[u]&&this.focusCell(r[u])}else if(t==="ArrowLeft"){e.preventDefault();let u=h-1;h===-1?(this.focusCell(null),d&&g?this.toggle(!1):this.calciteInternalFocusPreviousItem.emit()):h===0?(this.focusCell(null),a.focus()):r[h]&&r[u]&&this.focusCell(r[u])}},this.focusCellNull=()=>{this.focusCell(null)},this.handleCellFocusIn=e=>{this.setFocusCell(e,O(e),!0)},this.setFocusCell=(e,t,n)=>{let{parentListEl:a}=this;n&&K.set(a,null);let l=this.getGridCells();l.forEach(o=>{o.tabIndex=-1,o.removeAttribute(U)}),e&&(e.tabIndex=e===t?0:-1,e.setAttribute(U,""),n&&K.set(a,l.indexOf(e)))},this.focusCell=(e,t=!0)=>{let n=O(e);this.setFocusCell(e,n,t),n?.focus()},this.active=!1,this.bordered=!1,this.closable=!1,this.closed=!1,this.description=void 0,this.disabled=!1,this.dragDisabled=!1,this.dragHandle=!1,this.dragSelected=!1,this.filterHidden=!1,this.label=void 0,this.metadata=void 0,this.open=!1,this.setSize=null,this.setPosition=null,this.selected=!1,this.value=void 0,this.selectionMode=null,this.selectionAppearance=null,this.messageOverrides=void 0,this.messages=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.level=null,this.parentListEl=void 0,this.openable=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasCustomContent=!1,this.hasContentStart=!1,this.hasContentEnd=!1,this.hasContentBottom=!1}activeHandler(e){e||this.focusCell(null,!1)}handleClosedChange(){this.emitCalciteInternalListItemChange()}handleDisabledChange(){this.emitCalciteInternalListItemChange()}handleOpenChange(){this.emitCalciteInternalListItemToggle()}handleSelectedChange(){this.calciteInternalListItemSelect.emit()}onMessagesChange(){}handleCalciteInternalListDefaultSlotChanges(e){e.stopPropagation(),this.handleOpenableChange(this.defaultSlotEl)}effectiveLocaleChange(){D(this,this.effectiveLocale)}connectedCallback(){L(this),A(this),T(this);let{el:e}=this;this.parentListEl=e.closest(he),this.level=Q(e)+1,this.setSelectionDefaults()}componentWillLoad(){return C(this,null,function*(){y(this),yield w(this)})}componentDidLoad(){E(this)}componentDidRender(){I(this)}disconnectedCallback(){x(this),H(this),M(this)}setFocus(){return C(this,null,function*(){yield k(this);let{containerEl:e,parentListEl:t}=this,n=K.get(t);if(typeof n=="number"){let a=this.getGridCells();a[n]?this.focusCell(a[n]):e?.focus();return}e?.focus()})}renderSelected(){let{selected:e,selectionMode:t,selectionAppearance:n}=this;return t==="none"||n==="border"?null:s("td",{class:{[i.selectionContainer]:!0,[i.selectionContainerSingle]:t==="single"||t==="single-persist"},key:"selection-container",onClick:this.handleItemClick},s("calcite-icon",{icon:e?t==="multiple"?f.selectedMultiple:f.selectedSingle:t==="multiple"?f.unselectedMultiple:f.unselectedSingle,scale:"s"}))}renderDragHandle(){let{label:e,dragHandle:t,dragSelected:n,dragDisabled:a,setPosition:l,setSize:o}=this;return t?s("td",{"aria-label":e,class:i.dragContainer,key:"drag-handle-container",onFocusin:this.focusCellHandle,ref:d=>this.handleGridEl=d,role:"gridcell"},s("calcite-handle",{disabled:a,label:e,onCalciteHandleChange:this.dragHandleSelectedChangeHandler,selected:n,setPosition:l,setSize:o})):null}renderOpen(){let{el:e,open:t,openable:n,messages:a}=this,l=$(e),o=t?f.open:l==="rtl"?f.closedRTL:f.closedLTR,d=t?a.collapse:a.expand;return n?s("td",{class:i.openContainer,key:"open-container",onClick:this.handleToggleClick,title:d},s("calcite-icon",{icon:o,key:o,scale:"s"})):null}renderActionsStart(){let{label:e,hasActionsStart:t}=this;return s("td",{"aria-label":e,class:i.actionsStart,hidden:!t,key:"actions-start-container",onFocusin:this.focusCellActionsStart,ref:n=>this.actionsStartEl=n,role:"gridcell"},s("slot",{name:p.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){let{label:e,hasActionsEnd:t,closable:n,messages:a}=this;return s("td",{"aria-label":e,class:i.actionsEnd,hidden:!(t||n),key:"actions-end-container",onFocusin:this.focusCellActionsEnd,ref:l=>this.actionsEndEl=l,role:"gridcell"},s("slot",{name:p.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),n?s("calcite-action",{appearance:"transparent",class:i.close,icon:f.close,key:"close-action",label:a.close,onClick:this.handleCloseClick,text:a.close}):null)}renderContentStart(){let{hasContentStart:e}=this;return s("div",{class:i.contentStart,hidden:!e},s("slot",{name:p.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){let{hasCustomContent:e}=this;return s("div",{class:i.customContent,hidden:!e},s("slot",{name:p.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){let{hasContentEnd:e}=this;return s("div",{class:i.contentEnd,hidden:!e},s("slot",{name:p.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentBottom(){let{hasContentBottom:e}=this;return s("div",{class:i.contentBottom,hidden:!e},s("slot",{name:p.contentBottom,onSlotchange:this.handleContentBottomSlotChange}))}renderDefaultContainer(){return s("div",{class:{[i.nestedContainer]:!0,[i.nestedContainerOpen]:this.openable&&this.open}},s("slot",{onSlotchange:this.handleDefaultSlotChange,ref:e=>this.defaultSlotEl=e}))}renderContentProperties(){let{label:e,description:t,hasCustomContent:n}=this;return!n&&(e||t)?s("div",{class:i.content,key:"content"},e?s("div",{class:i.label,key:"label"},e):null,t?s("div",{class:i.description,key:"description"},t):null):null}renderContentContainer(){let{description:e,label:t,selectionMode:n,hasCustomContent:a}=this,l=a||!!t||!!e,o=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return s("td",{"aria-label":t,class:{[i.contentContainer]:!0,[i.contentContainerSelectable]:n!=="none",[i.contentContainerHasCenterContent]:l},key:"content-container",onClick:this.handleItemClick,onFocusin:this.focusCellContent,ref:d=>this.contentEl=d,role:"gridcell"},o)}render(){let{openable:e,open:t,level:n,setPosition:a,setSize:l,active:o,label:d,selected:g,selectionAppearance:r,selectionMode:h,closed:u,filterHidden:Z,bordered:ee,disabled:te}=this,P=h!=="none"&&r==="border",ne=P&&g,se=P&&!g;return s(_,{key:"0ad7f6606712fcb789d833c2a8226e2492f02d9b"},s(R,{key:"f908e68db67b02be4cc99007713188e28c47a4ff",disabled:te},s("div",{key:"565126927033a03940fcc09bcf26114029ee592a",class:{[i.wrapper]:!0,[i.wrapperBordered]:ee}},s("tr",{key:"8268f9c8efc3c754114ac2213d4b30dfa620897b","aria-expanded":e?b(t):null,"aria-label":d,"aria-level":n,"aria-posinset":a,"aria-selected":b(g),"aria-setsize":l,class:{[i.container]:!0,[i.containerHover]:!0,[i.containerBorder]:P,[i.containerBorderSelected]:ne,[i.containerBorderUnselected]:se},hidden:u||Z,onFocus:this.focusCellNull,onFocusin:this.emitInternalListItemActive,onKeyDown:this.handleItemKeyDown,ref:ie=>this.containerEl=ie,role:"row",tabIndex:o?0:-1},this.renderDragHandle(),this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),this.renderContentBottom()),this.renderDefaultContainer()))}emitCalciteInternalListItemToggle(){this.calciteInternalListItemToggle.emit()}emitCalciteInternalListItemChange(){this.calciteInternalListItemChange.emit()}setSelectionDefaults(){let{parentListEl:e,selectionMode:t,selectionAppearance:n}=this;e&&(t||(this.selectionMode=e.selectionMode),n||(this.selectionAppearance=e.selectionAppearance))}handleOpenableChange(e){if(!e)return;let t=J(e),n=q(e);N(t),this.openable=!!t.length||!!n.length}getGridCells(){return[this.handleGridEl,this.actionsStartEl,this.contentEl,this.actionsEndEl].filter(e=>e&&!e.hidden)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],open:["handleOpenChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return de}},[1,"calcite-list-item",{active:[4],bordered:[4],closable:[516],closed:[1540],description:[1],disabled:[516],dragDisabled:[516,"drag-disabled"],dragHandle:[4,"drag-handle"],dragSelected:[1540,"drag-selected"],filterHidden:[516,"filter-hidden"],label:[1],metadata:[16],open:[1540],setSize:[2,"set-size"],setPosition:[2,"set-position"],selected:[1540],value:[8],selectionMode:[1025,"selection-mode"],selectionAppearance:[1025,"selection-appearance"],messageOverrides:[1040],messages:[1040],effectiveLocale:[32],defaultMessages:[32],level:[32],parentListEl:[32],openable:[32],hasActionsStart:[32],hasActionsEnd:[32],hasCustomContent:[32],hasContentStart:[32],hasContentEnd:[32],hasContentBottom:[32],setFocus:[64]},[[0,"calciteInternalListItemGroupDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"],[0,"calciteInternalListDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"]],{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],open:["handleOpenChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function Y(){if(typeof customElements>"u")return;["calcite-list-item","calcite-action","calcite-handle","calcite-icon","calcite-loader"].forEach(e=>{switch(e){case"calcite-list-item":customElements.get(e)||customElements.define(e,X);break;case"calcite-action":customElements.get(e)||W();break;case"calcite-handle":customElements.get(e)||G();break;case"calcite-icon":customElements.get(e)||z();break;case"calcite-loader":customElements.get(e)||j();break}})}Y();var Fe=X,Pe=Y;export{Fe as CalciteListItem,Pe as defineCustomElement};
