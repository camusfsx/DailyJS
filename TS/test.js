Array.prototype.quickSort = function () {
    if (this.length < 2) {
        return this;
    }
    else {
        var left = [];
        var right = [];
        var anchor = this[0];
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
            var value = _a[_i];
            if (anchor > value) {
                left.push(value);
            }
            else {
                right.push(value);
            }
        }
        return left.quickSort().connect(right.quickSort());
    }
};
var arr = [5, 6, 7, 89, 4234, 24, 645, 6, 47, 56, 7, 5, 73, 54, 6, 3, 673, 52, 6, 2, 72, 47, 34, 55, 3, 721, 7, 2];
console.log(arr.quickSort());
