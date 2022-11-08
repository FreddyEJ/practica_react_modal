import { ImageNotSupported } from "@mui/icons-material";
import React, {useState} from "react";
import image from '../public/imagen.jpg';






const Modal =({open,onClose})=>{

    if(!open) return null

    return(
        <div onClick={onClose} className="overlay">
            <div onClick={(e)=>{e.stopPropagation()}}
             className="modalContainer">
                <img src="https://www.programaenlinea.net/wp-content/uploads/2016/07/programador.jpg"  />

                <div className="modalRight">
                    <p className="closeBtn" onClick={onClose}>X</p>
                    <div className="content">
                    <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label><br/>
                    <label>
                        Address:
                        <input type="text" name="address" />
                    </label><br/>
                    <label>
                        Phone:
                        <input type="number" name="phone" />
                    </label>
                    </form>
                </div>
                    <div className="btnContainer">
                        <button onClick={onClose} className="btnPrimary">
                            <span className="bold">Cancelar</span>
                        </button>
                        <button onClick={onClose} className="btnOutLine">
                            <span className="bold">Aceptar</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal