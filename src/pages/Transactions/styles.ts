import styled from 'styled-components'

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    /* margin-top: 1.5rem; */

    th {
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
    }

    td {
        padding: 1.25rem 2rem;
        border: 0;
        background: ${props => props.theme["gray-700"]};

        &:first-child {
            border-top-left-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
        }
        &:last-child {
            border-top-right-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
        }

    }
`
interface PriceHighlightProps {
    variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
`