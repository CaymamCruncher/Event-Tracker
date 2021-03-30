"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _Event=_interopRequireDefault(require("./Event"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function ListEvents(e){var t=e.events,n=e.shownEvents,r=e.deleteEvent,u=e.completeEvent,a=e.convertDistance;var l=function(){switch(n){case"complete":return t.filter((function(e){return e.status}));case"incomplete":return t.filter((function(e){return!e.status}));default:return t}}();return React.createElement("ul",null,l.map((function(e){return React.createElement("li",{key:e.id},React.createElement(_Event.default,{event:e,deleteEvent:r,completeEvent:u,convertDistance:a}))})))}var _default=ListEvents;exports.default=_default;