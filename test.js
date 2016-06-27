import test from 'ava';
import m from './';

test(t => {
	t.is(m('👍', 0), '👍');
	t.is(m('👍', 1), '👍🏻');
	t.is(m('👍', 2), '👍🏼');
	t.is(m('👍', 3), '👍🏽');
	t.is(m('👍', 4), '👍🏾');
	t.is(m('👍', 5), '👍🏿');
	t.is(m('👍🏿', 0), '👍');
	t.is(m('👸', 3), '👸🏽');
	t.is(m('🐶', 5), '🐶');
});