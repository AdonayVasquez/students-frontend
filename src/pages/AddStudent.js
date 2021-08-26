import FormStudent from "../components/FormStudent";
import { API_URL } from "../Api";

const AddStudent = () => {

    const handleFormRequest = async (data, idStudent) => {
        if (idStudent) {
            const requestOptions = {
                method: 'PUT',
                body: data,
                headers: {'Content-Type': 'application/json'}
            }
            try {
                let response = await fetch(`${API_URL}/${idStudent}`, requestOptions);
                let data = await response.json();
                console.log('Data: ', data);
            } catch (error) {
                console.error('Error: ',error);
            }
        } else {
            const requestOptions = {
                method: 'POST',
                body: data,
                headers: {'Content-Type': 'application/json'}
            }
            try {
                let response = await fetch(`${API_URL}`, requestOptions);
                let data = await response.json();
                console.log('Data: ', data);
            } catch (error) {
                console.error('Error: ',error);
            }
        }

        
        
    }
    return (
        <div>
            <FormStudent handleFormRequest={handleFormRequest} 
                          />
        </div>
    )
}
export default AddStudent;