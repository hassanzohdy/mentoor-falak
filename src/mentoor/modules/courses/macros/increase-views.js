function increaseViews(id) {
    return this.endpoint.patch(this.path(`/${id}/v`));
}

Macros.create('increaseViews', increaseViews);