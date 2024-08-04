import { SetStateAction } from "react"

export interface IUseAdivice {
    setAdvice: React.Dispatch<SetStateAction<string>>,
    setLoading: React.Dispatch<SetStateAction<boolean>>
}

export interface IUseSearchAdivice {
    setAdvice: React.Dispatch<SetStateAction<string>>,
    setLoading: React.Dispatch<SetStateAction<boolean>>,
    searchText: string
}