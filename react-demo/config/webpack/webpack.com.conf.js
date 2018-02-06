/*自动生成标题*/
let titleFun = function (chunkName, title) {
    return title;
};

/*自动生成关键词*/
let keyFun = function (chunkName, key) {
    return key;
};

/*自动生成描述信息*/
let descriptionFun = function (chunkName, description) {
    return description;
};

module.exports = {
    titleFun: titleFun,
    keyFun: keyFun,
    descriptionFun: descriptionFun
};