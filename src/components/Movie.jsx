


export const Movie = (props) => {

    return (
        <div className="max-w-5xl mx-auto px-5 mt-8 flex flex-col justify-center items-center hover:scale-105 transition-all duration-500 hover:shadow-2xl ease-in-out cursor-pointer">
            <img className="object-cover rounded-lg" src={props.posterUrl} alt={props.title} />
            <div className="mt-2 flex flex-col items-center justify-center">
                <h2>{props.title}</h2> <span className="ml-1 text-gray-500 text-lg">{props.year}</span>
            </div>
        </div>
    )

}