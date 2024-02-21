/// immediately invoked function expression (IIFE)

(function chai() {
    console.log('db connected');
})();

( (name) => {
    console.log('db connected two', name);
})('abhi')