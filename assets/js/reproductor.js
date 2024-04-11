import { Multimedia } from "./multimedia.js";
import { VideoSetModule } from "./videoSetModule.js";

export default class Reproductor extends Multimedia{
    constructor(id, url){  
        super(url);      
        this._id = id;
    }

    get id(){
        return this._id;
    }

    playMultimedia() {
       VideoSetModule.getInsertVideoDetail(this._id, this.url);   
    }

    setInicio(time){
        let newUrl = `${this.url}&start=${time}`
        VideoSetModule.getInsertVideoDetail(this._id, newUrl);
    }


}