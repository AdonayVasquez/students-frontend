export const columns = [
    {
        name: "#",
        selector: "id",
        sortable: true
    },
    {
        name: "Student Name",
        selector: "studentName",
        sortable: true
    },
    {
        name: "Edit",
        selector: "edit"
    },
    {
        name: "Delete",
        selector: "delete"
    },
    {
        name: "View Details",
        selector: "viewDetails"
    }
];

export const modalStyle = {
    content: {
      top: '30%',
      left: '50%',
    
      bottom: 'auto',
      paddingRight: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };