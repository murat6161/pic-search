import React, {useState} from 'react'
import {CssBaseline, Container, Typography} from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image'
import SearchBar from './SearchBar'
import axios from 'axios'
import ImageList from "./ImageList"

const App = () => {
    const [images, setImages] = useState([])

    const onSearchSubmit = async(term) => {  //term veya her ne dersem.. anahtar arama kelimem geliyor
     //internetten bir sey getireceksem basina async yaziyorum
     //getirdigi seyleri gormem icin de basina wait yaziyorum. yani burada bir sey yapiyorum . bunun gelmesini bekleme ve get yap. bana undefined deme

        const response = await axios.get('https://api.unsplash.com/search/photos', {
        params:{ query: term },   
        headers:{
            Authorization: 'Client-ID nfjf98LPFew6msvu88shUvxUn5XBqLWNAw1NLNzn84Y'
          }  
        })
        //axios http request

        setImages(response.data.results)
    }

    //<SearchBar gonder = {onSearchSubmit}/>
    //Callback fonsiyinunu prop olarak gonderiyor ve yukaridan asagiya bilgi alaniliyorux
    //
    //

    return(
        <>

        <CssBaseline/>
        <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
                <ImageIcon style={{fontSize: 30, margin: 5}}/>
                React Pic Search
            </Typography>
            <SearchBar gonder = {onSearchSubmit}/> 
            <ImageList images={images}/>
        </Container>
            
            
        </>
    )
}

export default App