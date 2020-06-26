import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Author       : Dreamguys
Template Name: SmartHR - Bootstrap Admin Template
Version      : 1.0.3
  // ------------------------------------------------------------------

[Table of contents]

1. General
2. Table
3. Helper Class
4. Bootstrap Classes
5. Animation
6. Header
7. Sidebar
8. Content
9. Login
10. Dashboard
11. Activity
12. Select2
13. Nav tabs
14. Holidays
15. Edit Profile
16. Chat
17. Focus Label
18. Leave
19. Employee
20. Events
21. Profile
22. Notifications
23. Roles & Permissions
24. Chat Right Sidebar
25. Projects
26. Invoice
27. Task
28. Project View
29. Payslip
30. Attendance
31. Ticket
32. Client Profile
33. Inbox
34. Mail View
35. Voice call
36. Video Call
37. Incoming call
38. Contacts
39. Chat Sidebar
40. Responsive
-------------------------------------------------------------------
  // ------------------------------------------------------------------
[1. General]
  html: {
    height: [{ unit: '%V', value: 1 }]
  },
 
  h1: {
    marginTop: [{ unit: 'px', value: 0 }]
  },
  h2: {
    marginTop: [{ unit: 'px', value: 0 }]
  },
  h3: {
    marginTop: [{ unit: 'px', value: 0 }]
  },
  h4: {
    marginTop: [{ unit: 'px', value: 0 }]
  },
  h5: {
    marginTop: [{ unit: 'px', value: 0 }]
  },
  h6: {
    marginTop: [{ unit: 'px', value: 0 }]
  },
  'a:hover': {
    textDecoration: 'none',
    color: '#009ce7',
    outline: 'none'
  },
  'a:active': {
    textDecoration: 'none',
    color: '#009ce7',
    outline: 'none'
  },
  'a:focus': {
    textDecoration: 'none',
    color: '#009ce7',
    outline: 'none'
  },
  'form-control': {
    borderRadius: '0',
    boxShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }],
    height: [{ unit: 'px', value: 40 }]
  },
  'form-control:focus': {
    borderColor: '#667eea',
    boxShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }],
    outline: '0 none'
  },
  'a': {
    color: '#009ce7'
  },
  input: {
    transition: 'all 0.4s ease',
    MozTransition: 'all 0.4s ease',
    OTransition: 'all 0.4s ease',
    MsTransition: 'all 0.4s ease',
    WebkitTransition: 'all 0.4s ease'
  },
  button: {
    transition: 'all 0.4s ease',
    MozTransition: 'all 0.4s ease',
    OTransition: 'all 0.4s ease',
    MsTransition: 'all 0.4s ease',
    WebkitTransition: 'all 0.4s ease'
  },
  'a': {
    transition: 'all 0.4s ease',
    MozTransition: 'all 0.4s ease',
    OTransition: 'all 0.4s ease',
    MsTransition: 'all 0.4s ease',
    WebkitTransition: 'all 0.4s ease'
  },
  input: {
    outline: 'none'
  },
  button: {
    outline: 'none'
  },
  'input[type="file"]': {
    height: [{ unit: 'string', value: 'auto' }]
  },
  'input[type=text]': {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none'
  },
  'input[type=password]': {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none'
  },
  'textareaform-control': {
    resize: 'vertical'
  },
  'navbar-nav > li': {
    float: 'left'
  },
  'input-lgform-control': {
    borderRadius: '4px',
    height: [{ unit: 'px', value: 46 }]
  },
  'input-smform-control': {
    height: [{ unit: 'px', value: 30 }],
    borderRadius: '0'
  },
  'input-group form-control': {
    height: [{ unit: 'px', value: 34 }]
  },
  'input-groupinput-group-lg form-control': {
    height: [{ unit: 'px', value: 46 }]
  },
  // ------------------------------------------------------------------
[2. Table]
  table: {
    color: '#000'
  },
  'tabletable-white': {
    backgroundColor: '#fff'
  },
  'table > tbody > tr > td': {
    fontWeight: '300'
  },
  'table > thead > tr > th': {
    fontWeight: 'normal'
  },
  'table-striped > tbody > tr:nth-of-type(2n+1)': {
    backgroundColor: '#ffffff'
  },
  'tabletable td avatar': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'tabletable td h2': {
    display: 'inline-block',
    fontSize: [{ unit: 'string', value: 'inherit' }],
    fontWeight: '400',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    verticalAlign: 'middle'
  },
  'tabletable td h2 a': {
    color: '#757575'
  },
  'tabletable td h2 a:hover': {
    color: '#667eea'
  },
  'tabletable td h2 span': {
    color: '#9e9e9e',
    display: 'block',
    fontSize: [{ unit: 'px', value: 12 }],
    marginTop: [{ unit: 'px', value: 3 }]
  },
  tabledataTable: {
    marginBottom: [{ unit: 'px', value: 15 }, { unit: 'string', value: '!important' }],
    marginTop: [{ unit: 'px', value: 15 }, { unit: 'string', value: '!important' }]
  },
  // ------------------------------------------------------------------
[3. Helper Class]
  'p-0': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 0 }, { unit: 'string', value: '!important' }]
  },
  'p-20': {
    padding: [{ unit: 'px', value: 20 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 20 }, { unit: 'string', value: '!important' }]
  },
  'p-30': {
    padding: [{ unit: 'px', value: 30 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 30 }, { unit: 'string', value: '!important' }]
  },
  'p-l-0': {
    paddingLeft: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }]
  },
  'p-r-0': {
    paddingRight: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }]
  },
  'p-t-0': {
    paddingTop: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }]
  },
  'p-b-0': {
    paddingBottom: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }]
  },
  'p-t-10': {
    paddingTop: [{ unit: 'px', value: 10 }, { unit: 'string', value: '!important' }]
  },
  'p-b-10': {
    paddingBottom: [{ unit: 'px', value: 10 }, { unit: 'string', value: '!important' }]
  },
  'm-0': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 0 }, { unit: 'string', value: '!important' }]
  },
  'm-r-5': {
    marginRight: [{ unit: 'px', value: 5 }, { unit: 'string', value: '!important' }]
  },
  'm-r-10': {
    marginRight: [{ unit: 'px', value: 10 }, { unit: 'string', value: '!important' }]
  },
  'm-r-15': {
    marginRight: [{ unit: 'px', value: 15 }, { unit: 'string', value: '!important' }]
  },
  'm-l-5': {
    marginLeft: [{ unit: 'px', value: 5 }, { unit: 'string', value: '!important' }]
  },
  'm-l-10': {
    marginLeft: [{ unit: 'px', value: 10 }, { unit: 'string', value: '!important' }]
  },
  'm-l-15': {
    marginLeft: [{ unit: 'px', value: 15 }, { unit: 'string', value: '!important' }]
  },
  'm-t-5': {
    marginTop: [{ unit: 'px', value: 5 }, { unit: 'string', value: '!important' }]
  },
  'm-t-0': {
    marginTop: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }]
  },
  'm-t-10': {
    marginTop: [{ unit: 'px', value: 10 }, { unit: 'string', value: '!important' }]
  },
  'm-t-15': {
    marginTop: [{ unit: 'px', value: 15 }, { unit: 'string', value: '!important' }]
  },
  'm-t-20': {
    marginTop: [{ unit: 'px', value: 20 }, { unit: 'string', value: '!important' }]
  },
  'm-t-30': {
    marginTop: [{ unit: 'px', value: 30 }, { unit: 'string', value: '!important' }]
  },
  'm-t-40': {
    marginTop: [{ unit: 'px', value: 40 }, { unit: 'string', value: '!important' }]
  },
  'm-t-50': {
    marginTop: [{ unit: 'px', value: 50 }, { unit: 'string', value: '!important' }]
  },
  'm-b-0': {
    marginBottom: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }]
  },
  'm-b-5': {
    marginBottom: [{ unit: 'px', value: 5 }, { unit: 'string', value: '!important' }]
  },
  'm-b-10': {
    marginBottom: [{ unit: 'px', value: 10 }, { unit: 'string', value: '!important' }]
  },
  'm-b-15': {
    marginBottom: [{ unit: 'px', value: 15 }, { unit: 'string', value: '!important' }]
  },
  'm-b-20': {
    marginBottom: [{ unit: 'px', value: 20 }, { unit: 'string', value: '!important' }]
  },
  'm-b-25': {
    marginBottom: [{ unit: 'px', value: 25 }, { unit: 'string', value: '!important' }]
  },
  'm-b-30': {
    marginBottom: [{ unit: 'px', value: 30 }, { unit: 'string', value: '!important' }]
  },
  'w-40': {
    width: [{ unit: 'px', value: 40 }]
  },
  'btn-md': {
    height: [{ unit: 'px', value: 40 }]
  },
  block: {
    display: 'block !important'
  },
  'text-ellipsis': {
    display: 'block',
    maxWidth: [{ unit: '%H', value: 1 }],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  'text-muted-light': {
    color: '#aaa'
  },
  'card-box': {
    backgroundColor: '#fff',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ededed' }],
    borderRadius: '4px',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 1 }, { unit: 'px', value: 1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.2)' }],
    marginBottom: [{ unit: 'px', value: 30 }],
    padding: [{ unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }]
  },
  'card-title': {
    color: '#333',
    fontSize: [{ unit: 'px', value: 18 }],
    fontWeight: 'normal',
    marginBottom: [{ unit: 'px', value: 20 }]
  },
  'page-title': {
    color: '#565656',
    fontSize: [{ unit: 'px', value: 21 }],
    fontWeight: 'normal',
    marginBottom: [{ unit: 'px', value: 20 }]
  },
  'page-sub-title': {
    color: '#565656',
    fontSize: [{ unit: 'px', value: 18 }],
    fontWeight: 'normal',
    marginBottom: [{ unit: 'px', value: 20 }]
  },
  'cal-icon::after': {
    background: 'transparent url("../img/calander.png") no-repeat scroll 0 0',
    bottom: [{ unit: 'px', value: 0 }],
    content: '""',
    display: 'block',
    height: [{ unit: 'px', value: 19 }],
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }],
    position: 'absolute',
    right: [{ unit: 'px', value: 15 }],
    top: [{ unit: 'px', value: 0 }],
    width: [{ unit: 'px', value: 17 }]
  },
  'cal-icon': {
    position: 'relative',
    width: [{ unit: '%H', value: 1 }]
  },
  'progress-xs': {
    height: [{ unit: 'px', value: 5 }]
  },
  'label-success-border': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#55ce63' }],
    color: '#55ce63',
    backgroundColor: '#fff',
    display: 'inline-block',
    minWidth: [{ unit: 'px', value: 80 }]
  },
  'label-danger-border': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#f62d51' }],
    color: '#f62d51',
    backgroundColor: '#fff',
    display: 'inline-block',
    minWidth: [{ unit: 'px', value: 80 }]
  },
  'label-warning-border': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ffbc34' }],
    color: '#ffbc34',
    backgroundColor: '#fff',
    display: 'inline-block',
    minWidth: [{ unit: 'px', value: 80 }]
  },
  'label-info-border': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#009efb' }],
    color: '#009efb',
    backgroundColor: '#fff',
    display: 'inline-block',
    minWidth: [{ unit: 'px', value: 80 }]
  },
  panel: {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ededed' }],
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 1 }, { unit: 'px', value: 1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.2)' }],
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  'form-horizontal control-label:not(text-right)': {
    textAlign: 'left'
  },
  'modal-footertext-left': {
    textAlign: 'left'
  },
  'font-18': {
    fontSize: [{ unit: 'px', value: 18 }]
  },
  // ------------------------------------------------------------------
[4. Bootstrap Classes]
  'btn-white': {
    backgroundColor: '#fff',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }],
    color: '#333'
  },
  rounded: {
    borderRadius: '500px'
  },
  circle: {
    borderRadius: '500px'
  },
  'bg-purple': {
    backgroundColor: '#7460ee'
  },
  'label-purple': {
    backgroundColor: '#7460ee'
  },
  'bg-primary': {
    backgroundColor: '#667eea'
  },
  'label-primary': {
    backgroundColor: '#667eea'
  },
  'bg-success': {
    backgroundColor: '#55ce63'
  },
  'label-success': {
    backgroundColor: '#55ce63'
  },
  'bg-info': {
    backgroundColor: '#009efb'
  },
  'label-info': {
    backgroundColor: '#009efb'
  },
  'bg-warning': {
    backgroundColor: '#ffbc34'
  },
  'label-warning': {
    backgroundColor: '#ffbc34'
  },
  'bg-danger': {
    backgroundColor: '#f62d51'
  },
  'label-danger': {
    backgroundColor: '#f62d51'
  },
  'bg-white': {
    backgroundColor: '#fff'
  },
  'text-primary': {
    color: '#667eea'
  },
  'dropdown-menu > li > atext-primary': {
    color: '#667eea'
  },
  'text-success': {
    color: '#55ce63'
  },
  'dropdown-menu > li > atext-success': {
    color: '#55ce63'
  },
  'text-danger': {
    color: '#f62d51'
  },
  'dropdown-menu > li > atext-danger': {
    color: '#f62d51'
  },
  'text-info': {
    color: '#009efb'
  },
  'dropdown-menu > li > atext-info': {
    color: '#009efb'
  },
  'text-warning': {
    color: '#ffbc34'
  },
  'dropdown-menu > li > atext-warning': {
    color: '#ffbc34'
  },
  'text-purple': {
    color: '#7460ee'
  },
  'dropdown-menu > li > atext-purple': {
    color: '#7460ee'
  },
  'btn-purple': {
    backgroundColor: '#7460ee',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#7460ee' }],
    color: '#fff'
  },
  'btn-purple:hover': {
    backgroundColor: '#482fe9',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#482fe9' }]
  },
  'btn-purple:focus': {
    backgroundColor: '#482fe9',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#482fe9' }]
  },
  'btn-primary': {
    backgroundColor: '#667eea',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#667eea' }]
  },
  'btn-primary:hover': {
    backgroundColor: '#4b68e7',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4b68e7' }]
  },
  'btn-primary:focus': {
    backgroundColor: '#4b68e7',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4b68e7' }]
  },
  'btn-primaryactive': {
    backgroundColor: '#4b68e7',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4b68e7' }]
  },
  'btn-primary:active': {
    backgroundColor: '#4b68e7',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4b68e7' }]
  },
  'open > dropdown-togglebtn-primary': {
    backgroundColor: '#4b68e7',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4b68e7' }]
  },
  'btn-primaryactivefocus': {
    backgroundColor: '#4b68e7',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4b68e7' }]
  },
  'btn-primaryactive:focus': {
    backgroundColor: '#4b68e7',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4b68e7' }]
  },
  'btn-primaryactive:hover': {
    backgroundColor: '#4b68e7',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4b68e7' }]
  },
  'btn-primaryfocus:active': {
    backgroundColor: '#4b68e7',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4b68e7' }]
  },
  'btn-primary:active:focus': {
    backgroundColor: '#4b68e7',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4b68e7' }]
  },
  'btn-primary:active:hover': {
    backgroundColor: '#4b68e7',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4b68e7' }]
  },
  'open > dropdown-togglebtn-primaryfocus': {
    backgroundColor: '#4b68e7',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4b68e7' }]
  },
  'open > dropdown-togglebtn-primary:focus': {
    backgroundColor: '#4b68e7',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4b68e7' }]
  },
  'open > dropdown-togglebtn-primary:hover': {
    backgroundColor: '#4b68e7',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4b68e7' }]
  },
  'btn-success': {
    backgroundColor: '#55ce63',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#55ce63' }]
  },
  'btn-success:hover': {
    background: '#4ab657',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4ab657' }]
  },
  'btn-success:focus': {
    background: '#4ab657',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4ab657' }]
  },
  'btn-successactive': {
    background: '#4ab657',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4ab657' }]
  },
  'btn-success:active': {
    background: '#4ab657',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4ab657' }]
  },
  'open > dropdown-togglebtn-success': {
    background: '#4ab657',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4ab657' }]
  },
  'btn-successactivefocus': {
    background: '#4ab657',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4ab657' }]
  },
  'btn-successactive:focus': {
    background: '#4ab657',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4ab657' }]
  },
  'btn-successactive:hover': {
    background: '#4ab657',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4ab657' }]
  },
  'btn-successfocus:active': {
    background: '#4ab657',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4ab657' }]
  },
  'btn-success:active:focus': {
    background: '#4ab657',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4ab657' }]
  },
  'btn-success:active:hover': {
    background: '#4ab657',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4ab657' }]
  },
  'open > dropdown-togglebtn-successfocus': {
    background: '#4ab657',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4ab657' }]
  },
  'open > dropdown-togglebtn-success:focus': {
    background: '#4ab657',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4ab657' }]
  },
  'open > dropdown-togglebtn-success:hover': {
    background: '#4ab657',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#4ab657' }]
  },
  'btn-info': {
    backgroundColor: '#009efb',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#009efb' }]
  },
  'btn-info:hover': {
    backgroundColor: '#028ee1',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028ee1' }]
  },
  'btn-info:focus': {
    backgroundColor: '#028ee1',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028ee1' }]
  },
  'btn-infoactive': {
    backgroundColor: '#028ee1',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028ee1' }]
  },
  'btn-info:active': {
    backgroundColor: '#028ee1',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028ee1' }]
  },
  'open > dropdown-togglebtn-info': {
    backgroundColor: '#028ee1',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028ee1' }]
  },
  'btn-infoactivefocus': {
    backgroundColor: '#028ee1',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028ee1' }]
  },
  'btn-infoactive:focus': {
    backgroundColor: '#028ee1',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028ee1' }]
  },
  'btn-infoactive:hover': {
    backgroundColor: '#028ee1',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028ee1' }]
  },
  'btn-infofocus:active': {
    backgroundColor: '#028ee1',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028ee1' }]
  },
  'btn-info:active:focus': {
    backgroundColor: '#028ee1',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028ee1' }]
  },
  'btn-info:active:hover': {
    backgroundColor: '#028ee1',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028ee1' }]
  },
  'open > dropdown-togglebtn-infofocus': {
    backgroundColor: '#028ee1',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028ee1' }]
  },
  'open > dropdown-togglebtn-info:focus': {
    backgroundColor: '#028ee1',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028ee1' }]
  },
  'open > dropdown-togglebtn-info:hover': {
    backgroundColor: '#028ee1',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028ee1' }]
  },
  'btn-warning': {
    background: '#ffbc34',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ffbc34' }]
  },
  'btn-warning:hover': {
    background: '#e9ab2e',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e9ab2e' }]
  },
  'btn-warning:focus': {
    background: '#e9ab2e',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e9ab2e' }]
  },
  'btn-warningactive': {
    background: '#e9ab2e',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e9ab2e' }]
  },
  'btn-warning:active': {
    background: '#e9ab2e',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e9ab2e' }]
  },
  'open > dropdown-togglebtn-warning': {
    background: '#e9ab2e',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e9ab2e' }]
  },
  'btn-warningactivefocus': {
    background: '#e9ab2e',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e9ab2e' }]
  },
  'btn-warningactive:focus': {
    background: '#e9ab2e',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e9ab2e' }]
  },
  'btn-warningactive:hover': {
    background: '#e9ab2e',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e9ab2e' }]
  },
  'btn-warningfocus:active': {
    background: '#e9ab2e',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e9ab2e' }]
  },
  'btn-warning:active:focus': {
    background: '#e9ab2e',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e9ab2e' }]
  },
  'btn-warning:active:hover': {
    background: '#e9ab2e',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e9ab2e' }]
  },
  'open > dropdown-togglebtn-warningfocus': {
    background: '#e9ab2e',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e9ab2e' }]
  },
  'open > dropdown-togglebtn-warning:focus': {
    background: '#e9ab2e',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e9ab2e' }]
  },
  'open > dropdown-togglebtn-warning:hover': {
    background: '#e9ab2e',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e9ab2e' }]
  },
  'btn-danger': {
    background: '#f62d51',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#f62d51' }]
  },
  'btn-danger:hover': {
    backgroundColor: '#e6294b',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e6294b' }]
  },
  'btn-danger:focus': {
    backgroundColor: '#e6294b',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e6294b' }]
  },
  'pagination > active > a': {
    backgroundColor: '#121312',
    borderColor: '#eff3f6'
  },
  'pagination > active > a:focus': {
    backgroundColor: '#121312',
    borderColor: '#eff3f6'
  },
  'pagination > active > a:hover': {
    backgroundColor: '#121312',
    borderColor: '#eff3f6'
  },
  'pagination > active > span': {
    backgroundColor: '#121312',
    borderColor: '#eff3f6'
  },
  'pagination > active > span:focus': {
    backgroundColor: '#121312',
    borderColor: '#eff3f6'
  },
  'pagination > active > span:hover': {
    backgroundColor: '#121312',
    borderColor: '#eff3f6'
  },
  'pagination > li > a': {
    color: '#667eea'
  },
  'pagination > li > span': {
    color: '#667eea'
  },
  'dropdown-menu': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'rgba(0, 0, 0, 0.1)' }],
    borderRadius: '3px',
    transformOrigin: 'left top 0',
    boxShadow: [{ unit: 'string', value: 'inherit' }, { unit: 'string', value: 'inherit' }, { unit: 'string', value: 'inherit' }, { unit: 'string', value: 'inherit' }],
    backgroundColor: '#fff'
  },
  'navbar-nav open dropdown-menu': {
    backgroundColor: '#fff',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'rgba(0, 0, 0, 0.1)' }],
    'only screen&&<w767': {
      float: 'left',
      position: 'absolute'
    }
  },
  'modal-content': {
    borderRadius: '0'
  },
  'btn-group-xs > btn': {
    minHeight: [{ unit: 'px', value: 22 }],
    minWidth: [{ unit: 'px', value: 22 }]
  },
  'btn-xs': {
    minHeight: [{ unit: 'px', value: 22 }],
    minWidth: [{ unit: 'px', value: 22 }]
  },
  'dropdown-menu': {
    fontSize: [{ unit: 'px', value: 13 }]
  },
  'btn-link': {
    boxShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }]
  },
  'btn-link:hover': {
    boxShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }]
  },
  'btn-link:focus': {
    boxShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }]
  },
  'btn-link:active': {
    boxShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }]
  },
  'btn-link': {
    color: '#333'
  },
  'help-block': {
    color: '#999',
    fontSize: [{ unit: 'px', value: 12 }],
    marginBottom: [{ unit: 'px', value: 7 }],
    marginTop: [{ unit: 'px', value: 7 }]
  },
  // ------------------------------------------------------------------
[5. Animation]
  // ------------------------------------------------------------------
[6. Header]
  header: {
    background: '#667eea',
    background: '-moz-linear-gradient(left, #667eea 0%, #764ba2 100%)',
    background: '-webkit-gradient(left top, right top, color-stop(0%, #dc1d38), color-stop(100%, #040404))',
    background: '-webkit-linear-gradient(left, #667eea 0%, #764ba2 100%)',
    background: '-o-linear-gradient(left, #667eea 0%, #764ba2 100%)',
    background: '-ms-linear-gradient(left, #667eea 0%, #764ba2 100%)',
    background: 'linear-gradient(to right, #dc1d38 0%, #151515 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr='#667eea', endColorstr='#764ba2', GradientType=1 )',
    left: [{ unit: 'px', value: 0 }],
    position: 'fixed',
    right: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 0 }],
    zIndex: '1050',
    height: [{ unit: 'px', value: 60 }],
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 1 }, { unit: 'px', value: 1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.2)' }]
  },
  'header header-left': {
    float: 'left',
    height: [{ unit: 'px', value: 110 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }],
    position: 'relative',
    textAlign: 'center',
    width: [{ unit: 'px', value: 230 }],
    zIndex: '1',
    backgroundColor: '#EEF3F6 !important'
  },
  logo: {
    display: 'block',
    lineHeight: [{ unit: 'px', value: 60 }]
  },
  'header navbar-nav badge': {
    position: 'absolute',
    right: [{ unit: 'px', value: 7 }],
    top: [{ unit: 'px', value: 4 }]
  },
  'header dropdown-menu > li > a': {
    position: 'relative'
  },
  'page-title-box': {
    borderRadius: '0',
    height: [{ unit: 'px', value: 60 }],
    marginBottom: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 17 }, { unit: 'px', value: 20 }, { unit: 'px', value: 17 }, { unit: 'px', value: 20 }]
  },
  'page-title-box h3': {
    color: '#fff',
    fontSize: [{ unit: 'px', value: 20 }],
    fontWeight: 'normal',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'user-menu': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'relative',
    zIndex: '99',
    'only screen&&<w479': {
      display: 'none'
    }
  },
  'user-menunav > li > a': {
    color: '#fff',
    fontSize: [{ unit: 'px', value: 16 }],
    lineHeight: [{ unit: 'px', value: 60 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 15 }, { unit: 'px', value: 0 }, { unit: 'px', value: 15 }],
    height: [{ unit: 'px', value: 60 }]
  },
  'user-menunav > li > a:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  'user-menunav > li > a:focus': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  'user-img': {
    display: 'inline-block',
    position: 'relative'
  },
  'user-img status': {
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#fff' }],
    bottom: [{ unit: 'px', value: 0 }],
    height: [{ unit: 'px', value: 10 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'absolute',
    right: [{ unit: 'px', value: 0 }],
    width: [{ unit: 'px', value: 10 }]
  },
  'user-menu user-img status': {
    bottom: [{ unit: 'px', value: 10 }]
  },
  status: {
    backgroundColor: '#263238',
    borderRadius: '50%',
    display: 'inline-block',
    height: [{ unit: 'px', value: 10 }],
    marginRight: [{ unit: 'px', value: 10 }],
    width: [{ unit: 'px', value: 10 }]
  },
  statusonline: {
    backgroundColor: '#55ce63'
  },
  statusoffline: {
    backgroundColor: '#f62d51'
  },
  statusaway: {
    backgroundColor: '#faa937'
  },
  // ------------------------------------------------------------------
[7. Sidebar]
  sidebar: {
    top: [{ unit: 'px', value: 60 }],
    width: [{ unit: 'px', value: 230 }],
    zIndex: '1041',
    backgroundColor: '#1d2731',
    bottom: [{ unit: 'px', value: 0 }],
    marginTop: [{ unit: 'px', value: 0 }],
    position: 'fixed',
    left: [{ unit: 'px', value: 0 }],
    WebkitTransition: 'all 0.4s ease',
    MozTransition: 'all 0.4s ease',
    transition: 'all 0.4s ease'
  },
  'sidebar-inner': {
    height: [{ unit: '%V', value: 1 }]
  },
  'sidebar-menu ul': {
    fontSize: [{ unit: 'px', value: 14 }],
    listStyleType: 'none',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'sidebar-menu li a': {
    color: '#b7c0cd',
    display: 'block',
    fontSize: [{ unit: 'px', value: 13 }],
    height: [{ unit: 'string', value: 'auto' }],
    lineHeight: [{ unit: 'px', value: 40 }],
    minHeight: [{ unit: 'px', value: 40 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }]
  },
  'sidebar-menu li a:hover': {
    color: '#fff'
  },
  'sidebar-menu li a > badge': {
    marginTop: [{ unit: 'px', value: 10 }]
  },
  'sidebar-menu liactive a': {
    color: '#fff',
    backgroundColor: '#263238'
  },
  'menu-title': {
    color: '#667eea',
    fontSize: [{ unit: 'px', value: 16 }],
    lineHeight: [{ unit: 'px', value: 40 }],
    minHeight: [{ unit: 'px', value: 40 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }]
  },
  'menu-title > i': {
    float: 'right',
    lineHeight: [{ unit: 'px', value: 40 }]
  },
  'sidebar-menu limenu-title a': {
    color: '#667eea',
    display: 'inline-block',
    float: 'right',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'sidebar-menu limenu-title abtn': {
    color: '#fff',
    display: 'block',
    float: 'none',
    fontSize: [{ unit: 'px', value: 15 }],
    lineHeight: [{ unit: 'string', value: 'inherit' }],
    marginBottom: [{ unit: 'px', value: 15 }]
  },
  'sidebar-menu ul ul aactive': {
    color: '#667eea',
    textDecoration: 'underline'
  },
  'mobile-user-menu': {
    color: '#fff',
    display: 'none',
    fontSize: [{ unit: 'px', value: 24 }],
    height: [{ unit: 'px', value: 60 }],
    lineHeight: [{ unit: 'px', value: 60 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }],
    position: 'absolute',
    right: [{ unit: 'px', value: 0 }],
    textAlign: 'right',
    top: [{ unit: 'px', value: 0 }],
    width: [{ unit: 'px', value: 60 }],
    zIndex: '10'
  },
  'mobile-user-menu a': {
    color: '#fff'
  },
  'mobile-user-menu a:hover': {
    color: '#fff'
  },
  'profile-rightbar': {
    display: 'none !important',
    color: '#667eea',
    fontSize: [{ unit: 'px', value: 26 }],
    marginLeft: [{ unit: 'px', value: 15 }],
    'only screen&&<w991': {
      display: 'inline-block !important'
    }
  },
  'fixed-sidebar-right': {
    position: 'fixed',
    top: [{ unit: 'px', value: 60 }],
    right: [{ unit: 'px', value: 0 }],
    width: [{ unit: 'px', value: 300 }],
    marginRight: [{ unit: 'px', value: -300 }],
    bottom: [{ unit: 'px', value: 0 }],
    zIndex: '101',
    WebkitTransition: 'all 0.4s ease',
    MozTransition: 'all 0.4s ease',
    transition: 'all 0.4s ease'
  },
  mobile_btn: {
    display: 'none'
  },
  '#sidebar-menu ul ul a': {
    display: 'block',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }]
  },
  '#sidebar-menu ul ul': {
    backgroundColor: '#263238'
  },
  '#sidebar-menu ul ul ul a': {
    paddingLeft: [{ unit: 'px', value: 80 }]
  },
  '#sidebar-menu ul ul ul ul a': {
    paddingLeft: [{ unit: 'px', value: 100 }]
  },
  'sidebar-menu > ul > li': {
    position: 'relative',
    height: [{ unit: 'px', value: 97 }],
    textAlign: 'center'
  },
  'sidebar-menu menu-arrow': {
    WebkitTransition: '-webkit-transform 0.15s',
    OTransition: '-o-transform 0.15s',
    transition: 'transform .15s',
    position: 'absolute',
    right: [{ unit: 'px', value: 20 }],
    display: 'inline-block',
    fontFamily: ''FontAwesome'',
    textRendering: 'auto',
    lineHeight: [{ unit: 'px', value: 40 }],
    fontSize: [{ unit: 'px', value: 18 }],
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTransform: 'translate(0, 0)',
    MsTransform: 'translate(0, 0)',
    OTransform: 'translate(0, 0)',
    transform: 'translate(0, 0)'
  },
  'sidebar-menu menu-arrow:before': {
    content: '"\f105"'
  },
  'sidebar-menu li asubdrop menu-arrow': {
    MsTransform: 'rotate(90deg)',
    WebkitTransform: 'rotate(90deg)',
    OTransform: 'rotate(90deg)',
    transform: 'rotate(90deg)'
  },
  'noti-dot:before': {
    content: '''',
    width: [{ unit: 'px', value: 5 }],
    height: [{ unit: 'px', value: 5 }],
    border: [{ unit: 'px', value: 5 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#667eea' }],
    WebkitBorderRadius: '30px',
    MozBorderRadius: '30px',
    borderRadius: '30px',
    backgroundColor: '#667eea',
    zIndex: '10',
    position: 'absolute',
    right: [{ unit: 'px', value: 37 }],
    top: [{ unit: 'px', value: 17 }]
  },
  'noti-dot:after': {
    content: '''',
    border: [{ unit: 'px', value: 4 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#667eea' }],
    background: 'transparent',
    WebkitBorderRadius: '60px',
    MozBorderRadius: '60px',
    borderRadius: '60px',
    height: [{ unit: 'px', value: 24 }],
    width: [{ unit: 'px', value: 24 }],
    WebkitAnimation: 'pulse 3s ease-out',
    MozAnimation: 'pulse 3s ease-out',
    animation: 'pulse 3s ease-out',
    WebkitAnimationIterationCount: 'infinite',
    MozAnimationIterationCount: 'infinite',
    animationIterationCount: 'infinite',
    position: 'absolute',
    top: [{ unit: 'px', value: 10 }],
    right: [{ unit: 'px', value: 30 }],
    zIndex: '1',
    opacity: '0'
  },
  // ------------------------------------------------------------------
[8. Content]
  'page-wrapper': {
    left: [{ unit: 'px', value: 0 }],
    marginLeft: [{ unit: 'px', value: 230 }],
    paddingTop: [{ unit: 'px', value: 60 }],
    position: 'relative',
    WebkitTransition: 'all 0.4s ease',
    MozTransition: 'all 0.4s ease',
    transition: 'all 0.4s ease'
  },
  'page-wrapper > content': {
    padding: [{ unit: 'px', value: 30 }, { unit: 'px', value: 30 }, { unit: 'px', value: 30 }, { unit: 'px', value: 30 }]
  },
  // ------------------------------------------------------------------
[9. Login]
  'account-title': {
    fontSize: [{ unit: 'px', value: 32 }],
    fontWeight: 'normal',
    margin: [{ unit: 'px', value: 40 }, { unit: 'px', value: 0 }, { unit: 'px', value: 40 }, { unit: 'px', value: 0 }],
    textAlign: 'center'
  },
  'account-box': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }],
    width: [{ unit: 'px', value: 400 }],
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 6 }, { unit: 'px', value: 15 }, { unit: 'string', value: 'rgba(36, 37, 38, 0.08)' }]
  },
  'account-wrapper': {
    backgroundColor: '#fff',
    padding: [{ unit: 'px', value: 30 }, { unit: 'px', value: 30 }, { unit: 'px', value: 30 }, { unit: 'px', value: 30 }]
  },
  'account-logo': {
    marginBottom: [{ unit: 'px', value: 20 }],
    textAlign: 'center'
  },
  'account-box form-group': {
    marginBottom: [{ unit: 'px', value: 25 }]
  },
  'account-box account-btn': {
    borderRadius: '0',
    fontSize: [{ unit: 'px', value: 22 }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 26 }, { unit: 'px', value: 10 }, { unit: 'px', value: 26 }],
    border: [{ unit: 'px', value: 0 }]
  },
  'account-box account-btn:hover': {
    border: [{ unit: 'px', value: 0 }],
    opacity: '0.8'
  },
  'account-box account-btn:focus': {
    border: [{ unit: 'px', value: 0 }],
    opacity: '0.8'
  },
  'account-box a': {
    color: '#323232',
    fontSize: [{ unit: 'px', value: 16 }]
  },
  'account-box a:hover': {
    color: '#667eea'
  },
  'account-box form-control': {
    backgroundColor: '#f8fafc',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#dfe3e9' }],
    height: [{ unit: 'px', value: 50 }]
  },
  'account-box label': {
    color: '#7f8fa4',
    fontSize: [{ unit: 'px', value: 16 }],
    fontWeight: 'normal'
  },
  'account-logo img': {
    width: [{ unit: 'px', value: 100 }]
  },
  // ------------------------------------------------------------------
[10. Dashboard]
  'panel-table panel-heading': {
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ddd' }],
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }]
  },
  'panel-table panel-body': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'panel-table panel-footer': {
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  'panel-table panel-footer a': {
    color: '#333'
  },
  'panel-title > abtn': {
    color: '#fff'
  },
  'custom-table tr': {
    backgroundColor: '#fff',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 3 }, { unit: 'string', value: '#e5e5e5' }]
  },
  'tablecustom-table > tbody > tr > td': {
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 8 }, { unit: 'px', value: 10 }, { unit: 'px', value: 8 }],
    verticalAlign: 'middle'
  },
  'tablecustom-table > tbody > tr > th': {
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 8 }, { unit: 'px', value: 10 }, { unit: 'px', value: 8 }],
    verticalAlign: 'middle'
  },
  'tablecustom-table > tfoot > tr > td': {
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 8 }, { unit: 'px', value: 10 }, { unit: 'px', value: 8 }],
    verticalAlign: 'middle'
  },
  'tablecustom-table > tfoot > tr > th': {
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 8 }, { unit: 'px', value: 10 }, { unit: 'px', value: 8 }],
    verticalAlign: 'middle'
  },
  'tablecustom-table > thead > tr > td': {
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 8 }, { unit: 'px', value: 10 }, { unit: 'px', value: 8 }],
    verticalAlign: 'middle'
  },
  'tablecustom-table > thead > tr > th': {
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 8 }, { unit: 'px', value: 10 }, { unit: 'px', value: 8 }],
    verticalAlign: 'middle'
  },
  '#area-chart': {
    minHeight: [{ unit: 'px', value: 250 }]
  },
  '#line-chart': {
    minHeight: [{ unit: 'px', value: 250 }]
  },
  '#bar-chart': {
    minHeight: [{ unit: 'px', value: 250 }]
  },
  '#stacked': {
    minHeight: [{ unit: 'px', value: 250 }]
  },
  '#pie-chart': {
    minHeight: [{ unit: 'px', value: 250 }]
  },
  'dash-widget-icon': {
    backgroundColor: '#eee',
    borderRadius: '100%',
    color: '#777',
    display: 'inline-block',
    float: 'left',
    fontSize: [{ unit: 'px', value: 30 }],
    height: [{ unit: 'px', value: 60 }],
    lineHeight: [{ unit: 'px', value: 60 }],
    marginRight: [{ unit: 'px', value: 10 }],
    textAlign: 'center',
    width: [{ unit: 'px', value: 60 }]
  },
  'dash-widget-info': {
    textAlign: 'right'
  },
  'dash-widget-info > h3': {
    fontSize: [{ unit: 'px', value: 30 }],
    fontWeight: '600'
  },
  'dash-widget-info > span': {
    fontSize: [{ unit: 'px', value: 16 }]
  },
  // ------------------------------------------------------------------
[11. Activity]
  'activity-box': {
    position: 'relative'
  },
  'activity-list': {
    listStyle: 'none',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'relative'
  },
  'activity activity-list': {
    listStyle: 'none',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'relative'
  },
  'activity activity-list > li activity-user': {
    height: [{ unit: 'px', value: 32 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'absolute',
    top: [{ unit: 'px', value: 12 }],
    left: [{ unit: 'px', value: 8 }],
    width: [{ unit: 'px', value: 32 }]
  },
  'activity activity-list > li activity-content': {
    backgroundColor: '#fff',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 40 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'relative'
  },
  'activity-list::before': {
    background: '#ddd',
    bottom: [{ unit: 'px', value: 0 }],
    content: '""',
    left: [{ unit: 'px', value: 23 }],
    position: 'absolute',
    top: [{ unit: 'px', value: 8 }],
    width: [{ unit: 'px', value: 2 }]
  },
  'activity activity-list li::before': {
    background: '#ddd',
    bottom: [{ unit: 'px', value: 0 }],
    content: '""',
    left: [{ unit: 'px', value: 22 }],
    position: 'absolute',
    top: [{ unit: 'px', value: 12 }],
    width: [{ unit: 'px', value: 2 }]
  },
  'activity-list li::before': {
    background: '#eee',
    bottom: [{ unit: 'px', value: 0 }],
    content: '""',
    left: [{ unit: 'px', value: 8 }],
    position: 'absolute',
    top: [{ unit: 'px', value: 8 }],
    width: [{ unit: 'px', value: 2 }]
  },
  'activity-list > li': {
    backgroundColor: '#fff',
    marginBottom: [{ unit: 'px', value: 10 }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }],
    position: 'relative',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ededed' }],
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 1 }, { unit: 'px', value: 1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.2)' }]
  },
  'activity-list > li:last-child activity-content': {
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'activity-user avatar': {
    height: [{ unit: 'px', value: 32 }],
    lineHeight: [{ unit: 'px', value: 32 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    width: [{ unit: 'px', value: 32 }]
  },
  'activity-list > li activity-user': {
    background: '#fff',
    height: [{ unit: 'px', value: 32 }],
    left: [{ unit: 'px', value: -7 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'absolute',
    top: [{ unit: 'px', value: 3 }],
    width: [{ unit: 'px', value: 32 }]
  },
  'activity-list > li activity-content': {
    backgroundColor: '#fff',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 40 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'relative'
  },
  'activity-list > li activity-content timeline-content': {
    color: '#9e9e9e'
  },
  'activity-list > li activity-content timeline-content aname': {
    color: '#616161',
    fontWeight: 'bold'
  },
  'activity-list > li time': {
    color: '#bdbdbd',
    display: 'block',
    fontSize: [{ unit: 'px', value: 12 }],
    lineHeight: [{ unit: 'px', value: 1.35 }]
  },
  // ------------------------------------------------------------------
[12. Select2]
  'select2-container select2-selection--single': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }],
    height: [{ unit: 'px', value: 40 }],
    borderRadius: '0'
  },
  'select2-container--default select2-selection--single select2-selection__arrow': {
    height: [{ unit: 'px', value: 38 }],
    right: [{ unit: 'px', value: 7 }]
  },
  'select2-container--default select2-selection--single select2-selection__arrow b': {
    borderColor: '#ccc transparent transparent',
    borderStyle: 'solid',
    borderWidth: '6px 6px 0',
    height: [{ unit: 'px', value: 0 }],
    left: [{ unit: '%H', value: 0.5 }],
    marginLeft: [{ unit: 'px', value: -10 }],
    marginTop: [{ unit: 'px', value: -2 }],
    position: 'absolute',
    top: [{ unit: '%V', value: 0.5 }],
    width: [{ unit: 'px', value: 0 }]
  },
  'select2-container--defaultselect2-container--open select2-selection--single select2-selection__arrow b': {
    borderColor: 'transparent transparent #ccc',
    borderWidth: '0 6px 6px'
  },
  'select2-container select2-selection--single select2-selection__rendered': {
    paddingRight: [{ unit: 'px', value: 30 }],
    paddingLeft: [{ unit: 'px', value: 15 }]
  },
  'select2-container--default select2-selection--single select2-selection__rendered': {
    color: '#676767',
    fontSize: [{ unit: 'px', value: 14 }],
    fontWeight: 'normal',
    lineHeight: [{ unit: 'px', value: 38 }]
  },
  'select2-container--default select2-results__option--highlighted[aria-selected]': {
    backgroundColor: '#667eea'
  },
  // ------------------------------------------------------------------
[13. Nav tabs]
  'nav-tabs > li > a': {
    marginRight: [{ unit: 'px', value: 0 }],
    color: '#888',
    borderRadius: '0'
  },
  'nav-tabs > li > a:hover': {
    borderColor: 'transparent',
    color: '#333'
  },
  'nav-tabs > li > a:focus': {
    borderColor: 'transparent',
    color: '#333'
  },
  'nav-tabsnav-justified > li > a': {
    borderRadius: '0',
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'nav-tabsnav-justified > li > a:hover': {
    borderBottomColor: '#ddd'
  },
  'nav-tabsnav-justified > li > a:focus': {
    borderBottomColor: '#ddd'
  },
  'nav-tabsnav-justifiednav-tabs-solid > li > a': {
    borderColor: 'transparent'
  },
  'nav-tabsnav-tabs-solid > li > a': {
    color: '#333',
    'only screen&&>w768': {
      borderColor: 'transparent'
    }
  },
  'nav-tabsnav-tabs-solid > active > a': {
    backgroundColor: '#667eea',
    borderColor: '#667eea',
    color: '#fff'
  },
  'nav-tabsnav-tabs-solid > active > a:hover': {
    backgroundColor: '#667eea',
    borderColor: '#667eea',
    color: '#fff'
  },
  'nav-tabsnav-tabs-solid > active > a:focus': {
    backgroundColor: '#667eea',
    borderColor: '#667eea',
    color: '#fff'
  },
  'nav-tabsnav-tabs-solidnav-tabs-rounded': {
    borderRadius: '50px'
  },
  'nav-tabsnav-tabs-solidnav-tabs-rounded > li > a': {
    borderRadius: '50px'
  },
  'nav-tabsnav-tabs-solidnav-tabs-rounded > active > a': {
    borderRadius: '50px'
  },
  'nav-tabsnav-tabs-solidnav-tabs-rounded > active > a:hover': {
    borderRadius: '50px'
  },
  'nav-tabsnav-tabs-solidnav-tabs-rounded > active > a:focus': {
    borderRadius: '50px'
  },
  'nav-tabs-justified > li > a': {
    borderRadius: '0',
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'nav-tabs-justified > li > a:hover': {
    borderBottomColor: '#ddd'
  },
  'nav-tabs-justified > li > a:focus': {
    borderBottomColor: '#ddd'
  },
  'nav-tabs-justifiednav-tabs-solid > li > a': {
    borderColor: 'transparent'
  },
  'tab-content': {
    paddingTop: [{ unit: 'px', value: 20 }]
  },
  // ------------------------------------------------------------------
[14. Holidays]
  'custom-table trholiday-completed': {
    color: '#aaa'
  },
  'modal-headerbg-danger modal-title': {
    color: '#fff'
  },
  close: {
    fontSize: [{ unit: 'px', value: 28 }]
  },
  'dropdownaction-label': {
    display: 'inline-block'
  },
  'action-label > a': {
    display: 'inline-block',
    minWidth: [{ unit: 'px', value: 103 }]
  },
  'action-label btn-sm': {
    padding: [{ unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }]
  },
  'action-label icaret': {
    marginLeft: [{ unit: 'px', value: 3 }],
    marginRight: [{ unit: 'px', value: 0 }]
  },
  // ------------------------------------------------------------------
[15. Edit Profile]
  'profile-img-wrap': {
    height: [{ unit: 'px', value: 120 }],
    position: 'absolute',
    width: [{ unit: 'px', value: 120 }],
    background: '#fff',
    overflow: 'hidden'
  },
  'profile-basic': {
    marginLeft: [{ unit: 'px', value: 140 }]
  },
  'profile-img-wrap img': {
    width: [{ unit: 'px', value: 120 }],
    height: [{ unit: 'px', value: 120 }]
  },
  fileuploadbtn: {
    position: 'absolute',
    right: [{ unit: 'px', value: 0 }],
    bottom: [{ unit: 'px', value: 0 }],
    background: 'rgba(33, 33, 33, 0.5)',
    borderRadius: '0',
    padding: [{ unit: 'px', value: 3 }, { unit: 'px', value: 10 }, { unit: 'px', value: 3 }, { unit: 'px', value: 10 }],
    border: [{ unit: 'string', value: 'none' }]
  },
  'fileupload inputupload': {
    cursor: 'pointer',
    filter: 'alpha(opacity=0)',
    fontSize: [{ unit: 'px', value: 20 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    opacity: '0',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'absolute',
    right: [{ unit: 'px', value: -3 }],
    top: [{ unit: 'px', value: -3 }],
    padding: [{ unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }]
  },
  'btn-text': {
    color: '#fff'
  },
  // ------------------------------------------------------------------
[16. Chat]
  'chat-main-row': {
    bottom: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    overflow: 'auto',
    paddingBottom: [{ unit: 'string', value: 'inherit' }],
    paddingTop: [{ unit: 'string', value: 'inherit' }],
    position: 'absolute',
    right: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 0 }]
  },
  'chat-main-wrapper': {
    display: 'table',
    height: [{ unit: '%V', value: 1 }],
    tableLayout: 'fixed',
    width: [{ unit: '%H', value: 1 }]
  },
  'message-view': {
    display: 'table-cell',
    height: [{ unit: '%V', value: 1 }],
    float: 'none',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'static',
    verticalAlign: 'top',
    // -webkit-transition: all 0.4s ease;-moz-transition: all 0.4s ease;transition: all 0.4s ease;
  },
  'chat-window': {
    display: 'table',
    height: [{ unit: '%V', value: 1 }],
    tableLayout: 'fixed',
    width: [{ unit: '%H', value: 1 }],
    backgroundColor: '#eff3f6'
  },
  'chat-header': {
    backgroundColor: '#fff',
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 15 }, { unit: 'px', value: 10 }, { unit: 'px', value: 15 }]
  },
  'chat-header navbar': {
    border: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'none' }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    minHeight: [{ unit: 'string', value: 'auto' }]
  },
  'chat-header user-info a': {
    color: '#76838f',
    textTransform: 'uppercase'
  },
  'typing-text': {
    color: '#667eea',
    fontSize: [{ unit: 'px', value: 12 }],
    textTransform: 'lowercase'
  },
  'last-seen': {
    color: '#a3afb7',
    display: 'block',
    fontSize: [{ unit: 'px', value: 12 }]
  },
  'chat-menu': {
    marginTop: [{ unit: 'px', value: 6 }]
  },
  'chat-menunavbar-nav > li > a': {
    color: '#667eea',
    fontSize: [{ unit: 'px', value: 26 }],
    marginLeft: [{ unit: 'px', value: 15 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'chat-menunavbar-nav > li > a:hover': {
    backgroundColor: 'transparent'
  },
  'chat-menunavbar-nav > li > a:focus': {
    backgroundColor: 'transparent'
  },
  'chat-menu dropdown-menu': {
    left: [{ unit: 'string', value: 'auto' }],
    right: [{ unit: 'px', value: 0 }]
  },
  'message-search': {
    marginTop: [{ unit: 'px', value: 5 }]
  },
  'message-search input-group': {
    backgroundColor: '#f3f7f9',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e4eaec' }],
    borderRadius: '50px'
  },
  'message-search input-group form-control': {
    background: 'transparent',
    border: [{ unit: 'string', value: 'none' }]
  },
  'message-search btn': {
    backgroundColor: 'transparent'
  },
  'chat-contents': {
    display: 'table-row',
    height: [{ unit: '%V', value: 1 }]
  },
  'chat-content-wrap': {
    height: [{ unit: '%V', value: 1 }],
    position: 'relative',
    width: [{ unit: '%H', value: 1 }]
  },
  'chat-wrap-inner': {
    bottom: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    overflow: 'auto',
    position: 'absolute',
    right: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 0 }]
  },
  chats: {
    padding: [{ unit: 'px', value: 30 }, { unit: 'px', value: 15 }, { unit: 'px', value: 30 }, { unit: 'px', value: 15 }]
  },
  'chat-body': {
    display: 'block',
    margin: [{ unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    overflow: 'hidden'
  },
  'chat-body:first-child': {
    marginTop: [{ unit: 'px', value: 0 }]
  },
  'chat-right chat-content': {
    position: 'relative',
    display: 'block',
    float: 'right',
    padding: [{ unit: 'px', value: 8 }, { unit: 'px', value: 15 }, { unit: 'px', value: 8 }, { unit: 'px', value: 15 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    clear: 'both',
    color: '#fff',
    backgroundColor: '#34444c',
    borderRadius: '20px 2px 2px 20px',
    maxWidth: [{ unit: '%H', value: 0.6 }]
  },
  'chat-right chat-body': {
    paddingLeft: [{ unit: 'px', value: 48 }],
    paddingRight: [{ unit: 'px', value: 10 }]
  },
  'chat-bubble': {
    display: 'block',
    width: [{ unit: '%H', value: 1 }],
    float: 'left',
    marginBottom: [{ unit: 'px', value: 10 }]
  },
  'chat-bubble:hover chat-action-btns': {
    display: 'block',
    float: 'left'
  },
  'chat-right chat-bubble:hover chat-action-btns': {
    float: 'right',
    display: 'block'
  },
  'chatchat-right chat-bubble:last-child chat-content': {
    borderBottomRightRadius: '20px'
  },
  'chatchat-right chat-bubble:first-child chat-content': {
    borderTopRightRadius: '20px'
  },
  'chat-content > p': {
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'chat-time': {
    color: 'rgba(255, 255, 255, 0.6)',
    display: 'block',
    fontSize: [{ unit: 'px', value: 12 }]
  },
  'chat-right chat-time': {
    textAlign: 'right'
  },
  'chat-bubble chat-action-btns': {
    display: 'none'
  },
  'chat-action-btns': {
    float: 'right'
  },
  'chat-action-btns ul': {
    listStyle: 'none',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 0 }, { unit: 'px', value: 15 }]
  },
  'chat-action-btns ul > li': {
    display: 'inline-block',
    marginLeft: [{ unit: 'px', value: 5 }],
    fontSize: [{ unit: 'px', value: 18 }]
  },
  'chat-right chat-action-btns': {
    float: 'left'
  },
  'chat-bubble chat-action-btns a': {
    color: '#8c8c8c'
  },
  'chat-line': {
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    height: [{ unit: 'px', value: 12 }],
    margin: [{ unit: 'px', value: 7 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 0 }],
    position: 'relative',
    textAlign: 'center'
  },
  'chat-date': {
    backgroundColor: '#eff3f6',
    color: '#667eea',
    fontSize: [{ unit: 'px', value: 12 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 11 }, { unit: 'px', value: 0 }, { unit: 'px', value: 11 }]
  },
  'chat-avatar': {
    float: 'right'
  },
  'chat-left chat-avatar': {
    float: 'left'
  },
  'chat-left chat-body': {
    marginRight: [{ unit: 'px', value: 0 }],
    marginLeft: [{ unit: 'px', value: 30 }],
    paddingRight: [{ unit: 'px', value: 20 }]
  },
  'chat-left chat-content': {
    backgroundColor: '#fff',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    color: '#76838f',
    float: 'left',
    position: 'relative',
    padding: [{ unit: 'px', value: 8 }, { unit: 'px', value: 15 }, { unit: 'px', value: 8 }, { unit: 'px', value: 15 }],
    borderRadius: '2px 20px 20px 2px',
    maxWidth: [{ unit: '%H', value: 0.6 }]
  },
  avatar: {
    backgroundColor: '#aaa',
    borderRadius: '50%',
    color: '#fff',
    display: 'inline-block',
    fontWeight: '500',
    height: [{ unit: 'px', value: 38 }],
    lineHeight: [{ unit: 'px', value: 38 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    overflow: 'hidden',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    verticalAlign: 'middle',
    width: [{ unit: 'px', value: 38 }],
    position: 'relative',
    whiteSpace: 'nowrap'
  },
  'avatar:hover': {
    color: '#fff'
  },
  'avatar > img': {
    width: [{ unit: '%H', value: 1 }],
    display: 'block'
  },
  'chatchat-left chat-bubble:first-child chat-content': {
    borderTopLeftRadius: '20px',
    marginTop: [{ unit: 'px', value: 0 }]
  },
  'chatchat-left chat-bubble:last-child chat-content': {
    borderBottomLeftRadius: '20px'
  },
  'chat-left chat-time': {
    color: '#a3afb7'
  },
  'attach-list': {
    color: '#adb7be',
    padding: [{ unit: 'px', value: 5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    lineHeight: [{ unit: 'px', value: 24 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    listStyle: 'none'
  },
  'attach-list i': {
    marginRight: [{ unit: 'px', value: 3 }],
    fontSize: [{ unit: 'px', value: 16 }]
  },
  'previews li': {
    float: 'left',
    margin: [{ unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }]
  },
  'previews img': {
    display: 'block',
    maxWidth: [{ unit: 'px', value: 360 }],
    width: [{ unit: 'string', value: 'auto' }]
  },
  previews: {
    listStyle: 'none',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'chat-right attach-list a': {
    color: '#fff'
  },
  'chat-right attach-list i': {
    color: '#fff'
  },
  'chat-footer': {
    backgroundColor: '#fff',
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }]
  },
  'message-bar': {
    display: 'table',
    height: [{ unit: 'px', value: 44 }],
    position: 'relative',
    width: [{ unit: '%H', value: 1 }]
  },
  'message-bar message-inner': {
    display: 'table-row',
    height: [{ unit: '%V', value: 1 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 8 }, { unit: 'px', value: 0 }, { unit: 'px', value: 8 }],
    width: [{ unit: '%H', value: 1 }]
  },
  'message-bar link': {
    color: '#777',
    display: 'table-cell',
    fontSize: [{ unit: 'px', value: 20 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }],
    position: 'relative',
    verticalAlign: 'middle',
    width: [{ unit: 'px', value: 30 }]
  },
  'message-bar message-area': {
    display: 'table-cell'
  },
  'message-area input-group form-control': {
    backgroundColor: '#fff',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    boxShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }],
    color: '#555',
    display: 'block',
    fontSize: [{ unit: 'px', value: 14 }],
    height: [{ unit: 'px', value: 44 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 6 }, { unit: 'px', value: 12 }, { unit: 'px', value: 6 }, { unit: 'px', value: 12 }],
    width: [{ unit: '%H', value: 1 }],
    resize: 'none'
  },
  'message-area btn': {
    height: [{ unit: 'px', value: 44 }],
    width: [{ unit: 'px', value: 50 }]
  },
  'profile-right': {
    display: 'table-cell',
    height: [{ unit: '%V', value: 1 }],
    float: 'none',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'static',
    verticalAlign: 'top'
  },
  'display-table': {
    display: 'table',
    tableLayout: 'fixed',
    borderSpacing: '0',
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }]
  },
  'table-row': {
    display: 'table-row',
    height: [{ unit: '%V', value: 1 }]
  },
  'table-body': {
    position: 'relative',
    height: [{ unit: '%V', value: 1 }],
    width: [{ unit: '%H', value: 1 }]
  },
  'table-content': {
    bottom: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    overflow: 'auto',
    position: 'absolute',
    right: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 0 }]
  },
  'profile-right-inner': {
    borderLeft: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    backgroundColor: '#fff'
  },
  'chat-profile-img': {
    padding: [{ unit: 'px', value: 30 }, { unit: 'px', value: 30 }, { unit: 'px', value: 30 }, { unit: 'px', value: 30 }],
    position: 'relative',
    textAlign: 'center'
  },
  'edit-profile-img': {
    height: [{ unit: 'px', value: 120 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }],
    position: 'relative',
    width: [{ unit: 'px', value: 120 }],
    cursor: 'pointer'
  },
  'edit-profile-img img': {
    borderRadius: '50%',
    height: [{ unit: 'string', value: 'auto' }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    width: [{ unit: 'px', value: 120 }]
  },
  'change-img': {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '50%',
    color: '#fff',
    display: 'none',
    height: [{ unit: '%V', value: 1 }],
    left: [{ unit: 'px', value: 0 }],
    lineHeight: [{ unit: 'px', value: 120 }],
    position: 'absolute',
    top: [{ unit: 'px', value: 0 }],
    width: [{ unit: '%H', value: 1 }]
  },
  'edit-profile-img:hover change-img': {
    display: 'block'
  },
  'edit-profile-img avatar': {
    height: [{ unit: 'string', value: 'auto' }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    width: [{ unit: 'px', value: 120 }]
  },
  'user-name': {
    color: '#333'
  },
  'edit-btn': {
    borderRadius: '40px',
    height: [{ unit: 'px', value: 36 }],
    position: 'absolute',
    right: [{ unit: 'px', value: 15 }],
    top: [{ unit: 'px', value: 15 }],
    width: [{ unit: 'px', value: 36 }]
  },
  'chat-profile-info': {
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }]
  },
  'user-det-list': {
    listStyle: 'none',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'user-det-list > li': {
    padding: [{ unit: 'px', value: 6 }, { unit: 'px', value: 15 }, { unit: 'px', value: 6 }, { unit: 'px', value: 15 }]
  },
  'user-det-list text-muted': {
    color: '#888'
  },
  'files-list': {
    listStyle: 'none',
    paddingLeft: [{ unit: 'px', value: 0 }]
  },
  'files-list > li': {
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    borderRadius: 'inherit',
    margin: [{ unit: 'px', value: 2 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }]
  },
  'files-cont': {
    position: 'relative'
  },
  'file-type': {
    height: [{ unit: 'px', value: 48 }],
    position: 'absolute',
    width: [{ unit: 'px', value: 48 }]
  },
  'files-icon': {
    backgroundColor: '#f3f7f9',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e4eaec' }],
    borderRadius: '4px',
    display: 'inline-block',
    height: [{ unit: 'px', value: 38 }],
    lineHeight: [{ unit: 'px', value: 38 }],
    textAlign: 'center',
    width: [{ unit: 'px', value: 38 }]
  },
  'files-icon i': {
    color: '#76838f',
    fontSize: [{ unit: 'px', value: 20 }]
  },
  'files-info': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 30 }, { unit: 'px', value: 0 }, { unit: 'px', value: 50 }]
  },
  'files-action': {
    display: 'none',
    height: [{ unit: 'px', value: 30 }],
    listStyle: 'none',
    paddingLeft: [{ unit: 'px', value: 0 }],
    position: 'absolute',
    right: [{ unit: 'px', value: 0 }],
    textAlign: 'right',
    top: [{ unit: 'px', value: 10 }],
    width: [{ unit: 'px', value: 30 }]
  },
  'files-list > li:hover files-action': {
    display: 'block'
  },
  'file-date': {
    color: '#888',
    fontSize: [{ unit: 'px', value: 12 }]
  },
  'file-author a': {
    color: '#667eea',
    fontSize: [{ unit: 'px', value: 12 }],
    textDecoration: 'underline'
  },
  'files-action dropdown-menu': {
    left: [{ unit: 'string', value: 'auto' }],
    right: [{ unit: 'px', value: 0 }]
  },
  'chat-img-attach': {
    borderRadius: '4px',
    marginBottom: [{ unit: 'px', value: 12 }],
    marginLeft: [{ unit: 'px', value: 12 }],
    position: 'relative',
    float: 'right'
  },
  'chat-img-attach img': {
    borderRadius: '4px'
  },
  'chat-placeholder': {
    background: 'rgba(69, 81, 97, 0.6)',
    borderRadius: '4px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    height: [{ unit: '%V', value: 1 }],
    justifyContent: 'flex-end',
    left: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 13 }, { unit: 'px', value: 13 }, { unit: 'px', value: 13 }, { unit: 'px', value: 13 }],
    position: 'absolute',
    top: [{ unit: 'px', value: 0 }],
    width: [{ unit: '%H', value: 1 }]
  },
  'chat-img-name': {
    fontSize: [{ unit: 'px', value: 12 }],
    fontWeight: '700',
    lineHeight: [{ unit: 'px', value: 16 }]
  },
  'chat-file-desc': {
    fontSize: [{ unit: 'px', value: 11 }]
  },
  'chat-right chat-contentimg-content': {
    backgroundColor: 'transparent',
    color: '#76838f',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    textAlign: 'right'
  },
  'chat-right img-content chat-time': {
    color: '#a3afb7'
  },
  'chat-left chat-img-attach': {
    float: 'left'
  },
  'chat-left chat-img-attach': {
    float: 'left',
    marginLeft: [{ unit: 'px', value: 0 }],
    marginRight: [{ unit: 'px', value: 12 }]
  },
  'input-group input-lgform-control': {
    borderRadius: '4px 0 0 4px',
    height: [{ unit: 'px', value: 46 }]
  },
  'chat-user-list media': {
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    borderRadius: 'inherit',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }],
    marginTop: [{ unit: 'px', value: 2 }],
    backgroundColor: '#fff'
  },
  'chat-user-list avatar': {
    marginRight: [{ unit: 'px', value: 0 }]
  },
  designation: {
    color: '#9e9e9e',
    fontSize: [{ unit: 'px', value: 12 }]
  },
  'online-date': {
    color: '#9e9e9e',
    fontSize: [{ unit: 'px', value: 12 }]
  },
  'drop-zone': {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 205 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'dashed' }, { unit: 'string', value: '#adb7be' }],
    textAlign: 'center',
    padding: [{ unit: 'px', value: 25 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    marginBottom: [{ unit: 'px', value: 20 }]
  },
  'drop-zone drop-zone-caption': {
    fontWeight: '600'
  },
  'upload-list': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    listStyle: 'none',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'upload-list file-list': {
    backgroundColor: '#fff',
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#d8e2e7' }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }]
  },
  'upload-list file-list:first-child': {
    borderTop: [{ unit: 'string', value: 'none' }]
  },
  'upload-list upload-wrap': {
    position: 'relative',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'px', value: 0 }]
  },
  'upload-list file-name': {
    display: 'inline-block',
    verticalAlign: 'top',
    whiteSpace: 'nowrap'
  },
  'upload-list file-size': {
    display: 'inline-block',
    verticalAlign: 'top',
    whiteSpace: 'nowrap'
  },
  'upload-list file-name': {
    paddingRight: [{ unit: 'px', value: 15 }],
    overflow: 'hidden',
    maxWidth: [{ unit: '%H', value: 1 }],
    textOverflow: 'ellipsis'
  },
  'upload-list file-size': {
    color: '#888'
  },
  'upload-list file-close': {
    border: [{ unit: 'string', value: 'none' }],
    background: 'none',
    color: '#dbe4ea',
    position: 'absolute',
    right: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 2 }]
  },
  'upload-list file-close:hover': {
    color: '#f62d51'
  },
  'upload-list upload-process': {
    fontSize: [{ unit: 'px', value: 10 }],
    color: '#888'
  },
  'upload-list progress': {
    marginBottom: [{ unit: 'px', value: 5 }],
    backgroundColor: '#f6f8fa',
    height: [{ unit: 'px', value: 5 }]
  },
  'upload-list file-name i': {
    color: '#fda75c',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    verticalAlign: 'middle'
  },
  'upload-drop-zone': {
    height: [{ unit: 'px', value: 200 }],
    borderWidth: '2px',
    marginBottom: [{ unit: 'px', value: 20 }],
    color: '#ccc',
    borderStyle: 'dashed',
    borderColor: '#adb7be',
    lineHeight: [{ unit: 'px', value: 200 }],
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  'upload-drop-zonedrop': {
    color: '#222',
    borderColor: '#222'
  },
  'upload-text': {
    fontSize: [{ unit: 'px', value: 24 }],
    marginLeft: [{ unit: 'px', value: 10 }]
  },
  'files-share-list': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    borderRadius: '4px',
    marginBottom: [{ unit: 'px', value: 20 }],
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }]
  },
  // ------------------------------------------------------------------
[17. Focus Label]
  'form-focus': {
    display: 'flex',
    height: [{ unit: 'px', value: 50 }],
    position: 'relative'
  },
  'form-focus control-label': {
    fontSize: [{ unit: 'px', value: 16 }],
    fontWeight: '400',
    opacity: '0.4',
    pointerEvents: 'none',
    position: 'absolute',
    WebkitTransform: 'translate3d(0, 22px, 0) scale(1)',
    MsTransform: 'translate3d(0, 22px, 0) scale(1)',
    OTransform: 'translate3d(0, 22px, 0) scale(1)',
    transform: 'translate3d(0, 22px, 0) scale(1)',
    transformOrigin: 'left top',
    transition: '240ms',
    left: [{ unit: 'px', value: 12 }],
    top: [{ unit: 'px', value: -8 }],
    zIndex: '1',
    color: '#888'
  },
  'form-focusfocused control-label': {
    opacity: '1',
    fontWeight: '300',
    top: [{ unit: 'px', value: -14 }],
    fontSize: [{ unit: 'px', value: 12 }],
    zIndex: '1'
  },
  'form-focus form-control': {
    height: [{ unit: 'px', value: 50 }],
    padding: [{ unit: 'px', value: 21 }, { unit: 'px', value: 12 }, { unit: 'px', value: 6 }, { unit: 'px', value: 12 }]
  },
  'form-focus form-control::-webkit-input-placeholder': {
    color: 'transparent',
    transition: '240ms'
  },
  'form-focus form-control:focus::-webkit-input-placeholder': {
    transition: 'none'
  },
  'form-focusfocused form-control::-webkit-input-placeholder': {
    color: '#bbb'
  },
  'profile-basic cal-icon': {
    width: [{ unit: '%H', value: 1 }]
  },
  'form-focus select2-container select2-selection--single': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }],
    height: [{ unit: 'px', value: 50 }],
    borderRadius: '0'
  },
  'form-focus select2-container--default select2-selection--single select2-selection__arrow': {
    height: [{ unit: 'px', value: 48 }],
    right: [{ unit: 'px', value: 7 }]
  },
  'form-focus select2-container--default select2-selection--single select2-selection__arrow b': {
    borderColor: '#ccc transparent transparent',
    borderStyle: 'solid',
    borderWidth: '6px 6px 0',
    height: [{ unit: 'px', value: 0 }],
    left: [{ unit: '%H', value: 0.5 }],
    marginLeft: [{ unit: 'px', value: -10 }],
    marginTop: [{ unit: 'px', value: -2 }],
    position: 'absolute',
    top: [{ unit: '%V', value: 0.5 }],
    width: [{ unit: 'px', value: 0 }]
  },
  'form-focus select2-container--defaultselect2-container--open select2-selection--single select2-selection__arrow b': {
    borderColor: 'transparent transparent #ccc',
    borderWidth: '0 6px 6px'
  },
  'form-focus select2-container select2-selection--single select2-selection__rendered': {
    paddingRight: [{ unit: 'px', value: 30 }],
    paddingLeft: [{ unit: 'px', value: 12 }],
    paddingTop: [{ unit: 'px', value: 10 }]
  },
  'form-focus select2-container--default select2-selection--single select2-selection__rendered': {
    color: '#676767',
    fontSize: [{ unit: 'px', value: 14 }],
    fontWeight: 'normal',
    lineHeight: [{ unit: 'px', value: 38 }]
  },
  'form-focus select2-container--default select2-results__option--highlighted[aria-selected]': {
    backgroundColor: '#fc6075'
  },
  // ------------------------------------------------------------------
[18. Leave]
  'filter-row btn': {
    borderRadius: '0',
    minHeight: [{ unit: 'px', value: 50 }],
    padding: [{ unit: 'px', value: 14 }, { unit: 'px', value: 12 }, { unit: 'px', value: 14 }, { unit: 'px', value: 12 }],
    textTransform: 'uppercase'
  },
  'form-focusselect-focus control-label': {
    opacity: '1',
    fontWeight: '300',
    top: [{ unit: 'px', value: -20 }],
    fontSize: [{ unit: 'px', value: 12 }],
    zIndex: '1'
  },
  'action-label label': {
    display: 'inline-block',
    minWidth: [{ unit: 'px', value: 85 }],
    padding: [{ unit: 'em', value: 0.5 }, { unit: 'em', value: 0.6 }, { unit: 'em', value: 0.5 }, { unit: 'em', value: 0.6 }]
  },
  'action-label i': {
    marginRight: [{ unit: 'px', value: 3 }]
  },
  'action-label dropdown-menu > li > a': {
    padding: [{ unit: 'px', value: 3 }, { unit: 'px', value: 10 }, { unit: 'px', value: 3 }, { unit: 'px', value: 10 }]
  },
  // ------------------------------------------------------------------
[19. Employee]
  'action-icon': {
    color: '#777',
    fontSize: [{ unit: 'px', value: 18 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }],
    display: 'inline-block'
  },
  'table dropdown-menu': {
    fontSize: [{ unit: 'px', value: 12 }]
  },
  'profile-widget': {
    backgroundColor: '#fff',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ededed' }],
    borderRadius: '4px',
    marginBottom: [{ unit: 'px', value: 30 }],
    padding: [{ unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }],
    textAlign: 'center',
    position: 'relative',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 1 }, { unit: 'px', value: 1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.2)' }]
  },
  'profile-widget user-name > a': {
    color: '#333'
  },
  'dropdownprofile-action': {
    position: 'absolute',
    right: [{ unit: 'px', value: 5 }],
    textAlign: 'right',
    top: [{ unit: 'px', value: 10 }]
  },
  'profile-img': {
    cursor: 'pointer',
    height: [{ unit: 'px', value: 80 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }],
    position: 'relative',
    width: [{ unit: 'px', value: 80 }]
  },
  'profile-img avatar': {
    fontSize: [{ unit: 'px', value: 24 }],
    height: [{ unit: 'px', value: 80 }],
    lineHeight: [{ unit: 'px', value: 80 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    width: [{ unit: 'px', value: 80 }]
  },
  'mobile-no > a': {
    color: '#777',
    display: 'inline-block'
  },
  'staff-mail > a': {
    color: '#777',
    display: 'inline-block',
    marginTop: [{ unit: 'px', value: 5 }]
  },
  'staff-action-btns': {
    marginTop: [{ unit: 'px', value: 10 }]
  },
  'staff-id': {
    marginTop: [{ unit: 'px', value: 5 }]
  },
  'view-icons': {
    float: 'right',
    marginRight: [{ unit: 'px', value: 10 }]
  },
  'view-icons btn': {
    color: '#888',
    fontSize: [{ unit: 'px', value: 18 }],
    marginRight: [{ unit: 'px', value: 5 }],
    padding: [{ unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'px', value: 4 }]
  },
  'view-icons btnactive': {
    color: '#333'
  },
  // ------------------------------------------------------------------
[20. Events]
  calendar: {
    float: 'left',
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'fc-view': {
    marginTop: [{ unit: 'px', value: 30 }]
  },
  'none-border modal-footer': {
    borderTop: [{ unit: 'string', value: 'none' }]
  },
  'fc-toolbar h2': {
    fontSize: [{ unit: 'px', value: 18 }],
    fontWeight: '600',
    fontFamily: ''Lato', sans-serif',
    lineHeight: [{ unit: 'px', value: 30 }],
    textTransform: 'uppercase'
  },
  'fc-day-grid-event fc-time': {
    fontFamily: ''Lato', sans-serif'
  },
  'fc-day': {
    background: '#fff'
  },
  'fc-toolbar fc-state-active': {
    zIndex: '0'
  },
  'fc-toolbar ui-state-active': {
    zIndex: '0'
  },
  'fc-toolbar button:focus': {
    zIndex: '0'
  },
  'fc-toolbar button:hover': {
    zIndex: '0'
  },
  'fc-toolbar ui-state-hover': {
    zIndex: '0'
  },
  'fc thfc-widget-header': {
    background: '#eeeeee',
    fontSize: [{ unit: 'px', value: 14 }],
    lineHeight: [{ unit: 'px', value: 20 }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }],
    textTransform: 'uppercase'
  },
  'fc-unthemed th': {
    borderColor: '#f3f3f3'
  },
  'fc-unthemed td': {
    borderColor: '#f3f3f3'
  },
  'fc-unthemed thead': {
    borderColor: '#f3f3f3'
  },
  'fc-unthemed tbody': {
    borderColor: '#f3f3f3'
  },
  'fc-unthemed fc-divider': {
    borderColor: '#f3f3f3'
  },
  'fc-unthemed fc-row': {
    borderColor: '#f3f3f3'
  },
  'fc-unthemed fc-popover': {
    borderColor: '#f3f3f3'
  },
  'fc-button': {
    background: '#f1f1f1',
    border: [{ unit: 'string', value: 'none' }],
    color: '#797979',
    textTransform: 'capitalize',
    boxShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: '!important' }, { unit: 'string', value: 'none' }, { unit: 'string', value: '!important' }],
    borderRadius: '3px !important',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 3 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 3 }],
    padding: [{ unit: 'px', value: 6 }, { unit: 'px', value: 12 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 12 }],
    height: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: '!important' }]
  },
  'fc-text-arrow': {
    fontFamily: 'inherit',
    fontSize: [{ unit: 'px', value: 16 }]
  },
  'fc-state-hover': {
    background: '#f3f3f3'
  },
  'fc-state-highlight': {
    background: '#f0f0f0'
  },
  'fc-state-down': {
    backgroundColor: '#667eea !important',
    color: '#fff !important',
    textShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: '!important' }, { unit: 'string', value: 'none' }, { unit: 'string', value: '!important' }]
  },
  'fc-state-active': {
    backgroundColor: '#667eea !important',
    color: '#fff !important',
    textShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: '!important' }, { unit: 'string', value: 'none' }, { unit: 'string', value: '!important' }]
  },
  'fc-state-disabled': {
    backgroundColor: '#667eea !important',
    color: '#fff !important',
    textShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: '!important' }, { unit: 'string', value: 'none' }, { unit: 'string', value: '!important' }]
  },
  'fc-cell-overlay': {
    background: '#f0f0f0'
  },
  'fc-unthemed fc-today': {
    background: '#fff'
  },
  'fc-event': {
    borderRadius: '2px',
    border: [{ unit: 'string', value: 'none' }],
    cursor: 'move',
    fontSize: [{ unit: 'px', value: 13 }],
    margin: [{ unit: 'px', value: 1 }, { unit: 'px', value: 7 }, { unit: 'px', value: 1 }, { unit: 'px', value: 7 }],
    padding: [{ unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }],
    textAlign: 'center'
  },
  'external-event': {
    cursor: 'move',
    margin: [{ unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 6 }, { unit: 'px', value: 10 }, { unit: 'px', value: 6 }, { unit: 'px', value: 10 }]
  },
  'external-eventbg-primary': {
    backgroundColor: 'rgba(127, 193, 252, 0.3) !important',
    color: '#7fc1fc'
  },
  'external-eventbg-success': {
    backgroundColor: 'rgba(75, 211, 150, 0.3) !important',
    color: '#4bd396'
  },
  'external-eventbg-info': {
    backgroundColor: 'rgba(58, 201, 214, 0.3) !important',
    color: '#3ac9d6'
  },
  'external-eventbg-warning': {
    backgroundColor: 'rgba(249, 200, 81, 0.3) !important',
    color: '#f9c851'
  },
  'external-eventbg-danger': {
    backgroundColor: 'rgba(245, 112, 122, 0.3) !important',
    color: '#f5707a'
  },
  'external-eventbg-pink': {
    backgroundColor: 'rgba(240, 98, 146, 0.3) !important',
    color: '#f06292'
  },
  'external-eventbg-purple': {
    backgroundColor: 'rgba(107, 95, 181, 0.3) !important',
    color: '#6b5fb5'
  },
  'external-eventbg-inverse': {
    backgroundColor: 'rgba(59, 62, 71, 0.3) !important',
    color: '#3b3e47'
  },
  'external-eventbg-orange': {
    backgroundColor: 'rgba(255, 152, 0, 0.3) !important',
    color: '#ff9800'
  },
  'external-eventbg-brown': {
    backgroundColor: 'rgba(141, 110, 99, 0.3) !important',
    color: '#8d6e63'
  },
  'external-eventbg-teal': {
    backgroundColor: 'rgba(38, 166, 154, 0.3) !important',
    color: '#26a69a'
  },
  'fc-basic-view tdfc-week-number span': {
    paddingRight: [{ unit: 'px', value: 8 }],
    fontWeight: '700',
    fontFamily: ''Lato', sans-serif'
  },
  'fc-basic-view tdfc-day-number': {
    paddingRight: [{ unit: 'px', value: 8 }],
    fontWeight: '700',
    fontFamily: ''Lato', sans-serif'
  },
  // ------------------------------------------------------------------
[21. Profile]
  'profile-details': {
    textAlign: 'center'
  },
  'personal-info li title': {
    color: '#515365',
    float: 'left',
    fontWeight: '500',
    marginRight: [{ unit: 'px', value: 30 }],
    width: [{ unit: '%H', value: 0.3 }]
  },
  'personal-info li text': {
    color: '#888da8',
    display: 'block',
    overflow: 'hidden'
  },
  'personal-info li': {
    marginBottom: [{ unit: 'px', value: 10 }]
  },
  'personal-info': {
    listStyle: 'none',
    marginBottom: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'profile-view profile-img-wrap': {
    height: [{ unit: 'px', value: 150 }],
    width: [{ unit: 'px', value: 150 }]
  },
  'profile-view profile-img': {
    width: [{ unit: 'px', value: 150 }],
    height: [{ unit: 'px', value: 150 }]
  },
  'profile-view profile-img avatar': {
    fontSize: [{ unit: 'px', value: 24 }],
    height: [{ unit: 'px', value: 150 }],
    lineHeight: [{ unit: 'px', value: 150 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    width: [{ unit: 'px', value: 150 }]
  },
  'profile-view profile-basic': {
    marginLeft: [{ unit: 'px', value: 170 }]
  },
  'staff-msg': {
    marginTop: [{ unit: 'px', value: 30 }]
  },
  'experience-box': {
    position: 'relative'
  },
  'experience-list': {
    listStyle: 'none',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'relative'
  },
  'experience-list::before': {
    background: '#ddd',
    bottom: [{ unit: 'px', value: 0 }],
    content: '""',
    left: [{ unit: 'px', value: 8 }],
    position: 'absolute',
    top: [{ unit: 'px', value: 8 }],
    width: [{ unit: 'px', value: 2 }]
  },
  'experience-list > li': {
    position: 'relative'
  },
  'experience-list > li:last-child experience-content': {
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'experience-user avatar': {
    height: [{ unit: 'px', value: 32 }],
    lineHeight: [{ unit: 'px', value: 32 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    width: [{ unit: 'px', value: 32 }]
  },
  'experience-list > li experience-user': {
    background: '#fff',
    height: [{ unit: 'px', value: 10 }],
    left: [{ unit: 'px', value: 4 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'absolute',
    top: [{ unit: 'px', value: 4 }],
    width: [{ unit: 'px', value: 10 }]
  },
  'experience-list > li experience-content': {
    backgroundColor: '#fff',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 40 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'relative'
  },
  'experience-list > li experience-content timeline-content': {
    color: '#9e9e9e'
  },
  'experience-list > li experience-content timeline-content aname': {
    color: '#616161',
    fontWeight: 'bold'
  },
  'experience-list > li time': {
    color: '#bdbdbd',
    display: 'block',
    fontSize: [{ unit: 'px', value: 12 }],
    lineHeight: [{ unit: 'px', value: 1.35 }]
  },
  'before-circle': {
    backgroundColor: '#ddd',
    borderRadius: '50%',
    height: [{ unit: 'px', value: 10 }],
    width: [{ unit: 'px', value: 10 }]
  },
  'skills > span': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }],
    borderRadius: '500px',
    display: 'block',
    marginBottom: [{ unit: 'px', value: 10 }],
    padding: [{ unit: 'px', value: 6 }, { unit: 'px', value: 12 }, { unit: 'px', value: 6 }, { unit: 'px', value: 12 }],
    textAlign: 'center'
  },
  'profile-info-left': {
    borderRight: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'dashed' }, { unit: 'string', value: '#ccc' }]
  },
  // ------------------------------------------------------------------
[22. Notifications]
  notifications: {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'notifications drop-scroll': {
    height: [{ unit: 'px', value: 290 }],
    width: [{ unit: 'px', value: 400 }]
  },
  'notificationsmsg-noti drop-scroll': {
    width: [{ unit: 'px', value: 310 }]
  },
  'notifications notification-heading': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    fontSize: [{ unit: 'px', value: 14 }],
    fontWeight: 'normal',
    lineHeight: [{ unit: 'px', value: 1.45 }],
    color: '#616161'
  },
  'notifications notification-time': {
    fontSize: [{ unit: 'px', value: 12 }],
    lineHeight: [{ unit: 'px', value: 1.35 }],
    color: '#bdbdbd'
  },
  'notifications media': {
    marginTop: [{ unit: 'px', value: 0 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#f5f5f5' }]
  },
  'notifications media:last-child': {
    borderBottom: [{ unit: 'string', value: 'none' }]
  },
  'notifications media a': {
    display: 'block',
    padding: [{ unit: 'px', value: 12 }, { unit: 'px', value: 12 }, { unit: 'px', value: 12 }, { unit: 'px', value: 12 }],
    borderRadius: '2px'
  },
  'notifications media a:hover': {
    backgroundColor: '#fafafa'
  },
  'notifications media-list media-left': {
    paddingRight: [{ unit: 'px', value: 8 }]
  },
  'drop-scroll': {
    overflowY: 'scroll',
    position: 'relative'
  },
  'topnav-dropdown-header': {
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eee' }],
    textAlign: 'center'
  },
  'topnav-dropdown-header': {
    fontSize: [{ unit: 'px', value: 12 }],
    height: [{ unit: 'px', value: 32 }],
    lineHeight: [{ unit: 'px', value: 32 }],
    paddingLeft: [{ unit: 'px', value: 12 }],
    paddingRight: [{ unit: 'px', value: 12 }]
  },
  'topnav-dropdown-footer': {
    fontSize: [{ unit: 'px', value: 12 }],
    height: [{ unit: 'px', value: 32 }],
    lineHeight: [{ unit: 'px', value: 32 }],
    paddingLeft: [{ unit: 'px', value: 12 }],
    paddingRight: [{ unit: 'px', value: 12 }]
  },
  'topnav-dropdown-footer a': {
    display: 'block',
    textAlign: 'center',
    color: '#333'
  },
  'user-menunav > li > a badge': {
    position: 'absolute',
    right: [{ unit: 'px', value: 3 }],
    top: [{ unit: 'px', value: 6 }]
  },
  'user-menunav > li > a > i': {
    fontSize: [{ unit: 'px', value: 20 }],
    lineHeight: [{ unit: 'px', value: 60 }]
  },
  'noti-details': {
    color: '#989c9e'
  },
  'noti-title': {
    color: '#333'
  },
  // ------------------------------------------------------------------
[23. Roles & Permissions]
  'roles-menu': {
    marginTop: [{ unit: 'px', value: 20 }]
  },
  'roles-menu nav': {
    backgroundColor: '#fff'
  },
  'roles-menu nav > li a': {
    borderLeft: [{ unit: 'px', value: 3 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }],
    color: '#333'
  },
  'roles-menu nav > liactive a': {
    borderColor: '#667eea',
    color: '#667eea'
  },
  'roles-menu nav > li a:hover': {
    borderColor: '#667eea'
  },
  'material-switch > input[type="checkbox"]': {
    display: 'none'
  },
  'material-switch > label': {
    cursor: 'pointer',
    height: [{ unit: 'px', value: 0 }],
    position: 'relative',
    width: [{ unit: 'px', value: 40 }]
  },
  'material-switch > label::before': {
    background: 'rgb(0, 0, 0)',
    boxShadow: [{ unit: 'string', value: 'inset' }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.5)' }],
    borderRadius: '8px',
    content: '''',
    height: [{ unit: 'px', value: 16 }],
    marginTop: [{ unit: 'px', value: -8 }],
    position: 'absolute',
    opacity: '0.3',
    transition: 'all 0.4s ease-in-out',
    width: [{ unit: 'px', value: 40 }]
  },
  'material-switch > label::after': {
    background: 'rgb(255, 255, 255)',
    borderRadius: '16px',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.3)' }],
    content: '''',
    height: [{ unit: 'px', value: 24 }],
    left: [{ unit: 'px', value: -4 }],
    marginTop: [{ unit: 'px', value: -8 }],
    position: 'absolute',
    top: [{ unit: 'px', value: -4 }],
    transition: 'all 0.3s ease-in-out',
    width: [{ unit: 'px', value: 24 }]
  },
  'material-switch > input[type="checkbox"]:checked + label::before': {
    background: 'inherit',
    opacity: '0.5'
  },
  'material-switch > input[type="checkbox"]:checked + label::after': {
    background: 'inherit',
    left: [{ unit: 'px', value: 20 }]
  },
  'role-action': {
    float: 'right',
    display: 'none'
  },
  'roles-menu nav > li a:hover role-action': {
    display: 'block'
  },
  // ------------------------------------------------------------------
[24. Chat Right Sidebar]
  'chat-header chat-menu': {
    margin: [{ unit: 'px', value: 6 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'topnav-dropdown-footer': {
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eee' }]
  },
  'notification-box': {
    bottom: [{ unit: 'px', value: 0 }],
    marginRight: [{ unit: 'px', value: -300 }],
    position: 'fixed',
    right: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 60 }],
    transition: 'all 0.4s ease 0s',
    width: [{ unit: 'px', value: 300 }],
    zIndex: '101',
    borderLeft: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ddd' }]
  },
  'open-msg-box notification-box': {
    marginRight: [{ unit: 'px', value: 0 }]
  },
  'msg-sidebar': {
    backgroundColor: '#fff'
  },
  'list-box': {
    listStyle: 'none',
    paddingLeft: [{ unit: 'px', value: 0 }]
  },
  'list-itemnew-message': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  'list-item': {
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }],
    position: 'relative'
  },
  'list-left': {
    height: [{ unit: 'px', value: 48 }],
    position: 'absolute',
    width: [{ unit: 'px', value: 48 }]
  },
  'files-icon': {
    backgroundColor: '#f5f5f5',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ddd' }],
    borderRadius: '4px',
    display: 'inline-block',
    height: [{ unit: 'px', value: 38 }],
    lineHeight: [{ unit: 'px', value: 38 }],
    textAlign: 'center',
    width: [{ unit: 'px', value: 38 }]
  },
  'files-icon i': {
    color: '#777',
    fontSize: [{ unit: 'px', value: 20 }]
  },
  'list-body': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 50 }]
  },
  'message-author': {
    color: '#333',
    float: 'left',
    fontWeight: 'bold',
    width: [{ unit: 'px', value: 175 }],
    display: 'block',
    maxWidth: [{ unit: '%H', value: 1 }],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  'message-time': {
    color: '#888',
    float: 'right',
    fontSize: [{ unit: 'px', value: 11 }]
  },
  'message-content': {
    color: '#333',
    fontSize: [{ unit: 'px', value: 13 }],
    display: 'block',
    maxWidth: [{ unit: '%H', value: 1 }],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  'file-author a': {
    color: '#667eea',
    fontSize: [{ unit: 'px', value: 12 }],
    textDecoration: 'underline'
  },
  'files-action dropdown-menu': {
    left: [{ unit: 'string', value: 'auto' }],
    right: [{ unit: 'px', value: 0 }]
  },
  // ------------------------------------------------------------------
[25. Projects]
  'team-members': {
    display: 'inline-block',
    listStyle: 'none',
    marginBottom: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'team-members li': {
    float: 'left'
  },
  'team-members li:first-child a': {
    marginLeft: [{ unit: 'px', value: 0 }]
  },
  'team-members a': {
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#fff' }],
    borderRadius: '100%',
    display: 'block',
    height: [{ unit: 'px', value: 38 }],
    overflow: 'hidden',
    width: [{ unit: 'px', value: 38 }]
  },
  'team-members all-users': {
    lineHeight: [{ unit: 'px', value: 36 }],
    opacity: '0.8'
  },
  'all-users': {
    backgroundColor: '#667eea',
    color: '#fff',
    fontSize: [{ unit: 'px', value: 10 }],
    fontWeight: '800',
    lineHeight: [{ unit: 'px', value: 34 }],
    textAlign: 'center'
  },
  'team-members img': {
    width: [{ unit: '%H', value: 1 }]
  },
  'project-title': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'px', value: 0 }]
  },
  'project-title > a': {
    color: '#333'
  },
  'project-box': {
    position: 'relative'
  },
  // ------------------------------------------------------------------
[26. invoice]
  'invoice-details': {
    float: 'right',
    textAlign: 'right'
  },
  'invoice-payment-details > li span': {
    float: 'right',
    textAlign: 'right'
  },
  'table team-members a': {
    width: [{ unit: 'px', value: 32 }],
    height: [{ unit: 'px', value: 32 }]
  },
  'table team-members all-users': {
    lineHeight: [{ unit: 'px', value: 30 }]
  },
  'attach-files > ul': {
    listStyle: 'none',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'attach-files li': {
    display: 'inline-block',
    marginRight: [{ unit: 'px', value: 10 }],
    position: 'relative'
  },
  'attach-files li img': {
    width: [{ unit: 'px', value: 50 }]
  },
  'file-remove': {
    color: '#f00',
    position: 'absolute',
    right: [{ unit: 'px', value: -6 }],
    top: [{ unit: 'px', value: -7 }]
  },
  'attach-files li:last-child': {
    marginRight: [{ unit: 'px', value: 0 }]
  },
  // ------------------------------------------------------------------
[27. Task]
  'task-chat-contents': {
    backgroundColor: '#fff'
  },
  'task-chat-view': {
    borderLeft: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }]
  },
  'task-chat-view chat-left chat-content': {
    border: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'task-chat-view chat-left chat-body': {
    marginLeft: [{ unit: 'px', value: 50 }]
  },
  'task-chat-view chat-date': {
    backgroundColor: '#fff'
  },
  'task-chat-view chats': {
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 30 }, { unit: 'px', value: 15 }]
  },
  'task-chat-view avatar': {
    width: [{ unit: 'px', value: 30 }],
    height: [{ unit: 'px', value: 30 }],
    lineHeight: [{ unit: 'px', value: 30 }]
  },
  'followers-add': {
    backgroundColor: '#fff',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }],
    borderRadius: '50%',
    color: '#ccc',
    display: 'inline-block',
    fontSize: [{ unit: 'px', value: 20 }],
    height: [{ unit: 'px', value: 30 }],
    lineHeight: [{ unit: 'px', value: 30 }],
    textAlign: 'center',
    width: [{ unit: 'px', value: 30 }]
  },
  'followers-add:hover': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#8c8c8c' }],
    color: '#8c8c8c'
  },
  'completed-task-msg': {
    marginBottom: [{ unit: 'px', value: 30 }],
    marginLeft: [{ unit: 'px', value: 50 }]
  },
  'task-chat-contents chatchat-left': {
    marginBottom: [{ unit: 'px', value: 20 }]
  },
  'file-attached': {
    color: '#333',
    fontSize: [{ unit: 'px', value: 13 }]
  },
  'file-attached i': {
    fontSize: [{ unit: 'px', value: 16 }]
  },
  'task-attach-img > img': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    maxWidth: [{ unit: '%H', value: 1 }]
  },
  'attach-img-download': {
    marginBottom: [{ unit: 'px', value: 5 }]
  },
  'task-chat-view chat-left chat-time': {
    color: '#a3afb7',
    display: 'inline-block',
    fontSize: [{ unit: 'px', value: 11 }]
  },
  'task-chat-user': {
    color: '#333',
    fontSize: [{ unit: 'px', value: 13 }]
  },
  'task-chat-view chat-content > p': {
    fontSize: [{ unit: 'px', value: 13 }],
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'task-time': {
    color: '#a3afb7',
    display: 'inline-block',
    fontSize: [{ unit: 'px', value: 11 }]
  },
  'task-success': {
    color: '#55ce63',
    fontSize: [{ unit: 'px', value: 13 }]
  },
  'task-success a': {
    color: '#55ce63'
  },
  'task-attach-img': {
    marginBottom: [{ unit: 'px', value: 20 }]
  },
  'task-assign': {
    float: 'left'
  },
  'assign-title': {
    float: 'left',
    marginRight: [{ unit: 'px', value: 10 }],
    marginTop: [{ unit: 'px', value: 5 }]
  },
  'task-assign > a': {
    float: 'left'
  },
  'followers-add > i': {
    lineHeight: [{ unit: 'px', value: 28 }]
  },
  'task-followers': {
    display: 'flex',
    marginTop: [{ unit: 'px', value: 15 }]
  },
  'followers-title': {
    margin: [{ unit: 'px', value: 5 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'task-line': {
    borderColor: '#eaeaea'
  },
  'task-information': {
    color: '#95a1a9',
    fontSize: [{ unit: 'px', value: 11 }],
    lineHeight: [{ unit: 'px', value: 17 }],
    minWidth: [{ unit: 'px', value: 1 }],
    marginLeft: [{ unit: 'px', value: 50 }]
  },
  'task-info-line': {
    overflowWrap: 'break-word'
  },
  'task-user': {
    color: '#95a1a9',
    fontWeight: '500'
  },
  'task-information task-time': {
    display: 'inline-block',
    paddingLeft: [{ unit: 'px', value: 10 }]
  },
  'message-area input-group form-control:focus': {
    height: [{ unit: 'px', value: 150 }],
    transition: 'all 0.5s ease 0s'
  },
  'task-btn-right': {
    display: 'none !important'
  },
  'task:hover task-btn-right': {
    display: 'table-cell !important'
  },
  'task-action-btntask-check': {
    textAlign: 'left !important',
    width: [{ unit: 'px', value: 40 }]
  },
  'add-task-btn': {
    padding: [{ unit: 'px', value: 6 }, { unit: 'px', value: 10 }, { unit: 'px', value: 6 }, { unit: 'px', value: 10 }],
    textTransform: 'uppercase'
  },
  'action-circle': {
    background: 'transparent',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }],
    borderRadius: '100%',
    height: [{ unit: 'px', value: 20 }],
    width: [{ unit: 'px', value: 20 }],
    display: 'inline-block',
    textAlign: 'center',
    cursor: 'pointer',
    WebkitTransition: 'all 300ms ease',
    MozTransition: 'all 300ms ease',
    MsTransition: 'all 300ms ease',
    OTransition: 'all 300ms ease',
    transition: 'all 300ms ease'
  },
  'action-circle material-icons': {
    color: '#ccc',
    fontSize: [{ unit: 'px', value: 18 }],
    verticalAlign: '-3px'
  },
  'action-circlecompleted': {
    background: '#35BA67',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#2fa65c' }]
  },
  'action-circlecompleted material-icons': {
    color: '#fff'
  },
  'action-circlelarge': {
    height: [{ unit: 'px', value: 24 }],
    width: [{ unit: 'px', value: 24 }]
  },
  'action-circlelarge material-icons': {
    fontSize: [{ unit: 'px', value: 16 }],
    verticalAlign: '-4px'
  },
  'task-wrapper': {
    padding: [{ unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }],
    width: [{ unit: '%H', value: 1 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }],
    boxSizing: 'border-box'
  },
  'task-wrapper mark-all-tasks': {
    textAlign: 'right',
    paddingBottom: [{ unit: 'px', value: 15 }]
  },
  'task-wrapper mark-all-tasks mark-all-tasks-container': {
    overflow: 'hidden',
    position: 'relative'
  },
  'task-wrapper mark-all-tasks mark-all-btn': {
    cursor: 'pointer',
    display: 'inline-block',
    WebkitTransition: 'all 200ms ease',
    MozTransition: 'all 200ms ease',
    MsTransition: 'all 200ms ease',
    OTransition: 'all 200ms ease',
    transition: 'all 200ms ease'
  },
  'task-wrapper mark-all-tasks mark-all-btn#mark-all-finished': {
    color: '#35BA67'
  },
  'task-wrapper mark-all-tasks mark-all-btn#mark-all-incomplete': {
    color: '#666'
  },
  'task-wrapper mark-all-tasks mark-all-btn#mark-all-incomplete action-circle': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#666' }]
  },
  'task-wrapper mark-all-tasks mark-all-btn#mark-all-incomplete action-circle material-icons': {
    color: '#666'
  },
  'task-wrapper mark-all-tasks mark-all-btnmove-up': {
    WebkitTransform: 'translateY(-30px)',
    MozTransform: 'translateY(-30px)',
    MsTransform: 'translateY(-30px)',
    OTransform: 'translateY(-30px)',
    transform: 'translateY(-30px)',
    position: 'absolute',
    right: [{ unit: 'px', value: 0 }]
  },
  'task-wrapper mark-all-tasks mark-all-btnmove-down': {
    WebkitTransform: 'translateY(30px)',
    MozTransform: 'translateY(30px)',
    MsTransform: 'translateY(30px)',
    OTransform: 'translateY(30px)',
    transform: 'translateY(30px)',
    position: 'absolute',
    right: [{ unit: 'px', value: 0 }]
  },
  'task-wrapper mark-all-tasks btn-label': {
    marginRight: [{ unit: 'px', value: 5 }],
    fontWeight: '600'
  },
  'task-wrapper task-list-header h3': {
    fontSize: [{ unit: 'px', value: 24 }],
    fontWeight: '400',
    color: '#666'
  },
  'task-wrapper task-list-footer h3': {
    fontSize: [{ unit: 'px', value: 24 }],
    fontWeight: '400',
    color: '#666'
  },
  'task-wrapper task-list-body': {
    maxHeight: [{ unit: 'px', value: 500 }],
    overflow: 'auto'
  },
  'task-wrapper #task-list': {
    listStyle: 'none',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }]
  },
  'task-wrapper #task-list li': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'task-wrapper #task-list li task-container': {
    display: 'table',
    background: '#fff',
    padding: [{ unit: 'px', value: 8 }, { unit: 'px', value: 15 }, { unit: 'px', value: 8 }, { unit: 'px', value: 15 }],
    width: [{ unit: '%H', value: 1 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    borderBottom: [{ unit: 'string', value: 'none' }],
    boxSizing: 'border-box',
    position: 'relative',
    WebkitTransition: 'background 200ms ease',
    MozTransition: 'background 200ms ease',
    MsTransition: 'background 200ms ease',
    OTransition: 'background 200ms ease',
    transition: 'background 200ms ease'
  },
  'task-wrapper #task-list li task-container task-label': {
    display: 'table-cell',
    fontWeight: '400',
    verticalAlign: 'middle',
    color: '#333',
    wordBreak: 'break-all'
  },
  'task-wrapper #task-list li task-container task-action-btn': {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'right'
  },
  'task-wrapper #task-list li task-container task-action-btn action-circle:hover': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#8c8c8c' }],
    background: '#fff'
  },
  'task-wrapper #task-list li task-container task-action-btn action-circle:hover material-icons': {
    color: '#8c8c8c'
  },
  'task-wrapper #task-list li task-container:hover': {
    background: '#EBEEEF'
  },
  'task-wrapper #task-list licompleted task-container': {
    background: '#f9f9f9'
  },
  'task-wrapper #task-list licompleted task-container complete-btn': {
    background: '#35BA67',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#2fa65c' }]
  },
  'task-wrapper #task-list licompleted task-container complete-btn material-icons': {
    color: '#fff'
  },
  'task-wrapper #task-list licompleted task-container complete-btn:hover': {
    background: '#35BA67',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#2fa65c' }]
  },
  'task-wrapper #task-list licompleted task-container complete-btn:hover material-icons': {
    color: '#fff'
  },
  'task-wrapper #task-list licompleted task-container task-label': {
    color: '#ccc'
  },
  'task-wrapper #task-list linew task-container': {
    WebkitAnimation: 'taskHighlighter 2000ms linear 1',
    animation: 'taskHighlighter 2000ms linear 1'
  },
  'task-wrapper task-list-footer': {
    position: 'relative'
  },
  'task-wrapper task-list-footer add-task-btn-wrapper': {
    textAlign: 'center'
  },
  'task-wrapper task-list-footer add-task-btn': {
    cursor: 'pointer',
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#9B1BCC' }],
    display: 'inline-block',
    height: [{ unit: 'px', value: 35 }],
    width: [{ unit: 'px', value: 35 }],
    borderRadius: '10px',
    WebkitTransition: 'all 300ms ease',
    MozTransition: 'all 300ms ease',
    MsTransition: 'all 300ms ease',
    OTransition: 'all 300ms ease',
    transition: 'all 300ms ease'
  },
  'task-wrapper task-list-footer add-task-btnhide': {
    opacity: '1',
    visibility: 'visible',
    display: 'block'
  },
  'task-wrapper task-list-footer add-task-btn:hover': {
    background: '#9B1BCC'
  },
  'task-wrapper task-list-footer add-task-btn:hover material-icons': {
    color: '#EBEEEF'
  },
  'task-wrapper task-list-footer add-task-btn material-icons': {
    color: '#9B1BCC',
    fontSize: [{ unit: 'px', value: 34 }]
  },
  'task-wrapper task-list-footer new-task-wrapper': {
    WebkitTransition: 'all 300ms ease',
    MozTransition: 'all 300ms ease',
    MsTransition: 'all 300ms ease',
    OTransition: 'all 300ms ease',
    transition: 'all 300ms ease',
    maxHeight: [{ unit: 'px', value: 0 }],
    overflow: 'hidden'
  },
  'task-wrapper task-list-footer new-task-wrapper::after': {
    content: '""',
    display: 'block',
    clear: 'both'
  },
  'task-wrapper task-list-footer new-task-wrapper textarea': {
    boxSizing: 'border-box',
    width: [{ unit: '%H', value: 1 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    borderTop: [{ unit: 'px', value: 0 }],
    height: [{ unit: 'px', value: 45 }],
    resize: 'none',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 15 }, { unit: 'px', value: 10 }, { unit: 'px', value: 15 }],
    marginBottom: [{ unit: 'px', value: 20 }],
    WebkitTransition: 'all 300ms ease',
    MozTransition: 'all 300ms ease',
    MsTransition: 'all 300ms ease',
    OTransition: 'all 300ms ease',
    transition: 'all 300ms ease'
  },
  'task-wrapper task-list-footer new-task-wrapper textarea:focus': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#bfbfbf' }],
    outline: 'none'
  },
  'task-wrapper task-list-footer new-task-wrapper textareaerror': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#D93737' }],
    outline: 'none'
  },
  'task-wrapper task-list-footer new-task-wrapper error-message': {
    color: '#D93737',
    fontStyle: 'italic'
  },
  'task-wrapper task-list-footer new-task-wrapper btn': {
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 15 }, { unit: 'px', value: 10 }, { unit: 'px', value: 15 }],
    float: 'right',
    cursor: 'pointer'
  },
  'task-wrapper task-list-footer new-task-wrapper add-new-task-btn': {
    background: '#fff',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }]
  },
  'task-wrapper task-list-footer new-task-wrappervisible': {
    maxHeight: [{ unit: 'px', value: 300 }],
    overflow: 'auto'
  },
  'notification-popup': {
    zIndex: '1051',
    position: 'fixed',
    top: [{ unit: 'px', value: 20 }],
    right: [{ unit: 'px', value: 10 }],
    width: [{ unit: 'px', value: 300 }],
    display: 'inline-block',
    background: '#1F8FEF',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#1082e4' }],
    color: '#fff',
    padding: [{ unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }],
    opacity: '.8',
    borderRadius: '2px',
    boxSizing: 'border-box',
    WebkitTransition: 'all 300ms ease',
    MozTransition: 'all 300ms ease',
    MsTransition: 'all 300ms ease',
    OTransition: 'all 300ms ease',
    transition: 'all 300ms ease'
  },
  'notification-popupsuccess': {
    background: '#35BA67',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#2fa65c' }]
  },
  'notification-popup p': {
    marginTop: [{ unit: 'px', value: 0 }],
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'notification-popup task': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: [{ unit: '%H', value: 1 }],
    display: 'inline-block'
  },
  'notification-popup notification-text': {
    fontSize: [{ unit: 'px', value: 14 }],
    display: 'inline-block',
    overflow: 'hidden'
  },
  'notification-popuphide': {
    opacity: '0',
    visibility: 'hidden'
  },
  'sidebar-overlay': {
    display: 'none',
    position: 'fixed',
    zIndex: '90',
    height: [{ unit: '%V', value: 1 }],
    left: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 60 }],
    width: [{ unit: '%H', value: 1 }],
    zIndex: '1040',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  'sidebar-overlayopened': {
    display: 'block'
  },
  'task-overlay': {
    display: 'none',
    position: 'fixed',
    zIndex: '90',
    height: [{ unit: '%V', value: 1 }],
    left: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 60 }],
    width: [{ unit: '%H', value: 1 }],
    zIndex: '1040',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  'task-overlayopened': {
    display: 'block'
  },
  'sidebar-menuopened': {
    opacity: '1',
    WebkitTransform: 'translateX(0px)',
    MozTransform: 'translateX(0px)',
    MsTransform: 'translateX(0px)',
    OTransform: 'translateX(0px)',
    transform: 'translateX(0px)',
    marginLeft: [{ unit: 'px', value: 0 }]
  },
  'htmlmenu-opened': {
    overflow: 'hidden'
  },
  'htmlmenu-opened body': {
    overflow: 'hidden'
  },
  'task-chat-viewopened': {
    marginRight: [{ unit: 'px', value: 0 }]
  },
  'chat-profile-viewopened': {
    marginRight: [{ unit: 'px', value: 0 }]
  },
  'menu-opened message-viewtask-view': {
    width: [{ unit: '%H', value: 1 }]
  },
  // ------------------------------------------------------------------
[28. Project View]
  'project-user list-box': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'project-files i': {
    color: '#76838f',
    fontSize: [{ unit: 'px', value: 50 }]
  },
  'project-user list-item': {
    border: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'none' }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }]
  },
  'table-border': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ddd' }]
  },
  'file-size': {
    color: '#888'
  },
  'project-task task-wrapper': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'project-task tab-content': {
    minHeight: [{ unit: 'px', value: 200 }]
  },
  // ------------------------------------------------------------------
[29. Payslip]
  'payslip-title': {
    marginBottom: [{ unit: 'px', value: 20 }],
    textAlign: 'center',
    textDecoration: 'underline',
    textTransform: 'uppercase'
  },
  // ------------------------------------------------------------------
[30. Attendance]
  'half-day': {
    width: [{ unit: 'px', value: 15 }]
  },
  // ------------------------------------------------------------------
[31. Ticket]
  'ticket-header': {
    padding: [{ unit: 'px', value: 6 }, { unit: 'px', value: 0 }, { unit: 'px', value: 6 }, { unit: 'px', value: 0 }]
  },
  'ticket-priority': {
    fontSize: [{ unit: 'px', value: 14 }]
  },
  // ------------------------------------------------------------------
[32. Client Profile]
  'tab-box': {
    borderBottom: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'none' }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'team-members afollowers-add': {
    backgroundColor: '#fff',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }],
    borderRadius: '50%',
    color: '#ccc',
    display: 'inline-block',
    fontSize: [{ unit: 'px', value: 20 }],
    height: [{ unit: 'px', value: 30 }],
    lineHeight: [{ unit: 'px', value: 30 }],
    textAlign: 'center',
    width: [{ unit: 'px', value: 30 }]
  },
  // ------------------------------------------------------------------
[33. Inbox]
  'table-inbox input[type="radio"]': {
    cursor: 'pointer'
  },
  'table-inbox input[type="checkbox"]': {
    cursor: 'pointer'
  },
  'mail-list': {
    listStyle: 'none',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'mail-list > li > a': {
    color: '#333',
    display: 'block',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }]
  },
  'mail-list > liactive > a': {
    color: '#667eea',
    fontWeight: 'bold'
  },
  'unread name': {
    color: '#000',
    fontWeight: '600'
  },
  'unread subject': {
    color: '#000',
    fontWeight: '600'
  },
  'unread mail-date': {
    color: '#000',
    fontWeight: '600'
  },
  'table-inbox fa-star': {
    color: '#ffd200'
  },
  'table-inbox starredfa-star': {
    color: '#ffd200'
  },
  'tabletable-inbox > tbody > tr > td': {
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#f2f2f2' }]
  },
  'tabletable-inbox > tbody > tr > th': {
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#f2f2f2' }]
  },
  'tabletable-inbox > tfoot > tr > td': {
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#f2f2f2' }]
  },
  'tabletable-inbox > tfoot > tr > th': {
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#f2f2f2' }]
  },
  'tabletable-inbox > thead > tr > td': {
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#f2f2f2' }]
  },
  'tabletable-inbox > thead > tr > th': {
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#f2f2f2' }]
  },
  'table-inbox': {
    fontSize: [{ unit: 'px', value: 14 }]
  },
  'note-editornote-frame': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }],
    boxShadow: [{ unit: 'string', value: 'inherit' }, { unit: 'string', value: 'inherit' }, { unit: 'string', value: 'inherit' }, { unit: 'string', value: 'inherit' }]
  },
  'note-editornote-frame note-statusbar': {
    backgroundColor: '#fff'
  },
  'note-editornote-framefullscreen': {
    top: [{ unit: 'px', value: 60 }]
  },
  'mail-title': {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  'form-controlsearch-message': {
    borderRadius: '4px',
    height: [{ unit: 'px', value: 34 }],
    marginLeft: [{ unit: 'px', value: 5 }],
    width: [{ unit: 'px', value: 180 }]
  },
  'table-inbox tr': {
    cursor: 'pointer'
  },
  'tabletable-inbox tbody trchecked': {
    backgroundColor: '#ffffcc'
  },
  'mail-label': {
    marginRight: [{ unit: 'px', value: 5 }]
  },
  // ------------------------------------------------------------------
[34. Mail View]
  attachments: {
    listStyle: 'none',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'attachments li': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eee' }],
    float: 'left',
    marginBottom: [{ unit: 'px', value: 10 }],
    marginRight: [{ unit: 'px', value: 10 }],
    width: [{ unit: 'px', value: 200 }]
  },
  'attach-file': {
    color: '#777',
    fontSize: [{ unit: 'px', value: 70 }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }],
    textAlign: 'center',
    minHeight: [{ unit: 'px', value: 153 }]
  },
  'attach-file > i': {
    lineHeight: [{ unit: 'px', value: 133 }]
  },
  'attach-info': {
    backgroundColor: '#f4f4f4',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }]
  },
  'attach-filename': {
    color: '#777',
    fontWeight: 'bold'
  },
  'attach-filesize': {
    color: '#999',
    fontSize: [{ unit: 'px', value: 12 }]
  },
  'attach-file img': {
    height: [{ unit: 'string', value: 'auto' }],
    maxWidth: [{ unit: '%H', value: 1 }]
  },
  'mailview-header': {
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ddd' }],
    marginBottom: [{ unit: 'px', value: 20 }],
    paddingBottom: [{ unit: 'px', value: 15 }]
  },
  'mailview-footer': {
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ddd' }],
    marginTop: [{ unit: 'px', value: 20 }],
    paddingTop: [{ unit: 'px', value: 15 }]
  },
  'mailview-footer btn-default': {
    minWidth: [{ unit: 'px', value: 102 }]
  },
  'sender-img': {
    float: 'left',
    marginRight: [{ unit: 'px', value: 10 }],
    width: [{ unit: 'px', value: 40 }]
  },
  'sender-name': {
    display: 'block'
  },
  'receiver-name': {
    color: '#777'
  },
  'right-action': {
    textAlign: 'right'
  },
  // ------------------------------------------------------------------
[35. Voice call]
  'voice-call-avatar': {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '2'
  },
  'voice-call-avatar call-avatar': {
    margin: [{ unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }],
    width: [{ unit: 'px', value: 150 }],
    height: [{ unit: 'px', value: 150 }],
    borderRadius: '100%',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'rgba(0,0,0,0.1)' }],
    padding: [{ unit: 'px', value: 3 }, { unit: 'px', value: 3 }, { unit: 'px', value: 3 }, { unit: 'px', value: 3 }],
    backgroundColor: '#fff'
  },
  'call-duration': {
    display: 'inline-block',
    fontSize: [{ unit: 'px', value: 30 }],
    marginTop: [{ unit: 'px', value: 4 }],
    position: 'absolute',
    left: [{ unit: 'px', value: 0 }]
  },
  'voice-call-avatar call-timing-count': {
    padding: [{ unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }]
  },
  'voice-call-avatar username': {
    fontSize: [{ unit: 'px', value: 18 }],
    textTransform: 'uppercase'
  },
  'call-icons': {
    textAlign: 'center',
    position: 'relative'
  },
  'call-icons call-items': {
    borderRadius: '5px',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    listStyle: 'none',
    display: 'inline-block'
  },
  'call-icons call-items call-item': {
    display: 'inline-block',
    textAlign: 'center',
    marginRight: [{ unit: 'px', value: 5 }]
  },
  'call-icons call-items call-item:last-child': {
    marginRight: [{ unit: 'px', value: 0 }]
  },
  'call-icons call-items call-item a': {
    color: '#777',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ddd' }],
    width: [{ unit: 'px', value: 50 }],
    height: [{ unit: 'px', value: 50 }],
    lineHeight: [{ unit: 'px', value: 50 }],
    borderRadius: '50px',
    display: 'inline-block',
    fontSize: [{ unit: 'px', value: 20 }]
  },
  'call-icons call-items call-item a i': {
    width: [{ unit: 'px', value: 18 }],
    height: [{ unit: 'px', value: 18 }]
  },
  'user-video': {
    bottom: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    overflow: 'auto',
    position: 'absolute',
    right: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 0 }],
    zIndex: '10'
  },
  'user-video img': {
    width: [{ unit: 'string', value: 'auto' }],
    maxWidth: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'string', value: 'auto' }],
    maxHeight: [{ unit: '%V', value: 1 }],
    display: 'block',
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }]
  },
  'user-video video': {
    width: [{ unit: 'string', value: 'auto' }],
    maxWidth: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'string', value: 'auto' }],
    maxHeight: [{ unit: '%V', value: 1 }],
    display: 'block',
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }]
  },
  'my-video': {
    position: 'absolute',
    zIndex: '99',
    bottom: [{ unit: 'px', value: 20 }],
    right: [{ unit: 'px', value: 20 }]
  },
  'my-video ul': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    listStyle: 'none'
  },
  'my-video ul li': {
    float: 'left',
    width: [{ unit: 'px', value: 120 }],
    marginRight: [{ unit: 'px', value: 10 }]
  },
  'my-video ul li img': {
    border: [{ unit: 'px', value: 3 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#fff' }],
    borderRadius: '6px'
  },
  'end-call': {
    position: 'absolute',
    top: [{ unit: 'px', value: 7 }],
    right: [{ unit: 'px', value: 0 }]
  },
  'end-call a': {
    color: '#fff',
    borderRadius: '50px',
    display: 'inline-block',
    backgroundColor: '#f06060',
    padding: [{ unit: 'px', value: 8 }, { unit: 'px', value: 25 }, { unit: 'px', value: 8 }, { unit: 'px', value: 25 }],
    textTransform: 'uppercase'
  },
  'call-users': {
    position: 'absolute',
    zIndex: '99',
    bottom: [{ unit: 'px', value: 20 }],
    right: [{ unit: 'px', value: 20 }]
  },
  'call-users ul': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    listStyle: 'none'
  },
  'call-users ul li': {
    float: 'left',
    width: [{ unit: 'px', value: 80 }],
    marginLeft: [{ unit: 'px', value: 10 }]
  },
  'call-users ul li img': {
    borderRadius: '6px',
    padding: [{ unit: 'px', value: 2 }, { unit: 'px', value: 2 }, { unit: 'px', value: 2 }, { unit: 'px', value: 2 }],
    backgroundColor: '#fff',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'rgba(0,0,0,0.1)' }]
  },
  'call-mute': {
    width: [{ unit: 'px', value: 80 }],
    height: [{ unit: 'px', value: 80 }],
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: [{ unit: 'px', value: 80 }],
    borderRadius: '6px',
    fontSize: [{ unit: 'px', value: 30 }],
    color: '#fff',
    display: 'none',
    top: [{ unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 3 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }]
  },
  'call-users ul li a:hover call-mute': {
    display: 'block'
  },
  'call-details': {
    margin: [{ unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    display: 'flex'
  },
  'call-info': {
    marginLeft: [{ unit: 'px', value: 10 }],
    width: [{ unit: '%H', value: 1 }]
  },
  'call-user-details': {
    display: 'block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  'call-timing': {
    display: 'block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  'call-description': {
    whiteSpace: 'nowrap',
    verticalAlign: 'bottom'
  },
  'call-timing': {
    color: '#a3afb7',
    display: 'flex',
    fontSize: [{ unit: 'px', value: 14 }],
    marginTop: [{ unit: 'px', value: 1 }],
    overflow: 'hidden',
    whiteSpace: 'pre'
  },
  // ------------------------------------------------------------------
[36. Video Call]
  'content-full': {
    height: [{ unit: '%V', value: 1 }],
    position: 'relative',
    width: [{ unit: '%H', value: 1 }]
  },
  'video-window chat-header': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }]
  },
  'video-window chat-header nav > li > a': {
    padding: [{ unit: 'px', value: 19 }, { unit: 'px', value: 15 }, { unit: 'px', value: 19 }, { unit: 'px', value: 15 }]
  },
  // ------------------------------------------------------------------
[37. Incoming Call]
  'incoming-btns': {
    marginTop: [{ unit: 'px', value: 20 }]
  },
  // ------------------------------------------------------------------
[38. Contacts]
  'contacts-header': {
    backgroundColor: '#fff',
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 15 }, { unit: 'px', value: 10 }, { unit: 'px', value: 15 }]
  },
  'contacts-header navbar': {
    border: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'none' }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    minHeight: [{ unit: 'string', value: 'auto' }]
  },
  'contacts-header user-info a': {
    color: '#76838f',
    textTransform: 'uppercase'
  },
  'contact-left': {
    display: 'table-cell',
    height: [{ unit: '%V', value: 1 }],
    float: 'none',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'static',
    verticalAlign: 'top',
    WebkitTransition: 'all 0.4s ease',
    MozTransition: 'all 0.4s ease',
    transition: 'all 0.4s ease',
    width: [{ unit: '%H', value: 1 }]
  },
  'contacts-list': {
    position: 'relative',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 70 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }]
  },
  'contact-list': {
    listStyle: 'none',
    paddingLeft: [{ unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'contact-list > li': {
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    borderRadius: 'inherit',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }],
    backgroundColor: '#fff'
  },
  'contact-cont': {
    position: 'relative'
  },
  'contact-type': {
    height: [{ unit: 'px', value: 48 }],
    position: 'absolute',
    width: [{ unit: 'px', value: 48 }]
  },
  'contact-icon': {
    backgroundColor: '#f3f7f9',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e4eaec' }],
    borderRadius: '4px',
    display: 'inline-block',
    height: [{ unit: 'px', value: 38 }],
    lineHeight: [{ unit: 'px', value: 38 }],
    textAlign: 'center',
    width: [{ unit: 'px', value: 38 }]
  },
  'contact-icon i': {
    color: '#76838f',
    fontSize: [{ unit: 'px', value: 20 }]
  },
  'contact-info': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 30 }, { unit: 'px', value: 0 }, { unit: 'px', value: 50 }]
  },
  'contact-action': {
    height: [{ unit: 'px', value: 30 }],
    listStyle: 'none',
    paddingLeft: [{ unit: 'px', value: 0 }],
    position: 'absolute',
    right: [{ unit: 'px', value: 0 }],
    textAlign: 'right',
    top: [{ unit: 'px', value: 10 }],
    width: [{ unit: 'px', value: 30 }]
  },
  'contact-date': {
    color: '#888',
    fontSize: [{ unit: 'px', value: 12 }]
  },
  'contact-author a': {
    color: '#1d6ad2',
    fontSize: [{ unit: 'px', value: 12 }],
    textDecoration: 'underline'
  },
  'contact-action dropdown-menu': {
    left: [{ unit: 'string', value: 'auto' }],
    right: [{ unit: 'px', value: 0 }]
  },
  'contact-alphapets': {
    backgroundColor: '#fff',
    borderLeft: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    bottom: [{ unit: 'px', value: 0 }],
    height: [{ unit: '%V', value: 1 }],
    overflow: 'hidden',
    paddingBottom: [{ unit: 'px', value: 117 }],
    position: 'fixed',
    right: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 117 }],
    width: [{ unit: 'px', value: 50 }]
  },
  'contact-box': {
    display: 'inline-table',
    height: [{ unit: '%V', value: 1 }],
    padding: [{ unit: 'px', value: 30 }, { unit: 'px', value: 15 }, { unit: 'px', value: 30 }, { unit: 'px', value: 15 }],
    position: 'relative',
    width: [{ unit: '%H', value: 1 }]
  },
  'alphapets-inner': {
    height: [{ unit: '%V', value: 1 }],
    overflow: 'auto'
  },
  'alphapets-inner a': {
    display: 'block',
    textAlign: 'center',
    padding: [{ unit: 'px', value: 2 }, { unit: 'px', value: 2 }, { unit: 'px', value: 2 }, { unit: 'px', value: 2 }],
    color: '#333'
  },
  // ------------------------------------------------------------------
[39. Chat Sidebar]
  'chat-sidebar': {
    backgroundColor: '#fff',
    borderLeft: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eaeaea' }],
    width: [{ unit: 'px', value: 300 }]
  },
  'chat-sidebar chat-contents': {
    backgroundColor: '#fff'
  },
  'chat-sidebar chat-left chat-content': {
    border: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    borderRadius: '0 !important',
    backgroundColor: 'transparent',
    maxWidth: [{ unit: '%H', value: 1 }]
  },
  'chat-sidebar chat-left chat-body': {
    marginLeft: [{ unit: 'px', value: 50 }],
    paddingRight: [{ unit: 'px', value: 0 }]
  },
  'chat-sidebar chat-date': {
    backgroundColor: '#fff'
  },
  'chat-sidebar chats': {
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 30 }, { unit: 'px', value: 15 }]
  },
  'chat-sidebar avatar': {
    width: [{ unit: 'px', value: 30 }],
    height: [{ unit: 'px', value: 30 }],
    lineHeight: [{ unit: 'px', value: 30 }]
  },
  'chat-sidebar chatchat-left': {
    marginBottom: [{ unit: 'px', value: 20 }]
  },
  'chat-sidebar chatchat-left:last-child': {
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'chat-sidebar chat-left chat-time': {
    color: '#888',
    display: 'inline-block',
    fontSize: [{ unit: 'px', value: 11 }]
  },
  'chat-sidebar chat-content > p': {
    fontSize: [{ unit: 'px', value: 13 }],
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'chat-sidebaropened': {
    marginRight: [{ unit: 'px', value: 0 }]
  },
  // ------------------------------------------------------------------
[40. Responsive]
  '#notifications': {
    cursor: 'pointer',
    position: 'fixed',
    right: [{ unit: 'px', value: 0 }],
    zIndex: '99999',
    marginBottom: [{ unit: 'px', value: 22 }],
    marginRight: [{ unit: 'px', value: 15 }],
    maxWidth: [{ unit: 'px', value: 300 }],
    top: [{ unit: 'px', value: 0 }]
  },
  '#notifications alert-danger': {
    color: '#FFFFFF !important',
    backgroundColor: '#FF0000 !important',
    borderColor: '#FF0000 !important'
  },
  '#notifications alert-success': {
    color: '#FFFFFF !important',
    backgroundColor: '#008000 !important',
    borderColor: '#FF0000 !important'
  },
  validError: {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'red' }],
    background: '#FFCECE'
  },
  // .tbColor {
	color: black;
}

table.dataTable thead>tr>th.sorting_asc, table.dataTable thead>tr>th.sorting_desc, table.dataTable thead>tr>th.sorting, table.dataTable thead>tr>td.sorting_asc, table.dataTable thead>tr>td.sorting_desc, table.dataTable thead>tr>td.sorting {
   padding-right: 30px;
   background-color: #35454E;
}
  activeDrop: {
    backgroundColor: '#0CB6D4'
  },
  inactiveDrop: {
    backgroundColor: '#DC1D38'
  },
  // .overlay {
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 50%;
    z-index: 999;
    position: absolute;
    left: 0;
    top: 0;
    width: 10%;
	height: 10%;
	margin-left:25%;

    display: block;
}​
});
