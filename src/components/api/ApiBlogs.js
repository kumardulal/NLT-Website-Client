
import Axios from 'axios'
import ApiList from './ApiList'

export default function ApiBlogs(setBlogData) {
    try {
        Axios.get(`${ApiList.blogGet}`, {


        }).then((response) => {
            setBlogData(response.data)

        })
    }
    catch (err) {
        console.log(err)
    }

}

