import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  it('Is input accessible', async () => {
    const lionInput = await fixture(html`<lion-input label="Label"></lion-input>`);
    await expect(lionInput).to.be.accessible();
  });

  it('Is input date accessible', async () => {
    const lion_datepicker = await fixture(html`<lion-input-datepicker label="Label"></lion-input-datepicker>`);
    await expect(lion_datepicker).to.be.accessible();
  });

  it('Is input amount accessible', async () => {
    const lion_amount = await fixture(html`<lion-input-amount label="Label"></lion-input-amount>`);
    await expect(lion_amount).to.be.accessible();
  });

  it('Is input email accessible', async () => {
    const lion_email = await fixture(html`<lion-input-email label="Label"></lion-input-email>`);
    await expect(lion_email).to.be.accessible();
  });

  it('Is input checkbox accessible', async () => {
    const lion_check = await fixture(html`<lion-checkbox label="Label"></lion-checkbox>`);
    await expect(lion_check).to.be.accessible();
  });

  it('renders title', async () =>  {
    const el = await fixture(html`<customer-details></customer-details>`)
    const h2 = el.shadowRoot?.querySelector('h2');
    expect(h2).to.exist;
  });
});
