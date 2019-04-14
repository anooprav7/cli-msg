const { info, warn, log, error, indent } = require('./index');

const TAB_LENGTH = 3;

indent.nl(3).tab(TAB_LENGTH);
info('Lorem ipsum dolor sit amet');
indent.tab(TAB_LENGTH);
info('Lorem', 'Lorem ipsum dolor sit amet');
indent.tab(TAB_LENGTH);
info.m('Lorem ipsum dolor sit amet');
indent.tab(TAB_LENGTH);
info.b('Lorem ipsum dolor sit amet');
indent.nl(1).tab(TAB_LENGTH);

warn('Lorem ipsum dolor sit amet');
indent.tab(TAB_LENGTH);
warn('Lorem', 'Lorem ipsum dolor sit amet');
indent.tab(TAB_LENGTH);
warn.m('Lorem ipsum dolor sit amet');
indent.tab(TAB_LENGTH);
warn.b('Lorem ipsum dolor sit amet');
indent.nl(1).tab(TAB_LENGTH);

log('Lorem ipsum dolor sit amet');
indent.tab(TAB_LENGTH);
log('Lorem', 'Lorem ipsum dolor sit amet');
indent.tab(TAB_LENGTH);
log.m('Lorem ipsum dolor sit amet');
indent.tab(TAB_LENGTH);
log.b('Lorem ipsum dolor sit amet');
indent.nl(1).tab(TAB_LENGTH);

error('Lorem ipsum dolor sit amet');
indent.tab(TAB_LENGTH);
error('Lorem', 'Lorem ipsum dolor sit amet');
indent.tab(TAB_LENGTH);
error.m('Lorem ipsum dolor sit amet');
indent.tab(TAB_LENGTH);
error.b('Lorem ipsum dolor sit amet');
indent.nl(1).tab(TAB_LENGTH);

info('badge text', 'message text here ');

indent.nl(3);
warn.b('Lorem ipsum dolor sit amet');
indent
	.nl(2)
	.tab(3)
	.space(5);
error.b('Lorem ipsum dolor sit amet');
indent.nl(3);
