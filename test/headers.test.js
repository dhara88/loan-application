import { html, fixture, expect,aTimeout } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';
import sinon from 'sinon';

describe('loan-header', () => {
  it('Is language select button accessible', async () => {
    const lion_btn = await fixture(html`<loan-header><button id=btn>foo</button></loan-header>`);
    await expect(lion_btn).to.be.accessible();
  });

  it('Is language select button click', async () => {
    const clickSpy = sinon.spy();
    const el = await fixture(html`<button @click="${clickSpy}">foo</button> `);
    el.click();
    await aTimeout(0);
    await aTimeout(0);
    expect(clickSpy).to.have.been.calledOnce;
  });
});
