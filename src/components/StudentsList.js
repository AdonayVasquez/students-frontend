import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "../Api";
import DataTable from "react-data-table-component";
import ReactModal from "react-modal";
import { columns, modalStyle } from "../utilities";

ReactModal.setAppElement('#root');
const StudentsList = () => {

    const [data, setData] = useState([]);
    const [table, setTable] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [studentDetail, setStudentDetail] = useState({});

    const history = useHistory();

    const handleEditStudent = (student) => {
        history.push("/", student)
    }

    const handleDeleteStudent = async (id) => {

        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }
        try {
            let response = await fetch(`${API_URL}/${id}`, requestOptions);
            let res = await response.json();
            console.log('Res: ', res);
            getStudents();
        } catch (error) {
            console.error('Error: ',error);
        }
    }

    const handleDetails = (student) => {
        setStudentDetail(student);
        setModalOpen(true);
    }

    const getStudents = async () => {
        let response = await fetch(API_URL);
        let data = await response.json();
        setData(data);
    }

    useEffect(() => {
        getStudents(); // Get students from API at first render
    }, []);

    useEffect(() => {
        let dataTable = data.map((student, idx) => { // Structure the data that will be rendered in the table
            let obj = {
                id: idx + 1,
                studentName: student.firstName + ' ' + student.lastName,
                edit: <i className="fas fa-edit" onClick={() => handleEditStudent(student)} />,
                delete: <i className="fas fa-trash-alt" onClick={() => handleDeleteStudent(student._id)} />,
                viewDetails: <p className="btn-details" onClick={() => handleDetails(student)}>details</p>
            }
            return obj;
        });
        console.log(dataTable);
        setTable(dataTable);
    }, [data])

    return (
        <div className="container d-flex justify-content-center mb-4">
            <div className="col-10 col-md-10 col-lg-10 mt-5">
                <DataTable
                    columns={columns}
                    data={table}
                />
            </div>

            <ReactModal isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                style={modalStyle}>
                <button className="btn btn-close d-block ms-auto" onClick={() => { setModalOpen(false) }}></button>
                <div className="d-flex justify-content-center">
                    <div>
                        <h2>Estudiante</h2>
                        <div className="my-2"><label className="width-lbl bold-lbl">First Name:</label><label className="width-lbl">{studentDetail.firstName}</label></div>
                        <div className="my-2"><label className="width-lbl bold-lbl">Last Name:</label><label className="width-lbl">{studentDetail.lastName}</label></div>
                        <div className="my-2"><label className="width-lbl bold-lbl">Date of Birth:</label><label className="width-lbl">{studentDetail.birthdate}</label></div>
                        <div className="my-2"><label className="width-lbl bold-lbl">Email:</label><label className="width-lbl">{studentDetail.email}</label></div>
                        <div className="my-2"><label className="width-lbl bold-lbl">Address:</label><label className="width-lbl">{studentDetail.address}</label></div>
                        <div className="my-2"><label className="width-lbl bold-lbl">Genre:</label><label className="width-lbl">{studentDetail.genre}</label></div>
                    </div>

                </div>

            </ReactModal>

        </div>
    )
}

export default StudentsList;