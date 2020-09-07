import * as PizzasAction from './pizzas.action';


describe('Pizzas Actions', () => {

  describe('LoadPizzas Actions', () => {
    describe('LoadPizzas', () => {
      it('should create an action', () => {
        const action = new PizzasAction.LoadPizzas();

        expect({ ...action }).toEqual({
          type: PizzasAction.LOAD_PIZZAS,
        });
      });
    });

    describe('LoadPizzasFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new PizzasAction.LoadPizzasFail(payload);

        expect({ ...action }).toEqual({
          type: PizzasAction.LOAD_PIZZAS_FAIL,
          payload,
        });
      });
    });

    describe('LoadPizzasSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {
            id: 1,
            name: 'Pizza #1',
            toppings: [
              { id: 1, name: 'onion' },
              { id: 2, name: 'mushroom' },
              { id: 3, name: 'basil' },
            ],
          },
          {
            id: 2,
            name: 'Pizza #2',
            toppings: [
              { id: 1, name: 'onion' },
              { id: 2, name: 'mushroom' },
              { id: 3, name: 'basil' },
            ],
          },
        ];
        const action = new PizzasAction.LoadPizzasSuccess(payload);

        expect({ ...action }).toEqual({
          type: PizzasAction.LOAD_PIZZAS_SUCCESS,
          payload,
        });
      });
    });
  });

  describe('CreatePizza Actions', () => {
    describe('CreatePizza', () => {
      it('should create an action', () => {
        const payload = {
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new PizzasAction.CreatePizza(payload);

        expect({ ...action }).toEqual({
          type: PizzasAction.CREATE_PIZZA,
          payload,
        });
      });
    });

    describe('CreatePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Create Error' };
        const action = new PizzasAction.CreatePizzaFail(payload);

        expect({ ...action }).toEqual({
          type: PizzasAction.CREATE_PIZZA_FAIL,
          payload,
        });
      });
    });

    describe('CreatePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new PizzasAction.CreatePizzaSuccess(payload);

        expect({ ...action }).toEqual({
          type: PizzasAction.CREATE_PIZZA_SUCCESS,
          payload,
        });
      });
    });
  });

  describe('UpdatePizza Actions', () => {
    describe('UpdatePizza', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new PizzasAction.UpdatePizza(payload);

        expect({ ...action }).toEqual({
          type: PizzasAction.UPDATE_PIZZA,
          payload,
        });
      });
    });

    describe('UpdatePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Update Error' };
        const action = new PizzasAction.UpdatePizzaFail(payload);

        expect({ ...action }).toEqual({
          type: PizzasAction.UPDATE_PIZZA_FAIL,
          payload,
        });
      });
    });

    describe('UpdatePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new PizzasAction.UpdatePizzaSuccess(payload);

        expect({ ...action }).toEqual({
          type: PizzasAction.UPDATE_PIZZA_SUCCESS,
          payload,
        });
      });
    });
  });

  describe('RemovePizza Actions', () => {
    describe('RemovePizza', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new PizzasAction.RemovePizza(payload);

        expect({ ...action }).toEqual({
          type: PizzasAction.REMOVE_PIZZA,
          payload,
        });
      });
    });

    describe('RemovePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Remove Error' };
        const action = new PizzasAction.RemovePizzaFail(payload);

        expect({ ...action }).toEqual({
          type: PizzasAction.REMOVE_PIZZA_FAIL,
          payload,
        });
      });
    });

    describe('RemovePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new PizzasAction.RemovePizzaSuccess(payload);

        expect({ ...action }).toEqual({
          type: PizzasAction.REMOVE_PIZZA_SUCCESS,
          payload,
        });
      });
    });
  });

});
