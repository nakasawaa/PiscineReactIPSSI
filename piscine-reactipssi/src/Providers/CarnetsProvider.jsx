export class CarnetsProvider {
    carnets
    constructor() {
        this.carnets = this.getCarnets()
    }

    save() {
        localStorage.setItem('piscine-spa-carnets', JSON.stringify(this.carnets))
    }

    load() {
        let datas = localStorage.getItem('piscine-spa-carnets')
        if (datas === null) datas = '[]'
        datas = JSON.parse(datas)
        this.carnets = datas
    }

    getCarnets() {
        this.load()
        return this.carnets
    }

    add(carnet) {
        const id = Date.now()
        let tmp = { ...carnet }
        tmp.id = id
        this.carnets.push(tmp)
        this.save()
    }

    update(carnet) {
        const { id } = carnet
        let indice = -1
        for (let i = 0; i < this.carnets.length; i++)
            if (this.carnets[i].id === Number(id)) indice = i

        if (indice === -1) return false
        this.carnets[indice] = carnet
        this.save()
        return true
    }

    remove(carnet) {
        let indice = -1
        for (let i = 0; i < this.carnets.length; i++)
            if (this.carnets[i].id === Number(carnet.id)) indice = i

        if (indice === -1) return false

        this.carnets.splice(indice, 1)
        this.save()
        return true
    }

    getCarnetById(id) {
        let res = this.carnets.filter(carnet => carnet.id === Number(id))
        return res.length === 0 ? false : res[0]
    }
}