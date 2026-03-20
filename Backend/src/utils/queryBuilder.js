class QueryBuilder {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    if (this.queryString.search) {
      this.query = this.query.find({
        $or: [
          {
            title: {
              $regex: this.queryString.search,
              $options: "i",
            },
          },
          {
            location: {
              $regex: this.queryString.search,
              $options: "i",
            },
          },
        ],
      });
    }
    return this;
  }

  filter() {
    const min = this.queryString.min;
    const max = this.queryString.max;

    if (min || max) {
      this.query = this.query.find({
        price: {
          $gte: min ? Number(min) : 0,
          $lte: max ? Number(max) : Number.MAX_SAFE_INTEGER,
        },
      });
    }
    return this;
  }

  paginate() {
    const page = parseInt(this.queryString.page) || 1;
    const limit = parseInt(this.queryString.limit) || 10;

    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

export default QueryBuilder;
