function fibonacci(i) {
    const f = (x, y, count) => {
        if (count <= 3) {
            return x + y;
        } else {
            return f(y, x + y, count - 1);
        }
    };

    if (i < 3) {
        return 1;
    } else {
        return f(1, 1, i);
    }
}

module.exports = fibonacci;
