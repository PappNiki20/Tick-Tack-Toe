import Model from "../Model/Model.js"
import View from "../View/ElemView.js"
class Controller {
   
    constructor() {
       
        const MODEL = new Model()

        for (let index = 0; index < 9; index++) {
             new View($(".jatekter"), index)

        }
        $(window).on("kivalaszt", (event) => {

            MODEL.setAllapot(event.detail.getIndex())

            event.detail.setErtek(MODEL.getErtek())
            if (MODEL.getVegeVane()) {
                console.log("véééége")
            }


        })


    }

}
export default Controller