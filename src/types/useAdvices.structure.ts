import { SetStateAction } from "react"

export interface IUseAdivice {
    setAdvice: React.Dispatch<SetStateAction<string>>,
    setLoading: React.Dispatch<SetStateAction<boolean>>
}