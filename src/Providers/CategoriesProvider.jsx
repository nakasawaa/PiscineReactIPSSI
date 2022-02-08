export class CategoriesProvider {
    categories
    constructor() {
        this.categories = this.getCategories()
    }

    save() {
        localStorage.setItem('piscine-spa-categories', JSON.stringify(this.categories))
    }

    load() {
        let datas = localStorage.getItem('piscine-spa-categories')
        if (datas === null) datas = '[]'
        datas = JSON.parse(datas)
        this.categories = datas
    }

    getCategories() {
        this.load()
        return this.categories
    }

    add(categorie) {
        const id = Date.now()
        let tmp = { ...categorie }
        tmp.id = id
        this.categories.push(tmp)
        this.save()
        window.location.reload()
    }

    update(categorie) {
        const { id } = categorie
        let indice = -1
        for (let i = 0; i < this.categories.length; i++)
            if (this.categories[i].id === Number(id)) indice = i

        if (indice === -1) return false
        this.categories[indice] = categorie
        this.save()
        return true
    }

    remove(categorie) {
        let indice = -1
        for (let i = 0; i < this.categories.length; i++)
            if (this.categories[i].id === Number(categorie.id)) indice = i

        if (indice === -1) return false

        this.categories.splice(indice, 1)
        this.save()
        return true
    }

    getCategorieById(id) {
        let res = this.categories.filter(categorie => categorie.id === Number(id))
        return res.length === 0 ? false : res[0]
    }
}