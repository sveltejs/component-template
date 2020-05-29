import test from 'ava';
import Component from '@/Component.svelte';

test('validate component', t => {
  const target = document.createElement('div');
  const app = new Component({
    target
  });
  t.snapshot(target);
  t.is(typeof app.$$, 'object');
  t.is(typeof app.$$.props, 'object');
  t.is(typeof app.$$.on_mount, 'object');
  t.is(typeof app.$$.on_destroy, 'object');
  t.is(typeof app.$$.before_update, 'object');
  t.is(typeof app.$$.after_update, 'object');
});