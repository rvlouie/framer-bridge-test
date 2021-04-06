import * as React from "react"

export type LineCardProps = {
    className?: string
}

export const LineCard = ({ className }: LineCardProps) => {
    return (
        <div className={`${className} line-card-wrapper`}>
            <h4></h4>
        </div>
    )
}