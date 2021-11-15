
import Axios from 'axios'
import ApiList from './ApiList'

export default function ApiProjects(setProjectData) {

    try {
        Axios.get(`${ApiList.projectGet}`, {

        }).then((response) => {
            if (response.status = 200) {
                setProjectData(response.data)
            }
            else {
                console.log("response was not received")
            }


        })
    }
    catch (err) {
        console.log(err)
    }



}
