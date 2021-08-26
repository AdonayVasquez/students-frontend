import FormStudent from "../components/FormStudent";
import { API_URL } from "../Api";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const AddStudent = () => {

    const location = useLocation();

    useEffect(() => {
        let name = location.state;
        console.log(name);
    }, [location.state])

    const handleFormRequest = async (data) => {

        //console.log('from parent ', data);
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                firstName: data.firstName,
                lastName: data.lastName,
                birthdate: data.birthdate,
                email: data.email,
                address: data.address,
                genre: data.genre
            }),
            headers: {'Content-Type': 'application/json'}
        }

        try {
            let response = await fetch(API_URL, requestOptions);
            let data = await response.json();
            console.log('Data: ', data);
        } catch (error) {
            console.error('Error: ',error);
        }
        
    }
    return (
        <div>
            <FormStudent handleFormRequest={handleFormRequest} />
        </div>
    )
}
export default AddStudent;