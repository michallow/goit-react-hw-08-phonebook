"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[747],{3747:function(e,t,n){n.r(t),n.d(t,{Contacts:function(){return w},default:function(){return I}});var a=n(9439),r=n(2791),l="ContactForm_form__dhl+T",i="ContactForm_formLabel__TSwxK",o="ContactForm_formInput__GszVU",c="ContactForm_formBtn__qZGY3",s=n(4420),d=n(208),u=n(7694),m=n(4294),f=n(6934),h=n(1798),p=n(2283),b=n(184),x=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],x=t[1],C=(0,r.useState)(""),_=(0,a.Z)(C,2),v=_[0],j=_[1],g=(0,s.I0)(),Z=(0,s.v9)((function(e){return e.contacts})).contacts,N=(0,f.ZP)(m.Z)((function(e){return{color:e.theme.palette.getContrastText(h.Z[500]),backgroundColor:h.Z[500],"&:hover":{backgroundColor:h.Z[700],boxShadow:"2px 6px 6px rgba(0, 0, 0, 0.4)"}}}));return(0,b.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault(),Z.some((function(e){return e.name===n}))?u.Notify.warning("Contact already exists!",{position:"left-top"}):(g((0,d.uK)({name:n,number:v})),x(""),j(""))},children:[(0,b.jsx)("label",{className:i,children:"Name "}),(0,b.jsx)(p.Z,{className:o,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:n,onChange:function(e){x(e.target.value)},id:"filled-basic",label:"",variant:"filled"}),(0,b.jsx)("label",{className:i,children:"Number "}),(0,b.jsx)(p.Z,{className:o,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter phone number",value:v,onChange:function(e){j(e.target.value)},id:"filled-basic",label:"",variant:"filled"}),(0,b.jsx)(N,{className:c,type:"submit",variant:"contained",size:"large",children:"Add Contact"})]})},C="Filter_filterForm__+l+6Q",_="Filter_filterLabel__+pnW-",v="Filter_filterInput__1Cysk",j=n(1509),g=function(e){return e.contacts},Z=function(e){return e.filter},N=function(){var e=(0,s.I0)(),t=(0,s.v9)(Z).filter;return(0,b.jsxs)("div",{className:C,children:[(0,b.jsx)("label",{className:_,children:"Find contacts by name"}),(0,b.jsx)(p.Z,{className:v,type:"text",name:"filter",placeholder:"Enter search",value:t,onChange:function(t){var n=t.currentTarget.value;e((0,j.T)(n))},id:"filled-basic",label:"",variant:"filled"})]})},y={contactList:"ContactList_contactList__UFVCg",contactListBtn:"ContactList_contactListBtn__iwQAv"},E={modal:"EditContacts_modal__4KT0q",modalForm:"EditContacts_modalForm__9cj2E",editInput:"EditContacts_editInput__V19EM"},F=n(5527),L=function(e){var t=e.handleEdit,n=e.id,l=e.editContact,i=(0,r.useState)(""),o=(0,a.Z)(i,2),c=o[0],s=o[1],d=(0,r.useState)(""),u=(0,a.Z)(d,2),x=u[0],C=u[1];(0,r.useEffect)((function(){l&&(s(l.name),C(l.number))}),[l]);var _=(0,f.ZP)(m.Z)((function(e){return{color:e.theme.palette.getContrastText(h.Z[500]),backgroundColor:"#673ab7","&:hover":{backgroundColor:"#673ab7",boxShadow:"2px 6px 6px rgba(0, 0, 0, 0.4)"}}}));return(0,b.jsx)("div",{children:(0,b.jsx)(F.Z,{elevation:5,children:(0,b.jsx)("div",{className:E.modal,children:(0,b.jsxs)("form",{className:E.modalForm,onSubmit:function(e){e.preventDefault(),t({name:c,number:x,id:n})},children:[(0,b.jsx)("label",{name:"name",children:(0,b.jsx)(p.Z,{className:E.editInput,defaultValue:l.name,onChange:function(e){return s(e.currentTarget.value)},id:"outlined-basic",label:"",variant:"outlined",size:"small"})}),(0,b.jsx)("label",{name:"phone",children:(0,b.jsx)(p.Z,{className:E.editInput,defaultValue:l.number,onChange:function(e){return C(e.currentTarget.value)},id:"outlined-basic",label:"",variant:"outlined",size:"small"})}),(0,b.jsx)(_,{className:E.editBtn,type:"submit",variant:"contained",size:"small",children:"Confirm"})]})})})})},k=function(e){var t=e.contacts,n=e.handleDelete,a=e.handleEdit,r=e.handleModalOpen,l=e.closeModal,i=e.isEditModalOpen,o=e.editId;return(0,b.jsxs)("div",{children:[" ",(0,b.jsxs)("ul",{className:y.contactList,children:[" ",t&&t.map((function(e,t){return(0,b.jsxs)("li",{className:y.contactListItem,children:[e.name,": ",e.number,(0,b.jsx)("button",{className:y.contactListBtn,type:"button",name:"edit",onClick:function(){return r(e.id)},children:"Edit"}),(0,b.jsx)("button",{type:"button",className:y.contactListBtn,onClick:function(){return n(e.id)},children:"Delete"})]},t)}))]}),i&&(0,b.jsx)(L,{id:o,editContact:t.find((function(e){return e.id===o})),closeModal:l,handleEdit:a})]})},w=function(){var e=(0,s.I0)(),t=(0,s.v9)(g).contacts,n=(0,s.v9)(Z).filter,l=(0,r.useState)(!1),i=(0,a.Z)(l,2),o=i[0],c=i[1],u=(0,r.useState)(""),m=(0,a.Z)(u,2),f=m[0],h=m[1];(0,r.useEffect)((function(){e((0,d.yF)())}),[]);var p=function(){c(!1)};return(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"#333",margin:20,borderRadius:10,paddingBottom:30},children:[(0,b.jsx)("h1",{children:"Create New Contact"}),(0,b.jsx)(x,{}),(0,b.jsx)("h1",{children:"Your Contacts"}),(0,b.jsx)(N,{}),(0,b.jsx)(k,{contacts:t&&t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})),handleEdit:function(t){e((0,d.mP)(t)),p()},closeModal:p,handleDelete:function(t){e((0,d.GK)(t))},handleModalOpen:function(e){c(!0),h(e)},isEditModalOpen:o,editId:f})]})},I=w}}]);
//# sourceMappingURL=747.888cc72e.chunk.js.map