import { createContext, useState } from "react"

const MoviesCards = createContext();

const MovieContext = ({ children }) => {
    const [seats, setSeats] = useState([]);
    const [occupaid, setoccupaid] = useState([])
    return (
        <MoviesCards.Provider value={{ seats, setSeats, occupaid, setoccupaid }}>
            {children}
        </MoviesCards.Provider>
    )
}

export { MoviesCards, MovieContext };