import FormStudent from "../components/FormStudent";

const AddStudent = () => {
    const handleFormRequest = (data) => {
        console.log('desde padre ', data);
    }
    return (
        <div>
            <FormStudent handleFormRequest={handleFormRequest} />
        </div>
    )
}
export default AddStudent;