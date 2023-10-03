class View {
    ertek
    #index
    constructor(szuloelem, index) {
        this.szuloelem = szuloelem
        this.#htmlOsszerak()
        this.#index = index
        this.kattinthato = true
        this.elem = $(".elem:last-child");
        this.pElem = this.elem.children("p");
        this.ertek = this.setErtek()
        this.elem.on("click", () => {
            if(this.kattinthato){
                this.#sajatEsemenyKezelo("kivalaszt")
                this.kattinthato = false
            }
            
        })
    }
    setErtek(ertek) {
        this.pElem.html(ertek);

    }
    #htmlOsszerak() {
        let txt = ""
        txt += `<div class="elem"><p class="pelem"></p></div>`;
        
        this.szuloelem.append(txt)
    }
    #sajatEsemenyKezelo(esemenynev) {
       
        const esemenyem = new CustomEvent(esemenynev, {detail:this})
        window.dispatchEvent(esemenyem)
    }
    getIndex(){
        return this.#index
    }
}
export default View