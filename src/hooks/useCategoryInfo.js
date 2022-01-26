

import { useEffect, useState } from "react";
import { getCategoryInfo } from "../helpers/getCategoryInfo";
import { getMarvelElementsById } from "../helpers/getMarvelElementsById";

export const useCategoryInfo = ( container , id = null , category) => {
    const [ categoryInfo , setCategoryInfo ] = useState({
        heroes : [],
        loading : true
    });

    useEffect( () => {
        if( id === null ){
            getCategoryInfo(category)
                .then(( heroes ) => {
                    setCategoryInfo({
                        heroes,
                        loading: false
                    });
                })
        }else{
            getMarvelElementsById(container , id , category)
            .then(( heroes ) => {
                setCategoryInfo({
                    heroes,
                    loading: false
                });
            })
        }
    },[ id , category , container]) 

    return categoryInfo;
};