function receivesAFunction(fn) {
    fn();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return () => true;
}