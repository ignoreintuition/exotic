const toArray = s => {
    if (s.match(/\[[\w,]+/)) {
        return s.substring(1,s.length-1).split(",");
    }
    return s;
};

module.exports = {
    toArray
};
