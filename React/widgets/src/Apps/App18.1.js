import React from 'react';
import ShowText from './Components/ShowText'

const App = () => {

    const text ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis ullam nulla quaerat obcaecati ipsa porro error? Magni provident totam dolorem animi quia exercitationem neque repellat ipsam quo, minus enim. Esse sequi omnis facere fuga id nemo voluptatibus unde? Minima cumque, numquam in distinctio tempora delectus dolorem officia iste sunt nesciunt quas accusamus reprehenderit vero rerum dignissimos iure? Magnam a sed dignissimos, omnis voluptatem corrupti minima laborum, accusamus quaerat hic sequi non voluptatibus doloremque reprehenderit alias veritatis incidunt id mollitia consequuntur quod ad consectetur, tempora ratione! Nesciunt, architecto sunt ipsa omnis quibusdam libero autem, quidem reiciendis sequi voluptatibus mollitia provident." 
   const maxLength=100;

    return <div>
        
        <h1>Show More- Show Less</h1>
        <ShowText text={text} maxLen= {maxLength} />
    
    </div>;
}



export default App