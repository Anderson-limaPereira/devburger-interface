import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51QpsURAuIt0f7wfNPyDaqtA7k2ECRXTBMbW7WzaJxuUIUCib2VT9yO1kiXKuIxPPBctyTzs7UfzUEqprscIsFDxN00vl9bkN02'
)

export default stripePromise;