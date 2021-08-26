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

export const actualDate = () => {
    let d = new Date();
    let day = d.getDate();
    let moth = d.getMonth()+1;
    let year = d.getFullYear();

    if(moth < 10) {
        moth = '0' + moth.toString();
    } else if(d < 10) {
        d = '0' + d.toString();
    }
    let maxdate = year + '-' + moth + '-' + day
    return maxdate;
}