class PageView {
    constructor (options) {
        this.model = options.model;
        this.template = options.template;
    }

    render () {
        return this.template(this.model);
    }
}

module.exports = PageView;