import staffDetails from '../assets/staffList.json';
import { Fragment} from 'react';
import classes from './rightBar.module.css';
import StaffMember from './StaffMember';
import PageHeader from './PageHeader';
import Footer from './Footer';

const RightBar = () =>{

    //const [staffData, setStaffData] = useState([ ]);
    // const [loadingData, setLoadingData] = useState(false);
    // const [anErrorOccured, setAnErrorOccured] = useState();


const allStaffData = [];

for (const key in staffDetails){
    allStaffData.push({
    name : staffDetails[key].name,
    id : staffDetails[key].id,
    role : staffDetails[key].role,
    email : staffDetails[key].email,
    status : staffDetails[key].status,
    key : staffDetails[key].id,
  });
}
console.log('data is here :-' + allStaffData);


const tableHeader = <div className={classes.tableHeader}>
<ul>
    <li>NAME</li>
    <li>STAFF ID</li>
    <li>ROLE</li>
    <li>EMAIL</li>
    <li>STATUS</li>
    <li>ACTION</li>
</ul>

</div> 


const listOfStaff = allStaffData.map((member) => (
    <StaffMember
        name={member.name} 
        id = {member.id}
        role = {member.role} 
        email={member.email}
        status={member.status}
        key={member.id} 
    />
))

    return <Fragment>
        <div className={classes.rightBar}>
        <PageHeader></PageHeader>
        <div className={classes.card}>
            {tableHeader}
            {listOfStaff}
        </div>
        <Footer></Footer>
        </div>
    </Fragment>

}

export default RightBar;