const { success, info, warn, log, error, indent } = require('./src/index');

const TAB_LENGTH = 3;

// indent.nl(3).tab(TAB_LENGTH);
indent.nl(3);
// success('Lorem ipsum dolor sit amet');

// indent.tab(TAB_LENGTH);
// success('Lorem', 'Lorem ipsum dolor sit amet');
// indent.tab(TAB_LENGTH);
// success.b('Lorem ipsum dolor sit amet');
// indent.tab(TAB_LENGTH);
// success.m('Lorem ipsum dolor sit amet');
// indent.tab(TAB_LENGTH);
// success.wb('Lorem ipsum dolor sit amet');
// indent.nl(1).tab(TAB_LENGTH);

indent.nl(1).tab(TAB_LENGTH);
success.wb('Lorem ipsum dolor sit amet');
indent.nl(1).tab(TAB_LENGTH);
info.wb('Lorem ipsum dolor sit amet');
indent.nl(1).tab(TAB_LENGTH);
warn.wb('Lorem ipsum dolor sit amet');
indent.nl(1).tab(TAB_LENGTH);
log.wb('Lorem ipsum dolor sit amet');
indent.nl(1).tab(TAB_LENGTH);
error.wb('Lorem ipsum dolor sit amet');

// info('badge text', 'message text here ');

indent.nl(3);
warn.b('Lorem ipsum dolor sit amet');
indent
	.nl(2)
	.tab(3)
	.space(5);
error.b('Lorem ipsum dolor sit amet');
indent.nl(3);
