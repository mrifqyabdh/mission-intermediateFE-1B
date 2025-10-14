  import { useState, useEffect } from 'react';
  import axios from 'axios';
  import useDaftarSaya from '../pages/Store/setDaftarSayaStore';
  export const useGetData = () => {
    // const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const setList = useDaftarSaya((state) => state.setList);

    const getData = async () => {
      try {
        setIsLoading(true)
        setIsError(false)

        const res = await axios.get('https://68eceb6deff9ad3b1403d416.mockapi.io/source')

        const onlyImgs = res.data.map(item => ({ img: item.img }))
        
        setList(onlyImgs)
      } catch (error) {
        //err
        setIsError(true)
        console.log('error',error.response)
      } finally {
        //finally
        setIsLoading(false)
      }
    }

    useEffect (() => {
      getData()
    }, [])

    return {
      // data,
      getData,
      isLoading,
      isError
    }
  }