import "@/../bootstrap/dist/css/bootstrap.min.css"
import Card from './Card'


const DisplayItems = ({ data }) => {

    return (
        <>
            <div className="container">

                {!Boolean(data.length) &&
                    <div className="nothing_found"><h4>Nothing Found 😔 </h4></div>
                }
                <div className="grid">
                    {data && data.map(curElem => {
                        return <Card key={curElem.id} data={curElem} />
                    })}
                </div>
            </div>
        </>
    )
}

export default DisplayItems