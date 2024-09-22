// Your code here
Array.prototype.isEqual = function (arr2) {
    if (this.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== arr2[i]) {
        return false;
        }
    }
    return true;
}