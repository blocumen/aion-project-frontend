import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  img: {
    verticalAlign: 'middle'
  },
  'img-responsive': {
    display: 'block',
    height: [{ unit: 'string', value: 'auto' }],
    maxWidth: [{ unit: '%H', value: 1 }]
  },
  'img-rounded': {
    borderRadius: '3px'
  },
  'img-thumbnail': {
    backgroundColor: '#fff',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ededf0' }],
    borderRadius: '3px',
    display: 'inline-block',
    height: [{ unit: 'string', value: 'auto' }],
    lineHeight: [{ unit: 'px', value: 1.428571429 }],
    maxWidth: [{ unit: '%H', value: 1 }],
    mozTransition: 'all .2s ease-in-out',
    oTransition: 'all .2s ease-in-out',
    padding: [{ unit: 'px', value: 2 }, { unit: 'px', value: 2 }, { unit: 'px', value: 2 }, { unit: 'px', value: 2 }],
    transition: 'all .2s ease-in-out',
    webkitTransition: 'all .2s ease-in-out'
  },
  'img-circle': {
    borderRadius: '50%'
  },
  'kanban-centered': {
    position: 'relative',
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  'kanban-centered:before': {
    content: '" "',
    display: 'table'
  },
  'kanban-centered:after': {
    content: '" "',
    display: 'table'
  },
  'kanban-centered:after': {
    clear: 'both'
  },
  'kanban-centered:before': {
    content: '" "',
    display: 'table'
  },
  'kanban-centered:after': {
    content: '" "',
    display: 'table'
  },
  'kanban-centered:after': {
    clear: 'both'
  },
  'kanban-centered:before': {
    content: '''',
    position: 'absolute',
    display: 'block',
    width: [{ unit: 'px', value: 2 }],
    // background: #f5f5f6;
    top: [{ unit: 'px', value: 20 }],
    bottom: [{ unit: 'px', value: 20 }],
    // margin-left: 18px;
  },
  'kanban-centered kanban-entry': {
    position: 'relative',
    // width: 50%;
        float: right;
    margin: [{ unit: 'px', value: 10 }, { unit: 'px', value: 8 }, { unit: 'px', value: 10 }, { unit: 'px', value: 8 }],
    clear: 'both',
    borderRadius: '4px',
    WebkitBoxShadow: '1px 1px 2px 0px rgba(50, 50, 50, 0.5)',
    MozBoxShadow: '1px 1px 2px 0px rgba(50, 50, 50, 0.5)',
    boxShadow: [{ unit: 'px', value: 1 }, { unit: 'px', value: 1 }, { unit: 'px', value: 2 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(50, 50, 50, 0.5)' }]
  },
  'kanban-centered kanban-entry:before': {
    content: '" "',
    display: 'table'
  },
  'kanban-centered kanban-entry:after': {
    content: '" "',
    display: 'table'
  },
  'kanban-centered kanban-entry:after': {
    clear: 'both'
  },
  'kanban-centered kanban-entry:before': {
    content: '" "',
    display: 'table'
  },
  'kanban-centered kanban-entry:after': {
    content: '" "',
    display: 'table'
  },
  'kanban-centered kanban-entry:after': {
    clear: 'both'
  },
  'kanban-centered kanban-entrybegin': {
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'kanban-centered kanban-entryleft-aligned': {
    float: 'left'
  },
  'kanban-centered kanban-entryleft-aligned kanban-entry-inner': {
    marginLeft: [{ unit: 'px', value: 0 }],
    marginRight: [{ unit: 'px', value: -18 }]
  },
  'kanban-centered kanban-entryleft-aligned kanban-entry-inner kanban-time': {
    left: [{ unit: 'string', value: 'auto' }],
    right: [{ unit: 'px', value: -100 }],
    textAlign: 'left'
  },
  'kanban-centered kanban-entryleft-aligned kanban-entry-inner kanban-icon': {
    float: 'right'
  },
  'kanban-centered kanban-entryleft-aligned kanban-entry-inner kanban-label': {
    marginLeft: [{ unit: 'px', value: 0 }],
    marginRight: [{ unit: 'px', value: 70 }]
  },
  'kanban-centered kanban-entryleft-aligned kanban-entry-inner kanban-label:after': {
    left: [{ unit: 'string', value: 'auto' }],
    right: [{ unit: 'px', value: 0 }],
    marginLeft: [{ unit: 'px', value: 0 }],
    marginRight: [{ unit: 'px', value: -9 }],
    MozTransform: 'rotate(180deg)',
    OTransform: 'rotate(180deg)',
    WebkitTransform: 'rotate(180deg)',
    MsTransform: 'rotate(180deg)',
    transform: 'rotate(180deg)'
  },
  'kanban-centered kanban-entry kanban-entry-inner': {
    position: 'relative',
    // margin-left: -24px;
  },
  'kanban-centered kanban-entry kanban-entry-inner:before': {
    content: '" "',
    display: 'table'
  },
  'kanban-centered kanban-entry kanban-entry-inner:after': {
    content: '" "',
    display: 'table'
  },
  'kanban-centered kanban-entry kanban-entry-inner:after': {
    clear: 'both'
  },
  'kanban-centered kanban-entry kanban-entry-inner:before': {
    content: '" "',
    display: 'table'
  },
  'kanban-centered kanban-entry kanban-entry-inner:after': {
    content: '" "',
    display: 'table'
  },
  'kanban-centered kanban-entry kanban-entry-inner:after': {
    clear: 'both'
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-time': {
    position: 'absolute',
    left: [{ unit: 'px', value: -100 }],
    textAlign: 'right',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }],
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    boxSizing: 'border-box'
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-time > span': {
    display: 'block'
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-time > span:first-child': {
    fontSize: [{ unit: 'px', value: 15 }],
    fontWeight: 'bold'
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-time > span:last-child': {
    fontSize: [{ unit: 'px', value: 12 }]
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-icon': {
    background: '#fff',
    color: '#737881',
    display: 'block',
    width: [{ unit: 'px', value: 25 }],
    height: [{ unit: 'px', value: 25 }],
    WebkitBackgroundClip: 'padding-box',
    MozBackgroundClip: 'padding',
    backgroundClip: 'padding-box',
    WebkitBorderRadius: '20px',
    MozBorderRadius: '20px',
    borderRadius: '20px',
    textAlign: 'center',
    MozBoxShadow: '0 0 0 4px #f5f5f6',
    WebkitBoxShadow: '0 0 0 4px #f5f5f6',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 4 }, { unit: 'string', value: '#f5f5f6' }],
    float: 'left',
    marginTop: [{ unit: 'px', value: 6 }]
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-iconbg-primary': {
    backgroundColor: '#303641',
    color: '#fff'
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-iconbg-secondary': {
    backgroundColor: '#ee4749',
    color: '#fff'
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-iconbg-success': {
    backgroundColor: '#00a651',
    color: '#fff'
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-iconbg-info': {
    backgroundColor: '#21a9e1',
    color: '#fff'
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-iconbg-warning': {
    backgroundColor: '#fad839',
    color: '#fff'
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-iconbg-danger': {
    backgroundColor: '#cc2424',
    color: '#fff'
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-label': {
    position: 'relative',
    background: '#f5f5f6',
    padding: [{ unit: 'em', value: 0.75 }, { unit: 'em', value: 0.75 }, { unit: 'em', value: 0.75 }, { unit: 'em', value: 0.75 }],
    // margin-left: 50px;
    WebkitBackgroundClip: 'padding-box',
    MozBackgroundClip: 'padding',
    backgroundClip: 'padding-box',
    WebkitBorderRadius: '3px',
    MozBorderRadius: '3px',
    borderRadius: '3px'
  },
  // .kanban-centered .kanban-entry .kanban-entry-inner .kanban-label:after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 9px 9px 9px 0;
                    border-color: transparent #f5f5f6 transparent transparent;
                    left: 0;
                    top: 10px;
                    margin-left: -9px;
                }
  'kanban-centered kanban-entry kanban-entry-inner kanban-label h2': {
    color: '#737881',
    fontFamily: '"Noto Sans",sans-serif',
    fontSize: [{ unit: 'px', value: 12 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    lineHeight: [{ unit: 'px', value: 1.428571429 }]
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-label p': {
    color: '#737881',
    fontFamily: '"Noto Sans",sans-serif',
    fontSize: [{ unit: 'px', value: 12 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    lineHeight: [{ unit: 'px', value: 1.428571429 }]
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-label p + p': {
    marginTop: [{ unit: 'px', value: 15 }]
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-label h2': {
    fontSize: [{ unit: 'px', value: 16 }],
    marginBottom: [{ unit: 'px', value: 10 }]
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-label h2 a': {
    color: '#303641'
  },
  'kanban-centered kanban-entry kanban-entry-inner kanban-label h2 span': {
    WebkitOpacity: '.6',
    MozOpacity: '.6',
    opacity: '.6',
    MsFilter: 'alpha(opacity=60)',
    filter: 'alpha(opacity=60)'
  },
  'modal-static': {
    position: 'fixed',
    top: [{ unit: '%V', value: 0.5 }, { unit: 'string', value: '!important' }],
    left: [{ unit: '%H', value: 0.5 }, { unit: 'string', value: '!important' }],
    marginTop: [{ unit: 'px', value: -100 }],
    marginLeft: [{ unit: 'px', value: -100 }],
    overflow: 'visible !important'
  },
  'modal-static': {
    width: [{ unit: 'px', value: 200 }],
    height: [{ unit: 'px', value: 150 }]
  },
  'modal-static modal-dialog': {
    width: [{ unit: 'px', value: 200 }],
    height: [{ unit: 'px', value: 150 }]
  },
  'modal-static modal-content': {
    width: [{ unit: 'px', value: 200 }],
    height: [{ unit: 'px', value: 150 }]
  },
  'modal-static modal-dialog': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 0 }, { unit: 'string', value: '!important' }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 0 }, { unit: 'string', value: '!important' }]
  },
  'modal-static modal-content': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 0 }, { unit: 'string', value: '!important' }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 0 }, { unit: 'string', value: '!important' }]
  },
  'kanban-col': {
    width: [{ unit: 'px', value: 300 }],
    marginRight: [{ unit: 'px', value: 20 }],
    float: 'left'
  },
  'panel-body': {
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    overflowY: 'auto'
  },
  // .panel-heading {
    cursor: -moz-grab;
    cursor: -webkit-grab;
    cursor: grab;
}
  grab: {
    cursor: '-moz-grab',
    cursor: '-webkit-grab'
  },
  grabbing: {
    cursor: '-moz-grabbing',
    cursor: '-webkit-grabbing'
  },
  'panel-heading': {
    cursor: 'context-menu'
  },
  'panel-heading i': {
    cursor: 'pointer'
  },
  body: {
    WebkitUserSelect: 'none',
    // Chrome/Safari
    MozUserSelect: 'none',
    // Firefox
    MsUserSelect: 'none',
    // IE10+
    // Rules below not implemented in browsers yet
    OUserSelect: 'none',
    userSelect: 'none'
  }
});
