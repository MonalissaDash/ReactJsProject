import React from 'react'

function Columns() {
    const items=[]
    return (
        // <div>
        //     <td>Name</td> index.js:1 Warning: validateDOMNesting(...): <div> cannot appear as a child of <tr>.
        //     <td>Age</td>
        //     <td>Skill</td>
        //     <td>MailID</td>


        // </div>
        <React.Fragment>
            {
               items.map(item=>(
                <React.Fragment key={items.id}>
                    <h1>itle</h1>
                    <p>{item.title}</p>
                    </React.Fragment>

               )

               )}
             {/* This is how key is passed. The <></> tag is an alt. for React.Fragment but it doesnt take any key. */}
            }
            <td>Name</td> 
            <td>Age</td>
             <td>Skill</td>
            <td>MailID</td>
            </React.Fragment>
    )
}

export default Columns
