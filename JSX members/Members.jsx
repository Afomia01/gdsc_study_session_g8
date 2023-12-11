import './members.css'
    
const GroupMembersList = () => {
  const groupMembers = [
    'Afomia',
    'Agumas',
    'Alem',
    'Amanuel A',
    'Amanuel Ad',
    'Amanuel F',
    'Ammar',
    'Andinet',
    'Anteneh',
    'Ariyam',
  ];

  return (
    <div className="group-members">
      <h2>Group 8 Members</h2>
      <ul>
        {groupMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
      <img src="minion.png" alt="Minion Image" className="crazy-minion" />
    </div>
  );




}
export default GroupMembersList;