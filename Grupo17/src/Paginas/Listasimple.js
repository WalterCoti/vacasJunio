import React from "react";

class Nodo{
    constructor(valor,siguiente) {
        this.value = valor;
        this.next= siguiente;
    };
    
    getValue(){
        return this.value;
    };
    getNext(){
        return this.next;
    };
    setValue(valor){
        this.value = valor;
    };
    setNext(siguiente){
        this.value = siguiente;
    };
};

class lista_simple {
    
    constructor(){
        this.root = null;
        this.end = null;
        this.size =0;
    }

    add_fin(valor) {
        let new_nodo = new Nodo(valor,null);
        if (this.root===null){
            this.root = this.end = new_nodo;
        }else{
            this.end.next = new_nodo;
            this.end = new_nodo;  
        }
        this.size++;    
    }

    add_ini(valor){
        let new_nodo = new Nodo(valor,null);
        if (this.root === null){
            this.root = this.end = new_nodo;
        }else{
            new_nodo.next = this.root;
            this.root = new_nodo;  
        }
        this.size++;    
    }
    
    add_order(valor){
        let new_nodo = new Nodo(valor,null);
        if (this.root === null){
            this.root = this.end = new_nodo;
        }else{
            var tmp = this.root;
            if (this.root == null || this.root.value >= new_nodo.value){
            new_nodo.next = this.root;
            this.root = new_nodo;
            }else{
                while(tmp.next != null && tmp.next.value < new_nodo.value)
                    tmp = tmp.next;
                
                new_nodo.next = tmp.next;
                tmp.next = new_nodo;                
            }

        }
        this.size++;    
    }
    delete_nod(valor){

    }

    list_view(){
        var conte = "";
        let tmp_Nod = this.root;
        if(this.size == 0){
            return "null"
        }else if(this.size == 1){
            return conte + tmp_Nod.value +" -> null;" 
        }else{
            while(tmp_Nod.next != null){
                conte += tmp_Nod.value + " -> " + tmp_Nod.next.value + ";"
                tmp_Nod = tmp_Nod.next
            }
        } 
        return conte; 
    }
}
/*
var txt_valor = document.getElementById("val_nodo").value;
var btn_ini = document.getElementById("btnAdd_ini");
var btn_fin = document.getElementById("btnAdd_fin");
var btn_Order = document.getElementById("btnAdd_order");
var btn_Delete = document.getElementById("btnDelete");
var btn_Search = document.getElementById("btnSearch");
var btn_LoadJSON = document.getElementById("btnLoadJSON");
var btn_SaveJSON = document.getElementById("btnSaveJSON");
*/


const ListaSimple = () =>{
    return (
    <div id={"contenido"}>
        <div id={"contol"}>
            <table id={"controles"}>
                <td>
                    <input type={"text"} id={"txtValor"} size={"10"}/>
                </td>
                <td>
                    <input type={"Button"} id={"btnAdd"} value={"Agregar"}/>
                    <Button variant="contained">Agregar</Button>
                </td>
                <td>
                    <input type={"Button"} id={"btnAdd_ini"} value={"Agregar al Inicio"}/>
                </td>
                <td>
                    <input type={"Button"} id={"btnAdd_fin"} value={"Agregar al Final"}/>
                </td>
                <td>
                    <input type={"Button"} id={"btnAdd_Order"} value={"Agregar en Orden"}/>
                </td>
                <td>
                    <input type={"Button"} id={"btnDelete"} value={"Eliminar"}/>
                </td>
                <td>
                    <input type={"Button"} id={"btnSearch"} value={"Buscar"}/>
                </td>
                <td>
                    <input type={"Button"} id={"btnUpload"} value={"Subir Archivo"}/>
                </td>
                <td>
                    <input type={"Button"} id={"btnSave"} value={"Guardar"}/>
                </td>
            </table>

        </div>
        <div>
            <h3>Aquí va la lista simple</h3>
        </div>
    </div>

    )
}

export default ListaSimple;
