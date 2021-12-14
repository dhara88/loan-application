import { html, fixture, expect,aTimeout } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';


describe('Success screen ', () => {
  it('Renders success msg', async () =>  {
    const el = await fixture(html`<loan-success></loan-success>`);
    const h2 = el.shadowRoot?.querySelector('h2');
    const p = el.shadowRoot?.querySelector('p');
    expect(h2).to.exist;
    expect(p).to.exist;
  });
  
  it('Is home success button click', async () => {
    const clickSpy = sinon.spy();
    const el = await fixture(html`<lion-button @click="${clickSpy}">foo</lion-button> `)
    el.click();
    await aTimeout(0);
    await aTimeout(0);
    expect(clickSpy).to.have.been.calledOnce;
  });
});

describe('error screen', () => {
  it('Renders error msg', async () =>  {
    const el = await fixture(html`<loan-error></loan-error>`);
    const h2 = el.shadowRoot?.querySelector('h2');
    const p = el.shadowRoot?.querySelector('p');
    expect(h2).to.exist;
    expect(p).to.exist;
  });

  it('Is home error button click', async () => {
    const clickSpy = sinon.spy();
    const el = await fixture(html`<lion-button @click="${clickSpy}">foo</lion-button> `);
    el.click();
    await aTimeout(0);
    await aTimeout(0);
    expect(clickSpy).to.have.been.calledOnce;
  });
});
