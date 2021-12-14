import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

const _data = {
  interestRate:3,
  monthlyEMI:10000,
  principal:100000,
  interest:90000,
  totalAmount:190000
}

describe('Loan EMI details', () => {
  it('Renders title', async () =>  {
    const el = await fixture(html`<loanemi-details></loanemi-details>`);
    const h2 = el.shadowRoot?.querySelector('h2');
    const p = el.shadowRoot?.querySelector('p');
    expect(h2).to.exist;
    expect(h2.textContent).to.equal('EMI Details');
    expect(p).to.exist;
  });

  it('Display data', async () => {
    const el = await fixture(html`<loanemi-details .values=${_data}></loanemi-details>`);
    expect(el.values.interestRate).to.equal(3);
    expect(el.values.monthlyEMI).to.equal(10000); 
    expect(el.values.principal).to.equal(100000); 
    expect(el.values.interest).to.equal(90000);
    expect(el.values.totalAmount).to.equal(190000);  
  });
});
