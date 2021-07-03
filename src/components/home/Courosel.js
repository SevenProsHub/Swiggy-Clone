function Corousle(){

    let items = [
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lwihy6os7g4dvx3t37gg',
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ztpd5q9awnmmnefczn5x',
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/gubwz8cbugdx3prtieuj',
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ft6ftbffbbyp7q0p8ip9',
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/cb0fuky4kdrjyisnvox1',
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/kmewp8efed0ev7yvfyx6'

    ]

    return (
        <div className="corousle flex-row">
            {
                items.map(i => {
                    return <div className="corousle-item">
                        <img src={i} alt="food" />
                    </div>
                })   
            }
        </div>
    )
}

export default Corousle