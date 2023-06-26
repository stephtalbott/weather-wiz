export default function FeelsLikeCard({feelsLike}){
    return (
        <>
            <div className='feels-like-container'>
                <div className='feels-like-card'>
                    <h1 className='card-title'>Feels Like</h1>
                    <p>{feelsLike} °F</p>
                </div>
            </div>
        </>
    )
}