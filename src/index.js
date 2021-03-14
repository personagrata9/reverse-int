module.exports = function reverse (n) {
    let str = String(n);
        return str.split("").reverse().toString().replace(/,/g, "").replace(/-/g, "");
 }
