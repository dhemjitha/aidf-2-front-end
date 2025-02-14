const HotelsPage = () => {

    const handleClick = async () => {

        // Promise Chaining Pattern
        
        // const res = fetch("http://localhost:8000/api/hotels", {
        //     method: "GET",
        // });
        // res
        // .then((body) =>{
        //     console.log(body);
        //     return body.json();
        // })
        // .then((data) => {
        //     console.log(data);
        // })
        // .catch((err) => {
        //     console.log(err);
        // });

        try {
            const res = await fetch("http://localhost:8000/api/hotels", {
                method: "GET",
            });
            const data = await res.json();
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }


    };

    return (
        <div>
            <h1>Hotels Page</h1>
        </div>
    );
};

export default HotelsPage;