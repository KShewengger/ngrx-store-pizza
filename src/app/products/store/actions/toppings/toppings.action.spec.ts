import * as ToppingsAction from './toppings.action';


describe('Toppings Actions', () => {

  describe('LoadToppings Actions', () => {
    describe('LoadToppings', () => {
      it('should create an action', () => {
        const action = new ToppingsAction.LoadToppings();
        expect({ ...action }).toEqual({
          type: ToppingsAction.LOAD_TOPPINGS
        });
      });
    });

    describe('LoadToppingsFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new ToppingsAction.LoadToppingsFail(payload);

        expect({ ...action }).toEqual({
          type: ToppingsAction.LOAD_TOPPINGS_FAIL,
          payload
        });
      });
    });

    describe('LoadToppingsSuccess', () => {
      it('should create an action', () => {
        const payload = [
          { id: 1, name: 'onion' },
          { id: 2, name: 'mushroom' },
          { id: 3, name: 'basil' },
        ];
        const action = new ToppingsAction.LoadToppingsSuccess(payload);

        expect({ ...action }).toEqual({
          type: ToppingsAction.LOAD_TOPPINGS_SUCCESS,
          payload
        });
      });
    });
  });

  describe('VisualiseToppings Actions', () => {
    describe('VisualiseToppings', () => {
      it('should create an action', () => {
        const action = new ToppingsAction.VisualiseToppings([1, 2, 3]);
        expect({ ...action }).toEqual({
          type: ToppingsAction.VISUALISE_TOPPINGS,
          payload: [1, 2, 3]
        });
      });
    });
  });

});
