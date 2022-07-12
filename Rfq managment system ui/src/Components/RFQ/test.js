import { Component } from 'react';
class  Test extends Component {
    constructor(props){
        super(props);
        this.state={supps:[]}
    }
    refreshList(){
        // this.setState({
        //     sups:[{"Id":1,"Name":"IT"}]
        // })
        // fetch('https://localhost:7288/api/Supplier/GetSupplierOfPart?id=1')
        // .then(response=>response.json())
        // .then(data=>{
           
        //     this.setState({
        //         supps:data
        //     });
        //     console.log();
        // }
            
        //     );
        fetch('https://localhost:7288/api/Supplier/GetSupplierOfPart?id=1')
        .then((response)=>{
            if(response.ok)
            {
                return response.json();
            }
            throw response;

        }).then(res=>{
            this.setState({
                supps:res
            });
            console.log(res)
            localStorage.setItem('data',JSON.stringify({
                data:res
              
                  
                }));
            
        }).catch(error=>{
            console.error("error fetching data",error)
        });
    }
    componentDidMount()
    {
        this.refreshList();

    }
    
    render()
    {
     
        const{supps}=this.state;
        return (
              <div>
                {
                    supps.map(sup=>
                        <h1>{sup.name}</h1>)
                }
             </div>
                  
                   
                    
            
        );
    }
}

    export default Test;