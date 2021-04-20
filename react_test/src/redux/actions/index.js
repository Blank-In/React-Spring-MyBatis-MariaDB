export const SET_VALUE='SET_VALUE';
export const FLG_SWAP='FLG_SWAP';
export const SET_ID='SET_ID';

export function setValue(value){
    return{
        type: SET_VALUE,
        value: value
    }
}

export function flgSwap(flg){
    return{
        type: FLG_SWAP,
        flg: flg
    }
}

export function setID(id){
    return{
        type: SET_ID,
        id: id
    }
}