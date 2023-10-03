class Model{
   #lista =[]
    
    #allapot
    #lepesszam
constructor(){
    this.#allapot = "X"
    this.#lepesszam = 0
    this.#lista= [".",".",".",".",".",".",".",".","."]

}
setAllapot(index){
    if (this.#allapot === "X") {
        this.#allapot = "O";
    }
    else {
        this.#allapot = "X";
    }
    this.#lista[index] = this.#allapot
    console.log(this.#lista)
    this.#lepesszam++;
}
getErtek(){
    this.#VSzGY()
    return this.#allapot
}
getVegeVane(){
    if(this.#lepesszam === 9){
        return true
    }
    return false
}

#VSzGY(){
    let vELL =this.#lista[0]
    for (let i = 0; i < 9; i++) {
       
            vELL += this.#lista[i]
            if (i%3 ===0) {
                vELL += "@"
            }
            
        
        
    }
    vELL +="@"
    console.log(vELL)
}
}
export default Model