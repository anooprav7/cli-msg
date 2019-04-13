const { info, warn, log, error, indent } = require('./index');

info('INFORMATION', 'Lorem ipsum dolor sit amet');
info('Lorem ipsum dolor sit amet');
info.m('Lorem ipsum dolor sit amet');
warn('WARNING', 'Lorem ipsum dolor sit amet');
warn('Lorem ipsum dolor sit amet');
warn.m('Lorem ipsum dolor sit amet');
log('LOGING', 'Lorem ipsum dolor sit amet');
log('Lorem ipsum dolor sit amet');
log.m('Lorem ipsum dolor sit amet');
error('ERRORS', 'Lorem ipsum dolor sit amet');
error('Lorem ipsum dolor sit amet');
error.m('Lorem ipsum dolor sit amet');
indent
	.nl(5)
	.tab(3)
	.space(5);
info('INFO');
