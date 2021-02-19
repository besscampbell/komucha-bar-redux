import * as actions from './../../actions';

describe('kombucha bar actions', () => {
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({brand: 'Synergy', flavor: 'Trilogy', pricePerPint: 2.75, kegPrice: 270.00, untappedKegs: 1, pintsRemaining: 34, id: 1})).toEqual({
      type:'ADD_KEG',
      brand: 'Synergy',
      flavor: 'Trilogy',
      pricePerPint: 2.75,
      kegPrice: 270.00,
      untappedKegs: 1,
      pintsRemaining: 34,
      id: 1
    })
  })
})