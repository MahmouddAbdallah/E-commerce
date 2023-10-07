class FeatureAPi {
    constructor(Model, req) {
        this.Model = Model;
        this.req = req;
    }
    filters() {
        //(gte|gt|lt|lte)
        const { query } = this.req;
        let newQuery = JSON.stringify(query);
        newQuery = JSON.parse(newQuery.replace(/\b(gte|gt|lte|lt)/gi, match => `$${match}`))
        const words = ["page", "limit", "sort", "fields", "keyword", "find"]
        words.forEach((element) => {
            delete newQuery[element]
        })
        this.Model = this.Model.find(newQuery)
        return this
    }
    sort() {
        let sort = this.req.query.sort || "-createdAt"
        if (sort) {
            sort = sort.split(",").join(" ")
        } else {
            sort = "-createdAt"
        }
        this.Model = this.Model.sort(sort);
        return this
    }
    fields() {
        let { fields } = this.req.query
        if (fields) {
            fields = fields.split(",").join(" ")
        } else {
            fields = "-__v"
        }
        this.Model = this.Model.select(fields);
        return this
    }
    search() {
        const keyword = this.req.query.keyword
        if (keyword) {
            let search = {}
            search.$or = [
                { title: { $regex: keyword, $options: "i" } },
                { first_name: { $regex: keyword, $options: 'i' } },
                { last_name: { $regex: keyword, $options: 'i' } }
            ]
            this.Model = this.Model.find(search)
        }
        return this
    }
    populate(path, select) {
        this.Model = this.Model.populate({ path, select })
        return this
    }
    pagenation() {
        const page = this.req.query.page || 1
        const limit = this.req.query.limit || 12
        const skip = (page - 1) * limit
        this.Model = this.Model.skip(skip).limit(limit)
        return this
    }
    find() {
        let find = this.req.query.find
        find = JSON.parse(find)
        this.Model = this.Model.find(find)
        return this
    }
}
module.exports = FeatureAPi;