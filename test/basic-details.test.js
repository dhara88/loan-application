import { html, fixture, expect,aTimeout,oneEvent } from '@open-wc/testing';
import '../src/LoanBasicDetails/BasicDetails.js';
import Sinon from 'Sinon';
// import {stub, spy} from 'sinon';

const basic_input = {
  type:'homeloan',
  amount:200000,
  range:2
};

const el = await fixture(html`<basic-details></basic-details>`);

describe('Basic details', () => {
  it('Renders title', async () =>  {
    const el = await fixture(html`<basic-details></basic-details>`)
    const h2 = el.shadowRoot?.querySelector('h2');
    expect(h2).to.exist;
  });
  
  it('Is input accessible', async () => {
    const lionInput = await fixture(html`<lion-input label="Label"></lion-input>`);
    await expect(lionInput).to.be.accessible();
  });

  it('Is input amount accessible', async () => {
    const lionInput_amount = await fixture(html`<lion-input-amount label="Label"></lion-input-amount>`);
    await expect(lionInput_amount).to.be.accessible();
  });

  it('Is input range accessible', async () => {
    const lionInput_range = await fixture(html`<lion-input-range label="Label"></lion-input-range>`);
    await expect(lionInput_range).to.be.accessible();
  });

  it('Is button click', async () => {
    const clickSpy = Sinon.spy();
    const el = await fixture(html` <lion-button @click="${clickSpy}">foo</lion-button> `)
    el.click();
    await aTimeout(0);
    await aTimeout(0);
    expect(clickSpy).to.have.been.calledOnce;
  });

  it('Shows form inputs', async () => {
    const el = await fixture(html`<lion-input-range .modelValue=${basic_input.range}></lion-input-range>`);
    expect(el.modelValue).to.equal(2); 
    const el1 = await fixture(html`<lion-input-amount .modelValue=${basic_input.amount}></lion-input-amount>`);
    expect(el1.modelValue).to.equal(200000); 
    const el2 = await fixture(html`<lion-input .value=${basic_input.type}></lion-input>`);
    expect(el2.value).to.equal('homeloan'); 
  });

  // it('Is capturedetails function called on button click', async () => {
  //   const el = await fixture(html`<basic-details><lion-form><form></form></lion-form></basic-details>`);
  //   const myFunctionStub = stub(el, '_captureDetails');
  //   el.requestUpdate();
  //   await el.updateComplete;
  //   el.shadowRoot.querySelector('button').click();
  //   setTimeout(() => expect(myFunctionStub).to.have.callCount(1),1000);
  // });

  // it('calls dashboard function when a button is clicked', async () => {
  //   const el = await fixture(html`<basic-details><lion-form><form></form></lion-form></basic-details>`);
  //   const myFunctionStub = stub(el, '_toDashboard');
  //   el.requestUpdate();
  //   await el.updateComplete;
  //   el.shadowRoot.querySelector('button').click();
  //   expect(myFunctionStub).to.have.callCount(1);
  //   });

    // it('check if native submit event called', async () => {
    //   const submitSpy = spy();
    //   const el = await fixture(html`
    //     <lion-form @submit=${submitSpy}>
    //       <form>
    //         <lion-button click="_captureDetails">submit</lion-button>
    //       </form>
    //     </lion-form>
    //   `);
  
    //   const button = el.querySelector('lion-button');
    //   button.click();
    //   expect(submitSpy.callCount).to.equal(1);
    // });
    
    it('check _captureDetails function called', async () => {
      const submitSpy = Sinon.spy(el,'_captureDetails');
      const res = el._captureDetails();
      expect(res).to.equal(undefined);
    });

    it('check _numToWord function called', async () => {
      const submitSpy = Sinon.spy(el,'_numToWord');
      const res = el._numToWord();
      expect(res).to.equal(undefined);
    });
});
