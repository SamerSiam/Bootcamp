const CustomerCard = ({ data }) => {
    return (
     
        <ul>
        {
           data.map(el =>
            <li key={el.id}>{el.name}</li>
            )
        }
      </ul>
          
    );
  };
  
  export default CustomerCard;
  