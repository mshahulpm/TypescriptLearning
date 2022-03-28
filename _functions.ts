
function greeter(fn: (a: string) => void) {
    fn("Hello World");
}

function print(s: string) {
    console.log(s);
}

greeter(print);

type DescribableFunction = {
    description: string;
    (arg: number): number;
}

function doSomething(fn: DescribableFunction) {
    console.log(fn.description);
    return fn(1);
}

const double: DescribableFunction = function (description: string, n: number) {
    this.description = description;
    return n * 2;
};

doSomething({
    description: "shshhshhsh shshhshshs", double
})

